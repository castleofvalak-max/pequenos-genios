import Link from 'next/link';
import { MessageCircle, Mail, ArrowLeft, Clock, Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Suporte — Pequenos Gênios™',
  description: 'Precisa de ajuda? Entre em contato com a equipe do Pequenos Gênios™ por e-mail ou WhatsApp. Estamos prontos para te ajudar!',
};

export default function Suporte() {
  return (
    <main className="min-h-screen bg-white">
      {/* ---- HEADER ---- */}
      <header className="bg-[#9ED8C9] py-10 px-6 text-center magic-bg">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-bold text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar à Página Inicial
          </Link>
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-[#2C3E50]" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black text-[#2C3E50] mb-2">
            Suporte
          </h1>
          <p className="text-slate-700 text-sm">
            Estamos aqui para ajudar você!
          </p>
        </div>
      </header>

      {/* ---- CONTEÚDO ---- */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Mensagem de boas-vindas */}
          <div className="text-center mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Como podemos te ajudar? 💬
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
              Ficou com alguma dúvida sobre o programa, precisa de ajuda com o acesso aos materiais
              ou quer solicitar um reembolso? Escolha o canal de sua preferência abaixo.
            </p>
          </div>

          {/* Cards de contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

            {/* Card WhatsApp */}
            <a
              href="https://wa.me/5579988099789?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20o%20Pequenos%20G%C3%AAnios%E2%84%A2."
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl border-2 border-[#9ED8C9] p-8 text-center shadow-sm hover:shadow-xl hover:border-[#25D366] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="font-display text-xl font-black text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Atendimento rápido e humanizado. Clique e fale diretamente com a nossa equipe.
              </p>
              <span className="inline-flex items-center gap-2 text-[#25D366] font-bold text-sm">
                <MessageCircle className="w-4 h-4" />
                Abrir conversa no WhatsApp
              </span>
            </a>

            {/* Card E-mail */}
            <a
              href="mailto:contato@laboratorioia.shop?subject=Suporte%20Pequenos%20Gênios™"
              className="group block bg-white rounded-3xl border-2 border-[#D8C3E5] p-8 text-center shadow-sm hover:shadow-xl hover:border-[#F4A261] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#F4A261]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#F4A261]/20 transition-colors">
                <Mail className="w-8 h-8 text-[#F4A261]" />
              </div>
              <h3 className="font-display text-xl font-black text-slate-900 mb-2">E-mail</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Prefere por escrito? Envie um e-mail com sua dúvida e respondemos em até 24 horas.
              </p>
              <span className="inline-flex items-center gap-2 text-[#F4A261] font-bold text-sm">
                <Mail className="w-4 h-4" />
                contato@laboratorioia.shop
              </span>
            </a>

          </div>

          {/* Informações adicionais */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-6 text-center">
              Informações Úteis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D8C3E5]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#2C3E50]" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Horário de Atendimento</p>
                  <p className="text-slate-600 text-sm">Segunda a Sexta, das 9h às 18h (horário de Brasília)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#9ED8C9]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#2C3E50]" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Prazo de Resposta</p>
                  <p className="text-slate-600 text-sm">E-mails: até 24h úteis. WhatsApp: resposta mais rápida.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F4A261]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🔒</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Reembolso</p>
                  <p className="text-slate-600 text-sm">Garantia incondicional de 7 dias. Solicite por qualquer canal.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F4D03F]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📥</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Acesso aos Materiais</p>
                  <p className="text-slate-600 text-sm">Enviamos por e-mail logo após a confirmação do pagamento.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---- FOOTER ---- */}
      <footer className="bg-[#2C3E50] py-10 px-6 text-center text-slate-400">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-2xl font-black text-white mb-2 opacity-80">
            Pequenos Gênios™
          </p>
          <p className="italic text-[#F4D03F]/70 text-xs mb-6">
            &quot;Grandes descobertas começam com as primeiras letras.&quot;
          </p>
          <div className="divider-stars">
            <span>✦</span><span>✦</span><span>✦</span>
          </div>
          <p className="text-sm mt-4 mb-3">
            © 2026 Coleção Pequenos Gênios™. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm flex-wrap">
            <Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/suporte" className="text-white font-bold">Suporte</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
