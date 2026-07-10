import Image from 'next/image';
import {
  CheckCircle2, Gift, Star, ShieldCheck,
  Sparkles, Rocket, MapPin, Lock, Zap
} from 'lucide-react';
import { Reveal } from '@/estrutura-2/components/Reveal';
import { CountdownTimer } from '@/estrutura-2/components/CountdownTimer';
import { FAQ } from '@/estrutura-2/components/FAQ';
import { StickyCTA } from '@/estrutura-2/components/StickyCTA';
import { AutoCarousel } from '@/estrutura-2/components/AutoCarousel';

// ============================================================
// IMAGENS — Todas locais e em WebP para máxima performance
// ============================================================
const IMG_HERO = "/imgs/hero.webp";
const IMG_JORNADA = "/imgs/jornada.webp";
const IMG_MATERIAIS = "/imgs/materiais.webp";

// ============================================================
// DADOS ESTÁTICOS
// ============================================================
const MISSOES = [
  {
    num: "1",
    emoji: "🗺️",
    title: "Descobrindo as Letras",
    subtitle: "O Primeiro Mapa do Tesouro",
    desc: "Aqui começa a aventura. A criança conhece cada letra, descobre padrões e constrói familiaridade com o mundo da escrita, como um explorador que aprende a ler as estrelas.",
    includes: ["📘 Cartilha de Alfabetização"],
    val: "R$67",
    color: "#D8C3E5",
    bg: "bg-[#D8C3E5]/20",
    border: "border-[#D8C3E5]",
  },
  {
    num: "2",
    emoji: "⚡",
    title: "Construindo Palavras",
    subtitle: "O Poder das Sílabas",
    desc: "As letras ganham vida! Agora a criança descobre como elas se unem, formam sílabas e geram palavras. Cada nova combinação é como abrir um novo portal de descoberta.",
    includes: ["📘 Caderno Silábico Simples", "📘 Caderno Silábico Complexo"],
    val: "R$79",
    color: "#9ED8C9",
    bg: "bg-[#9ED8C9]/20",
    border: "border-[#9ED8C9]",
  },
  {
    num: "3",
    emoji: "✨",
    title: "Explorando a Leitura",
    subtitle: "A Primeira Leitura Independente",
    desc: "Chegou o momento mágico: a criança lê sozinha. Palavras, frases, pequenas histórias. O dragão amigo está do lado e o orgulho daquele sorriso é o melhor presente.",
    includes: ["📘 Caderno de Atividades Silábicas", "🪄 Baú Mágico da Leitura Infantil"],
    val: "R$89",
    color: "#F4A261",
    bg: "bg-[#F4A261]/20",
    border: "border-[#F4A261]",
  },
];

// Bônus — textos do novo_copy_pequeno_genios.md, Seção 5
const BONUS = [
  {
    emoji: "🎁",
    title: "Painel Alfabeto",
    desc: "Apoio visual para reforçar letras.",
    val: "R$29",
  },
  {
    emoji: "🎁",
    title: "Oficina das Palavras",
    desc: "Alfabeto móvel para montar palavras.",
    val: "R$39",
  },
  {
    emoji: "🎁",
    title: "Mapa das Sílabas",
    desc: "Consulta rápida para as atividades.",
    val: "R$35",
  },
  {
    emoji: "🎁",
    title: "Guia dos Sons",
    desc: "Associação visual entre letra e som.",
    val: "R$39",
  },
  {
    emoji: "🎁",
    title: "Desafio Silábico",
    desc: "Atividades extras de consciência de palavras.",
    val: "R$39",
  },
];

// Benefícios — textos do novo_copy_pequeno_genios.md, Seção 4
const BENEFICIOS = [
  { icon: "📘", label: "Jornada Organizada", micro: "3 missões prontas para aplicar." },
  { icon: "🧩", label: "Descoberta Lúdica", micro: "A criança nem vê que está estudando." },
  { icon: "🚀", label: "Progresso Visível", micro: "Da letra à frase em poucas semanas." },
  { icon: "⏱️", label: "Economia de Tempo", micro: "Materiais selecionados, sem pesquisa infinita." },
  { icon: "🐉", label: "Confiança Plena", micro: "Pequenas conquistas geram autoestima." },
];

