# 📖 THEJORD.IT - User Guide

Complete guide for using all developer tools available on THEJORD.IT.

---

## 📝 JSON Formatter & Validator

### Features
- **Format & Beautify**: Clean up messy JSON with proper indentation
- **Minify**: Compress JSON for production use
- **Validate**: Check JSON syntax and show errors
- **Tree View**: Visualize JSON structure hierarchically
- **Convert**: Transform JSON to CSV, XML, YAML, or TypeScript interfaces
- **Single Quotes**: Convert double quotes to single quotes

### How to Use

1. **Format JSON**:
   - Paste your JSON in the input area
   - Click "Format & Beautify"
   - Adjust indent size (2 or 4 spaces)
   - Enable "Sort keys" for alphabetical ordering
   - Enable "Single Quotes" to convert `"` to `'`

2. **Validate JSON**:
   - Paste JSON in the input
   - Validation happens automatically
   - Errors show line and column numbers
   - Green checkmark = valid JSON

3. **Convert JSON**:
   - Select "Convert" tab
   - Choose format: CSV, XML, YAML, or TypeScript
   - Click "Copy" to copy the converted output

4. **Tree View**:
   - Select "Tree View" tab
   - Expand/collapse nested objects
   - See data types and values clearly

---

## 🔤 Base64 Encoder/Decoder

### Features
- **Text Encoding/Decoding**: Convert text to/from Base64
- **File Upload**: Load files up to 5MB
- **File Download**: Save encoded/decoded results
- **File Type Detection**: Automatically detect 50+ file types
- **Binary File Support**: Handle images, PDFs, videos, archives

### How to Use

1. **Encode Text**:
   - Select "Encode" mode
   - Type or paste text in the input area
   - Click "🔒 Encode"
   - Result appears in Base64 format

2. **Encode Files**:
   - Select "Encode" mode
   - Click "📁 Upload File"
   - Select a file (max 5MB)
   - For images/PDFs, file is read as binary
   - For text files (.txt, .json), file is read as text
   - Click "🔒 Encode"

3. **Decode Base64**:
   - Select "Decode" mode
   - Paste Base64 string in input
   - Click "🔓 Decode"
   - For binary files (images, PDFs), you'll see:
     - 🖼️ File type icon
     - File description (e.g., "JPEG Image")
     - MIME type and extension
     - Confidence level (High/Medium/Low)
   - For text files, decoded content appears normally

4. **Download Files**:
   - After decoding, click "💾 Download"
   - For detected files, downloads with correct extension:
     - Images: `.jpg`, `.png`, `.gif`, `.webp`
     - Documents: `.pdf`, `.docx`, `.xlsx`
     - Archives: `.zip`, `.rar`, `.7z`
     - Audio: `.mp3`, `.flac`, `.wav`
     - Video: `.mp4`, `.webm`, `.avi`

### Supported File Types

**Images** 🖼️:
- JPEG, PNG, GIF, BMP, TIFF, WebP, JPEG 2000

**Documents** 📄:
- PDF, DOC/DOCX, XLS/XLSX (ZIP-based)

**Archives** 📦:
- ZIP, RAR, GZIP, BZIP2, 7-Zip

**Audio** 🎵:
- MP3, FLAC, OGG, WAV

**Video** 🎬:
- MP4, WebM, FLV

**Other**:
- EXE (Windows), ELF (Linux), XML, JSON, HTML, CSV

---

## 🔐 Hash Generator

### Features
- **Multiple Algorithms**: MD5, SHA-1, SHA-256, SHA-512, SHA-3
- **HMAC Support**: Generate keyed hashes
- **Multiple Hashes**: Generate all algorithms at once
- **Copy to Clipboard**: Toast notifications on copy
- **Hash Comparison**: Compare hashes visually

### How to Use

1. **Generate Hash**:
   - Type or paste text in the input
   - Select algorithms (MD5, SHA-256, etc.)
   - Hashes generate automatically as you type
   - Click hash value to copy (toast notification appears)

2. **HMAC Mode**:
   - Enable "Use HMAC" toggle
   - Enter secret key
   - Hashes will be HMAC-signed

3. **Compare Hashes**:
   - Switch to "Compare" tab
   - Paste two hashes to compare
   - See if they match or differ

---

## 🔍 RegEx Tester

### Features
- **Live Testing**: Test regular expressions in real-time
- **30+ Patterns**: Predefined patterns for common use cases
- **Match Highlighting**: See matches highlighted in text
- **Flags Support**: Global, case-insensitive, multiline, etc.

### How to Use

1. **Test Regex**:
   - Enter regular expression in pattern field
   - Enter test text
   - Matches highlight automatically
   - See match count and groups

2. **Use Predefined Patterns**:
   - Click "Predefined Patterns"
   - Choose from categories:
     - Email validation
     - URL validation
     - Phone numbers
     - Credit cards
     - Dates and times
     - IP addresses
     - HTML tags
     - And more...

