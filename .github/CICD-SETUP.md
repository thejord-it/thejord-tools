# CI/CD Setup per THEJORD.IT ✅ FUNZIONANTE

Sistema di deploy automatico completamente configurato e testato.

---

## 🎯 Architettura Finale

```
GitHub Cloud (Actions)
    ↓ trigger on push to main
Self-Hosted Runner (LXC Container 105)
├─ IP: 192.168.1.215
├─ RAM: 2GB, CPU: 2 cores
├─ Docker 28.2.2 (overlay2)
├─ kubectl v1.34.2
└─ GitHub Actions Runner 2.329.0
    ↓ SSH connection
K3s Server (LXC Container 102)
├─ IP: 192.168.1.212
├─ Kubernetes v1.33.5
└─ Deploys to namespace: thejord
    ↓
THEJORD.IT (Production)
├─ 2 replicas (high availability)
├─ NodePort: 30700
├─ Ingress: thejord.it (HTTPS)
└─ Live at: https://thejord.it
```

---

## ✅ Setup Completato

Il sistema CI/CD è **già configurato e funzionante**. Ogni push su `main` triggera automaticamente:

1. ✅ **Build** - Vite compila il progetto React
2. ✅ **Docker Build** - Crea immagine con buildx (driver: docker)
3. ✅ **Push GHCR** - Carica su `ghcr.io/thejord-it/thejord-tools:latest`
4. ✅ **Deploy K3s** - Rolling update su 2 pod (zero downtime)
5. ✅ **Verify** - Controlla stato pods/service/ingress

**Durata media:** ~2 minuti

---

## 📋 Come Usare il Sistema

### Deploy Automatico (Raccomandato)

```bash
# Ogni push su main triggera il deploy
git add .
git commit -m "feat: nuova funzionalità"
git push origin main

# Monitora su GitHub Actions
# https://github.com/thejord-it/thejord-tools/actions
```

### Deploy Manuale

```bash
# Opzione 1: Empty commit
git commit --allow-empty -m "ci: trigger manual deploy"
git push origin main

# Opzione 2: GitHub UI
# Vai su Actions → Build and Deploy to K3s → Run workflow
```

---

## 🔧 Componenti del Sistema

### 1. GitHub Actions Runner (Self-Hosted)

**Container LXC 105** configurato su Proxmox:
- Ubuntu 22.04 LTS
- IP statico: 192.168.1.215
- Features: `nesting=1, keyctl=1` (per Docker)
- Auto-start on boot: ✅

**Software installato:**
```bash
# Docker con overlay2 storage driver
Docker version 28.2.2

# Kubernetes CLI
kubectl v1.34.2

# GitHub Actions Runner
Runner version: 2.329.0
Status: ✅ Active (listening for jobs)

# Git + build tools
git version 2.34.1
Node.js 18.x (via setup-node action)
```

**Servizio systemd:**
```bash
# Service name
actions.runner.thejord-it-thejord-tools.proxmox-runner.service

# Controlli
ssh root@192.168.1.215
cd /opt/actions-runner
sudo ./svc.sh status    # Verifica stato
sudo ./svc.sh restart   # Riavvia se necessario
```

### 2. Workflow GitHub Actions

**File:** `.github/workflows/deploy.yml`

**Trigger:**
- Push su branch `main`
- Manuale via `workflow_dispatch`

**Steps principali:**
1. Checkout repository
2. Setup Node.js 18 (con cache npm)
3. Install dependencies (`npm ci`)
4. Build production (`npm run build`)
5. Login GitHub Container Registry
6. Setup Docker Buildx (driver: docker)
7. Build & push Docker image
8. Deploy to K3s via SSH + template

### 3. Deployment Template

**File:** `.github/k8s-deployment.yaml`

Template Kubernetes con placeholder sostituiti al deploy:
- `IMAGE_PLACEHOLDER` → `ghcr.io/thejord-it/thejord-tools:latest`
- `DEPLOY_TIME` → Unix timestamp (forza rolling update)

