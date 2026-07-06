import Image from 'next/image';
import {
  CheckCircle2, Gift, Star, ShieldCheck,
  BookOpen, PenTool, Library, Sparkles, Rocket,
  MapPin, Lock, Zap, Heart, Users
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FAQ } from '@/components/FAQ';
import { StickyCTA } from '@/components/StickyCTA';
import { AutoCarousel } from '@/components/AutoCarousel';

// ============================================================
// IMAGENS
// ============================================================
// Hero — substituída por Imgur
const IMG_HERO = "https://i.imgur.com/FDAToie.jpeg";
const IMG_JORNADA = "/imgs/Girl_and_dragon_reading_book_202607032022.jpeg";
const IMG_MATERIAIS = "/imgs/Children's_desk_with_educational\u2026_2K_202607031849.jpeg";

// ============================================================
// DADOS ESTÁTICOS
// ============================================================
const MISSOES = [
  {
    num: "1",
    emoji: "🗺️",
    title: "Descobrindo as Letras",
    subtitle: "O primeiro mapa do tesouro",
    desc: "Aqui começa a aventura. A criança conhece cada letra, descobre padrões e constrói familiaridade com o mundo da escrita — como um explorador que aprende a ler as estrelas.",
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
    subtitle: "O poder das sílabas",
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
    subtitle: "A primeira leitura independente",
    desc: "Chegou o momento mágico: a criança lê sozinha. Palavras, frases, pequenas histórias. O dragão amigo está do lado e o orgulho daquele sorriso é o melhor presente.",
    includes: ["📘 Caderno de Atividades Silábicas", "🪄 Baú Mágico da Leitura Infantil"],
    val: "R$89",
    color: "#F4A261",
    bg: "bg-[#F4A261]/20",
    border: "border-[#F4A261]",
  },
];

const BONUS = [
  {
    emoji: "🎨",
    title: "Painel Alfabeto Colorido",
    desc: "Um mural mágico para reforçar o reconhecimento das letras no dia a dia, na parede do quarto ou da sala de aula.",
    val: "R$29",
  },
  {
    emoji: "🧩",
    title: "Oficina das Palavras",
    desc: "Alfabeto Móvel para montar, desmontar e criar novas combinações. Aprender brincando, como deve ser!",
    val: "R$39",
  },
  {
    emoji: "🎮",
    title: "Jogo da Memória do Alfabeto",
    desc: "A referência visual que transforma o treino das letras numa brincadeira inesquecível. Toda família vai querer jogar!",
    val: "R$35",
  },
  {
    emoji: "🔊",
    title: "Guia dos Sons das Letras",
    desc: "O Silabário e seus Fonemas: o mapa que conecta cada letra ao seu som. Essencial para o domínio da leitura.",
    val: "R$39",
  },
];

const HABILIDADES = [
  { icon: "🔤", label: "Reconhecimento de letras" },
  { icon: "🧱", label: "Formação de sílabas" },
  { icon: "📖", label: "Leitura de palavras" },
  { icon: "💬", label: "Leitura de frases completas" },
  { icon: "📚", label: "Contato com pequenos textos" },
  { icon: "🗣️", label: "Ampliação do vocabulário" },
  { icon: "❤️", label: "Interesse genuíno pela leitura" },
  { icon: "🌟", label: "Confiança para participar" },
];

const DEPOIMENTOS = [
  {
    name: "Adriana S.",
    role: "Mãe da Ana Clara, 5 anos",
    text: "Minha filha achava as letras chatas. Depois da Missão 1, ela ficou pedindo para fazer mais. Chorei quando ela leu a primeira palavra sozinha.",
    stars: 5,
    initial: "A",
    color: "#D8C3E5",
    photo: "https://i.pravatar.cc/96?img=47",
  },
  {
    name: "Professora Mariana R.",
    role: "Professora do 1º ano — ES",
    text: "Uso com minhas turmas há 3 meses. A jornada das Missões é exatamente o que faltava. As crianças sentem que estão em uma aventura, e eu economizo horas de planejamento.",
    stars: 5,
    initial: "M",
    color: "#9ED8C9",
    photo: "https://i.pravatar.cc/96?img=44",
  },
  {
    name: "Pedagoga Carla B.",
    role: "Psicopedagoga Clínica",
    text: "O diferencial é a progressão. Os materiais se complementam perfeitamente. Recomendo para todas as famílias dos meus pacientes em processo de alfabetização.",
    stars: 5,
    initial: "C",
    color: "#F4A261",
    photo: "https://i.pravatar.cc/96?img=32",
  },
];

