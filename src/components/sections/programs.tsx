import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const PROGRAM_POSTERS = [
  "/assets/programs/private.png",
  "/assets/programs/starter.png",
  "/assets/programs/berkelompok.png",
];

export function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 id="programs-heading" className="text-3xl font-bold text-accent-900 sm:text-4xl">
            Pilih program
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-accent-600">
            Tiga pilihan. Mulai dari Rp 25.000 sampai privat intensif.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, index) => (
            <div
              key={program.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-accent-100 bg-white transition-all duration-300 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={PROGRAM_POSTERS[index]}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge
                  variant={program.badge === "Populer" ? "accent" : "default"}
                  className="mb-4 self-start"
                >
                  {program.badge}
                </Badge>
                <h3 className="mb-3 text-xl font-bold text-accent-900">
                  {program.title}
                </h3>
                <p className="mb-6 flex-1 text-base leading-relaxed text-accent-600">
                  {program.desc}
                </p>
                <Link
                  href="/daftar"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
                >
                  Pelajari lebih lanjut
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
