# Automated Testing

## Quick Start

```bash
npm run test          # Watch mode
npm run test:run      # CI mode
npm run test:ui       # Interactive UI
npm run test:coverage # Coverage report
```

## Test Suite

### Base64Tool (24 tests)
- Encode/decode text & special chars
- File upload/download (5MB limit)
- Copy to clipboard
- Swap input/output
- Mode switching
- Error handling

## CI/CD Integration

Workflow steps:
1. Install deps
2. **Run tests** ← Blocks deploy if failing
3. Build project
4. Deploy to K3s

**Manual deploy only** - trigger via GitHub Actions UI to save resources.

## Tech Stack

- Vitest 4.0.9 + React Testing Library
- happy-dom (CI-compatible)
- Coverage: v8 provider
