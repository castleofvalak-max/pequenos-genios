'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Para qual idade o programa é indicado?", a: "É ideal para crianças em fase de alfabetização, entre 4 e 7 anos, que estão começando a reconhecer letras." },
  { q: "Os materiais são em PDF ou impressos?", a: "Você recebe todos os materiais em formato digital (PDF). São arquivos prontos para baixar e imprimir em casa ou na gráfica." },
  { q: "Como funciona o acesso?", a: "Após a confirmação do pagamento, você recebe um e-mail com o link da área do aluno, com acesso imediato e vitalício." },
  { q: "Posso imprimir quantas vezes quiser?", a: "Sim! Como o material é seu, você pode imprimir quantas vezes desejar, para usar em sala de aula ou em casa com seus filhos." },
  { q: "Em quanto tempo recebo o material?", a: "O acesso é imediato. Assim que seu pagamento for aprovado, você já pode baixar tudo." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="watercolor-card overflow-hidden transition-all duration-200 hover:shadow-md">
          <button 
            className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-display font-semibold text-lg text-slate-800 pr-4">{faq.q}</span>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-colors ${openIndex === index ? 'bg-accent text-white' : 'text-slate-600'}`}>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-white' : ''}`} />
            </div>
          </button>
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
