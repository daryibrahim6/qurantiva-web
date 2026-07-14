import { FAQS } from "@/lib/constants";
import { FAQSection } from "@/components/ui/faq-section";

const mid = Math.ceil(FAQS.length / 2);
const faqsLeft = FAQS.slice(0, mid).map((f) => ({ question: f.question, answer: f.answer }));
const faqsRight = FAQS.slice(mid).map((f) => ({ question: f.question, answer: f.answer }));

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-cream py-20 lg:py-28">
      <h2 id="faq-heading" className="sr-only">FAQ</h2>
      <FAQSection faqsLeft={faqsLeft} faqsRight={faqsRight} />
    </section>
  );
}
