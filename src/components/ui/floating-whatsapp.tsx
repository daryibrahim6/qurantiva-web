"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACTS } from "@/lib/constants";
import { buildWaLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const waLink = buildWaLink(
    CONTACTS.waPrimary,
    "Assalamualaikum, saya ingin bertanya tentang program Qurantiva.",
  );

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {hovered && (
        <span className="rounded-full bg-accent-900 px-4 py-2 text-sm font-medium text-white shadow-lg">
          Chat kami!
        </span>
      )}
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 group-hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <FaWhatsapp className="relative size-7" />
      </span>
    </a>
  );
}
