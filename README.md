# Afronated — Website

A React + Vite + Tailwind website for **Afronated**, a creative media collective.

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (`motion/react`)
- Sonner (toasts)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Deploying to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Vite — no config needed
4. Hit Deploy

## Connecting the Forms

Both the **Submit Your Work** form and the **Partnerships** form are wired up and ready. To receive submissions:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create two forms and get your Form IDs
3. In `src/components/Submissions.tsx` and `src/components/Partnerships.tsx`, find the comment block:

```js
// ─── CONNECT FORMSPREE: replace YOUR_FORM_ID ───
// const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", { ... })
// ─────────────────────────────────────────────
```

4. Uncomment those lines, replace `YOUR_FORM_ID`, and remove the `await new Promise(...)` mock line above it.

## Swapping Team Photos

In `src/components/Team.tsx`, replace the Unsplash image URLs in the `team` array with real photos. Upload your photos to `/public/` and reference them as `/your-photo.jpg`.

## Updating Interview Videos

In `src/components/Interviews.tsx`, replace the `videoId` values in the `interviews` array with real YouTube video IDs (the part after `?v=` in a YouTube URL).
