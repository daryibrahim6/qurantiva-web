import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { RegistrationForm } from "@/components/form/registration-form";

export const metadata: Metadata = {
  title: "Pendaftaran - Qurantiva",
  description:
    "Daftar sekarang di Qurantiva. Isi form pendaftaran dan mulai belajar ngaji online privat 1-on-1 bersama mentor terkurasi.",
  alternates: {
    canonical: "https://qurantiva.id/daftar",
  },
};

export default function DaftarPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col bg-white">
        <div className="mx-auto w-full max-w-2xl px-4 pt-28 pb-12 sm:px-6 lg:pt-32 lg:pb-20">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
          >
            <ArrowLeft className="size-4" />
            Kembali ke Beranda
          </Link>

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-accent-900 sm:text-4xl">
              Form Pendaftaran
            </h1>
            <p className="mt-3 text-accent-700">
              Isi data berikut dengan lengkap dan benar. Tim kami akan
              menghubungi Anda via WhatsApp untuk konfirmasi.
            </p>
          </div>

          <div className="rounded-2xl border border-accent-100 bg-white p-6 shadow-sm sm:p-8">
            <Suspense fallback={<div className="py-8 text-center text-primary-600">Memuat form...</div>}>
              <RegistrationForm />
            </Suspense>
          </div>

          <div className="mt-8 rounded-2xl border border-accent-100 bg-primary-50/50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Shield className="size-5 text-primary-600" />
              <h2 className="text-lg font-bold text-accent-900">
                Kebijakan Privasi Qurantiva
              </h2>
            </div>
            <p className="mb-3 text-sm text-accent-700">
              Di Qurantiva, kami sangat menghargai kepercayaan Anda. Kami
              berkomitmen untuk melindungi privasi dan data pribadi setiap
              santri.
            </p>
            <div className="flex flex-col gap-2 text-sm text-accent-700">
              <p>
                <strong>Informasi yang Kami Kumpulkan:</strong> Nama Lengkap,
                Nomor WhatsApp/HP, Tanggal Lahir, Pekerjaan, Asal Kota.
              </p>
              <p>
                <strong>Penggunaan Informasi:</strong> Data digunakan untuk
                proses follow-up, pendataan santri, dan optimasi layanan.
              </p>
              <p>
                <strong>Perlindungan Data:</strong> Kami tidak pernah menjual,
                menyewakan, atau membocorkan data pribadi santri kepada pihak
                ketiga.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
