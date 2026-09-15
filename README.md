# Abhishek Kumar Portfolio

A modern developer portfolio built with React, TypeScript, Vite, and Tailwind CSS (v4).

Live Link https://abhishek-kr18.vercel.app/

## Tech Stack

- React 19
- TypeScript 5
- Vite 6
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide Icons

## Features

- Responsive single-page portfolio layout
- Animated hero and section transitions
- Scroll-aware desktop/mobile navigation
- Structured sections for experience, projects, achievements, skills, and education
- Project cards with GitHub and live demo links
- Contact CTA section with direct email and social links
- SEO and social sharing metadata in HTML

## Getting Started

### 1. Prerequisites

- Node.js 20+ (recommended)
- npm 10+

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The app runs on http://localhost:3000.

## Available Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Create production build
- `npm run preview`: Preview production build locally
- `npm run lint`: Run TypeScript type check (`tsc --noEmit`)

## Project Structure

```text
src/
   components/
      layout/      # Navigation, splash, animated background
      sections/    # Hero, Experience, Projects, Skills, etc.
   data/
      resume.json  # Portfolio content source of truth
   App.tsx
   main.tsx
   index.css
```

## Content Customization

Edit the following file to update content:

- `src/data/resume.json`

You can update:

- Basics (name, title, summary, email, links)
- Experience bullets
- Projects (stack, bullets, GitHub/live links)
- Skills and education
- Achievements and certifications

## Deployment

This app can be deployed to any static hosting provider:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Typical deployment flow:

1. Run `npm run build`
2. Deploy the generated `dist/` directory

## License

Personal portfolio project by Abhishek Kumar.
