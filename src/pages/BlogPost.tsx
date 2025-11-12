import { Link, useParams } from 'react-router-dom'

// Blog posts data
const blogPosts: Record<string, {
  title: string
  author: string
  date: string
  readTime: string
  tags: string[]
  content: JSX.Element
}> = {
  'lancio-thejord-it': {
    title: 'Lancio di THEJORD.IT: Developer Tools Privacy-First Made in Italy',
    author: 'Team THEJORD',
    date: '2025-01-12',
    readTime: '5 min',
    tags: ['Announcement', 'Open Source', 'Privacy'],
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-text-secondary leading-relaxed mb-8">
          Oggi siamo felici di annunciare il lancio ufficiale di <strong className="text-primary-light">THEJORD.IT</strong>,
          una suite di strumenti per sviluppatori completamente gratuita, open source e privacy-first. Made in Italy 🇮🇹
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-text-primary">🎯 Perché THEJORD.IT?</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Nel mondo dello sviluppo web, utilizziamo quotidianamente decine di tool online: formattatori JSON,
          encoder Base64, hash generator, regex tester... La maggior parte di questi strumenti sono sparsi
          su siti diversi, con interfacce datate, pubblicità invasiva e senza garanzie sulla privacy dei dati.
        </p>

        <p className="text-text-secondary leading-relaxed mb-6">
          Abbiamo deciso di creare THEJORD.IT per offrire un\'alternativa:
        </p>

        <ul className="list-none space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <strong className="text-text-primary">100% Privacy-First</strong>
              <p className="text-text-secondary">Tutto il processing avviene nel browser. Zero dati inviati ai server.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <strong className="text-text-primary">Veloce e Moderno</strong>
              <p className="text-text-secondary">Costruito con React 18, TypeScript e Vite. Performance ottimizzate.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <strong className="text-text-primary">Open Source</strong>
              <p className="text-text-secondary">Codice pubblico su GitHub. Audit, contributi e trasparenza totale.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🇮🇹</span>
            <div>
              <strong className="text-text-primary">Made in Italy</strong>
              <p className="text-text-secondary">L\'alternativa italiana a IT-Tools, con focus sulla community italiana.</p>
            </div>
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-text-primary">🛠️ Strumenti Disponibili</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Al lancio, THEJORD.IT offre <strong className="text-primary-light">9 strumenti essenziali</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <h3 className="font-bold text-primary-light mb-2">📝 JSON Formatter</h3>
            <p className="text-text-secondary text-sm">Formatta, valida, minifica e converti JSON. Tree view, JSON↔CSV, JSON↔YAML.</p>
          </div>
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <h3 className="font-bold text-primary-light mb-2">🔤 Base64 Encoder/Decoder</h3>
            <p className="text-text-secondary text-sm">Codifica e decodifica Base64 con supporto file.</p>
          </div>
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <h3 className="font-bold text-primary-light mb-2">🔍 RegEx Tester</h3>
            <p className="text-text-secondary text-sm">Testa espressioni regolari con 30+ pattern predefiniti.</p>
          </div>
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <h3 className="font-bold text-primary-light mb-2">🔐 Hash Generator</h3>
            <p className="text-text-secondary text-sm">Genera hash MD5, SHA-1, SHA-256, SHA-512, SHA-3.</p>
          </div>
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <h3 className="font-bold text-primary-light mb-2">🔗 URL Encoder/Decoder</h3>
            <p className="text-text-secondary text-sm">Codifica e decodifica URL e componenti.</p>
          </div>
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <h3 className="font-bold text-primary-light mb-2">📄 Markdown to HTML</h3>
            <p className="text-text-secondary text-sm">Converti Markdown in HTML sanitizzato con preview live.</p>
          </div>
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <h3 className="font-bold text-primary-light mb-2">🎨 Color Converter</h3>
            <p className="text-text-secondary text-sm">Converti tra HEX, RGB, HSL, CMYK con picker visuale.</p>
          </div>
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <h3 className="font-bold text-primary-light mb-2">📰 Lorem Ipsum Generator</h3>
            <p className="text-text-secondary text-sm">Genera testo placeholder per mockup.</p>
          </div>
          <div className="bg-bg-dark border border-border rounded-lg p-4">
            <h3 className="font-bold text-primary-light mb-2">📊 Text Diff Checker</h3>
            <p className="text-text-secondary text-sm">Confronta testi riga per riga con opzioni avanzate.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-text-primary">🏗️ Stack Tecnologico</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          THEJORD.IT è costruito con tecnologie moderne e performanti:
        </p>

        <div className="bg-bg-dark border border-border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-primary-light mb-3">Frontend</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>React 18.2.0</strong> - UI library</li>
                <li>• <strong>TypeScript 5.2.2</strong> - Type safety</li>
                <li>• <strong>Vite 4.5.0</strong> - Build tool velocissimo</li>
                <li>• <strong>Tailwind CSS 3.3.5</strong> - Utility-first CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary-light mb-3">Infrastructure</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Docker</strong> - Containerization</li>
                <li>• <strong>Kubernetes (K3s)</strong> - Orchestration</li>
                <li>• <strong>Cloudflare Tunnel</strong> - Secure ingress</li>
                <li>• <strong>Self-hosted</strong> - Full control</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-text-primary">📊 Privacy & Security</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          La privacy è al centro di THEJORD.IT. Ecco le nostre garanzie:
        </p>

        <ul className="list-none space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-green-500 text-xl">✓</span>
            <div>
              <strong className="text-text-primary">Processing Client-Side</strong>
              <p className="text-text-secondary text-sm">Tutto avviene nel tuo browser. Nessun dato lascia il tuo dispositivo.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 text-xl">✓</span>
            <div>
              <strong className="text-text-primary">Zero Tracking</strong>
              <p className="text-text-secondary text-sm">Nessun cookie di tracking, analytics invasiva o fingerprinting.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 text-xl">✓</span>
            <div>
              <strong className="text-text-primary">Security Headers</strong>
              <p className="text-text-secondary text-sm">CSP, HSTS, Permissions-Policy configurati per massima sicurezza (9/10).</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 text-xl">✓</span>
            <div>
              <strong className="text-text-primary">Open Source</strong>
              <p className="text-text-secondary text-sm">Codice pubblico su GitHub. Puoi auditarlo tu stesso.</p>
            </div>
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-text-primary">🗺️ Roadmap</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Questo è solo l\'inizio! Ecco cosa abbiamo in programma:
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 bg-bg-dark border border-border rounded-lg p-4">
            <span className="text-green-500 text-xl">✅</span>
            <div>
              <strong className="text-text-primary">Fase 1: Foundation (Completata)</strong>
              <p className="text-text-secondary text-sm">9 tool essenziali, deployment K3s, SEO e security optimizzati.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-bg-dark border border-yellow-500/30 rounded-lg p-4">
            <span className="text-yellow-500 text-xl">🔄</span>
            <div>
              <strong className="text-text-primary">Fase 2: Testing & CI/CD (Settimane 1-2)</strong>
              <p className="text-text-secondary text-sm">Unit tests con Vitest (80%+ coverage), GitHub Actions CI/CD.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-bg-dark border border-border rounded-lg p-4">
            <span className="text-blue-500 text-xl">📋</span>
            <div>
              <strong className="text-text-primary">Fase 3: Next.js Migration (Settimane 3-4)</strong>
              <p className="text-text-secondary text-sm">SSR/SSG per SEO 9/10, migliore indicizzazione Google.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-bg-dark border border-border rounded-lg p-4">
            <span className="text-blue-500 text-xl">📋</span>
            <div>
              <strong className="text-text-primary">Fase 4: Backend & Features (Settimane 5-6)</strong>
              <p className="text-text-secondary text-sm">PDF tools (merge, compress), Blog completo, User auth, Issue tracking.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-bg-dark border border-border rounded-lg p-4">
            <span className="text-blue-500 text-xl">📋</span>
            <div>
              <strong className="text-text-primary">Fase 5: Advanced Tools (Settimane 7-8)</strong>
              <p className="text-text-secondary text-sm">20+ tool totali, API pubblica, Analytics avanzate.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-text-primary">🤝 Come Contribuire</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          THEJORD.IT è un progetto open source e accogliamo contributi dalla community!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <a
            href="https://github.com/thejord-it/thejord-tools"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bg-dark border border-border hover:border-primary rounded-lg p-4 transition-colors"
          >
            <h4 className="font-bold text-primary-light mb-2">⭐ Star su GitHub</h4>
            <p className="text-text-secondary text-sm">Se ti piace il progetto, lascia una stella!</p>
          </a>
          <a
            href="https://github.com/thejord-it/thejord-tools/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bg-dark border border-border hover:border-primary rounded-lg p-4 transition-colors"
          >
            <h4 className="font-bold text-primary-light mb-2">🐛 Report Bug</h4>
            <p className="text-text-secondary text-sm">Hai trovato un bug? Aprici una issue!</p>
          </a>
          <a
            href="https://github.com/thejord-it/thejord-tools/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bg-dark border border-border hover:border-primary rounded-lg p-4 transition-colors"
          >
            <h4 className="font-bold text-primary-light mb-2">💻 Contribuisci al Codice</h4>
            <p className="text-text-secondary text-sm">Pull request benvenute! Leggi la guida.</p>
          </a>
          <Link
            to="/contact"
            className="bg-bg-dark border border-border hover:border-primary rounded-lg p-4 transition-colors"
          >
            <h4 className="font-bold text-primary-light mb-2">💬 Contattaci</h4>
            <p className="text-text-secondary text-sm">Domande, feedback o suggerimenti?</p>
          </Link>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-text-primary">🚀 Prossimi Passi</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Nelle prossime settimane ci concentreremo su:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-text-secondary mb-8">
          <li>Implementazione testing suite (Vitest + Playwright)</li>
          <li>Setup GitHub Actions per CI/CD automatico</li>
          <li>Migrazione a Next.js 14 per SEO migliorato</li>
          <li>Aggiunta primi PDF tools (merge, compress)</li>
          <li>Sistema blog completo con MDX</li>
        </ol>

        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 mt-12">
          <h3 className="text-2xl font-bold mb-3 text-text-primary">🎉 Provalo Ora!</h3>
          <p className="text-text-secondary mb-4">
            THEJORD.IT è già live e pronto per essere utilizzato. Completamente gratis, sempre.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/"
              className="inline-block bg-primary hover:bg-primary-light text-bg-darkest px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Vai agli Strumenti
            </Link>
            <a
              href="https://github.com/thejord-it/thejord-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-bg-dark border border-border hover:border-primary text-text-primary px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <hr className="border-border my-12" />

        <p className="text-text-muted text-center italic">
          Grazie per il supporto! Insieme possiamo costruire qualcosa di grande. 🚀
        </p>
      </div>
    )
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? blogPosts[slug] : null

  if (!post) {
    return (
      <div className="min-h-screen bg-bg-darkest flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">404 - Post non trovato</h1>
          <Link to="/blog" className="text-primary-light hover:underline">
            Torna al Blog
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-bg-darkest">
      <header className="bg-bg-dark border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/40">
                ⚡
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                THE JORD
              </span>
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-text-secondary hover:text-primary-light transition-colors">Tools</Link>
              <Link to="/blog" className="text-primary-light">Blog</Link>
              <Link to="/about" className="text-text-secondary hover:text-primary-light transition-colors">About</Link>
              <Link to="/contact" className="text-text-secondary hover:text-primary-light transition-colors">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Back to Blog */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors mb-8">
          <span>←</span>
          <span>Torna al Blog</span>
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary-light rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold mb-6 text-text-primary">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-text-muted mb-8">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime} lettura</span>
            </div>

            <hr className="border-border" />
          </header>

          {/* Content */}
          <div className="mb-12">
            {post.content}
          </div>

          {/* Footer CTA */}
          <div className="bg-bg-surface border border-border rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Ti è piaciuto questo articolo?</h3>
            <p className="text-text-secondary mb-6">
              Condividilo con la tua community o lasciaci una stella su GitHub!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://github.com/thejord-it/thejord-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-bg-darkest px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Star su GitHub
              </a>
              <Link
                to="/contact"
                className="inline-block bg-bg-dark border border-border hover:border-primary text-text-primary px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-bg-dark border-t border-border mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-text-muted">
          <p className="mb-2">Made with ❤️ in Italy 🇮🇹</p>
          <p className="text-sm">
            <a href="https://github.com/thejord-it/thejord-tools" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
              Open Source
            </a>
            {' • '}
            <Link to="/about" className="hover:text-primary-light transition-colors">About</Link>
            {' • '}
            <Link to="/contact" className="hover:text-primary-light transition-colors">Contact</Link>
            {' • '}
            <a href="https://github.com/thejord-it/thejord-tools/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
              Security
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
