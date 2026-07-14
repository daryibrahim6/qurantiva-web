import { BookOpen } from "lucide-react";
import { METHODS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Methods() {
  return (
    <section id="methods" aria-labelledby="methods-heading" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 id="methods-heading" className="text-3xl font-bold text-accent-900 sm:text-4xl">
            Metode yang dipakai
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-accent-600">
            Kenapa kami memilih Metode Ummi dan apa yang membuatnya efektif.
          </p>
        </div>

        <div className="grid auto-rows-[16rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Hero card: Metode Ummi */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-accent-950 p-7 sm:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary-500">
                <BookOpen className="size-6 text-accent-900" />
              </div>
              <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-semibold text-primary-400">
                Ummi Foundation
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                Metode Ummi
              </h3>
              <p className="mt-2 max-w-md text-base leading-relaxed text-accent-300">
                Metode terstandar yang dipakai Qurantiva secara penuh. Berfokus
                pada pendekatan ramah, tartil, dan menyenangkan untuk segala usia.
              </p>
            </div>
          </div>

          {/* Point cards */}
          {METHODS.map((method, index) => (
            <div
              key={method.name}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-accent-100 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5",
                index === 4 && "sm:col-span-3",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold tabular-nums text-primary-400 transition-colors group-hover:text-primary-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-12 bg-accent-200" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-accent-900">
                {method.name}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-accent-600">
                {method.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
