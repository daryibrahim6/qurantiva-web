import { Check, X } from "lucide-react";
import { COMPARISON } from "@/lib/constants";

export function Comparison() {
  return (
    <section id="comparison" aria-labelledby="comparison-heading" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 id="comparison-heading" className="text-3xl font-bold text-accent-900 sm:text-4xl">
            Bandingkan program
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-accent-600">
            Lihat apa yang kamu dapat di Qurantiva dibanding belajar mandiri.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-accent-100 bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-accent-100 bg-cream">
                <th className="px-4 py-4 text-left text-base font-bold text-accent-900">
                  Fitur
                </th>
                {COMPARISON.programs.map((prog) => (
                  <th
                    key={prog.name}
                    className="px-4 py-4 text-center text-base font-bold text-accent-900 whitespace-nowrap"
                  >
                    {prog.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.features.map((feature, fi) => (
                <tr
                  key={feature}
                  className="border-b border-accent-50 last:border-0 transition-colors hover:bg-primary-50/50"
                >
                  <td className="px-4 py-3 text-base text-accent-700">
                    {feature}
                  </td>
                  {COMPARISON.programs.map((prog) => (
                    <td
                      key={prog.name}
                      className="px-4 py-3 text-center"
                    >
                      {prog.values[fi] ? (
                        <Check className="mx-auto size-5 text-primary-600" />
                      ) : (
                        <X className="mx-auto size-5 text-accent-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
