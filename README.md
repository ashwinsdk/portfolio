# Ashwin Sudhakar — Personal Portfolio

A production-ready, cyber-futuristic portfolio website built with React, Vite, and React Three Fiber. Features a single-scroll, fully responsive design with 3D hologram project cards and a pure black background with white-first theme.

## 🚀 Features

- **Cyber-Futuristic Design**: Pure black background with white-first typography and minimal blue accents
- **3D Hologram Projects**: Interactive project showcase using React Three Fiber with CSS fallback
- **Single-Scroll Navigation**: Clean, nav-free experience with smooth vertical scrolling
- **Fully Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Accessibility**: WCAG compliant with keyboard navigation, reduced motion support, and semantic HTML
- **Performance Optimized**: Code-splitting, lazy loading, and optimized bundle size (Lighthouse > 90)
- **Touch & Swipe Support**: Full gesture support for mobile devices

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Three Fiber** - 3D rendering for hologram cards
- **@react-three/drei** - 3D helpers and utilities
- **Three.js** - WebGL 3D library
- **CSS Modules** - Scoped styling
- **Source Code Pro** - Monospace font family

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn

### Setup

1. Clone the repository:
```bash
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

This generates optimized static files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy

The site is a static build and can be deployed to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `dist/` folder or use Netlify CLI
- **GitHub Pages**: Use `gh-pages` package
- **Any static host**: Upload contents of `dist/` directory

#### Vercel Deployment (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

## 📄 Resume PDF

The site references `/resume.pdf` in the "Open CV (PDF)" button. To generate this:

1. Open [ashwinsudhakar.html](ashwinsudhakar.html) in a browser
2. Print to PDF (Cmd/Ctrl + P)
3. Save as `resume.pdf`
4. Place in the `public/` directory

Alternatively, use a headless browser tool:

```bash
# Using Puppeteer or similar
npx html-pdf-node ashwinsudhakar.html public/resume.pdf
```

## 📁 Project Structure

```
personal-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf         # Add your PDF here
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── Summary/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Education/
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.css
│   │   │   └── HologramCard.jsx
│   │   ├── Achievements/
│   │   ├── WorkApproach/
│   │   ├── Languages/
│   │   ├── Leadership/
│   │   ├── Contact/
│   │   └── ReducedMotionToggle/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── ashwinsudhakar.html    # Source resume
└── README.md
```

## 🎨 Design System

### Colors

- **Background**: `#000000` (pure black)
- **Primary**: `#FFFFFF` (white)
- **Accent Blue**: `lab(66.3894% -5.37798 -55.7933)` / `#00AAFF`
- **Grey**: `lab(65.896% 0 0)` / `#A0A0A0`

### Typography

- **Font Family**: Source Code Pro (300, 400, 600 weights)
- **Monospace**: Maintains cyber-futuristic aesthetic

### Breakpoints

- **Mobile**: ≤ 420px
- **Tablet**: 768px
- **Desktop**: ≥ 1366px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators with blue glow
- Skip-to-content link
- Reduced motion toggle (respects `prefers-reduced-motion`)
- High contrast (white on black)
- Selectable text

## 🧪 Testing Checklist

- [x] Lighthouse Performance > 90
- [x] Lighthouse Accessibility > 90
- [x] Keyboard navigation (Tab, Arrow keys)
- [x] Mobile touch/swipe gestures
- [x] WebGL fallback for project cards
- [x] Reduced motion support
- [x] Cross-browser (Chrome, Firefox, Safari, Edge)
- [x] Responsive layouts (mobile, tablet, desktop)

## 📊 Performance Optimizations

- Code-splitting with React.lazy()
- Lazy loading of 3D components
- Capped device pixel ratio for mobile
- GPU-accelerated CSS transforms
- Minimal external dependencies
- Inline critical CSS
- Deferred non-critical scripts
- Optimized bundle with Vite/ESBuild

## 🔧 NPM Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Content Sources

All content is pulled directly from:
- `ashwinsudhakar.html` (canonical resume)

Content includes:
- Name, role, contact information
- Education (REVA University, GPA 8.77)
- Experience (FriggHome internship)
- Projects with repository links
- Skills, achievements, languages
- GitHub and LinkedIn profiles

## 🐛 Known Issues & Browser Support

- **Safari iOS < 15**: WebGL performance may vary (CSS fallback provided)
- **Firefox**: Reduced motion preference requires manual toggle in some versions
- **IE11**: Not supported (modern browsers only)

## 📧 Contact

- **Email**: ashwin2005s@gmail.com
- **LinkedIn**: [linkedin.com/in/ashwinsdk](https://www.linkedin.com/in/ashwinsdk/)
- **GitHub**: [github.com/ashwinsdk](https://github.com/ashwinsdk)

## 📄 License

© 2025 Ashwin Sudhakar. All rights reserved.

---

Built with ❤️ using React, Vite, and React Three Fiber in 2025.
