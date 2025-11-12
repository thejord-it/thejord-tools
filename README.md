<div align="center">

# 🛠️ THEJORD.IT

### **The Italian Alternative to IT-Tools | Privacy-First Developer Utilities**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[🌐 **Live Demo**](https://thejord.it) • [📖 **Documentation**](./docs/) • [🐛 **Report Bug**](https://github.com/thejord-it/thejord-tools/issues) • [✨ **Request Feature**](https://github.com/thejord-it/thejord-tools/issues)

**Modern, fast, and free tools for developers. A comprehensive suite of online utilities built with React, TypeScript, and Tailwind CSS.**

[🇮🇹 Italian](#italiano) | [🇬🇧 English](#english)

</div>

---

## ✨ Features

<table>
  <tr>
    <td align="center">🔒</td>
    <td><b>Privacy-First</b><br/>All processing happens in your browser. Zero data sent to servers.</td>
  </tr>
  <tr>
    <td align="center">⚡</td>
    <td><b>Lightning Fast</b><br/>Built with React 18, Vite, and optimized for performance.</td>
  </tr>
  <tr>
    <td align="center">🎨</td>
    <td><b>Beautiful UI</b><br/>Clean, modern dark theme with intuitive design.</td>
  </tr>
  <tr>
    <td align="center">🌍</td>
    <td><b>100% Client-Side</b><br/>Works offline. No backend required.</td>
  </tr>
  <tr>
    <td align="center">🇮🇹</td>
    <td><b>Made in Italy</b><br/>The Italian alternative to IT-Tools.</td>
  </tr>
  <tr>
    <td align="center">📱</td>
    <td><b>Responsive</b><br/>Works perfectly on desktop, tablet, and mobile.</td>
  </tr>
</table>

---

## 🛠️ Available Tools

| Tool | Description | Key Features |
|------|-------------|--------------|
| **📝 JSON Formatter** | Format, validate, and convert JSON | Beautify, minify, tree view, JSON↔CSV, JSON↔YAML |
| **🔤 Base64 Encoder/Decoder** | Encode and decode Base64 strings | Supports text and file encoding |
| **🔍 RegEx Tester** | Test regular expressions live | 30+ predefined patterns, match highlighting |
| **🔐 Hash Generator** | Generate cryptographic hashes | MD5, SHA-1, SHA-256, SHA-512, SHA-3 |
| **🔗 URL Encoder/Decoder** | Encode and decode URLs | Component and full URL support |
| **📄 Markdown to HTML** | Convert Markdown to sanitized HTML | Live preview, DOMPurify sanitization |
| **🎨 Color Converter** | Convert between color formats | HEX, RGB, HSL, CMYK with visual picker |
| **📰 Lorem Ipsum Generator** | Generate placeholder text | Words, sentences, paragraphs with stats |
| **📊 Text Diff Checker** | Compare text line by line | Ignore whitespace, case-sensitive options |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/thejord-it/thejord-tools.git
cd thejord-tools

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

---

## 🐳 Docker Deployment

### Build and Run

```bash
# Build Docker image
docker build -t thejord:latest .

# Run container
docker run -d -p 80:80 --name thejord thejord:latest
```

### Using Docker Compose

```bash
docker-compose up -d
```

---

## ☸️ Kubernetes (K3s) Deployment

### Prerequisites

- K3s cluster running
- kubectl configured
- Cloudflare Tunnel (optional, for ingress)

### Deploy

```bash
# Apply Kubernetes configuration
kubectl apply -f k8s-deployment.yaml

# Verify deployment
kubectl get pods -n thejord
kubectl get svc -n thejord
```

The application will be exposed via NodePort **30700** and accessible through Cloudflare Tunnel.

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 🏗️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **TypeScript** 5.2.2 - Type safety
- **Vite** 4.5.0 - Build tool
- **Tailwind CSS** 3.3.5 - Styling
- **React Router** 6.20.0 - Navigation

### Libraries
- **Monaco Editor** 4.6.0 - Code editor for JSON
- **crypto-js** 4.2.0 - Hash generation
- **marked** 11.1.1 - Markdown parsing
- **DOMPurify** 3.0.8 - HTML sanitization

### Infrastructure
- **Docker** - Containerization
- **Kubernetes (K3s)** - Orchestration
- **Nginx** - Web server
- **Cloudflare Tunnel** - Secure ingress

---

## 📊 Comparison with IT-Tools

| Feature | THEJORD.IT | IT-Tools |
|---------|------------|----------|
| **Framework** | ⚛️ React | 🟢 Vue.js |
| **Language** | 📘 TypeScript | 📘 TypeScript |
| **Build Tool** | ⚡ Vite | ⚡ Vite |
| **Tool Count** | 9 tools | 80+ tools |
| **License** | MIT | GNU GPLv3 |
| **Self-Hosting** | ✅ Docker, K3s | ✅ Docker |
| **Client-Side** | ✅ 100% | ✅ 100% |
| **Language** | 🇮🇹 Italian-first | 🇬🇧 English |
| **Target** | Italian devs | Global |

**THEJORD.IT** is designed as a **lightweight, React-based alternative** to IT-Tools, with focus on the Italian developer community and essential tools.

---

## 🔒 Security & Privacy

### Privacy-First Architecture
- ✅ **Zero telemetry** - No tracking, no analytics
- ✅ **No cookies** - No tracking cookies
- ✅ **Client-side only** - All processing in browser
- ✅ **No data transmission** - Nothing sent to servers
- ✅ **Open source** - Audit the code yourself

### Security Headers
- Content-Security-Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- Permissions-Policy
- X-Frame-Options, X-Content-Type-Options, X-XSS-Protection

For security policy and vulnerability reporting, see [SECURITY.md](./SECURITY.md).

---

## 📈 Performance & SEO

### Performance
- ⚡ **Bundle Size**: 398 KB JS (123 KB gzipped)
- 🚀 **First Contentful Paint**: < 1s
- 📦 **Code Splitting**: Lazy loading per tool
- 🎯 **Tree Shaking**: Minimal unused code

### SEO Score
- **Current**: 6.5/10 (SPA limitation)
- **Target**: 9/10 (with Next.js migration)
- Meta tags optimized (title, description, keywords)
- Open Graph + Twitter Cards
- Schema.org structured data
- Sitemap.xml + robots.txt

---

## 🗺️ Roadmap

### Phase 1: Foundation (Completed ✅)
- ✅ 9 essential developer tools
- ✅ React + TypeScript + Vite
- ✅ Docker + K3s deployment
- ✅ SEO optimization
- ✅ Security hardening
- ✅ Open source release

### Phase 2: Testing & CI/CD (Weeks 1-2)
- [ ] Unit tests with Vitest (80%+ coverage)
- [ ] Integration tests
- [ ] GitHub Actions CI/CD
- [ ] Automated deployment

### Phase 3: Next.js Migration (Weeks 3-4)
- [ ] Migrate to Next.js 14 App Router
- [ ] Server-Side Rendering (SSR)
- [ ] Static Site Generation (SSG)
- [ ] SEO improvement to 9/10

### Phase 4: Backend & Features (Weeks 5-6)
- [ ] Supabase backend
- [ ] User authentication
- [ ] PDF tools (merge, split, compress)
- [ ] Blog system
- [ ] Issue tracking

### Phase 5: Advanced Tools (Weeks 7-8)
- [ ] Advanced analytics
- [ ] More developer tools (20+ total)
- [ ] API endpoints
- [ ] Public API documentation

See complete roadmap: [ROADMAP-COMPLETE.md](./docs/ROADMAP-COMPLETE.md)

---

## 🤝 Contributing

Contributions are welcome! We appreciate your help in making THEJORD.IT better.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and development process.

### Contributors

<a href="https://github.com/thejord-it/thejord-tools/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=thejord-it/thejord-tools" />
</a>

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by [IT-Tools](https://github.com/CorentinTh/it-tools) (34k ⭐)
- Built with amazing open-source tools
- Special thanks to the React and TypeScript communities

---

## 📞 Contact & Support

- **Website**: [thejord.it](https://thejord.it)
- **Issues**: [GitHub Issues](https://github.com/thejord-it/thejord-tools/issues)
- **Discussions**: [GitHub Discussions](https://github.com/thejord-it/thejord-tools/discussions)
- **Email**: admin@thejord.it

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=thejord-it/thejord-tools&type=Date)](https://star-history.com/#thejord-it/thejord-tools&Date)

---

<div align="center">

**If you find this project useful, please consider giving it a ⭐!**

Made with ❤️ in Italy 🇮🇹

</div>

---

# Italiano

## 🇮🇹 THEJORD.IT - Strumenti per Sviluppatori

**L'alternativa italiana a IT-Tools**

### Caratteristiche Principali

- 🔒 **Privacy-First**: Tutto elaborato nel browser, zero dati inviati ai server
- ⚡ **Velocissimo**: Costruito con React 18 e Vite
- 🎨 **Interfaccia Moderna**: Design pulito e intuitivo
- 🌍 **100% Client-Side**: Funziona anche offline
- 🇮🇹 **Fatto in Italia**: Alternativa italiana a IT-Tools

### Strumenti Disponibili

- **JSON Formatter**: Formatta, valida e converti JSON
- **Base64 Encoder/Decoder**: Codifica e decodifica Base64
- **RegEx Tester**: Testa espressioni regolari con 30+ pattern
- **Hash Generator**: Genera hash MD5, SHA-256, SHA-512
- **URL Encoder/Decoder**: Codifica e decodifica URL
- **Markdown to HTML**: Converti Markdown in HTML
- **Color Converter**: Converti tra HEX, RGB, HSL, CMYK
- **Lorem Ipsum Generator**: Genera testo placeholder
- **Text Diff Checker**: Confronta testi riga per riga

### Installazione

```bash
git clone https://github.com/thejord-it/thejord-tools.git
cd thejord-tools
npm install
npm run dev
```

### Contribuire

I contributi sono benvenuti! Leggi [CONTRIBUTING.md](./CONTRIBUTING.md) per maggiori informazioni.

### Licenza

MIT License - vedi [LICENSE](./LICENSE)

### Contatti

- **Sito**: [thejord.it](https://thejord.it)
- **Issues**: [GitHub Issues](https://github.com/thejord-it/thejord-tools/issues)
- **Email**: admin@thejord.it

---

<div align="center">

**Se trovi utile questo progetto, lascia una ⭐!**

Fatto con ❤️ in Italia 🇮🇹

</div>