**Risorse deployate:**
- Namespace `thejord`
- Deployment (2 replicas)
- Service (NodePort 30700)
- Ingress (traefik + Let's Encrypt)

---

## 📊 Monitoring & Verifica

### Verifica Deploy Riuscito

```bash
# SSH al server K3s
ssh root@192.168.1.212

# Controlla pods (devono essere Running)
kubectl get pods -n thejord

# Output atteso:
# NAME                       READY   STATUS    RESTARTS   AGE
# thejord-77bc7b7d96-xxxxx   1/1     Running   0          5m
# thejord-77bc7b7d96-yyyyy   1/1     Running   0          5m

# Verifica service
kubectl get svc -n thejord

# Verifica ingress
kubectl get ingress -n thejord
```

### Logs Applicazione

```bash
# Real-time logs (tutti i pod)
kubectl logs -n thejord -l app=thejord --tail=100 -f

# Logs di un pod specifico
kubectl logs -n thejord thejord-77bc7b7d96-xxxxx
```

### Monitoring Runner

```bash
# SSH al runner
ssh root@192.168.1.215

# Logs runner (ultimi 50 righe)
journalctl -u actions.runner.thejord-it-thejord-tools.proxmox-runner -n 50

# Logs in real-time
journalctl -u actions.runner.thejord-it-thejord-tools.proxmox-runner -f

# Stato runner su GitHub
# https://github.com/thejord-it/thejord-tools/settings/actions/runners
```

---

## 🐛 Troubleshooting

### Deploy Fallito

```bash
# 1. Controlla logs su GitHub Actions
# https://github.com/thejord-it/thejord-tools/actions

# 2. Verifica runner attivo
ssh root@192.168.1.215
cd /opt/actions-runner
./svc.sh status

# 3. Controlla connessione runner → K3s
ssh root@192.168.1.215
ssh root@192.168.1.212 "kubectl get nodes"
```

### Pod in CrashLoopBackOff

```bash
# Controlla logs del pod
kubectl logs -n thejord <pod-name>

# Descrivi pod per vedere eventi
kubectl describe pod -n thejord <pod-name>

# Rollback a versione precedente
kubectl rollout undo deployment/thejord -n thejord
```

### Immagine Docker Non Pullata

```bash
# Verifica imagePullSecret
kubectl get secret -n thejord ghcr-secret

# Se manca, viene ricreato automaticamente al prossimo deploy
# Oppure manualmente:
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=<GITHUB_USERNAME> \
  --docker-password=<GITHUB_TOKEN> \
  --namespace=thejord
```

### Runner Non Prende Job

```bash
# Controlla stato su GitHub
# https://github.com/thejord-it/thejord-tools/settings/actions/runners
# Deve mostrare: 🟢 Idle (o Running se job attivo)

# Se offline, riavvia servizio
ssh root@192.168.1.215
cd /opt/actions-runner
sudo ./svc.sh restart
```

---

## 🔄 Rollback Procedure

### Rollback Kubernetes

```bash
# SSH al K3s
ssh root@192.168.1.212

# Vedi history deploy
kubectl rollout history deployment/thejord -n thejord

# Rollback alla versione precedente
kubectl rollout undo deployment/thejord -n thejord

# Rollback a revisione specifica
kubectl rollout undo deployment/thejord -n thejord --to-revision=3
```

### Rollback Tramite Git

```bash
# Trova commit precedente funzionante
git log --oneline

# Revert al commit
git revert <commit-hash>
git push origin main

# Il deploy automatico si triggera con la versione precedente
```

---

## 📈 Performance & Scaling

### Aumentare Replicas

Modifica `.github/k8s-deployment.yaml`:

```yaml
spec:
  replicas: 3  # Aumenta da 2 a 3
```

Commit e push → deploy automatico.

### Resource Limits

Attualmente configurato:
- **Requests:** 64Mi RAM, 100m CPU (per pod)
- **Limits:** 128Mi RAM, 200m CPU (per pod)

Per modificare, edita `.github/k8s-deployment.yaml`.

---

## 🔐 Security Notes

### Secrets Management

**NON committare mai:**
- ❌ `.github/GITHUB-SECRETS.txt` (contiene chiavi SSH)
- ❌ File con token/password
- ❌ File `.env` con credenziali

**GitHub Secrets configurati:**
- ✅ `GITHUB_TOKEN` (automatico, gestito da GitHub)

**SSH Keys:**
- Runner ha chiave ED25519 per accesso K3s
- Chiave memorizzata in `/home/runner/.ssh/id_ed25519`

### Network Security

**Firewall:**
- ✅ Runner e K3s su rete locale (192.168.1.x)
- ✅ Nessuna porta esposta all'esterno
- ✅ Solo HTTPS esposto via Cloudflare Tunnel (se configurato)

**Container Security:**
- ✅ Runner gira come utente non-root (`runner`)
- ✅ LXC unprivileged container
- ✅ Docker con overlay2 (no device mapper vulnerabilities)

---

## 📚 File di Riferimento

```
.github/
├── workflows/
│   └── deploy.yml              # Workflow CI/CD principale
├── k8s-deployment.yaml         # Template Kubernetes
├── CICD-SETUP.md              # Questa guida
├── RUNNER-SETUP.md            # Setup dettagliato runner
└── GITHUB-SECRETS.txt         # SSH keys (NON committato)
```

---

## ✅ Checklist Post-Deploy

Dopo ogni deploy verifica:

- [ ] GitHub Actions workflow completato con successo
- [ ] 2 pod Running su K3s namespace `thejord`
- [ ] Service esposto correttamente (NodePort 30700)
- [ ] Ingress configurato per `thejord.it`
- [ ] Sito accessibile su https://thejord.it
- [ ] Nessun errore nei logs dei pod

---

## 🎉 Deploy Completato!

Il sistema CI/CD è **pienamente operativo**. Ogni modifica al codice viene automaticamente deployata in produzione con zero downtime.

**Workflow medio:**
```bash
# 1. Sviluppa in locale
npm run dev

# 2. Commit e push
git add .
git commit -m "feat: nuova funzione"
git push origin main

# 3. Attendi ~2 minuti
# Il sistema fa tutto automaticamente:
# Build → Docker → Deploy → Verifica

# 4. Controlla risultato
# https://thejord.it
```

🚀 **Happy Deploying!**
