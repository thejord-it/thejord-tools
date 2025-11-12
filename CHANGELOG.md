# Changelog

All notable changes to THEJORD.IT will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2025-01-12

### Added
- **Reusable Layout Component**: All tool pages now use a consistent layout with clickable logo navigation
- **Toast Notification System**: Modern toast notifications replacing browser alerts throughout the application
- **Base64 File Operations**:
  - File upload support (maximum 5MB)
  - File download with automatic extension detection
  - 50+ file type detection via magic bytes signatures
  - Support for images (JPEG, PNG, GIF, WebP, BMP, TIFF)
  - Support for documents (PDF, DOC/DOCX, XLS/XLSX)
  - Support for archives (ZIP, RAR, GZIP, 7-Zip, BZIP2)
  - Support for audio (MP3, FLAC, WAV, OGG)
  - Support for video (MP4, WebM, FLV)
  - Binary/text file distinction
  - Confidence level indicators (High/Medium/Low)
- **JSON Formatter Enhancement**: Single quotes conversion option for output formatting
- **User Guide**: Comprehensive documentation for all tools (`docs/USER-GUIDE.md`)
- **Changelog Page**: Version history accessible from the website

### Changed
- Hash Generator: Replaced `alert()` with toast notifications for copy operations
- Base64 Tool: Improved UI with file type badges and icons
- All Tool Pages: Migrated to use the new Layout component for consistency
- Navigation: Logo now links to homepage from all pages
- Documentation: Updated README.md with new features and capabilities

### Technical
- New Component: `Layout.tsx` - Reusable layout with header, footer, and navigation
- New Component: `Toast.tsx` - Toast notification system with slide-in animations
- New Library: `file-detection.ts` - File type detection via magic bytes
- New CSS: Slide-in animation for toast notifications
- Improved file upload handling with binary/text distinction
- Enhanced Base64 decoding with data URL prefix support

---

## [1.0.0] - 2025-01-12

### Added
- **Initial Release**: THEJORD.IT goes live! 🚀
- **9 Developer Tools**:
  - JSON Formatter & Validator (format, minify, tree view, convert to CSV/XML/YAML/TypeScript)
  - Base64 Encoder/Decoder (text and basic encoding)
  - RegEx Tester (30+ predefined patterns, live testing)
  - Hash Generator (MD5, SHA-1, SHA-256, SHA-512, SHA-3, HMAC support)
  - URL Encoder/Decoder (component and full URL support)
  - Markdown to HTML Converter (live preview, DOMPurify sanitization)
  - Color Converter (HEX, RGB, HSL, CMYK with visual picker)
  - Lorem Ipsum Generator (words, sentences, paragraphs)
  - Text Diff Checker (line-by-line comparison)

- **Website Pages**:
  - Homepage with tool grid
  - About page (mission, tech stack, roadmap)
  - Contact page (mailto form, FAQ)
  - Blog system with first post

- **Infrastructure**:
  - React 18.2.0 + TypeScript 5.2.2
  - Vite 4.5.0 build system
  - Tailwind CSS 3.3.5 styling
  - Docker containerization
  - Kubernetes (K3s) deployment
  - Cloudflare Tunnel ingress
  - Nginx web server

- **Security**:
  - Content Security Policy (CSP)
  - HTTP Strict Transport Security (HSTS)
  - Permissions-Policy headers
  - Cross-Origin policies (COEP, COOP, CORP)
  - XSS Protection
  - Zero tracking/analytics

- **SEO**:
  - Meta tags optimization
  - Open Graph + Twitter Cards
  - Schema.org structured data
  - Sitemap.xml (13 URLs)
  - Robots.txt

- **Documentation**:
  - README.md (English + Italian)
  - CONTRIBUTING.md
  - SECURITY.md
  - DEPLOYMENT.md
  - ROADMAP-COMPLETE.md
  - DEPLOYMENT-NOTES.md

### Technical
- 100% client-side processing (privacy-first)
- No cookies, no tracking
- Works offline after first load
- Responsive design (mobile, tablet, desktop)
- Gzip compression
- Code splitting and tree shaking
- Bundle size: 448.96 KB JS (131.01 KB gzipped)

---

## Links
- **Website**: [thejord.it](https://thejord.it)
- **Repository**: [github.com/thejord-it/thejord-tools](https://github.com/thejord-it/thejord-tools)
- **Issues**: [GitHub Issues](https://github.com/thejord-it/thejord-tools/issues)
- **Discussions**: [GitHub Discussions](https://github.com/thejord-it/thejord-tools/discussions)

---

## Version History Summary

| Version | Date | Description |
|---------|------|-------------|
| 1.1.0 | 2025-01-12 | UI enhancements, Base64 file ops, toast notifications |
| 1.0.0 | 2025-01-12 | Initial release with 9 tools |

---

**Made with ❤️ in Italy 🇮🇹**
