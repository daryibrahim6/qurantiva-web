import { FAQS } from "@/lib/constants";
import { FaqPro, type FaqProItem } from "@/components/ui/faq-pro";

const items: FaqProItem[] = FAQS.map((faq, index) => ({
  id: `faq-${index}`,
  question: faq.question,
  answer: faq.answer,
}));

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 id="faq-heading" className="text-3xl font-bold text-accent-900 sm:text-4xl">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-accent-600">
            Pertanyaan yang sering ditanyakan tentang Qurantiva.
          </p>
        </div>

        <FaqPro items={items} defaultOpenFirst searchPlaceholder="Cari pertanyaan..." />
      </div>
    </section>
  );
}
