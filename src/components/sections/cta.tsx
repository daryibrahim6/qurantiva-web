import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Mail, ArrowRight, Radio } from "lucide-react";
import { CONTACTS } from "@/lib/constants";
import { buildWaLink } from "@/lib/utils";

export function Cta() {
  const waLink = buildWaLink(
    CONTACTS.waPrimary,
    "Assalamualaikum, saya ingin bertanya tentang program Qurantiva.",
  );

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-accent-950 py-20 lg:py-28"
    >
      <Image
        src="/assets/backgrounds/cta-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-accent-900/85" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2
          id="cta-heading"
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Mulai ngaji minggu ini
        </h2>
        <p className="mt-3 max-w-2xl text-xl text-accent-200">
          Daftar langsung atau tanya-tanya dulu via WhatsApp. Tim kami
          biasanya balas dalam 10 menit di jam aktif.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
          <Link
            href="/daftar"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-base font-semibold text-accent-900 shadow-lg transition-all duration-300 hover:bg-primary-400"
          >
            Daftar kelas private
            <ArrowRight className="size-5" />
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-500/40 px-7 py-3.5 text-base font-semibold text-primary-500 transition-all duration-300 hover:bg-primary-500/10"
          >
            <FaWhatsapp className="size-5" />
            Chat WhatsApp dulu
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbCqE6gGE56os4JX7Y0h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-primary-500/40 hover:text-primary-500"
          >
            <Radio className="size-5" />
            Gabung Channel WA
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-base text-accent-300">
          <a
            href={CONTACTS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-primary-400"
          >
            <FaInstagram className="size-5" />
            @qurantiva.id
          </a>
          <a
            href={`mailto:${CONTACTS.email}`}
            className="flex items-center gap-2 transition-colors hover:text-primary-400"
          >
            <Mail className="size-5" />
            {CONTACTS.email}
          </a>
          <a
            href={`https://wa.me/${CONTACTS.waPrimary}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-primary-400"
          >
            <FaWhatsapp className="size-5" />
            {CONTACTS.waPrimaryDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
