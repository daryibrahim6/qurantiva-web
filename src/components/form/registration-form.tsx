"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PEKERJAAN_OPTIONS, PAKET_OPTIONS, CONTACTS } from "@/lib/constants";
import { buildWaLink } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const schema = z.object({
  nama: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  whatsapp: z
    .string()
    .min(8, "Nomor WhatsApp tidak valid")
    .regex(/^[0-9+\-\s]+$/, "Format nomor tidak valid"),
  tanggalLahir: z.string().min(1, "Tanggal lahir wajib diisi"),
  pekerjaan: z.string().min(1, "Pekerjaan wajib dipilih"),
  asalKota: z.string().min(2, "Asal kota wajib diisi"),
  paket: z.string().min(1, "Paket wajib dipilih"),
  persetujuan: z
    .boolean()
    .refine((v) => v === true, "Anda harus menyetujui kebijakan privasi"),
});

type FormData = z.infer<typeof schema>;

export function RegistrationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const paketParam = searchParams.get("paket");
    if (paketParam) {
      const matched = PAKET_OPTIONS.find((p) =>
        p.toLowerCase().includes(paketParam.toLowerCase()),
      );
      if (matched) {
        setValue("paket", matched);
      }
    }
  }, [searchParams, setValue]);

  const pekerjaanSelectOptions = PEKERJAAN_OPTIONS.map((p) => ({
    value: p,
    label: p,
  }));
  const paketSelectOptions = PAKET_OPTIONS.map((p) => ({
    value: p,
    label: p,
  }));

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Gagal mengirim data");
      }

      const waMessage = `Assalamu'alaikum Admin. Saya mau konfirmasi pemesanan paket mengaji yang baru saja saya pilih. Mohon panduan untuk metode pembayaran dan konfirmasi jadwal belajarnya ya. Terima kasih.

Nama: ${data.nama}
WhatsApp: ${data.whatsapp}
Paket: ${data.paket}`;

      const waLink = buildWaLink(CONTACTS.waPrimary, waMessage);
      window.open(waLink, "_blank");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Terjadi kesalahan",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
          <CheckCircle2 className="size-8 text-primary-800" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-accent-900">
          Pendaftaran Berhasil!
        </h3>
        <p className="mb-6 max-w-md text-accent-700">
          Data Anda telah terkirim. Kami juga telah membuka WhatsApp untuk
          konfirmasi pendaftaran. Jika WhatsApp tidak terbuka otomatis, silakan
          hubungi kami langsung.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="outline"
        >
          Daftar Lagi
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input
        id="nama"
        label="Nama Lengkap"
        placeholder="Contoh: Ahmad Fauzi"
        error={errors.nama?.message}
        {...register("nama")}
      />

      <Input
        id="whatsapp"
        label="Nomor WhatsApp/HP"
        type="tel"
        placeholder="Contoh: 08123456789"
        error={errors.whatsapp?.message}
        {...register("whatsapp")}
      />

      <Input
        id="tanggalLahir"
        label="Tanggal Lahir"
        type="date"
        error={errors.tanggalLahir?.message}
        {...register("tanggalLahir")}
      />

      <Select
        id="pekerjaan"
        label="Pekerjaan"
        options={pekerjaanSelectOptions}
        error={errors.pekerjaan?.message}
        {...register("pekerjaan")}
      />

      <Input
        id="asalKota"
        label="Asal Kota"
        placeholder="Contoh: Jakarta Selatan"
        error={errors.asalKota?.message}
        {...register("asalKota")}
      />

      <Select
        id="paket"
        label="Paket Pilihan"
        options={paketSelectOptions}
        error={errors.paket?.message}
        {...register("paket")}
      />

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm text-accent-700">
          <input
            type="checkbox"
            {...register("persetujuan")}
            className="mt-1 size-4 rounded border-accent-300 text-primary-600 focus:ring-primary-500"
          />
          <span>
            Saya menyetujui kebijakan privasi Qurantiva dan data saya akan
            digunakan untuk proses pendaftaran.
          </span>
        </label>
        {errors.persetujuan && (
          <p className="text-sm text-red-500">
            {errors.persetujuan.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          <AlertCircle className="size-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        size="lg"
        className="w-full"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Mengirim...
          </>
        ) : (
          "Kirim Pendaftaran"
        )}
      </Button>

      <p className="text-center text-xs text-accent-400">
        Dengan klik tombol di atas, data Anda akan dikirim ke email kami dan
        WhatsApp Qurantiva.
      </p>
    </form>
  );
}
