"use client";

import { useState, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Sparkles, BookOpen, Tag, Users, HelpCircle } from "lucide-react";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Beranda", url: "/#hero", icon: Home },
  { name: "Keunggulan", url: "/#features", icon: Sparkles },
  { name: "Program", url: "/#programs", icon: BookOpen },
  { name: "Paket", url: "/#pricing", icon: Tag },
  { name: "Mentor", url: "/#mentors", icon: Users },
  { name: "FAQ", url: "/#faq", icon: HelpCircle },
];

const DARK_SELECTORS = ["#hero", "#rating", "#mentors", "#community", "#cta", "footer"];

export function Navbar() {
  const [overDark, setOverDark] = useState(true);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const els = DARK_SELECTORS
      .map((s) => document.querySelector(s))
      .filter(Boolean) as HTMLElement[];

    const check = () => {
      const y = 50;
      setOverDark(els.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= y && r.bottom > y;
      }));
      setReady(true);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <>
      <div className={cn(
        "fixed left-12 top-[28px] z-50 hidden sm:block transition-opacity duration-300",
        ready ? "opacity-100" : "opacity-0",
      )}>
        <Link href="/" className="relative block h-9 w-[190px] overflow-hidden">
          <Image
            src="/assets/logo/logo-nav-lb.png"
            alt="Qurantiva"
            fill
            sizes="100vw"
            className={cn(
              "object-cover object-left scale-[1.04] origin-left",
              overDark ? "opacity-100" : "opacity-0",
            )}
            priority
          />
          <Image
            src="/assets/logo/logo-nav-dark.png"
            alt="Qurantiva"
            fill
            sizes="100vw"
            className={cn(
              "object-cover object-left scale-105 origin-left",
              overDark ? "opacity-0" : "opacity-100",
            )}
            priority
          />
        </Link>
      </div>

      <div className="fixed right-12 top-6 z-50 hidden sm:block">
        <Link
          href="/daftar"
          className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-accent-900 shadow-lg shadow-primary-500/20 transition-all duration-300 hover:bg-primary-400"
        >
          Daftar
        </Link>
      </div>

      <TubelightNavBar items={NAV_ITEMS} />
    </>
  );
}
