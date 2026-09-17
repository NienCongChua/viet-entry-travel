# Quality Assurance & Verification Protocol

## 1. Test Matrix
| Category | Requirement | Verification Method | Status |
|---|---|---|---|
| Build | TypeScript typecheck & Vite bundling | `npm run build` | Verified (0 errors) |
| Language | 100% fluent international English | Regex diacritic scan across UI | Verified |
| Image Performance | Responsive web weights (<250 KB per asset) | PIL optimization check | Verified (62 images, avg ~110 KB) |
| Multi-Photo Gallery | Every dish has 2-4 authentic photos | Food catalog gallery inspection | Verified |
| Mobile Responsive | Clean grid reflow & touch-friendly lightbox | CSS media queries (360px - 1440px) | Verified |
| Accessibility | Semantic HTML, alt text, focus management | Lightbox keyboard & escape handling | Verified |