// Depoimentos — textos do novo_copy_pequeno_genios.md, Seção 8
const DEPOIMENTOS = [
  {
    name: "Ana",
    role: "Mãe",
    text: "Meu filho pede para ler! Descobri que ele só precisava de incentivos certos.",
    stars: 5,
    initial: "A",
    color: "#D8C3E5",
    photo: "https://i.pravatar.cc/96?img=47",
  },
  {
    name: "Professora Mariana",
    role: "Professora",
    text: "A evolução é nítida. O material organizado salvou meu planejamento.",
    stars: 5,
    initial: "M",
    color: "#9ED8C9",
    photo: "https://i.pravatar.cc/96?img=44",
  },
  {
    name: "Pedagoga Carla",
    role: "Psicopedagoga Clínica",
    text: "Transforma a alfabetização. A jornada lógica faz toda a diferença.",
    stars: 5,
    initial: "C",
    color: "#F4A261",
    photo: "https://i.pravatar.cc/96?img=32",
  },
];

// ============================================================
// PAGE COMPONENT
// ============================================================
export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* ---- STICKY CTA MOBILE ---- */}
      <StickyCTA />

      {/* ======================================================
          TOP RIBBON — Urgência
      ====================================================== */}
      <div className="top-ribbon" role="alert" id="top-ribbon">
        ✨ LANÇAMENTO · Valor de R$415 em materiais · Hoje por apenas{' '}
        <strong>R$27,00</strong> · Acesso imediato após a compra
      </div>

      {/* ======================================================
          SEÇÃO 1 — HERO
          Fonte: novo_copy_pequeno_genios.md, Seção 1
      ====================================================== */}
      <section
        className="bg-[#D8C3E5] relative pt-14 pb-24 px-6 lg:pt-24 lg:pb-36 overflow-hidden magic-bg"
        id="hero"
      >
        {/* Letras flutuantes decorativas */}
        {['A', 'B', 'C', 'D', 'E'].map((l, i) => (
          <div
            key={l}
            className={`absolute font-display font-black text-white/30 pointer-events-none select-none text-glow text-shadow-sm ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
              }`}
            style={{
              fontSize: `${3 + (i * 0.7)}rem`,
              top: `${10 + i * 15}%`,
              left: i < 3 ? `${5 + i * 5}%` : undefined,
              right: i >= 3 ? `${5 + (i - 3) * 8}%` : undefined,
            }}
          >
            {l}
          </div>
        ))}

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ---- Badges ---- */}
          <Reveal>
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-5">
              <span className="badge-gold">✦ Programa de Alfabetização</span>
              <span className="badge-urgent">🔥 Oferta de Lançamento</span>
            </div>
          </Reveal>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Coluna de Texto */}
            <div className="flex-1 text-center lg:text-left">
              <Reveal>
                {/* Título — novo_copy Seção 1 */}
                <h1
                  className="hero-headline font-display font-black text-slate-900 mb-5 text-glow"
                  style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
                >
                  Chega de Frustração! A melhor frase que seu filho vai dizer:<br />
                  <span className="shimmer-text-hero">&ldquo;Mãe, consegui ler sozinho!&rdquo;</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                {/* Subtítulo — novo_copy Seção 1 */}
                <p className="text-lg md:text-xl text-slate-800 mb-4 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Descubra a jornada que transforma o medo da leitura em descoberta.
                </p>
              </Reveal>

              {/* Imagem — visível SOMENTE no mobile, aparece ANTES do botão */}
              <div className="block lg:hidden mb-6">
                <Reveal delay={0.15}>
                  <div className="relative w-full max-w-sm mx-auto">
                    <div className="absolute -inset-4 bg-white/40 rounded-3xl blur-xl"></div>
                    <Image
                      src={IMG_HERO}
                      alt="Coleção Pequenos Gênios — todos os materiais da jornada de alfabetização"
                      width={500}
                      height={500}
                      sizes="(max-width: 640px) 90vw, 500px"
                      className="relative object-contain drop-shadow-2xl w-full rounded-3xl"
                      priority
                    />
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.35}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-5">
                  <a
                    href="#oferta"
                    className="inline-flex items-center justify-center gap-2 bg-[#F4A261] hover:bg-[#E76F51] text-white font-display font-black text-lg px-8 py-5 rounded-full transition-all duration-300 animate-pulse-glow shadow-xl hover:-translate-y-1"
                    id="hero-cta-btn"
                  >
                    <Rocket className="w-5 h-5" />
                    {/* CTA — novo_copy Seção 1 */}
                    CHEGA DE FRUSTRAÇÃO!
                  </a>
                </div>

                <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-slate-700 font-medium">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Acesso imediato</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Pagamento único</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Garantia 7 dias</span>
                </div>
              </Reveal>
            </div>

            {/* Coluna da Imagem — visível SOMENTE no desktop */}
            <div className="hidden lg:block flex-1 w-full max-w-lg lg:max-w-xl">
              <Reveal delay={0.25}>
                <div className="relative w-full">
                  <div className="absolute -inset-4 bg-white/40 rounded-3xl blur-xl"></div>
                  <Image
                    src={IMG_HERO}
                    alt="Coleção Pequenos Gênios — todos os materiais da jornada de alfabetização"
                    width={600}
                    height={600}
                    sizes="(max-width: 1024px) 90vw, 50vw"
                    className="relative object-contain drop-shadow-2xl w-full rounded-3xl animate-float-reverse"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 2 — IDENTIFICAÇÃO DA DOR (lista de frases-choque)
          Fonte: novo_copy_pequeno_genios.md, Seção 2
      ====================================================== */}
      <section className="bg-white py-16 px-6" id="dor">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Você está cansado de tentar e não ver resultado?
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { emoji: "⚠️", text: "Seu filho trava na leitura e você não sabe como ajudar." },
              { emoji: "⚠️", text: "Você gasta horas pesquisando atividades soltas no Google e no Pinterest." },
              { emoji: "⚠️", text: "A escola cobra resultado, mas a criança não avança." },
              { emoji: "⚠️", text: "As férias chegam e o aprendizado regride por causa do celular." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="pain-card flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                  <p className="text-slate-700 font-medium leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 3 — SOLUÇÃO
          Fonte: novo_copy_pequeno_genios.md, Seção 3
      ====================================================== */}
      <section className="bg-[#D2E9F5] py-20 px-6 magic-bg" id="jornada">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-6">
              <div className="inline-flex items-center gap-2 badge-gold mb-4">
                <MapPin className="w-4 h-4" /> Mapa da Jornada
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-glow">
                O segredo não é a repetição, é a associação lúdica.
              </h2>
              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                Alfabetizar não precisa ser um campo de batalha. Quando a criança vê a leitura como uma aventura, ela mesma pede para ler.
                <br /><br />
                É assim que o <strong>Pequenos Gênios™</strong> funciona.
              </p>
              <p className="text-lg text-slate-800 font-bold mt-4">
                Pequenos Gênios™ é o atalho para uma alfabetização sem lágrimas.
              </p>
            </div>
          </Reveal>

          {/* Imagem do mapa */}
          <Reveal delay={0.1}>
            <div className="relative max-w-2xl mx-auto mb-14">
              <div className="absolute -inset-6 bg-white/50 rounded-[40px] blur-2xl"></div>
              <Image
                src={IMG_JORNADA}
                alt="Jornada mágica do Pequenos Gênios — Descobrindo as Letras, Construindo Palavras, Explorando a Leitura"
                width={600}
                height={750}
                sizes="(max-width: 768px) 90vw, 40vw"
                className="relative object-contain drop-shadow-xl w-full rounded-3xl"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Cards das Missões */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {MISSOES.map((missao, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className={`mission-card bg-white h-full flex flex-col`}>
                  <div
                    className="p-6 flex items-center gap-4"
                    style={{ background: `${missao.color}30` }}
                  >
                    <div
                      className="mission-number font-display"
                      style={{ background: missao.color, color: '#2C3E50' }}
                    >
                      {missao.num}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Missão {missao.num}
                      </p>
                      <h3 className="font-display text-xl font-black text-slate-900 leading-tight">
                        {missao.title}
                      </h3>
                      <p className="text-sm italic" style={{ color: missao.color.replace('/20', '') }}>
                        {missao.emoji} {missao.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                      {missao.desc}
                    </p>

                    <div className={`rounded-2xl p-4 border-2 ${missao.border} ${missao.bg}`}>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">
                        📦 Você recebe:
                      </p>
                      <ul className="space-y-1">
                        {missao.includes.map((item, j) => (
                          <li key={j} className="text-sm font-bold text-slate-800 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-xs text-slate-500">Valor</span>
                        <span className="font-display font-black text-[#E76F51] text-lg line-through opacity-70">
                          {missao.val}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 4 — BENEFÍCIOS (ícone + microtexto)
          Fonte: novo_copy_pequeno_genios.md, Seção 4
      ====================================================== */}
      <section className="bg-white bg-texture py-20 px-6" id="habilidades">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Coluna esquerda — Materiais */}
          <div className="flex-1 w-full order-2 lg:order-1 max-w-lg">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#D2E9F5]/60 rounded-[40px] blur-xl"></div>
                <Image
                  src={IMG_MATERIAIS}
                  alt="Materiais da Coleção Pequenos Gênios dispostos em mesa infantil"
                  width={520}
                  height={520}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="relative object-contain drop-shadow-xl w-full rounded-3xl"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Coluna direita — Benefícios */}
          <div className="flex-1 order-1 lg:order-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 badge-gold mb-4">
                <Sparkles className="w-4 h-4" /> O Que Está Incluso
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Todo o material que você precisa{' '}
                <span className="shimmer-text">em um só lugar.</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BENEFICIOS.map((item, i) => (
                <Reveal key={i} delay={0.08 * (i % 4)}>
                  <div className="flex items-start gap-3 bg-slate-50 hover:bg-[#D2E9F5]/40 rounded-xl p-4 border border-slate-100 hover:border-[#9ED8C9]/50 transition-all duration-200 group">
                    <span className="text-2xl group-hover:animate-sparkle flex-shrink-0">{item.icon}</span>
                    <div>
                      <span className="text-slate-800 font-bold leading-snug block">{item.label}</span>
                      <span className="text-slate-500 text-sm leading-snug">{item.micro}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 5 — BÔNUS
          Fonte: novo_copy_pequeno_genios.md, Seção 5
      ====================================================== */}
      <section className="bg-[#FFFBF0] py-20 px-6" id="bonus">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 badge-gold mb-4">
                <Gift className="w-4 h-4" /> Bônus Especiais
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                🪄 5 ferramentas extras para acelerar o resultado.
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Porque toda grande descoberta merece instrumentos à altura.
                Esses bônus chegam junto com o programa, <strong>de presente, sem custo extra.</strong>
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {BONUS.map((bonus, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bonus-card flex flex-col h-full">
                  <div className="bg-[#F4D03F]/10 p-5 text-center border-b border-[#F4D03F]/30">
                    <span className="text-5xl block mb-3 animate-sparkle">{bonus.emoji}</span>
                    <h4 className="font-display font-black text-slate-900 text-lg leading-tight">
                      🎁 {bonus.title}
                    </h4>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-4">
                      {bonus.desc}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Valor</span>
                      <span className="font-display font-black text-slate-400 line-through">
                        {bonus.val}
                      </span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="inline-block bg-green-50 text-green-700 text-xs font-black px-3 py-1 rounded-full border border-green-200">
                        ✅ Incluso no programa
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 7 — CARROSSEL DE EXEMPLOS (Movido para antes da oferta)
      ====================================================== */}
      <section className="bg-slate-50 py-16 px-2 sm:px-6 border-y border-slate-100" id="preview">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Veja na prática o que você vai receber.
              </h2>
              <p className="text-slate-600 text-lg">
                Materiais lindos, organizados e prontos para imprimir, do jeito que crianças adoram.
              </p>
            </Reveal>
          </div>
          <AutoCarousel />
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 6 — OFERTA COM TEMPORIZADOR
          Fonte: novo_copy_pequeno_genios.md, Seção 6
      ====================================================== */}
      <section id="oferta" className="bg-[#2C3E50] py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 magic-bg opacity-30 pointer-events-none"></div>
        {['✦', '★', '✦', '★'].map((s, i) => (
          <div
            key={i}
            className="absolute text-[#F4D03F]/20 text-4xl font-bold animate-float pointer-events-none"
            style={{ top: `${20 + i * 20}%`, left: i < 2 ? `${3 + i * 5}%` : undefined, right: i >= 2 ? `${3 + (i - 2) * 5}%` : undefined }}
          >
            {s}
          </div>
        ))}

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 badge-urgent mb-4 text-base px-5 py-2">
                ⏳ Oferta expira em 15 minutos
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-3 text-glow">
                Escolha a oferta ideal para seu filho.
              </h2>
              <p className="text-slate-400 text-lg">Em 15 minutos, a oferta completa volta ao preço cheio.</p>
            </div>
          </Reveal>

          {/* ---- GRID DE 2 OFERTAS ---- */}
          <Reveal delay={0.1}>
            <div className="offer-cards-grid">

              {/* ---- CARD 1 — Oferta Básica — R$10 ---- */}
              <div className="offer-card-basic p-6 md:p-8">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">CARD 1 – Oferta Básica</p>
                <h3 className="font-display text-2xl font-black text-slate-900 mb-1">📘 Missão 1: Descobrindo as Letras</h3>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">📦 Inclui:</p>
                  <div className="value-stack-item main">
                    <span className="font-semibold text-slate-700 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Acesso à Cartilha de Alfabetização
                    </span>
                  </div>
                  <div className="value-stack-item main">
                    <span className="font-semibold text-slate-700 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Atividades para reconhecimento de letras
                    </span>
                  </div>
                  <div className="border-t border-dashed border-slate-200 pt-3 mt-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Valor total</span>
                    <span className="font-display font-black text-slate-400 line-through">R$67</span>
                  </div>
                </div>

                <div className="text-center mb-5">
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Hoje por apenas</p>
                  <div className="font-display font-black text-4xl text-slate-700">R$10,00</div>
                  <p className="text-slate-400 text-xs mt-1">Pagamento único · Acesso imediato</p>
                </div>

                <a
                  href="https://paygenios.laboratorioia.shop/checkout/v5/UCX9hNH4EPEZaCiZ5I1t"
                  className="block text-center bg-[#D8C3E5] hover:bg-[#c4a8d8] text-slate-900 font-display font-black text-base py-4 px-6 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                  id="basic-offer-btn"
                >
                  Quero só a Missão 1
                </a>
                <p className="text-center text-slate-400 text-xs mt-3">
                  🔒 Pagamento seguro
                </p>
              </div>

              {/* ---- CARD 2 — Oferta Completa — R$27 ---- */}
              <div className="offer-card-full p-6 md:p-8 mt-6 md:mt-0">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2 mt-2">
                  Oferta Completa
                </p>
                <h3 className="font-display text-xl font-black text-slate-900 mb-4">🚀 Pacote Pequenos Gênios™</h3>

                {/* ---- Empilhamento de Valor — Missões ---- */}
                <div className="space-y-2 mb-3">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">
                    📦 Programa principal:
                  </p>
                  {[
                    { label: "⭐ Missão 1 — Descobrindo as Letras", val: "R$67", type: "main" },
                    { label: "⭐ Missão 2 — Construindo Palavras", val: "R$79", type: "main" },
                    { label: "⭐ Missão 3 — Explorando a Leitura", val: "R$89", type: "main" },
                  ].map((item, i) => (
                    <div key={i} className={`value-stack-item ${item.type}`}>
                      <span className="font-semibold text-slate-700 text-sm">{item.label}</span>
                      <span className="font-black text-slate-500 text-sm line-through flex-shrink-0">{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* ---- Empilhamento de Valor — Bônus ---- */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-black uppercase tracking-widest text-[#E76F51] mb-3 pt-3 border-t border-dashed border-slate-200">
                    🎁 Bônus exclusivos:
                  </p>
                  {[
                    { label: "🎁 Painel Alfabeto", val: "R$29", type: "bonus" },
                    { label: "🎁 Oficina das Palavras", val: "R$39", type: "bonus" },
                    { label: "🎁 Mapa das Sílabas", val: "R$35", type: "bonus" },
                    { label: "🎁 Guia dos Sons", val: "R$39", type: "bonus" },
                    { label: "🎁 Desafio Silábico", val: "R$39", type: "bonus" },
                  ].map((item, i) => (
                    <div key={i} className={`value-stack-item ${item.type}`}>
                      <span className="font-semibold text-slate-700 text-sm">{item.label}</span>
                      <span className="font-black text-slate-500 text-sm line-through flex-shrink-0">{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* ---- Total ---- */}
                <div className="border-t-2 border-dashed border-slate-200 my-4 pt-4 flex items-center justify-between px-4">
                  <span className="font-bold text-slate-600">Valor total:</span>
                  <span className="font-display font-black text-slate-400 text-xl line-through">R$415,00</span>
                </div>

                {/* Destaque do Preço */}
                <div className="text-center bg-gradient-to-br from-[#F4D03F]/20 to-[#9ED8C9]/20 rounded-2xl p-5 border-2 border-[#F4D03F]/40 mb-6">
                  <p className="text-slate-600 font-bold uppercase tracking-widest text-sm mb-2">
                    🎯 Hoje você leva TUDO{' '}<br />por apenas
                  </p>
                  <div className="price-anchor-total font-display mb-1">
                    R$27,00
                  </div>
                  <p className="text-slate-500 text-sm">
                    Ou parcelado em até 6x no cartão<br />Acesso imediato
                  </p>
                </div>

                {/* Mini benefícios */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: <Zap className="w-4 h-4" />, label: "Acesso imediato" },
                    { icon: <Lock className="w-4 h-4" />, label: "Pgto. seguro" },
                    { icon: <ShieldCheck className="w-4 h-4" />, label: "Garantia 7 dias" },
                  ].map((b, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-[#9ED8C9]">{b.icon}</div>
                      <span className="text-xs font-bold text-slate-600">{b.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Principal */}
                <a
                  href="https://paygenios.laboratorioia.shop/checkout/v5/5uZ4g4wmKRO2zfFuUQcz"
                  className="cta-primary animate-pulse-glow-green"
                  id="main-cta-btn"
                >
                  ✨ Sim! Quero Despertar o Gênio Leitor do Meu Filho
                </a>

                <p className="text-center text-slate-500 text-sm mt-4">
                  🔒 Pagamento seguro via Pix, cartão ou boleto
                </p>

                <CountdownTimer />
              </div>

            </div>
          </Reveal>
        </div>
      </section>


      {/* ======================================================
          SEÇÃO 8 — DEPOIMENTOS
          Fonte: novo_copy_pequeno_genios.md, Seção 8
      ====================================================== */}
      <section className="bg-[#D8C3E5] py-20 px-6 relative overflow-hidden" id="depoimentos">
        <div className="absolute top-10 right-20 w-24 h-24 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#F4D03F]/30 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-glow mb-3">
                A confiança que você esperava ver.
              </h2>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#F4D03F] text-[#F4D03F]" />
                ))}
                <span className="text-white font-bold ml-2">5.0 — Centenas de famílias</span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPOIMENTOS.map((dep, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="testimonial-card h-full flex flex-col">
                  <div
                    className="absolute -left-3 -top-3 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-display font-black shadow-lg"
                    style={{ background: dep.color }}
                  >
                    &ldquo;
                  </div>

                  <div className="flex gap-1 mb-4 mt-2">
                    {[...Array(dep.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#F4D03F] text-[#F4D03F]" />
                    ))}
                  </div>

                  <p className="text-slate-700 font-medium italic leading-relaxed flex-grow mb-6">
                    &ldquo;{dep.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                    <Image
                      src={dep.photo}
                      alt={`Foto de ${dep.name}`}
                      width={48}
                      height={48}
                      className="testimonial-photo"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-display font-bold text-slate-900 text-sm">{dep.name}</p>
                      <p className="text-xs text-slate-500">{dep.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 9 — GARANTIA
          Fonte: novo_copy_pequeno_genios.md, Seção 9
      ====================================================== */}
      <section className="bg-[#E8F8F5] py-20 px-6 border-y border-[#9ED8C9]/30" id="garantia">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          <Reveal>
            <div className="guarantee-seal mx-auto md:mx-0 flex-shrink-0">
              <ShieldCheck className="w-14 h-14 text-[#9ED8C9] mb-1 relative z-10" />
              <p className="font-display font-black text-slate-800 text-xs leading-tight relative z-10">7 DIAS</p>
              <p className="font-display font-bold text-slate-600 text-xs relative z-10">GARANTIA</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Sem riscos. Sem surpresas.
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Teste o Pequenos Gênios™ por 7 dias.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Se não atender suas expectativas, devolvemos <strong>100% do seu dinheiro</strong> sem burocracia.
                Garantia de 7 dias incondicional.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 10 — PERGUNTAS FREQUENTES
          Fonte: novo_copy_pequeno_genios.md, Seção 10
      ====================================================== */}
      <section className="bg-white bg-texture py-20 px-6" id="faq">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Tire suas dúvidas. 💬
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FAQ />
          </Reveal>

          <Reveal delay={0.3}>
            <div className="text-center mt-14">
              <p className="text-slate-600 mb-6 text-lg">
                Ainda tem dúvidas? Fale com a gente antes de comprar. 👇
              </p>
              <a
                href="https://paygenios.laboratorioia.shop/checkout/v5/5uZ4g4wmKRO2zfFuUQcz"
                className="inline-flex items-center gap-3 bg-[#F4A261] hover:bg-[#E76F51] text-white font-display font-black text-xl px-10 py-5 rounded-full transition-all duration-300 animate-pulse-glow shadow-xl hover:-translate-y-1"
                id="faq-cta-btn"
              >
                <Sparkles className="w-6 h-6" />
                Quero Começar a Jornada Agora — R$27
              </a>
              <p className="text-slate-400 text-sm mt-3">
                Acesso imediato · Garantia de 7 dias · Pagamento único
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 11 — FOOTER
          Fonte: novo_copy_pequeno_genios.md, Seção 11
      ====================================================== */}
      <footer className="bg-[#2C3E50] py-14 px-6 text-center text-slate-400">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-4xl font-black text-white mb-2 opacity-80">
            Pequenos Gênios™
          </p>
          <p className="italic text-[#F4D03F]/70 text-sm mb-8">
            &ldquo;Grandes descobertas começam com as primeiras letras.&rdquo;
          </p>
          <div className="divider-stars">
            <span>✦</span><span>✦</span><span>✦</span>
          </div>
          <p className="text-sm mt-6 mb-4">
            © 2026 Coleção Pequenos Gênios™. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm flex-wrap">
            <a href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="/suporte" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
