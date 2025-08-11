# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Next.js 13 App Router and Contentlayer. The site uses TypeScript, Tailwind CSS, and includes dark mode support. Content is authored in MDX format and processed through Contentlayer for type-safe content management.

## Common Commands

- `pnpm dev` or `npm run dev` - Start development server
- `pnpm build` or `npm run build` - Build for production  
- `pnpm preview` or `npm run preview` - Build and start production server
- `pnpm lint` or `npm run lint` - Run ESLint

## Architecture

### Content Management
- **Contentlayer** processes MDX files from `/content/` directory into type-safe data
- Content types: `Post` (blog posts in `/content/posts/`) and `Page` (static pages in `/content/pages/`)
- Configuration in `contentlayer.config.js` defines document schemas and computed fields
- Generated types available at `@/.contentlayer/generated`

### Routing Structure
- Next.js 13 App Router with dynamic routes
- `/app/posts/[...slug]/page.tsx` - Individual blog post pages
- `/app/[...slug]/page.tsx` - Static pages (like About)
- Homepage (`/app/page.tsx`) displays all posts in reverse chronological order

### Styling
- Tailwind CSS with custom color extensions (green.1, pink.hot)
- Typography plugin for prose content
- Dark mode implemented via `next-themes` with class-based switching
- Custom theme toggle component in header

### Components
- `ThemeProvider` - Dark/light mode context
- `ModeToggle` - Theme switcher button  
- `Analytics` - Vercel Analytics integration
- `mdx-components.tsx` - Custom MDX component overrides

### Key Files
- `next.config.js` - Integrates Contentlayer with Next.js build process
- `app/layout.tsx` - Root layout with navigation, theme provider, and analytics
- `tailwind.config.js` - Tailwind configuration with content paths and custom colors