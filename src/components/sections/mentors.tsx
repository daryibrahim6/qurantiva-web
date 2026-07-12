import Image from "next/image";
import { Check } from "lucide-react";
import { MENTOR_QUALITIES } from "@/lib/constants";

const TUTOR_PHOTOS = [
  { src: "/assets/tutors/tutor-1.png", offset: "lg:mt-0" },
  { src: "/assets/tutors/tutor-2.png", offset: "lg:mt-12" },
  { src: "/assets/tutors/tutor-3.png", offset: "lg:mt-6" },
];

export function Mentors() {
  return (
    <section id="mentors" aria-labelledby="mentors-heading" className="bg-accent-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <h2 id="mentors-heading" className="text-3xl font-bold text-white sm:text-4xl">
              Siapa yang ngajarin kamu
            </h2>
            <p className="mt-3 max-w-2xl text-xl text-accent-300">
              Bukan sembarang guru ngaji. Setiap mentor Qurantiva lulus seleksi
              dari pesantren ternama, punya sanad, dan dilatih untuk mengajar
              online.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {MENTOR_QUALITIES.map((quality) => (
                <div
                  key={quality}
                  className="flex items-center gap-3 rounded-xl border border-accent-700 bg-accent-800 p-4"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-500">
                    <Check className="size-5 text-accent-900" />
                  </div>
                  <span className="text-base font-medium text-accent-100">
                    {quality}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {TUTOR_PHOTOS.map((photo, index) => (
              <div
                key={photo.src}
                className={`relative aspect-[3/4] overflow-hidden rounded-2xl border border-accent-700 ${photo.offset}`}
              >
                <Image
                  src={photo.src}
                  alt={`Pengajar Qurantiva ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
