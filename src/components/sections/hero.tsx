"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useEffect, useState } from "react";

const Particles = dynamic(
  () => import("@/components/ui/particles").then((m) => m.Particles),
  { ssr: false },
);

export function Hero() {
  const [showParticles, setShowParticles] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setShowParticles(true); }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-accent-950"
    >
      {showParticles && (
        <Particles
          color="#fbbf24"
          particleCount={8000}
          particleSize={20}
          animate={false}
          className="z-0"
        />
      )}

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-accent-950/40 via-accent-950/30 to-accent-950/80" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-32 lg:pb-0">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h1
              id="hero-heading"
              className="text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            >
              Ngaji
              <br />
              <span className="text-primary-500">Anywhere</span>
              <span className="text-accent-300">,</span>{" "}
              <span className="text-primary-500">Anytime</span>
              <span className="text-accent-300">,</span>{" "}
              <span className="text-primary-500 font-serif">Anyone</span>
              <span className="text-accent-300">.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-accent-200 sm:text-xl">
              Platform pendidikan Al-Qur&apos;an daring dengan metode privat
              1-on-1 yang adaptif. Dipandu mentor hafidz bersertifikat, jadwal
              fleksibel, dan tanpa rasa minder.
            </p>

            <div className="mt-8">
              <ShimmerButton href="/daftar">
                Coba kelas starter
                <ArrowRight className="size-5" />
              </ShimmerButton>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <p className="text-3xl font-bold text-primary-500 sm:text-4xl">Ummi</p>
                <p className="mt-1 text-sm text-accent-300">Metode Ngaji</p>
              </div>
              <div className="h-12 w-px bg-accent-700" />
              <div className="flex flex-col">
                <p className="text-3xl font-bold text-primary-500 sm:text-4xl">1-on-1</p>
                <p className="mt-1 text-sm text-accent-300">Privat Eksklusif</p>
              </div>
              <div className="h-12 w-px bg-accent-700" />
              <div className="flex flex-col">
                <p className="text-3xl font-bold text-primary-500 sm:text-4xl">Rp 25rb</p>
                <p className="mt-1 text-sm text-accent-300">Kelas Starter</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative ml-auto flex h-full w-full max-w-3xl items-start justify-center overflow-hidden rounded-3xl bg-white/5 ring-1 ring-inset ring-white/10">
              <Image
                src="/assets/hero/mentor.webp"
                alt="Mentor pengajar Al-Qur'an Qurantiva"
                width={1080}
                height={1350}
                priority
                className="h-[115%] w-auto -mt-[20%] object-contain"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
