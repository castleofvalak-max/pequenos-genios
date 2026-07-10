'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Perguntas frequentes — textos do novo_copy_pequeno_genios.md, Seção 10
const faqs = [
  {
    q: "Para qual idade é indicado?",
    a: "4 a 7 anos, fase de alfabetização inicial."
  },
  {
    q: "Como recebo o material?",
    a: "Link de acesso imediato por e-mail."
  },
  {
    q: "Posso imprimir mais de uma vez?",
    a: "Sim, arquivo vitalício e ilimitado."
  },
  {
    q: "Vale para professoras?",
    a: "Sim, material pronto para aulas de reforço."
  },
  {
    q: "Como funciona o reembolso?",
    a: "7 dias de garantia, só pedir o dinheiro de volta."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`faq-item ${openIndex === i ? 'open' : ''}`}
          id={`faq-item-${i}`}
        >
          <button
            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span className="font-display font-bold text-slate-800 text-base leading-snug">
              {faq.q}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#D8C3E5] flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#F4A261]' : ''}`}
            />
          </button>
          <div
            id={`faq-answer-${i}`}
            className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48' : 'max-h-0'}`}
            role="region"
            aria-labelledby={`faq-item-${i}`}
          >
            <p className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
