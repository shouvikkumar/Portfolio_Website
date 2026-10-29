# ⚡ Shouvik Kumar Maity - Modern Cyber-Glass Developer Portfolio

An elite, high-performance developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for Full-Stack Software Engineers, Systems Architects, and Technical Leaders.

![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20TailwindCSS-06b6d4)
![Theme](https://img.shields.io/badge/Design-Cyber--Glass%20%2F%20Dark%20Theme-8b5cf6)
![Status](https://img.shields.io/badge/Build-Passing-10b981)

---

## 🌟 Key Features

- **Cyber-Glass Dark Aesthetic**: Subtle glowing ambient backdrops, glassmorphism cards, and refined micro-animations.
- **Interactive CLI Terminal**: A functional terminal drawer where visitors and recruiters can type real commands (`help`, `about`, `skills`, `projects`, `stats`, `hire`, `clear`).
- **Interactive Hero**: Dynamic typewriter role rotator, 1-click email copy with instant feedback, live system uptime badge, and a realistic mock code editor window.
- **Categorized Skills Matrix**: Interactive category filtering (`Frontend`, `Backend`, `Databases & Cache`, `DevOps & Cloud`) with proficiency indicators and highlight badges.
- **Projects Gallery with Deep Dive Architecture Modal**:
  - Filter by project type (`Full-Stack`, `Cloud / API`, `Frontend / UI`, `AI / ML`).
  - Interactive "Deep Dive" modal highlighting system architecture, performance metrics, and engineering challenges solved.
  - Direct links to GitHub repositories and live demonstrations.
- **Engineering Experience Timeline**: Highlights career progression with key achievements, impact metrics, and technologies used.
- **Interactive Contact Section**:
  - Direct 1-click email copy.
  - Contact form with validation and a celebratory particle confetti explosion powered by `canvas-confetti`.
- **Fully Responsive & Accessible**: Mobile drawer navigation, smooth anchor scrolling, and clean semantic markup.
- **100% Config-Driven**: Customize all your bio, projects, experience, and skills in a single file (`src/data/portfolioData.js`).

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v18.x or later)
- **npm** (v9.x or later)

### 2. Run the Development Server
```bash
# Navigate to the portfolio folder
cd "C:\Users\SHOUVIK KUMAR MAITY\.gemini\antigravity\scratch\portfolio"

# Start the Vite local server
npm run dev
```

Open your browser at the URL shown in terminal (usually `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` folder.

---

## 📂 Project Structure

```
portfolio/
├── index.html                   # HTML entry point with fonts & metadata
├── tailwind.config.js           # Cyber theme colors & keyframes
├── postcss.config.js            # PostCSS pipeline
├── package.json                 # Dependencies and scripts
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application layout
    ├── index.css                # Tailwind directives & glassmorphic utilities
    ├── data/
    │   └── portfolioData.js     # 👈 EDIT YOUR PERSONAL INFO, PROJECTS & SKILLS HERE!
    └── components/
        ├── Navbar.jsx           # Glass navigation with scroll spy
        ├── Hero.jsx             # Hero section with typewriter & code mockup
        ├── About.jsx            # Engineering pillars & bio
        ├── Skills.jsx           # Filterable technical proficiency matrix
        ├── Projects.jsx         # Project showcase cards & filters
        ├── ProjectModal.jsx     # Deep architectural breakdown modal
        ├── Experience.jsx       # Career timeline & achievements
        ├── Contact.jsx          # Message form with confetti & 1-click copy
        ├── InteractiveTerminal.jsx # Authentic CLI console modal
        ├── Footer.jsx           # Copyright & navigation links
        └── Icons.jsx            # Brand SVG icons (GitHub, LinkedIn, Twitter)
```

---

## 🛠️ Personalizing Your Portfolio

To customize the website with your own information, simply edit **[`src/data/portfolioData.js`](src/data/portfolioData.js)**:

1. **`personalInfo`**: Change your name, title, bio, email, socials, and metrics.
2. **`skillsData`**: Add or modify your tech stack, categories, and proficiency levels.
3. **`projectsData`**: Add your own projects, screenshots, GitHub links, and live URLs.
4. **`experienceData`**: Update your work history, dates, and bulleted achievements.
5. **`terminalCommands`**: Customize the responses output in the interactive CLI terminal.

---

## 🌐 Deployment Options

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your repository. Vercel will automatically detect **Vite** and configure the build settings (`npm run build`, output directory `dist`).
4. Click **Deploy**.

### Deploying to Netlify
1. Drag and drop the `dist/` directory into [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
