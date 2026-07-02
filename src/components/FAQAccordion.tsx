"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-blush-200 rounded-soft border border-blush-200 bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-body text-sm font-semibold text-brown-800">{item.question}</span>
              <ChevronDown className={`h-4 w-4 shrink-0 text-gold-500 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <p className="px-5 pb-4 font-body text-sm leading-relaxed text-brown-600">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
