import {
  Users,
  Gift,
  BookOpen,
  Eye,
  Tag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { COMMUNITY } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Users,
  Gift,
  BookOpen,
  Eye,
  Tag,
  Sparkles,
};

export function Community() {
  return (
    <section id="community" aria-labelledby="community-heading" className="bg-accent-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="community-heading" className="text-3xl font-bold text-white sm:text-4xl">
          Qurantiva Circle
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-accent-300">
          Komunitas untuk yang pernah belajar di Qurantiva. Tempat berkembang
          bareng, bukan tempat pamer.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITY.map((item) => {
            const Icon = ICONS[item.icon] ?? Users;
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-accent-700 bg-accent-900 p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-800">
                  <Icon className="size-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-accent-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
