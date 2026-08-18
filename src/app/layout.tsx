import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Amiri } from "next/font/google";
import { cn } from "@/lib/utils";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import "./globals.css";

const META_PIXEL_ID = "1526407265430075";

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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://qurantiva.online",
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
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://qurantiva.online",
  },
  openGraph: {
    title: "Qurantiva - Belajar Ngaji Online Privat 1-on-1",
    description:
      "Belajar ngaji online privat 1-on-1 bersama mentor hafidz bersertifikat. Jadwal fleksibel, mulai dari Rp 25.000.",
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qurantiva.online",
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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- Meta Pixel tracking pixel */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Qurantiva",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qurantiva.online",
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
