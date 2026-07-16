"use client";

import { CONTACTS, NAV_LINKS, PROGRAMS } from "@/lib/constants";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Mail, Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    icon: <FaInstagram className="size-4" />,
    href: CONTACTS.instagram,
    label: "Instagram",
  },
  {
    icon: <FaWhatsapp className="size-4" />,
    href: `https://wa.me/${CONTACTS.waPrimary}`,
    label: "WhatsApp",
  },
  {
    icon: <FaTiktok className="size-4" />,
    href: "https://www.tiktok.com/@qurantiva.id",
    label: "TikTok",
  },
  {
    icon: <Radio className="size-4" />,
    href: "https://whatsapp.com/channel/0029VbCqE6gGE56os4JX7Y0h",
    label: "WhatsApp Channel",
  },
  {
    icon: <Mail className="size-4" />,
    href: `mailto:${CONTACTS.email}`,
    label: "Email",
  },
];

const FOOTER_SECTIONS = [
  {
    title: "Navigasi",
    links: NAV_LINKS.map((l) => ({ name: l.label, href: l.href })),
  },
  {
    title: "Program",
    links: PROGRAMS.map((p) => ({ name: p.title, href: "/daftar" })),
  },
  {
    title: "Kontak",
    links: [
      { name: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
      { name: CONTACTS.waPrimaryDisplay, href: `https://wa.me/${CONTACTS.waPrimary}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-accent-950 pb-28 pt-16 sm:pb-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Left: logo + description + socials */}
          <div className="flex w-full flex-col gap-6">
            <Link href="/" className="relative block h-10 w-[220px]">
              <Image
                src="/assets/logo/logo-light.png"
                alt="Qurantiva"
                fill
                sizes="220px"
                className="object-contain object-left"
              />
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-accent-300">
              Belajar ngaji online privat 1-on-1. Mentor terkurasi, jadwal
              fleksibel, untuk semua usia.
            </p>
            <ul className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-full border border-accent-700 text-accent-300 transition-all hover:border-primary-500 hover:bg-primary-500 hover:text-accent-900"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: link sections */}
          <div className="grid w-full gap-8 sm:grid-cols-3 lg:gap-16">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-base font-bold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto");
                    const isHashLink = link.href.startsWith("/#");
                    return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-accent-300 transition-colors hover:text-primary-400"
                        >
                          {link.name}
                        </a>
                      ) : isHashLink ? (
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            const id = link.href.replace(/^\//, "");
                            const el = document.querySelector(id);
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth", block: "start" });
                              history.pushState(null, "", id);
                            } else {
                              window.location.assign(link.href);
                            }
                          }}
                          className="text-base text-accent-300 transition-colors hover:text-primary-400"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-base text-accent-300 transition-colors hover:text-primary-400"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-accent-800 py-6 text-sm text-accent-300 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Qurantiva.id. Semua hak dilindungi.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="transition-colors hover:text-primary-400">
                Syarat &amp; Ketentuan
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary-400">
                Kebijakan Privasi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
