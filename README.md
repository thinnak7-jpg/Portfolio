# Thinnakorn Rattana — Portfolio

Personal portfolio of **Thinnakorn Rattana**, Electronic and Telecommunication Engineering (ENET C) student.

🔗 **Live:** https://portfolio-pi-livid-ja1k668e1w.vercel.app

Built with React 19, TypeScript, Vite, Tailwind CSS and Framer Motion. Deployed on Vercel — every push to `main` redeploys automatically.

## Run locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (production build to `dist/`), `npm run preview` (serve the build), `npm run lint`.

## Editing content

All content lives in `src/data/` — no need to touch the components.

| File | What it holds |
|---|---|
| `profile.ts` | Name, role, bio, goals, interests, socials, contact, resume link |
| `skills.ts` | Skills (import the icon from `react-icons` at the top of the file) |
| `projects.ts` | Projects |
| `experience.ts` | Work experience, education, achievements |
| `certificates.ts` | Certificates (images in `public/certificates/`) |
| `gallery.ts` | Activity photos (images in `public/activities/`) |

Any field still set to a `[PLACEHOLDER]` value is hidden from the site automatically, so sections appear as soon as real content is filled in.

Images: prefer WebP, max ~1920px wide.

## Contact form (optional)

The form sends through [EmailJS](https://www.emailjs.com/) when these environment variables are set in Vercel (Project → Settings → Environment Variables), or in a local `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

The EmailJS template should use the fields `user_name`, `user_email`, `subject` and `message`. Without these variables the form opens the visitor's email app with the message pre-filled.

## Deployment

- **Vercel** (current): `vercel.json` rewrites all routes to `index.html` so React Router paths work on refresh.
- **DirectAdmin / Apache**: see [DEPLOY_DIRECTADMIN.md](DEPLOY_DIRECTADMIN.md).
