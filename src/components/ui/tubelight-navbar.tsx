"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function TubelightNavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const clickedRef = useRef(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      if (observer) observer.disconnect();

      const sections = items
        .map((item) => document.querySelector(item.url.replace(/^\//, "")))
        .filter(Boolean) as HTMLElement[];

      if (sections.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          if (clickedRef.current) return;

          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible[0]) {
            const id = visible[0].target.getAttribute("id");
            const match = items.find((item) => item.url.replace(/^\//, "") === `#${id}`);
            if (match) setActiveTab(match.name);
          }
        },
        {
          rootMargin: "-40% 0px -50% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      );

      sections.forEach((s) => observer!.observe(s));
    };

    setupObserver();

    const mutationObserver = new MutationObserver(() => setupObserver());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer?.disconnect();
    };
  }, [items]);

  const handleClick = (name: string, url: string) => {
    setActiveTab(name);
    clickedRef.current = true;
    setTimeout(() => {
      clickedRef.current = false;
    }, 1000);

    const id = url.replace(/^\//, "");
    if (id.startsWith("#")) {
      const el = document.querySelector(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Mobile: Dock-style */}
      <div
        className={cn(
          "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden",
          className,
        )}
      >
        <div className="flex items-center gap-1 rounded-2xl border border-accent-200/60 bg-white/95 p-2 shadow-lg shadow-accent-900/10">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => handleClick(item.name, item.url)}
                aria-label={item.name}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "relative flex items-center justify-center rounded-xl p-2.5 transition-colors",
                    isActive
                      ? "bg-primary-100 text-primary-700"
                      : "text-accent-600 hover:bg-accent-50 hover:text-primary-600",
                  )}
                >
                  <Icon size={22} strokeWidth={2.5} />
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-500" />
                  )}
                </motion.div>
                <span
                  className={cn(
                    "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-accent-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100",
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Desktop: Tubelight */}
      <div
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden sm:block",
          className,
        )}
      >
        <div className="flex items-center gap-1.5 rounded-full border border-accent-200/60 bg-white/90 p-1.5 shadow-lg shadow-accent-900/10">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => handleClick(item.name, item.url)}
                aria-label={item.name}
                className={cn(
                  "relative cursor-pointer text-base font-semibold px-5 py-2.5 rounded-full transition-colors",
                  "text-accent-600 hover:text-primary-600",
                  isActive && "text-primary-700",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={20} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary-100/80" />
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full bg-primary-500">
                      <div className="absolute w-12 h-6 rounded-full bg-primary-400/30 blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 rounded-full bg-primary-400/30 blur-md -top-1" />
                      <div className="absolute w-4 h-4 rounded-full bg-primary-400/30 blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
