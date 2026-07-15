"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  faqsLeft: FAQItem[];
  faqsRight: FAQItem[];
  className?: string;
}

export function FAQSection({
  title = "FAQ",
  subtitle = "Pertanyaan yang sering ditanyakan",
  description = "Semua yang perlu Anda ketahui tentang Qurantiva, dari sistem pembelajaran hingga metode dan durasi.",
  faqsLeft,
  faqsRight,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("w-full max-w-5xl mx-auto py-16 px-4", className)}>
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-medium tracking-wide text-primary-900">
          {subtitle}
        </p>
        <h2 className="mb-3 text-3xl font-bold text-accent-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-accent-600">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
        {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
          <Accordion
            key={columnIndex}
            type="single"
            collapsible
            className="space-y-0"
          >
            {faqColumn.map((faq, i) => (
              <AccordionItem key={i} value={`item-${columnIndex}-${i}`}>
                <AccordionTrigger className="text-base font-semibold text-accent-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="whitespace-pre-line text-base leading-relaxed text-accent-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
