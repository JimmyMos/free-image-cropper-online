# Free Image Cropper Online

A **lightweight, client-side image-editing web app** that lets anyone crop, zoom, rotate and adjust basic effects on a picture directly in the browser, no downloads, log-ins or watermarks required.

## ✨ Features
- **Interactive cropping** with drag-n-resize handles powered by Cropper JS.  
- **Zoom & rotate** controls for quick composition tweaks.  
- **One-click filters** brightness / contrast, grayscale and invert.  
- **Instant download** of the processed image—everything happens locally, so your files never leave the browser.  
- **Mobile-friendly** layout thanks to SvelteKit’s responsive toolkit.  
- **100 % free & ad-free** ideal for quick edits or adding to your own tool chain.

---

## 🏗️ Tech stack
| Layer | What we use | Why |
|-------|-------------|-----|
| Framework | **SvelteKit 1.x** | Reactive UI, zero-config routing. |
| UI / CSS | Native CSS + SCSS | Tiny bundle, no heavy UI framework. |
| Image engine | **cropperjs 1.6** | Battle-tested canvas cropping & transforms. |
| Build tool | **Vite 4** | Instant dev server & fast HMR. :contentReference[oaicite:2]{index=2} |
| Optional backend | *None* (all processing is client-side) |