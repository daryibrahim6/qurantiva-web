"use client";

import Link from "next/link";
import { Check, Star } from "lucide-react";
import { motion } from "motion/react";
import { PRICING, CONTACTS } from "@/lib/constants";
import { buildWaLink, cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="pricing-heading" className="text-3xl font-bold text-accent-900 sm:text-4xl">
            Harga paket
          </h2>
          <p className="mt-3 text-lg text-accent-600">
            Mulai dari gratis. Kelas starter cuma Rp 25.000 buat coba-coba.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PRICING.map((paket, index) => {
            const isFree = paket.price === "Gratis";
            const waLink = isFree
              ? buildWaLink(
                  CONTACTS.waPrimary,
                  "Assalamualaikum, saya ingin gabung Kelas Halaqah Qurantiva.",
                )
              : null;

            return (
              <motion.div
                key={paket.name}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={cn(
                  "relative flex flex-col rounded-2xl border-2 bg-white p-6",
                  paket.highlight
                    ? "border-primary-500 shadow-xl shadow-primary-500/10 lg:-translate-y-3"
                    : "border-accent-100",
                )}
              >
                {paket.highlight && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-accent-900">
                    <Star className="size-3 fill-accent-900" />
                    Terpopuler
                  </span>
                )}

                <h3 className="mb-2 text-xl font-bold text-accent-900">
                  {paket.name}
                </h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-accent-800">
                    {paket.price}
                  </span>
                  {paket.period && (
                    <span className="text-base text-primary-600">
                      {paket.period}
                    </span>
                  )}
                </div>

                <ul className="mb-6 flex flex-1 flex-col gap-2">
                  {paket.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-base text-accent-700"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {isFree ? (
                  <a
                    href={waLink ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-accent-200 px-4 py-3 text-base font-semibold text-accent-800 transition-all hover:border-primary-500 hover:bg-primary-50"
                  >
                    {paket.ctaText}
                  </a>
                ) : (
                  <Link
                    href={`/daftar?paket=${encodeURIComponent(paket.name)}`}
                    className={cn(
                      "inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-base font-semibold transition-all hover:shadow-lg",
                      paket.highlight
                        ? "bg-primary-500 text-accent-900 hover:bg-primary-600"
                        : "border-2 border-accent-200 text-accent-800 hover:border-primary-500 hover:bg-primary-50",
                    )}
                  >
                    {paket.ctaText}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
