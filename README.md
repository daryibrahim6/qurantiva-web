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

### 1. Prerequisites

- Node.js 20+ (download dari [nodejs.org](https://nodejs.org), pilih LTS)
- Git (download dari [git-scm.com](https://git-scm.com))

### 2. Clone & Install

```bash
git clone https://github.com/daryibrahim6/qurantiva-web.git
cd qurantiva-web
npm install
```

### 3. Setup Environment Variables

Copy `.env.example` ke `.env.local`:

```bash
cp .env.example .env.local
```

Isi dengan data berikut:

```env
GMAIL_USER=qurantiva@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
```

#### GMAIL_USER
Email Gmail yang dipakai Qurantiva untuk menerima notifikasi pendaftaran.

#### GMAIL_APP_PASSWORD
**Bukan password Gmail biasa.** Ini App Password khusus dari Google.

Cara mendapatkannya:
1. Buka [myaccount.google.com](https://myaccount.google.com)
2. Login dengan email Qurantiva
3. Pastikan **2-Step Verification** aktif (jika belum, aktifkan dulu)
4. Cari menu **App passwords** (atau ketik di search bar)
5. Buat app password baru, nama: "Qurantiva Website"
6. Google akan memberikan password 16 karakter
7. Copy password tersebut ke `GMAIL_APP_PASSWORD`

Fungsi: Supaya form pendaftaran di website bisa mengirim email notifikasi setiap ada pendaftaran baru.

### 4. Run

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

### 5. Production Build

```bash
npm run build
npm start
```

## Deploy

Deploy ke Netlify — Next.js plugin auto-installed. Set env variables di Netlify dashboard.
