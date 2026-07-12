import { ClipboardList, UserCheck, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Daftar",
    desc: "Isi form pendaftaran di halaman daftar. Pilih paket yang mau kamu coba.",
    benefits: [
      "Form cuma 2 menit",
      "Pilih paket sesuai kebutuhan",
      "Bayar setelah cocok",
    ],
  },
  {
    icon: UserCheck,
    title: "Pilih mentor",
    desc: "Tim kami match kamu dengan mentor yang cocok. Bisa request ganti kalau gak cocok.",
    benefits: [
      "Mentor sesuai level kamu",
      "Bisa ganti kapan saja",
      "Seleksi dari pesantren ternama",
    ],
  },
  {
    icon: BookOpen,
    title: "Mulai ngaji",
    desc: "Jadwalkan sesi pertama via Zoom atau WhatsApp Call. Selesai. Tinggal ngaji.",
    benefits: [
      "Jadwal fleksibel",
      "Via Zoom atau WhatsApp",
      "Langsung 1-on-1",
    ],
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2
            id="how-heading"
            className="text-3xl font-bold text-accent-900 sm:text-4xl"
          >
            Cara mulai
          </h2>
          <p className="mt-3 text-lg text-accent-600">
            Tiga langkah. Dari daftar sampai ngaji pertama, cuma butuh hari yang sama.
          </p>
        </div>

        <div className="relative mx-auto mb-8 w-full max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-accent-200"
          />
          <div className="relative grid grid-cols-3">
            {STEPS.map((_, index) => (
              <div
                key={index}
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-primary-500 font-semibold text-accent-900 ring-4 ring-white"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={cn(
                  "rounded-2xl border border-accent-100 bg-cream p-6 transition-all duration-300",
                  "hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5",
                )}
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary-50">
                  <Icon className="size-6 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-accent-900">
                  {step.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-accent-600">
                  {step.desc}
                </p>
                <ul className="space-y-3">
                  {step.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary-500/20">
                        <div className="size-2 rounded-full bg-primary-500" />
                      </div>
                      <span className="text-base text-accent-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
