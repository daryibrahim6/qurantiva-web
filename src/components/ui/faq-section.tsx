"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqSectionItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQWithSpiralProps {
  items: FaqSectionItem[];
  searchPlaceholder?: string;
}

export function FAQWithSpiral({ items, searchPlaceholder = "Cari pertanyaan..." }: FAQWithSpiralProps) {
  const [query, setQuery] = useState("");

  const filtered = query
    ? items.filter(
        ({ question, answer }) =>
          (question + answer).toLowerCase().includes(query.toLowerCase()),
      )
    : items;

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-accent-950 text-white">
      <div className="relative mx-auto max-w-5xl px-6 py-12 lg:py-16">
        <header className="mb-8 flex flex-col gap-4 border-b border-white/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              FAQ
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Pertanyaan yang sering ditanyakan tentang Qurantiva.
            </p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-10 w-full rounded-xl border border-white/20 bg-transparent px-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-primary-500 sm:w-56"
          />
        </header>

        <section className="relative">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {filtered.map((item, i) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                index={i + 1}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-8 text-center text-white/50">
              Tidak ada pertanyaan yang cocok dengan pencarian Anda.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-white/5 p-5 transition",
        open ? "border-primary-500/40" : "border-white/10 hover:border-white/25",
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <div className="flex items-baseline gap-3">
          <span className="text-xs font-medium text-primary-500">
            {String(index).padStart(2, "0")}
          </span>
          <h3 className="text-base font-semibold leading-tight text-white">
            {question}
          </h3>
        </div>
        <span
          className={cn(
            "ml-4 shrink-0 text-lg transition",
            open ? "text-primary-500" : "text-white/50 group-hover:text-white",
          )}
        >
          {open ? "\u2013" : "+"}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.4,0,.2,1)]",
          open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="whitespace-pre-line text-sm leading-relaxed text-white/70">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
