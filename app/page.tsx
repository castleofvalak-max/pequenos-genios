import Image from 'next/image';
import { CheckCircle2, Gift, Star, ShieldCheck, BookOpen, PenTool, Library } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FAQ } from '@/components/FAQ';

const IMG_JOURNEY = "https://storage.googleapis.com/aistudio-chat-prod-c6328336-f13d-42bc-9d0d-ecf509e5b225/36e65b7f-b672-4d2c-8067-15cc9bfebc14/876c1a84-ce49-43c2-af30-22c608f1b637.jpeg";
const IMG_MOCKUP_1 = "https://storage.googleapis.com/aistudio-chat-prod-c6328336-f13d-42bc-9d0d-ecf509e5b225/55cde210-9069-4251-ab8a-1c0342cd2687/b.png";
const IMG_MOCKUP_2 = "https://storage.googleapis.com/aistudio-chat-prod-c6328336-f13d-42bc-9d0d-ecf509e5b225/b228b3a5-1160-4966-bfdc-1cd179c37222/a.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Seção 1: Cabeçalho (Hero Section) */}
      <section className="bg-[#D8C3E5] relative pt-12 pb-20 px-6 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Floating letters bg decoration */}
        <div className="absolute top-10 left-10 text-4xl font-display text-white opacity-40 animate-float pointer-events-none text-glow text-shadow-sm">A</div>
        <div className="absolute top-20 right-10 text-5xl font-display text-white opacity-40 animate-float-delayed pointer-events-none text-glow text-shadow-sm">B</div>
        <div className="absolute bottom-20 left-20 text-6xl font-display text-white opacity-30 animate-float pointer-events-none text-glow text-shadow-sm">C</div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <Reveal>
              <div className="inline-block badge-gold mb-4">Programa Completo</div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 uppercase text-glow">
                Descubra o Mundo da Leitura com o Pequenos Gênios™
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-slate-800 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
                Uma jornada lúdica e progressiva que transforma a curiosidade natural da criança em confiança para ler. Grandes descobertas começam com as primeiras letras.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <a href="#oferta" className="inline-block bg-[#F4A261] hover:bg-[#E76F51] text-white font-display font-bold text-lg md:text-xl px-8 py-5 rounded-full transition-all duration-300 animate-pulse-glow shadow-lg hover:-translate-y-1 w-full md:w-auto text-center">
                QUERO DESPERTAR O AMOR PELA LEITURA
              </a>
            </Reveal>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-xl">
            <Reveal delay={0.3}>
              <div className="relative w-full aspect-square">
                <Image src={IMG_MOCKUP_2} alt="Pequenos Gênios" fill className="object-contain drop-shadow-2xl" priority referrerPolicy="no-referrer" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Seção 2: O que é o programa (A Jornada) */}
      <section className="bg-[#D2E9F5] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase text-glow">Uma Jornada de Descobertas em 3 Missões</h2>
              <p className="text-lg text-slate-800 font-medium">
                A maioria dos materiais entrega apenas atividades soltas. O Pequenos Gênios™ organiza essas atividades em uma jornada lógica de aprendizagem. A criança não recebe apenas exercícios. Ela percorre um caminho.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Missão 1 - Descobrindo as Letras", desc: "Apresentar o universo da leitura.", includes: "📘 Cartilha de Alfabetização", val: "R$67", icon: <BookOpen className="w-10 h-10 text-white" /> },
              { title: "Missão 2 - Construindo Palavras", desc: "Letras se unem para formar sílabas.", includes: "📘 Caderno Silábico Simples + Complexo", val: "R$79", icon: <PenTool className="w-10 h-10 text-white" /> },
              { title: "Missão 3 - Explorando a Leitura", desc: "Colocar tudo em prática.", includes: "📘 Atividades Silábicas + Baú Mágico", val: "R$89", icon: <Library className="w-10 h-10 text-white" /> }
            ].map((missao, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="watercolor-card p-8 h-full flex flex-col group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4D03F] opacity-10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  <div className="w-16 h-16 bg-[#F4A261] rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:rotate-6 transition-transform z-10 relative">
                    {missao.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 relative z-10">{missao.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow relative z-10">{missao.desc}</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 relative z-10">
                    <p className="text-sm font-bold text-slate-800 mb-1">Inclui:</p>
                    <p className="text-sm text-slate-600">{missao.includes}</p>
                    <p className="text-xs font-bold text-[#E76F51] mt-2">Valor {missao.val}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3: Por que escolher o Pequenos Gênios™? */}
      <section className="bg-white bg-texture py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full order-2 lg:order-1">
            <Reveal>
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#9ED8C9]/30">
                <Image src={IMG_JOURNEY} alt="Jornada Pequenos Gênios" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </Reveal>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase">O Estímulo Certo Para o Primeiro Contato Com a Leitura</h2>
              <p className="text-lg text-slate-600 mb-10">
                Quando a curiosidade natural da criança encontra o estímulo certo, ela se transforma em aprendizagem. Economize horas de planejamento e veja seu filho desenvolver confiança.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Reconhecimento de letras", "Formação de sílabas", "Leitura de palavras", "Leitura de frases",
                "Contato com pequenos textos", "Ampliação do vocabulário", "Interesse pela leitura", "Confiança para participar das atividades"
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * (i % 4)}>
                  <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-6 h-6 text-[#9ED8C9] shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Bônus Exclusivos */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-16 uppercase">Baú Mágico da Leitura: Ferramentas Extras</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { title: "Painel Alfabeto Colorido", sub: "Apoio visual", val: "R$29" },
              { title: "Oficina das Palavras", sub: "Alfabeto Móvel", val: "R$39" },
              { title: "Mapa das Sílabas", sub: "Silabário Infantil", val: "R$35" },
              { title: "Guia dos Sons das Letras", sub: "Fonemas", val: "R$39" },
              { title: "Desafio da Consciência", sub: "Atividades extras", val: "R$38" }
            ].map((bonus, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="watercolor-card p-5 h-full flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#F4D03F]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#F4D03F]/40 transition-colors">
                    <Gift className="w-6 h-6 text-[#F4A261] transform group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-display font-bold text-slate-800 mb-1 leading-tight">{bonus.title}</h4>
                  <p className="text-xs text-slate-500 mb-3">{bonus.sub}</p>
                  <div className="mt-auto inline-block bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-500 line-through">
                    Valor {bonus.val}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5: Oferta Especial com Temporizador */}
      <section id="oferta" className="bg-[#F4D03F] py-20 px-6">
        <div className="max-w-4xl mx-auto watercolor-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D8C3E5] opacity-20 rounded-bl-full -mr-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9ED8C9] opacity-20 rounded-tr-full -ml-10 -mb-10 pointer-events-none"></div>
          
          <Reveal>
            <div className="text-center relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 uppercase">Oferta Especial: Acesso ao Programa Completo</h2>
              
              <div className="watercolor-card p-6 mb-8 text-left md:text-center max-w-2xl mx-auto">
                <div className="space-y-2 mb-6 text-center md:text-left">
                  <p className="text-slate-500 line-through decoration-red-400">Missão 1 + 2 + 3 (R$235,00)</p>
                  <p className="text-slate-500 line-through decoration-red-400">5 Bônus Exclusivos (R$180,00)</p>
                  <p className="text-slate-700 font-bold text-lg border-t border-slate-200 pt-3 mt-3">Valor Total: <span className="line-through text-red-400">R$415,00</span></p>
                </div>
                <div className="mb-4 text-center">
                  <p className="text-slate-600 font-medium mb-1 uppercase tracking-wide text-sm">Hoje você leva tudo por</p>
                  <p className="font-display text-5xl md:text-6xl font-black text-[#F4A261] text-glow">APENAS R$27,00</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#9ED8C9]" /><span className="text-sm font-bold text-slate-700">Pagamento único</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#9ED8C9]" /><span className="text-sm font-bold text-slate-700">Acesso imediato</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#9ED8C9]" /><span className="text-sm font-bold text-slate-700">Prontos para imprimir</span></div>
              </div>

              <a href="#" className="inline-block bg-[#9ED8C9] hover:bg-[#85c9b8] text-slate-900 font-display font-black text-xl md:text-2xl px-10 py-6 rounded-full transition-all duration-300 animate-pulse-glow-green shadow-xl hover:-translate-y-1 w-full md:w-auto uppercase tracking-wide">
                COMPRAR AGORA POR R$27
              </a>

              <CountdownTimer />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Seção 6: Prova Social - Carrossel */}
      <section className="bg-slate-50 py-20 px-0 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 uppercase">Veja Como É o Material Que Você Vai Receber</h2>
          </Reveal>
        </div>
        
        {/* Native scroll snap carousel */}
        <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-hide max-w-7xl mx-auto">
            {[IMG_MOCKUP_1, IMG_MOCKUP_2, IMG_MOCKUP_1, IMG_MOCKUP_2, IMG_JOURNEY].map((img, i) => (
                <div key={i} className="shrink-0 w-[80vw] md:w-[400px] snap-center">
                    <Reveal delay={i * 0.1}>
                        <div className="relative aspect-square w-full watercolor-card p-2 group">
                             <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <Image src={img} alt={`Preview ${i+1}`} fill className="object-contain transform group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                             </div>
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
      </section>

      {/* Seção 7: Depoimentos */}
      <section className="bg-[#D8C3E5] py-20 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-8 h-8 bg-white/40 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-[#F4D03F]/40 rounded-full blur-md"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase text-glow">O Que Estão Dizendo Sobre o Pequenos Gênios™</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mãe da Ana Clara", text: "Meu filho achava a leitura chata, mas com o Pequenos Gênios ele está descobrindo as palavras sozinho. Ele adora o dragãozinho!" },
              { name: "Professora Mariana", text: "Indiquei para minhas turmas do 1º ano. Os cadernos são organizados, as crianças se divertem e eu economizo muito tempo planejando." },
              { name: "Pedagoga Carla", text: "A jornada das 3 missões é o diferencial. As crianças sentem que estão evoluindo e isso alimenta a confiança delas." }
            ].map((dep, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="watercolor-card rounded-tl-sm p-8 relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -left-3 -top-3 w-12 h-12 bg-[#F4A261] rounded-full flex items-center justify-center text-white text-3xl font-display font-black shadow-lg">
                    &quot;
                  </div>
                  <div className="flex gap-1 mb-4 mt-2">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-[#F4D03F] text-[#F4D03F]" />)}
                  </div>
                  <p className="text-slate-700 font-medium mb-6 italic leading-relaxed">&quot;{dep.text}&quot;</p>
                  <p className="font-display font-bold text-slate-900">{dep.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 8: Garantia */}
      <section className="bg-[#E8F8F5] py-20 px-6 border-y border-[#9ED8C9]/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          <Reveal>
            <div className="w-32 h-32 shrink-0 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#F4D03F] mx-auto md:mx-0 relative">
              <div className="absolute inset-0 bg-[#F4D03F] opacity-20 rounded-full animate-ping"></div>
              <ShieldCheck className="w-16 h-16 text-[#9ED8C9] relative z-10" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4 uppercase">Sua Compra É 100% Segura. Garantia Incondicional de 7 Dias.</h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                Você tem 7 dias para conhecer todos os materiais. Se o programa não atender às suas expectativas ou houver qualquer problema técnico com os arquivos, basta solicitar o reembolso dentro do prazo. Sua compra é totalmente segura.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Seção 9: FAQ */}
      <section className="bg-white bg-texture py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 uppercase">Dúvidas Frequentes</h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
             <FAQ />
          </Reveal>
        </div>
      </section>

      {/* Seção 10: Rodapé */}
      <footer className="bg-[#2C3E50] py-12 px-6 text-center text-slate-400">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-3xl font-bold text-white mb-6 opacity-40">Pequenos Gênios™</p>
          <p className="mb-6 text-sm">© 2026 Coleção Pequenos Gênios™. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
