import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Amiri } from "next/font/google";
import { cn } from "@/lib/utils";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://qurantiva-web.vercel.app",
  ),
  title: "Qurantiva - Belajar Ngaji Online Privat 1-on-1",
  description:
    "Belajar ngaji online privat 1-on-1 bersama mentor hafidz bersertifikat. Jadwal fleksibel, mulai dari Rp 25.000.",
  keywords: [
    "belajar ngaji online",
    "mengaji online",
    "kursus mengaji privat",
    "Qurantiva",
    "belajar Al-Qur'an",
    "ngaji daring",
    "kelas ngaji online",
    "les mengaji privat",
    "mentor hafidz bersertifikat",
    "privat 1-on-1 Al-Qur'an",
    "pendidikan Al-Qur'an daring",
  ],
  authors: [{ name: "Qurantiva" }],
  creator: "Qurantiva",
  publisher: "Qurantiva",
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://qurantiva-web.vercel.app",
  },
  openGraph: {
    title: "Qurantiva - Belajar Ngaji Online Privat 1-on-1",
    description:
      "Belajar ngaji online privat 1-on-1 bersama mentor hafidz bersertifikat. Jadwal fleksibel, mulai dari Rp 25.000.",
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qurantiva-web.vercel.app",
    siteName: "Qurantiva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qurantiva - Belajar Ngaji Online Privat 1-on-1",
    description:
      "Belajar ngaji online privat 1-on-1 bersama mentor hafidz bersertifikat. Jadwal fleksibel, mulai dari Rp 25.000.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(jakartaSans.variable, amiri.variable, "h-full antialiased scroll-smooth")}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Qurantiva",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qurantiva-web.vercel.app",
              description:
                "Belajar ngaji online privat 1-on-1 bersama mentor hafidz bersertifikat. Jadwal fleksibel, mulai dari Rp 25.000.",
              sameAs: ["https://instagram.com/qurantiva.id"],
            }),
          }}
        />
      </body>
    </html>
  );
}
