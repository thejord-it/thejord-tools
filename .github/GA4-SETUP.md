# Google Analytics 4 - Setup Istruzioni

## ✅ Measurement ID Ottenuto
**Measurement ID:** `G-1LDVSZHTTB`

---

## 📋 Step per Attivare GA4 in Produzione

### 1. Aggiungi GitHub Secret

1. Vai su: **https://github.com/thejord-it/thejord-tools/settings/secrets/actions**
2. Click su **"New repository secret"**
3. Compila:
   - **Name:** `VITE_GA_MEASUREMENT_ID`
   - **Secret:** `G-1LDVSZHTTB`
4. Click su **"Add secret"**

### 2. Verifica Workflow

Il workflow `.github/workflows/deploy.yml` è già configurato per usare il secret:

```yaml
- name: Build project
  env:
    VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
  run: npm run build
```

### 3. Trigger Deploy

Una volta aggiunto il secret, triggera un nuovo deploy:

**Opzione A - Empty Commit:**
```bash
git commit --allow-empty -m "ci: trigger deploy con GA4 attivo"
git push origin main
```

**Opzione B - GitHub UI:**
1. Vai su: https://github.com/thejord-it/thejord-tools/actions
2. Click su workflow "Build and Deploy to K3s"
3. Click su "Run workflow" → Run workflow

### 4. Verifica GA4 Attivo

Dopo il deploy:

1. **Apri il sito:** https://thejord.it
2. **Apri Developer Tools** (F12)
3. **Console:** Dovresti vedere:
   ```
   Google Analytics initialized
   ```
4. **Network Tab:** Cerca richieste a `google-analytics.com/g/collect`
5. **Cookie Consent:** Accetta i cookie per attivare GA4

### 5. Verifica su Google Analytics

1. Vai su: https://analytics.google.com/
2. Seleziona property **THEJORD.IT**
3. **Realtime → Overview**
4. Dovresti vedere la tua sessione attiva

---

## 🔍 Troubleshooting

### GA4 non si inizializza

**Problema:** Console mostra `Google Analytics not initialized - missing VITE_GA_MEASUREMENT_ID`

**Soluzione:**
1. Verifica che il GitHub Secret sia stato aggiunto
2. Triggera un nuovo deploy
3. Controlla i logs del workflow GitHub Actions

### Cookie non appaiono

**Problema:** Cookie banner non appare

**Soluzione:**
1. Cancella cookies del browser per `thejord.it`
2. Ricarica la pagina in incognito
3. Verifica che `react-cookie-consent` sia installato:
   ```bash
   npm list react-cookie-consent
   ```

### Tracking non funziona

**Problema:** Nessuna richiesta a Google Analytics

**Soluzione:**
1. Accetta i cookie tramite il banner
2. Verifica che il Measurement ID sia corretto in GA4
3. Controlla console per errori JavaScript
4. Verifica che Content Security Policy permetta `google-analytics.com`

---

## 📊 Cosa Monitorare

Una volta attivo, Google Analytics traccerà:

### Acquisizione
- **Sorgenti di traffico:** Organic search, Direct, Referral
- **Paesi e città:** Geographic distribution
- **Landing pages:** Pagine di ingresso

### Coinvolgimento
- **Page views:** Visualizzazioni per pagina/tool
- **Engagement time:** Tempo medio per sessione
- **Event tracking:** Tool usage (JSON formatter, Base64, etc.)

### Tech
- **Browsers:** Chrome, Firefox, Safari, Edge
- **Dispositivi:** Desktop, Mobile, Tablet
- **OS:** Windows, macOS, Linux, iOS, Android

---

## 🎯 Eventi Custom da Tracciare (Future Enhancement)

Attualmente tracciamo solo page views. In futuro possiamo aggiungere:

```typescript
// Esempi di tracking eventi custom
import { trackEvent, trackToolUsage } from './lib/analytics'

// Tool usage
trackToolUsage('JSON Formatter', 'beautify')
trackToolUsage('Base64', 'encode')

// File operations
trackEvent('File', 'upload', 'Base64')
trackEvent('File', 'download', 'JSON')

// Conversions
trackEvent('Conversion', 'json_to_csv')
trackEvent('Conversion', 'json_to_yaml')
```

---

## ✅ Checklist Post-Attivazione

- [ ] GitHub Secret `VITE_GA_MEASUREMENT_ID` aggiunto
- [ ] Deploy triggato con secret configurato
- [ ] Console mostra "Google Analytics initialized"
- [ ] Cookie banner appare su prima visita
- [ ] Cookie banner permette opt-out
- [ ] Google Analytics Realtime mostra sessioni
- [ ] Privacy Policy link funziona (`/privacy`)
- [ ] .env locale configurato per sviluppo

---

**Setup completato!** 🎉

Per domande o problemi: admin@thejord.it
