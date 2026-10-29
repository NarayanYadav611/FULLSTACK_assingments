# PayPal Open Landing Page

A single-page React web application that replicates the PayPal Open landing page with high visual fidelity, pixel-accurate typography, clean component architecture, and responsive design across desktop, tablet, and mobile screens.

This project was built as a college assignment following strict design and technical specifications without external frameworks or backend dependencies.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Architecture & Folder Structure](#project-architecture--folder-structure)
- [Prerequisites](#prerequisites)
- [Local Setup & Execution](#local-setup--execution)
- [Production Build](#production-build)
- [Responsive Design Implementation](#responsive-design-implementation)
- [Accessibility & Quality Checks](#accessibility--quality-checks)
- [GitHub Repository Setup & Push Guide](#github-repository-setup--push-guide)

---

## Overview

PayPal Open unifies PayPal's business commerce solutions into a single hub. This web application faithfully replicates the reference landing page:

1. **Top Navigation Bar:**
   - Authentic dual-color vector PayPal logo with interlocking monogram.
   - Four primary navigation categories: **Personal**, **Business**, **Partners**, and **Useful Info**, complete with chevron indicators.
   - Standard account action pills: light-gray **Log In** button and solid black **Sign Up** button.
   - Fully responsive layout that adapts to a mobile drawer menu on smaller viewports.

2. **Hero Section:**
   - Centered **Personal / Business** segmented pill toggle (defaulted to "Business" as specified).
   - High-impact bold title **"PayPal Open"** with fine-tuned kerning.
   - Subheading: *"One platform for your business needs"*.
   - Description: *"PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead."*
   - Dual action pill buttons: black primary **Sign Up** and pale-gray secondary **Contact Sales**.

---

## Key Features

- **Component-Driven Architecture:** Clean, modular structure featuring isolated components (`Navbar`, `HeroSection`, and a reusable `Button` component).
- **Exact Visual Fidelity:** Matches the typography, font weights, color scheme, spacing, and pill border radii of the reference design.
- **Pure Client-Side React:** 100% static content with fluid client-side interaction for the audience toggle; zero unnecessary backend, API, or authentication bloat.
- **Fully Responsive:** Custom media queries tailored for desktop (1200px+), tablet (768px - 1024px), and mobile (<768px down to 320px). Zero horizontal scrolling.
- **Built-in Accessibility:** Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<button>`), ARIA labels, focus rings, and high text-contrast ratios.

---

## Technologies Used

- **React 19** — Modern, component-based user interface library.
- **Vite 8** — Next-generation, lightning-fast frontend tooling and development server.
- **JavaScript (ES6+)** — Clean, modern ECMAScript standard.
- **Pure CSS3** — CSS custom properties (variables), Flexbox, CSS Grid, and responsive media queries.

---

## Project Architecture & Folder Structure

```text
paypal/
├── public/
│   ├── favicon.svg          # Custom PayPal SVG favicon for browser tabs
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Button.jsx       # Reusable button component supporting multiple variants
│   │   ├── Button.css       # Button styles (primary, secondary, login, signup)
│   │   ├── Navbar.jsx       # Header, vector logo, navigation links, and account CTAs
│   │   ├── Navbar.css       # Navigation bar and mobile drawer menu styles
│   │   ├── HeroSection.jsx  # Audience toggle, typography, and hero call-to-actions
│   │   └── HeroSection.css  # Hero section styling and fluid typography
│   ├── App.jsx              # Main application shell
│   ├── App.css              # Global application layout styles
│   ├── index.css            # CSS variables, typography reset, and accessibility styles
│   └── main.jsx             # React DOM root entry point
├── index.html               # Main HTML entry file
├── package.json             # NPM dependencies and project scripts
├── vite.config.js           # Vite build configuration
└── README.md                # Comprehensive documentation
```

---

## Prerequisites

Ensure you have Node.js and npm installed on your machine:

- **Node.js**: Version `20.x` or higher
- **npm**: Version `10.x` or higher

Check your installed versions by running in Terminal:

```bash
node --version
npm --version
```

---

## Local Setup & Execution

Follow these steps in your terminal (or in the VS Code integrated terminal: **Terminal → New Terminal**):

### 1. Clone or navigate to the project directory:

```bash
cd /Users/narayanyadav/PAYPAL
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the local development server:

```bash
npm run dev
```

### 4. Open in browser:

Vite will start the server and display a local URL in your terminal:
```text
  VITE v8.3.5  ready in 180 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser (Chrome, Safari, Firefox, or Edge) and navigate to:
**`http://localhost:5173/`**

---

## Production Build

To generate the optimized production bundle:

```bash
npm run build
```

The production assets will be output to the `dist/` directory.

To test and preview the production build locally:

```bash
npm run preview
```

---

## Responsive Design Implementation

The application is thoroughly tested across three main device breakpoints:

| Breakpoint | Screen Width | Layout Behaviors |
| :--- | :--- | :--- |
| **Desktop** | `>= 961px` | Full horizontal navigation, generous padding, large hero heading (clamp up to 92px), side-by-side CTA buttons. |
| **Tablet** | `769px - 960px` | Balanced horizontal spacing, scaled navigation link gaps, proportional typography, preserved centering. |
| **Mobile** | `<= 768px` | Navigation collapses into a hamburger button revealing a clean dropdown menu; hero typography adapts fluidly; zero horizontal scrolling. |
| **Small Mobile** | `<= 440px` | Hero action buttons stack vertically for optimal touch targets and thumb ergonomics. |

---

## Accessibility & Quality Checks

- [x] **Zero Console Errors:** Clean React build with no runtime warnings.
- [x] **No Unnecessary Dependencies:** Zero backend, database, external UI kits, or analytics scripts.
- [x] **Keyboard Accessible:** All interactive controls (buttons, links, toggles) receive visible `:focus-visible` outlines.
- [x] **Semantic HTML:** Clean usage of `<header>`, `<nav>`, `<main>`, and `<button>` elements.
- [x] **Static by Default:** Safe non-submitting buttons and anchor targets (`#top`).

---

## GitHub Repository Setup & Push Guide

To push this project to a new repository in your GitHub account:

### Step 1: Create a New GitHub Repository

1. Open your browser and go to [https://github.com/new](https://github.com/new).
2. Enter the repository name: `paypal-open-landing-page`.
3. Choose **Public** (or **Private**, based on your assignment submission guidelines).
4. **Important:** Leave **"Add a README file"**, **".gitignore"**, and **"Choose a license"** **UNCHECKED** (we already have clean, production-ready files).
5. Click **Create repository**.

### Step 2: Initialize Git and Push from Terminal

Open your terminal in the project directory (`/Users/narayanyadav/PAYPAL`) and run:

```bash
# 1. Verify git status
git status

# 2. Stage all project files
git add .

# 3. Commit the changes
git commit -m "Build PayPal Open landing page using React and Vite"

# 4. Ensure you are on the main branch
git branch -M main

# 5. Link your GitHub repository (replace YOUR_GITHUB_USERNAME with your actual username)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/paypal-open-landing-page.git

# 6. Push your code to GitHub
git push -u origin main
```

*(Note: When prompted by Git, authenticate using your GitHub Personal Access Token or the macOS Keychain credential helper.)*
