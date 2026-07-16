"use client";

import {
  UserCheck,
  RefreshCw,
  CalendarClock,
  BookOpen,
  ChartLine,
  Users,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  UserCheck,
  RefreshCw,
  CalendarClock,
  BookOpen,
  ChartLine,
  Users,
};

export function Features() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleUnmute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    setMuted(false);
  };

  return (
    <section id="features" aria-labelledby="features-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 id="features-heading" className="text-3xl font-bold text-accent-900 sm:text-4xl">
            Apa yang kamu dapat
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-accent-600">
            Semua yang kamu butuh buat belajar Al-Qur&apos;an dengan nyaman dan terstruktur.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
          {/* Bento grid - left */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {FEATURES.map((feature, index) => {
              const Icon = ICONS[feature.icon] ?? UserCheck;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "group relative flex flex-col justify-between rounded-2xl border border-accent-100 bg-cream p-5 transition-all duration-300",
                    "hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5",
                    index === 0 && "sm:col-span-2",
                    index === 5 && "xl:col-span-3",
                  )}
                >
                  <div className="pointer-events-none z-10 flex flex-col gap-1">
                    <Icon className="size-9 text-primary-800 transition-all duration-300 group-hover:scale-90" />
                    <h3 className="mt-2 text-lg font-bold text-accent-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-accent-600">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-primary-500/[.03]" />
                </div>
              );
            })}
          </div>

          {/* Video - right, sticky */}
          <div className="hidden xl:block">
            <div className="sticky top-28 overflow-hidden rounded-2xl bg-accent-950">
              <video
                ref={videoRef}
                autoPlay
                muted
                controls
                playsInline
                className="mx-auto w-full"
              >
                <source src="/assets/videos/slogan.mp4" type="video/mp4" />
              </video>
              {muted && (
                <button
                  onClick={handleUnmute}
                  className="absolute inset-0 flex items-center justify-center bg-accent-950/40 backdrop-blur-sm transition-opacity hover:bg-accent-950/30"
                  aria-label="Aktifkan suara"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary-500 text-accent-900 shadow-lg">
                      <VolumeX className="size-6" />
                    </div>
                    <span className="text-base font-semibold text-white">Klik untuk suara</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
