import { ClipboardList, MessageSquare, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Isi Formulir",
    desc: "Isi formulir pendaftaran singkat di halaman website. Pilih program dan paket kelas yang ingin Anda ambil.",
    benefits: [
      "Formulir cepat hanya 2 menit",
      "Pilih paket sesuai kebutuhan Anda",
    ],
  },
  {
    icon: MessageSquare,
    title: "Konfirmasi & Bayar via WA",
    desc: "Setelah isi form, Anda akan langsung terhubung ke WhatsApp Admin untuk menyepakati jadwal tetap, menentukan gender tutor, dan menyelesaikan pembayaran.",
    benefits: [
      "Konfirmasi jadwal fleksibel langsung di WA",
      "Pembayaran aman via transfer/Qris",
      "Garansi kecocokan gender tutor",
    ],
  },
  {
    icon: BookOpen,
    title: "Placement Test & Mulai Ngaji",
    desc: "Setelah pembayaran dikonfirmasi, Anda akan melakukan placement test (tes kemampuan) sesuai opsi yang Anda pilih. Selanjutnya, pengajar khusus Anda akan menghubungi via WA untuk mengirim akses kelas dan mulai mengaji!",
    benefits: [
      "Placement test setelah bayar untuk pemetaan materi",
      "Dihubungi langsung oleh pengajar via WA",
      "Belajar interaktif via Zoom atau Google Meet",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="relative mx-auto mb-8 w-full max-w-7xl">
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

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={cn(
                  "rounded-2xl border border-accent-100 bg-cream p-7 transition-all duration-300",
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
