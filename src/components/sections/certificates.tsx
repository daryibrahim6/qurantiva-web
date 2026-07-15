import { Award, Building2, GraduationCap, Star } from "lucide-react";
import { CERTIFICATES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS = [Award, Building2, GraduationCap, Star];
const CARD_SPANS = [
  "sm:col-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
];

export function Certificates() {
  return (
    <section id="certificates" aria-labelledby="certificates-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 id="certificates-heading" className="text-3xl font-bold text-accent-900 sm:text-4xl">
            Sertifikasi &amp; almamater pengajar
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-accent-600">
            Pesantren dan sertifikat yang dimiliki pengajar Qurantiva.
          </p>
        </div>

        <div className="grid auto-rows-[15rem] grid-cols-1 gap-4 sm:grid-cols-3">
          {CERTIFICATES.map((cert, index) => {
            const Icon = ICONS[index] ?? Award;
            return (
              <div
                key={cert.title}
                className={cn(
                  "group relative flex flex-col justify-between rounded-2xl border border-accent-100 bg-cream p-6 transition-all duration-300",
                  "hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5",
                  CARD_SPANS[index],
                )}
              >
                <div className="pointer-events-none z-10 flex flex-col gap-1">
                  <Icon className="size-9 text-primary-800 transition-all duration-300 group-hover:scale-90" />
                  <h3 className="mt-2 text-lg font-bold text-accent-900">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-accent-600">
                    {cert.desc}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-primary-500/[.03]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
