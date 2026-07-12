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
            Lima metode terstandar. Mentor akan menyesuaikan dengan level
            kemampuanmu.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {METHODS.map((method, index) => (
            <div
              key={method.name}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-accent-100 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5",
                index === 4 && "sm:col-span-2 lg:col-span-1",
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
