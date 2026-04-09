"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { faqs, type FAQItem } from "@/data/faqs";

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-outline-variant/30 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-headline text-xl md:text-2xl text-primary group-hover:text-secondary transition-colors duration-500">
          {item.question}
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-outline/60 group-hover:text-secondary transition-all duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-7 pr-8 text-base md:text-lg leading-relaxed text-on-surface-variant font-light">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useInView();

  return (
    <section id="faq" className="py-32 lg:py-40 bg-surface">
      <div ref={ref} className="mx-auto max-w-4xl px-6 sm:px-8">
        <div
          className={`mb-20 lg:mb-24 space-y-6 fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary font-light leading-[0.95] tracking-tight">
            Answers, <br />
            <span className="italic">before you ask.</span>
          </h2>
        </div>

        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
