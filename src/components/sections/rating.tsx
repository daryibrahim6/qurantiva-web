"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { TestimonialsCarousel, type Testimonial } from "@/components/ui/testimonials-carousel";
import { cn } from "@/lib/utils";

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Kak Gia",
    role: "Kelas Starter",
    content:
      "Testimoni ikut kelas starter di Qurantiva seru, merasa dirangkul dan penilaiannya bukan judge dengan ekspresi negatif tapi riil dinilai sesuai dengan standar yang telah ditentukan. Pokoknya seru dan jadi paham sejauh mana tingkat bacaan Qur'an-ku. Sharing ilmunya asyik banget nggak yang kaku, jadi penasaran belajar di Qurantiva selanjutnya...",
    rating: 5,
  },
  {
    id: 2,
    name: "Kak Anggra",
    role: "Kelas Privat 1-on-1",
    content:
      "Alhamdulillah, selama ngaji di Qurantiva saya merasa sangat terbantu dalam proses belajar Al-Qur'an. Awalnya masih ada beberapa bacaan yang kurang tepat dan kadang masih ragu, tapi setelah belajar di sini Alhamdulillah saya jadi lebih paham dan lebih aware sama bacaan sendiri, terutama dari segi tajwid dan makhraj. Tutornya juga masyaAllah baik, sabar, dan enak banget diajak belajar. Kalau ada yang salah, langsung dikoreksi dan dijelasin sampai paham, jadi nggak takut buat salah atau bertanya. Menurut saya, pembelajarannya seru dan nggak monoton, tambah ada komentar yang harus dihafal tapi pakai nada, jadinya proses belajar terasa lebih nyaman dan seru. Saya merasa termotivasi untuk terus memperbaiki bacaan dan mendekatkan diri kepada Al-Qur'an. Pokoknya, pengalaman ngaji di Qurantiva sejauh ini sangat berkesan dan bermanfaat banget bagi saya. Jazakumullahu khairan katsiran untuk Kakak tutor dan seluruh tim Qurantiva yang sudah berkerjasama, bilkhusus Kak Childani dan Kak Shahifah. Semoga Qurantiva semakin berkembang dan bisa membantu lebih banyak orang untuk belajar Al-Qur'an.",
    rating: 5,
  },
  {
    id: 3,
    name: "Kak Zahra",
    role: "Kelas Privat 1-on-1",
    content:
      "Saya baru 2 kali pertemuan, tapi sejauh ini pembelajaran sangat seru dan sangat mudah untuk dipahami, selain itu pengajarnya yaitu Kak Childa juga asik sehingga penyampaian materinya dapat diterima dengan baik.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kak Nita",
    role: "Kelas Privat 1-on-1",
    content:
      "Alhamdulillah saya bisa terbantu banget bisa membaca dan mengucapkan dengan cara yang benar. Cara penyampaian tutor sangat suka dan sabar banget. Masuk banget sama saya yang harus telaten karena saya pelupa dan lelet. Metodenya mudah dipahami dan terarah. Alhamdulillah saya bisa ketemu dengan Qurantiva.",
    rating: 5,
  },
];

const PROGRAM_PHOTOS = [
  "/assets/testimonials/program-1.webp",
  "/assets/testimonials/program-2.webp",
  "/assets/testimonials/program-3.webp",
  "/assets/testimonials/program-4.webp",
  "/assets/testimonials/program-5.webp",
];

const WA_SCREENSHOTS = [
  "/assets/testimonials/wa-1.webp",
  "/assets/testimonials/wa-2.webp",
  "/assets/testimonials/wa-3.webp",
  "/assets/testimonials/wa-4.webp",
  "/assets/testimonials/wa-5.webp",
];

export function Rating() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [waIndex, setWaIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const photoCount = PROGRAM_PHOTOS.length;
  const waCount = WA_SCREENSHOTS.length;
  const waVisible = 4;
  const waMaxIndex = Math.max(0, waCount - waVisible);

  const goPhotoPrev = useCallback(() => setPhotoIndex((p) => (p - 1 + photoCount) % photoCount), [photoCount]);
  const goPhotoNext = useCallback(() => setPhotoIndex((p) => (p + 1) % photoCount), [photoCount]);
  const goWaPrev = useCallback(() => setWaIndex((p) => Math.max(0, p - 1)), []);
  const goWaNext = useCallback(() => setWaIndex((p) => Math.min(waMaxIndex, p + 1)), [waMaxIndex]);

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
    <TestimonialsCarousel
      testimonials={TESTIMONIALS}
      subtitle="Dengar langsung dari santri dan orang tua santri Qurantiva."
    >
      {/* Foto saat program — landscape slider */}
      <div className="mt-16">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Foto saat program</h3>
            <p className="mt-2 max-w-3xl text-accent-300">
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

      {/* Testimoni WhatsApp — thumbnail strip with slider */}
      <div className="mt-16">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Testimoni via WhatsApp</h3>
            <p className="mt-2 max-w-3xl text-accent-300">
              Tangkapan layar percakapan langsung dari santri dan orang tua santri.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={goWaPrev}
              disabled={waIndex === 0}
              className="flex size-9 items-center justify-center rounded-full border border-accent-700 text-accent-300 transition-colors hover:bg-accent-800 disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={goWaNext}
              disabled={waIndex >= waMaxIndex}
              className="flex size-9 items-center justify-center rounded-full border border-accent-700 text-accent-300 transition-colors hover:bg-accent-800 disabled:opacity-30 disabled:hover:bg-transparent"
              aria-label="Berikutnya"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${waIndex * (100 / waVisible)}%)` }}
          >
            {WA_SCREENSHOTS.map((src, index) => (
              <button
                key={src}
                onClick={() => setLightbox(src)}
                className="group relative aspect-[9/16] w-full shrink-0 overflow-hidden rounded-xl border border-accent-700 bg-accent-900"
                style={{ width: `calc(${100 / waVisible}% - ${(waVisible - 1) * 4 / waVisible}px)` }}
              >
                <Image
                  src={src}
                  alt={`Testimoni WhatsApp ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="25vw"
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
              height={1080}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </TestimonialsCarousel>
  );
}
