# Arjun Dev — Portfolio

A brutalist-inspired, production-ready React portfolio website.
Built with Vite + React. Inspired by braydenfriesen.com.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
npm run preview   # preview the build locally
```

## 🎨 Customise

### Your Info
Edit these files to personalise:

- **`src/sections/Hero.jsx`** — Your name, role, location
- **`src/sections/About.jsx`** — Bio, stats, location, status
- **`src/sections/Skills.jsx`** — Skill cards and proficiency levels
- **`src/sections/Projects.jsx`** — Project name, desc, tech, links
- **`src/sections/Journey.jsx`** — Timeline milestones
- **`src/sections/Blog.jsx`** — Blog post titles and excerpts
- **`src/sections/Contact.jsx`** — Email, GitHub, LinkedIn URLs
- **`src/components/Navbar.jsx`** — Social links
- **`src/components/Footer.jsx`** — Footer text

### Colors
All design tokens are in `src/index.css`:

```css
:root {
  --cream: #edeade;       /* page background */
  --yellow: #f5c518;      /* accent color */
  --black: #111111;       /* text & borders */
}
```

Change `--yellow` to any color (e.g. `#ff4444` for red, `#00ffaa` for teal).

### Fonts
Loaded via Google Fonts in `index.html`:
- **Bebas Neue** — Display headings
- **Syne** — Body & UI text
- **DM Mono** — Labels, tags, code

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              ← Global styles & design tokens
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Marquee.jsx
│   │   └── Footer.jsx / .css
│   └── sections/
│       ├── Hero.jsx / .css
│       ├── About.jsx / .css
│       ├── Skills.jsx / .css
│       ├── Projects.jsx / .css
│       ├── Journey.jsx / .css
│       ├── Blog.jsx / .css
│       └── Contact.jsx / .css
```

## 🚢 Deploy

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag & drop the dist/ folder to netlify.com
```

### GitHub Pages
```bash
npm run build
# push dist/ to gh-pages branch
```