const PARA_QUEM = [
  { icon: <Heart className="w-5 h-5" />, label: "Papai e Mamãe que querem apoiar seu filho em casa" },
  { icon: <Users className="w-5 h-5" />, label: "Professoras da Educação Infantil e Fund. I" },
  { icon: <BookOpen className="w-5 h-5" />, label: "Pedagogas e Psicopedagogas" },
  { icon: <Sparkles className="w-5 h-5" />, label: "Professoras de reforço escolar" },
  { icon: <Zap className="w-5 h-5" />, label: "Quem busca uma jornada, não atividades soltas" },
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
          SEÇÃO 1 — HERO (Dor + Promessa)
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

        {/*
          LAYOUT DESKTOP: texto esquerda | imagem direita
          LAYOUT MOBILE: badges + h1 + imagem + CTA + selos (imagem ACIMA do botão)
        */}
        <div className="max-w-7xl mx-auto relative z-10">

          {/* ---- Badges (sempre no topo) ---- */}
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
                <h1 className="hero-headline font-display font-black text-slate-900 mb-5 text-glow">
                  Toda criança nasce curiosa.
                  <br />
                  <span className="text-[#E76F51]">A sua já descobriu</span>
                  <br />
                  o prazer de ler?
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl text-slate-800 mb-4 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Enquanto você procura materiais soltos na internet, o{' '}
                  <strong>tempo de ouro da alfabetização</strong> passa.
                  O <strong><em>Pequenos Gênios™</em></strong> é uma jornada mágica, completa e
                  progressiva, do primeiro A até as primeiras histórias.
                </p>
                <p className="text-sm text-slate-600 italic mb-6 max-w-xl mx-auto lg:mx-0">
                  <strong>"Grandes descobertas começam com as primeiras letras."</strong>
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
                      sizes="90vw"
                      className="relative object-contain drop-shadow-2xl w-full rounded-3xl"
                      priority
                      unoptimized
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
                    Quero despertar o gênio leitor do meu filho
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
                    sizes="50vw"
                    className="relative object-contain drop-shadow-2xl w-full rounded-3xl animate-float-reverse"
                    priority
                    unoptimized
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 2 — AGITAÇÃO DA DOR (PAS)
      ====================================================== */}
      <section className="bg-white py-16 px-6" id="dor">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Você já se sentiu assim? 😔
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A maioria das mães, professoras e pedagogas que encontramos já passou por isso...
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { emoji: "😩", text: "Horas procurando materiais no Google e Pinterest, sem saber se funcionam para o seu filho" },
              { emoji: "😰", text: "A criança perde o interesse rápido e você não sabe mais o que fazer para motivá-la" },
              { emoji: "📦", text: "Tem materiais espalhados por toda parte, mas nenhum que siga uma sequência lógica" },
              { emoji: "💸", text: "Já gastou dinheiro em cursinhos e apostilas que não chegaram a lugar nenhum" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="pain-card flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                  <p className="text-slate-700 font-medium leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10 text-center bg-[#D2E9F5] rounded-3xl p-8">
              <p className="text-2xl font-display font-bold text-slate-900 mb-2">
                E se existisse uma jornada completa, organizada e mágica…
              </p>
              <p className="text-slate-700 text-lg">
                Que guiasse sua criança <em>passo a passo</em>, das primeiras letras até a primeira leitura independente?
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 3 — A SOLUÇÃO: MAPA DA JORNADA (3 Missões)
      ====================================================== */}
      <section className="bg-[#D2E9F5] py-20 px-6 magic-bg" id="jornada">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-6">
              <div className="inline-flex items-center gap-2 badge-gold mb-4">
                <MapPin className="w-4 h-4" /> Mapa da Jornada
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-glow">
                Uma Jornada em 3 Missões Épicas
              </h2>
              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                A maioria dos materiais entrega <strong>atividades isoladas</strong>.
                O Pequenos Gênios™ organiza tudo em uma <strong>jornada lógica de aprendizagem</strong>.
                A criança não recebe apenas exercícios. <em>Ela percorre um caminho.</em>
              </p>
            </div>
          </Reveal>

          {/* Imagem do mapa — a que tem o caminho com as 3 placas */}
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
              />
            </div>
          </Reveal>

          {/* Cards das Missões */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {MISSOES.map((missao, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className={`mission-card bg-white h-full flex flex-col`}>
                  {/* Header colorido */}
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

                  {/* Corpo */}
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
          SEÇÃO 4 — O QUE A CRIANÇA DESENVOLVE
      ====================================================== */}
      <section className="bg-white bg-texture py-20 px-6" id="habilidades">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Coluna esquerda — Materiais na mesa */}
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
                />
              </div>
            </Reveal>
          </div>

          {/* Coluna direita — Habilidades */}
          <div className="flex-1 order-1 lg:order-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 badge-gold mb-4">
                <Sparkles className="w-4 h-4" /> O Que a Criança Desenvolve
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Do reconhecimento das letras{' '}
                <span className="shimmer-text">até a leitura independente.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Ao percorrer as 3 Missões, a criança desenvolve de forma natural e progressiva as habilidades fundamentais da alfabetização:
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HABILIDADES.map((item, i) => (
                <Reveal key={i} delay={0.08 * (i % 4)}>
                  <div className="flex items-center gap-3 bg-slate-50 hover:bg-[#D2E9F5]/40 rounded-xl p-4 border border-slate-100 hover:border-[#9ED8C9]/50 transition-all duration-200 group">
                    <span className="text-2xl group-hover:animate-sparkle">{item.icon}</span>
                    <span className="text-slate-700 font-semibold leading-snug">{item.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 5 — PREVIEW DOS MATERIAIS (Carrossel Automático)
      ====================================================== */}
      <section className="bg-slate-50 py-16 px-2 sm:px-6 border-y border-slate-100" id="preview">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Espie o Que Está Dentro do Baú Mágico 🪄
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
          SEÇÃO 6 — FERRAMENTAS MÁGICAS (Bônus)
      ====================================================== */}
      <section className="bg-[#FFFBF0] py-20 px-6" id="bonus">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 badge-gold mb-4">
                <Gift className="w-4 h-4" /> Bônus Especiais
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                🪄 As Ferramentas Mágicas da Jornada
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Porque toda grande descoberta merece instrumentos à altura.
                Esses bônus chegam junto com o programa, <strong>de presente, sem custo extra.</strong>
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          SEÇÃO 7 — PARA QUEM É
      ====================================================== */}
      <section className="bg-[#D8C3E5]/30 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Este Programa é Para Você…
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PARA_QUEM.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-[#D8C3E5]/50 hover:shadow-md hover:border-[#D8C3E5] transition-all group">
                  <div className="w-10 h-10 bg-[#D8C3E5] rounded-xl flex items-center justify-center text-slate-700 flex-shrink-0 group-hover:bg-[#F4A261] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-slate-800">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 8 — DEPOIMENTOS
      ====================================================== */}
      <section className="bg-[#D8C3E5] py-20 px-6 relative overflow-hidden" id="depoimentos">
        <div className="absolute top-10 right-20 w-24 h-24 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#F4D03F]/30 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-glow mb-3">
                O Que Estão Dizendo Sobre o Pequenos Gênios™
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
                  {/* Quote icon */}
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
                    {/* Foto com borda redonda */}
                    <Image
                      src={dep.photo}
                      alt={`Foto de ${dep.name}`}
                      width={48}
                      height={48}
                      className="testimonial-photo"
                      unoptimized
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
          SEÇÃO 9 — OFERTA / ANCORAGEM DE PREÇO
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
                ⚡ Oferta Especial de Lançamento
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-3 text-glow">
                Tudo isso por muito menos do que você imagina
              </h2>
              <p className="text-slate-400 text-lg">Compare o que você leva com o que você investe:</p>
            </div>
          </Reveal>

          {/* ---- GRID DE 2 OFERTAS ---- */}
          <Reveal delay={0.1}>
            <div className="offer-cards-grid">

              {/* ---- CARD BÁSICO — Missão 1 — R$10 ---- */}
              <div className="offer-card-basic p-6 md:p-8">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Oferta Básica</p>
                <h3 className="font-display text-2xl font-black text-slate-900 mb-1">Missão 1</h3>
                <p className="text-slate-500 text-sm mb-6">Descobrindo as Letras</p>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">📦 Inclui:</p>
                  <div className="value-stack-item main">
                    <span className="font-semibold text-slate-700 text-sm">⭐ Missão 1 — Descobrindo as Letras</span>
                    <span className="font-black text-slate-400 text-sm line-through">R$67</span>
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

              {/* ---- CARD COMPLETO — Programa Completo — R$27 ---- */}
              <div className="offer-card-full p-6 md:p-8 mt-6 md:mt-0">
                {/* Empilhamento de Valor */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 mt-4">
                    📦 O que você recebe hoje:
                  </p>
                  {[
                    { label: "⭐ Missão 1 — Descobrindo as Letras", val: "R$67", type: "main" },
                    { label: "⭐ Missão 2 — Construindo Palavras", val: "R$79", type: "main" },
                    { label: "⭐ Missão 3 — Explorando a Leitura", val: "R$89", type: "main" },
                    { label: "🎨 Painel Alfabeto Colorido", val: "R$29", type: "bonus" },
                    { label: "🧩 Oficina das Palavras", val: "R$39", type: "bonus" },
                    { label: "🎮 Jogo da Memória do Alfabeto", val: "R$35", type: "bonus" },
                    { label: "🔊 Guia dos Sons das Letras", val: "R$39", type: "bonus" },
                  ].map((item, i) => (
                    <div key={i} className={`value-stack-item ${item.type}`}>
                      <span className="font-semibold text-slate-700 text-sm">{item.label}</span>
                      <span className="font-black text-slate-500 text-sm line-through flex-shrink-0">{item.val}</span>
                    </div>
                  ))}
                  <div className="border-t-2 border-dashed border-slate-200 my-4 pt-4 flex items-center justify-between px-4">
                    <span className="font-bold text-slate-600">Valor total:</span>
                    <span className="font-display font-black text-slate-400 text-xl line-through">R$415,00</span>
                  </div>
                </div>

                {/* Destaque do Preço */}
                <div className="text-center bg-gradient-to-br from-[#F4D03F]/20 to-[#9ED8C9]/20 rounded-2xl p-5 border-2 border-[#F4D03F]/40 mb-6">
                  <p className="text-slate-600 font-bold uppercase tracking-widest text-sm mb-2">
                    🎯 Hoje você leva TUDO <br></br>por apenas
                  </p>
                  <div className="price-anchor-total font-display mb-1">
                    R$27,00
                  </div>
                  <p className="text-slate-500 text-sm">
                    Ou parcelado em até 6x no cartão<br></br>Acesso imediato
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
          SEÇÃO 10 — GARANTIA
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
                Sua compra é 100% segura.
                <br />
                <span className="text-[#9ED8C9]">Garantia Incondicional de 7 Dias.</span>
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Você tem <strong>7 dias completos</strong> para explorar todos os materiais, percorrer as 3 Missões e sentir a magia na prática.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Se por qualquer motivo — seja técnico ou pessoal — o programa não atender às suas expectativas,
                basta enviar um e-mail e devolvemos <strong>100% do valor</strong>.
                Sem perguntas, sem burocracia, sem complicação.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 11 — FAQ
      ====================================================== */}
      <section className="bg-white bg-texture py-20 px-6" id="faq">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Dúvidas? Respondemos Tudo. 💬
              </h2>
              <p className="text-slate-600 text-lg">
                As perguntas que mais chegam para a gente, respondidas sem enrolação.
              </p>
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
          FOOTER
      ====================================================== */}
      <footer className="bg-[#2C3E50] py-14 px-6 text-center text-slate-400">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-4xl font-black text-white mb-2 opacity-80">
            Pequenos Gênios™
          </p>
          <p className="italic text-[#F4D03F]/70 text-sm mb-8">
            "Grandes descobertas começam com as primeiras letras."
          </p>
          <div className="divider-stars">
            <span>✦</span><span>✦</span><span>✦</span>
          </div>
          <p className="text-sm mt-6 mb-4">
            © 2026 Coleção Pequenos Gênios™. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm flex-wrap">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
