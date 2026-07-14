import { FAQS } from "@/lib/constants";
import { FAQWithSpiral, type FaqSectionItem } from "@/components/ui/faq-section";

const items: FaqSectionItem[] = FAQS.map((faq, index) => ({
  id: `faq-${index}`,
  question: faq.question,
  answer: faq.answer,
}));

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="sr-only">FAQ</h2>
        <FAQWithSpiral items={items} searchPlaceholder="Cari pertanyaan..." />
      </div>
    </section>
  );
}
