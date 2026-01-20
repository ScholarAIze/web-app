# Scholaraize Website

A high-performance, SEO-optimized static website built with Astro + Tailwind CSS for scholaraize.com.

## Project Structure

```
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   └── SEO.astro
│   ├── layouts/           # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro           # Landing page
│   │   ├── about.astro           # About page
│   │   ├── projects/
│   │   │   ├── index.astro       # Projects listing
│   │   │   └── bactermfinder/
│   │   │       └── index.astro   # BacTermFinder landing
│   │   └── blog/
│   │       ├── index.astro       # Blog listing
│   │       └── [slug].astro      # Blog posts
│   ├── content/           # Content collections
│   │   └── blog/          # Blog posts (Markdown)
│   └── styles/
│       └── global.css     # Tailwind + custom styles
├── public/                # Static assets
│   ├── CNAME              # Custom domain
│   ├── robots.txt
│   └── favicon.svg
├── worker.js              # Cloudflare Worker for Vercel proxy
├── wrangler.toml          # Cloudflare Worker config
└── astro.config.mjs       # Astro configuration
```

## Features

- **Astro v5** - Zero-JS static site generation
- **Tailwind CSS v4** - Utility-first styling with custom theme
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Reveal.js Animations** - Scroll-based reveal animations
- **SEO Optimized** - Meta tags, structured data, sitemap, robots.txt
- **Blog System** - Markdown-based content collections
- **Cloudflare Worker** - Reverse proxy for Vercel app integration
- **Google Analytics** - Ready to configure

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### 1. Cloudflare Pages (Main Site)

1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add custom domain: `scholaraize.com`
5. Enable SSL/TLS (Full)

### 2. Cloudflare Workers (Vercel Proxy)

1. Install Wrangler: `npm install -g wrangler`
2. Login: `wrangler login`
3. Deploy: `wrangler deploy`

Or configure in Cloudflare Dashboard:
- Create Worker from `worker.js`
- Set route: `scholaraize.com/projects/bactermfinder/app/*`

### 3. DNS Configuration (Cloudflare)

```
Type: A     Name: @    Value: 192.0.2.1 (Cloudflare IP)
Type: CNAME Name: www   Value: yourusername.github.io
```

## SEO Checklist

- [x] Canonical URLs
- [x] Sitemap (`/sitemap-index.xml`)
- [x] Robots.txt
- [x] Structured data (Organization, WebSite)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Meta descriptions (150-160 chars)
- [x] Semantic HTML headings

## Pages

| URL | Description |
|-----|-------------|
| `/` | Main landing page |
| `/about` | About page |
| `/projects` | Projects listing |
| `/projects/bactermfinder` | BacTermFinder landing |
| `/projects/bactermfinder/app` | Proxied to Vercel app |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog posts |

## Adding Blog Posts

Create new Markdown files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "SEO-friendly description"
pubDate: 2025-01-20
author: "Your Name"
tags: ["tag1", "tag2"]
draft: false
---

# Your Content
```

## Google Analytics

Replace `G-XXXXXXXXXX` in `src/layouts/BaseLayout.astro` with your tracking ID.

## License

MIT
