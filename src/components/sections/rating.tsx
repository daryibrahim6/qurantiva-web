"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const PROGRAM_PHOTOS = [
  "/assets/testimonials/program-1.webp",
  "/assets/testimonials/program-2.webp",
  "/assets/testimonials/program-3.webp",
  "/assets/testimonials/program-4.webp",
  "/assets/testimonials/program-5.webp",
];

const WA_SCREENSHOTS = [
  { src: "/assets/testimonials/wa-1.webp", name: "Kak Gia", role: "Kelas Starter" },
  { src: "/assets/testimonials/wa-2.webp", name: "Kak Anggra", role: "Kelas Privat 1-on-1" },
  { src: "/assets/testimonials/wa-3.webp", name: "Kak Zahra", role: "Kelas Privat 1-on-1" },
  { src: "/assets/testimonials/wa-4.webp", name: "Kak Nita", role: "Kelas Privat 1-on-1" },
  { src: "/assets/testimonials/wa-5.webp", name: "Santri Qurantiva", role: "Kelas Privat 1-on-1" },
];

export function Rating() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [waIndex, setWaIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const photoCount = PROGRAM_PHOTOS.length;
  const waCount = WA_SCREENSHOTS.length;

  const goPhotoPrev = useCallback(() => setPhotoIndex((p) => (p - 1 + photoCount) % photoCount), [photoCount]);
  const goPhotoNext = useCallback(() => setPhotoIndex((p) => (p + 1) % photoCount), [photoCount]);

  const goWaPrev = useCallback(() => setWaIndex((p) => (p - 1 + waCount) % waCount), [waCount]);
  const goWaNext = useCallback(() => setWaIndex((p) => (p + 1) % waCount), [waCount]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="rating"
      aria-labelledby="rating-heading"
      className="bg-accent-950 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2
            id="rating-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Apa kata mereka
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-accent-300">
            Dengar langsung dari santri dan orang tua santri Qurantiva.
          </p>
        </div>

        {/* Testimoni via WhatsApp — 3-card slider with loop */}
        <div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Testimoni via WhatsApp</h3>
              <p className="mt-2 max-w-3xl text-sm text-accent-300 sm:text-base">
                Tangkapan layar percakapan langsung dari santri dan orang tua santri.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={goWaPrev}
                className="flex size-9 items-center justify-center rounded-full border border-accent-700 text-accent-300 transition-colors hover:bg-accent-800"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={goWaNext}
                className="flex size-9 items-center justify-center rounded-full border border-accent-700 text-accent-300 transition-colors hover:bg-accent-800"
                aria-label="Berikutnya"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((offset) => {
              const itemIndex = (waIndex + offset) % waCount;
              const item = WA_SCREENSHOTS[itemIndex];
              return (
                <motion.button
                  key={offset}
                  onClick={() => setLightbox(item.src)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-accent-700 bg-accent-900 text-left shadow-lg shadow-accent-950/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: offset * 0.1 }}
                >
                  <div className="flex h-[440px] items-center justify-center bg-accent-950">
                    <Image
                      src={item.src}
                      alt={`Testimoni WhatsApp dari ${item.name}`}
                      width={1080}
                      height={1920}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="border-t border-accent-800 px-4 py-3">
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-accent-400">{item.role}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {WA_SCREENSHOTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setWaIndex(index)}
                className="flex size-6 items-center justify-center rounded-full"
                aria-label={`Testimoni ${index + 1}`}
              >
                <span
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === waIndex ? "w-6 bg-primary-500" : "w-2 bg-accent-600 hover:bg-accent-500",
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Foto saat program — landscape slider with loop */}
        <div className="mt-16">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Foto saat program</h3>
              <p className="mt-2 max-w-3xl text-sm text-accent-300 sm:text-base">
                Dokumentasi langsung dari sesi belajar santri Qurantiva.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={goPhotoPrev}
                className="flex size-9 items-center justify-center rounded-full border border-accent-700 text-accent-300 transition-colors hover:bg-accent-800"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={goPhotoNext}
                className="flex size-9 items-center justify-center rounded-full border border-accent-700 text-accent-300 transition-colors hover:bg-accent-800"
                aria-label="Berikutnya"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div
            className="mt-6 cursor-pointer overflow-hidden rounded-2xl border border-accent-700 bg-accent-900"
            onClick={() => setLightbox(PROGRAM_PHOTOS[photoIndex])}
          >
            <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[500px]">
              <Image
                src={PROGRAM_PHOTOS[photoIndex]}
                alt={`Foto program Qurantiva ${photoIndex + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {PROGRAM_PHOTOS.map((_, index) => (
              <button
                key={index}
                onClick={() => setPhotoIndex(index)}
                className="flex size-6 items-center justify-center rounded-full"
                aria-label={`Foto ${index + 1}`}
              >
                <span
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === photoIndex ? "w-6 bg-primary-500" : "w-2 bg-accent-600 hover:bg-accent-500",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Tutup"
          >
            <X className="size-5" />
          </button>
          <div className="relative flex h-full max-h-[90vh] w-full items-center justify-center">
            <Image
              src={lightbox}
              alt="Testimoni"
              width={1080}
              height={1920}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
