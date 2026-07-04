'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Para qual faixa etária o Pequenos Gênios™ é indicado?",
    a: "O programa foi pensado para crianças em fase de alfabetização, geralmente entre 4 e 7 anos — do Jardim ao 2º ano do Ensino Fundamental. Também é excelente para crianças mais velhas que precisam de reforço na leitura."
  },
  {
    q: "O material é físico ou digital?",
    a: "Todos os materiais são entregues em formato digital (PDF de alta qualidade). Você baixa, imprime em casa ou na gráfica e usa quantas vezes quiser. Uma compra, impressões ilimitadas!"
  },
  {
    q: "Como funciona o acesso após a compra?",
    a: "O acesso é imediato! Assim que o pagamento for confirmado, você recebe um e-mail com o link para a área do aluno. De lá, você baixa todos os arquivos das 3 Missões e os 4 Bônus de uma vez."
  },
  {
    q: "Posso usar na minha sala de aula com vários alunos?",
    a: "Sim, sem restrições! O arquivo é seu. Professoras e pedagogas podem imprimir para toda a turma, quantas vezes precisarem, durante todo o ano letivo."
  },
  {
    q: "Não tenho experiência em alfabetização. Vou conseguir usar?",
    a: "Totalmente! O Pequenos Gênios™ foi criado justamente para guiar quem não sabe por onde começar. A Jornada das 3 Missões tem uma sequência lógica: você só segue o caminho e a criança vai progredindo naturalmente."
  },
  {
    q: "Qual é a garantia?",
    a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo — seja técnico ou pessoal — o programa não atender às suas expectativas, basta enviar um e-mail e devolvemos 100% do valor. Sem perguntas, sem burocracia."
  },
  {
    q: "Como é feito o pagamento?",
    a: "Você pode pagar via Pix (aprovação instantânea), cartão de crédito (em até 12x) ou boleto bancário. Tudo processado com segurança pela plataforma Hotmart/Kiwify."
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