3. **Regex Flags**:
   - `g` - Global (find all matches)
   - `i` - Case insensitive
   - `m` - Multiline
   - `s` - Dotall
   - `u` - Unicode
   - `y` - Sticky

---

## 🔗 URL Encoder/Decoder

### Features
- **Full URL Encoding**: Encode entire URLs
- **Component Encoding**: Encode URL components only
- **Decode URLs**: Decode percent-encoded URLs
- **Copy & Swap**: Quick operations

### How to Use

1. **Encode URL**:
   - Select "Encode" mode
   - Paste URL or text
   - Click "Encode"
   - Copy encoded result

2. **Decode URL**:
   - Select "Decode" mode
   - Paste encoded URL
   - Click "Decode"
   - See human-readable URL

3. **Component vs Full URL**:
   - **Component**: Only encodes special characters
   - **Full URL**: Encodes everything except `://`

---

## 📄 Markdown to HTML

### Features
- **Live Preview**: See HTML output in real-time
- **Syntax Highlighting**: Code blocks with syntax highlighting
- **DOMPurify**: Sanitized HTML output (XSS protection)
- **Copy HTML**: Copy converted HTML

### How to Use

1. **Convert Markdown**:
   - Type Markdown in left panel
   - HTML preview appears on right
   - Click "Copy HTML" to copy output

2. **Supported Markdown**:
   - Headers (`#`, `##`, `###`)
   - Bold (`**text**`) and italic (`*text*`)
   - Lists (ordered and unordered)
   - Links (`[text](url)`)
   - Images (`![alt](url)`)
   - Code blocks (` ``` `)
   - Tables
   - Blockquotes (`>`)

---

## 🎨 Color Converter

### Features
- **Visual Picker**: Pick colors visually
- **Multiple Formats**: HEX, RGB, HSL, CMYK
- **Live Conversion**: Convert between formats instantly
- **Copy Values**: One-click copy

### How to Use

1. **Pick Color**:
   - Click color picker
   - Select desired color
   - All formats update automatically

2. **Enter Color**:
   - Type HEX: `#FF5733`
   - Type RGB: `rgb(255, 87, 51)`
   - Type HSL: `hsl(11, 100%, 60%)`
   - Other formats update automatically

3. **Copy Format**:
   - Click any format value to copy
   - Use in CSS, design tools, etc.

---

## 📰 Lorem Ipsum Generator

### Features
- **Words, Sentences, Paragraphs**: Generate any amount
- **Custom Count**: Specify exact amount needed
- **Statistics**: Word, character, and byte count
- **Copy to Clipboard**: Quick copy

### How to Use

1. **Generate Text**:
   - Select type (words, sentences, paragraphs)
   - Enter count (1-100)
   - Click "Generate"
   - Text appears below

2. **Use Cases**:
   - Website mockups
   - Design prototypes
   - Testing layouts
   - Content placeholders

---

## 📊 Text Diff Checker

### Features
- **Line-by-Line Comparison**: See differences clearly
- **Ignore Options**: Ignore whitespace or case
- **Color Coding**: Red (removed), Green (added), Gray (unchanged)
- **Side-by-Side**: Compare two texts side by side

### How to Use

1. **Compare Texts**:
   - Paste original text in left panel
   - Paste modified text in right panel
   - Click "Compare"
   - Differences highlight automatically

2. **Options**:
   - **Ignore whitespace**: Ignore spaces and tabs
   - **Case sensitive**: Consider uppercase/lowercase
   - **Ignore line breaks**: Treat as continuous text

3. **Understanding Diff**:
   - 🔴 Red lines: Removed from original
   - 🟢 Green lines: Added in modified
   - ⚪ Gray lines: Unchanged

---

## 💡 Tips & Best Practices

### Privacy & Security
- ✅ All tools run 100% client-side
- ✅ No data is sent to servers
- ✅ Safe to use with sensitive data
- ✅ Works offline after first load

### Performance
- 📁 Base64: Max file size is 5MB
- 🔄 Large files may take a few seconds
- 💾 Download feature uses browser's download API

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Keyboard Shortcuts
- `Ctrl/Cmd + C`: Copy
- `Ctrl/Cmd + V`: Paste
- `Ctrl/Cmd + A`: Select all

---

## ❓ FAQ

**Q: Is my data safe?**
A: Yes! All processing happens in your browser. Nothing is sent to our servers.

**Q: Why is there a 5MB limit on Base64?**
A: To ensure good browser performance. Larger files may cause slowdowns.

**Q: Can I use these tools offline?**
A: Yes! After first visit, the site works offline (PWA coming soon).

**Q: How do I report a bug?**
A: Open an issue on [GitHub](https://github.com/thejord-it/thejord-tools/issues).

**Q: Can I contribute?**
A: Absolutely! See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

---

## 📞 Need Help?

- 📧 Email: admin@thejord.it
- 🐛 Issues: [GitHub Issues](https://github.com/thejord-it/thejord-tools/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/thejord-it/thejord-tools/discussions)

---

**Made with ❤️ in Italy 🇮🇹**
