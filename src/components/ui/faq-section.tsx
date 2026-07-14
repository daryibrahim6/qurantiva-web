"use client";

import { useEffect, useRef, useState } from "react";
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
  const spiralRef = useRef<HTMLDivElement | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!spiralRef.current) return;

    const SIZE = 560;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const N = 500;
    const DOT = 1.8;
    const CENTER = SIZE / 2;
    const PADDING = 4;
    const MAX_R = CENTER - PADDING - DOT;
    const DURATION = 3.0;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", String(SIZE));
    svg.setAttribute("height", String(SIZE));
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_R;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", x.toFixed(3));
      c.setAttribute("cy", y.toFixed(3));
      c.setAttribute("r", String(DOT));
      c.setAttribute("fill", "#fedd01");
      c.setAttribute("opacity", "0.6");

      const animR = document.createElementNS(svgNS, "animate");
      animR.setAttribute("attributeName", "r");
      animR.setAttribute("values", `${DOT * 0.5};${DOT * 1.4};${DOT * 0.5}`);
      animR.setAttribute("dur", `${DURATION}s`);
      animR.setAttribute("begin", `${(frac * DURATION).toFixed(3)}s`);
      animR.setAttribute("repeatCount", "indefinite");
      animR.setAttribute("calcMode", "spline");
      animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      c.appendChild(animR);

      const animO = document.createElementNS(svgNS, "animate");
      animO.setAttribute("attributeName", "opacity");
      animO.setAttribute("values", "0.15;0.5;0.15");
      animO.setAttribute("dur", `${DURATION}s`);
      animO.setAttribute("begin", `${(frac * DURATION).toFixed(3)}s`);
      animO.setAttribute("repeatCount", "indefinite");
      animO.setAttribute("calcMode", "spline");
      animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      c.appendChild(animO);

      svg.appendChild(c);
    }

    spiralRef.current.innerHTML = "";
    spiralRef.current.appendChild(svg);
  }, []);

  const filtered = query
    ? items.filter(
        ({ question, answer }) =>
          (question + answer).toLowerCase().includes(query.toLowerCase()),
      )
    : items;

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-accent-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.1)_60%,transparent_75%)]"
        style={{ mixBlendMode: "screen" }}
      >
        <div ref={spiralRef} />
      </div>

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
