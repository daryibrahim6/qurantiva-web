"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Radio, X } from "lucide-react";
import { CONTACTS } from "@/lib/constants";
import { buildWaLink } from "@/lib/utils";

const WA_CHANNEL_URL = "https://whatsapp.com/channel/0029VbCqE6gGE56os4JX7Y0h";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const waLink = buildWaLink(
    CONTACTS.waPrimary,
    "Assalamualaikum, saya ingin bertanya tentang program Qurantiva.",
  );

  return (
    <div
      className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-6"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {open && (
        <div className="flex flex-col gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-medium text-accent-900 shadow-lg ring-1 ring-accent-100 transition-all hover:bg-accent-50"
          >
            <FaWhatsapp className="size-5 text-[#25D366]" />
            Chat WhatsApp
          </a>
          <a
            href={WA_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-medium text-accent-900 shadow-lg ring-1 ring-accent-100 transition-all hover:bg-accent-50"
          >
            <Radio className="size-5 text-primary-800" />
            Gabung Channel WA
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Tutup menu WhatsApp" : "Buka menu WhatsApp"}
        className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 hover:scale-110"
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        )}
        {open ? (
          <X className="relative size-6" />
        ) : (
          <FaWhatsapp className="relative size-7" />
        )}
      </button>
    </div>
  );
}
