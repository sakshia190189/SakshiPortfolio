# Sakshi Arora — Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Lucide icons.

## Run locally

1. Install Node.js (LTS): https://nodejs.org/
2. Open a terminal in this project folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```
The production website is generated in `dist/`.

## Free hosting options

- **Netlify:** import the project from GitHub; build command `npm run build`, publish directory `dist`.
- **Vercel:** import the project from GitHub; Vite is usually detected automatically.
- **GitHub Pages:** possible with a Vite base-path configuration if you prefer to host from a repository.

## Before publishing

- Confirm the contact phone numbers you want public; the site currently avoids displaying phone numbers.
- Add links to public repositories or live demos for projects you are comfortable sharing. The project cards are intentionally high-level and do not imply that private employer source code is public.
- Check the resume dates, titles, and certification names for accuracy.
- Google Fonts is loaded from an external stylesheet; replace with local fonts if you prefer no third-party font request.
