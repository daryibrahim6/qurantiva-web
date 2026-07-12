# Qurantiva

Website Qurantiva — Platform pendidikan Al-Qur'an daring dengan metode privat 1-on-1 adaptif.

**Ngaji Anywhere, Anytime, Anyone.**

## Tech Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4 (CSS-first config via `@theme`)
- React 19
- Motion (animations)
- React Hook Form + Zod (form validation)
- Nodemailer (email via Gmail SMTP)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_app_password
WA_NUMBER=62xxxxxxxxxxx
WA_NUMBER_ALT=62xxxxxxxxxxx
NEXT_PUBLIC_WA_NUMBER=62xxxxxxxxxxx
```

## Deploy

Deploy to Netlify — Next.js plugin auto-installed. Set env variables in Netlify dashboard.
