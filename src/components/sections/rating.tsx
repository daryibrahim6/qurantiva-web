"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialsCarousel, type Testimonial } from "@/components/ui/testimonials-carousel";
import { cn } from "@/lib/utils";

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Santri Qurantiva",
    role: "Kelas Privat 1-on-1",
    content:
      "Anak saya jadi lebih semangat ngaji. Mentornya sabar banget dan bisa menyesuaikan tempo belajar.",
    rating: 5,
  },
  {
    id: 2,
    name: "Orang Tua Santri",
    role: "Kelas Starter",
    content:
      "Awalnya cuma coba kelas starter Rp 25rb, sekarang anak saya langsung lanjut paket bulanan. Worth it banget.",
    rating: 5,
  },
  {
    id: 3,
    name: "Santri Dewasa",
    role: "Kelas Berkelompok",
    content:
      "Jadwal fleksibelnya bener-bener membantu. Saya kerja full-time tapi tetap bisa ngaji tiap minggu.",
    rating: 5,
  },
];

const TESTIMONI_IMAGES = [
  "/assets/testimonials/screenshot-1.png",
  "/assets/testimonials/screenshot-2.png",
  "/assets/testimonials/screenshot-3.png",
  "/assets/testimonials/screenshot-4.png",
  "/assets/testimonials/screenshot-5.png",
];

export function Rating() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONI_IMAGES.length;

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  return (
    <>
      <TestimonialsCarousel
        testimonials={TESTIMONIALS}
        subtitle="Dengar langsung dari santri dan orang tua santri Qurantiva."
      />

      <section id="rating-gallery" className="bg-accent-950 pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-base font-semibold text-accent-400">
              Tangkapan layar percakapan WhatsApp
            </p>
            <div className="flex gap-2">
              <button
                onClick={goPrev}
                className="flex size-9 items-center justify-center rounded-full border border-accent-700 text-accent-300 transition-colors hover:bg-accent-800"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={goNext}
                className="flex size-9 items-center justify-center rounded-full border border-accent-700 text-accent-300 transition-colors hover:bg-accent-800"
                aria-label="Berikutnya"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-accent-700 bg-accent-900">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONI_IMAGES.map((src, index) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-[480px] w-full shrink-0 sm:h-[560px]"
                >
                  <Image
                    src={src}
                    alt={`Testimoni santri Qurantiva ${index + 1}`}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="100vw"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {TESTIMONI_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "w-6 bg-primary-500"
                    : "w-2 bg-accent-600 hover:bg-accent-500",
                )}
                aria-label={`Testimoni ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
