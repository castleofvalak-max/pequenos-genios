import Link from 'next/link';
import { Lock, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Pequenos Gênios™',
  description: 'Política de Privacidade do programa de alfabetização Pequenos Gênios™. Saiba como coletamos, utilizamos e protegemos seus dados pessoais.',
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-white">
      {/* ---- HEADER ---- */}
      <header className="bg-[#D2E9F5] py-10 px-6 text-center magic-bg">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-bold text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar à Página Inicial
          </Link>
          <div className="flex justify-center mb-4">
            <Lock className="w-12 h-12 text-[#2C3E50]" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black text-[#2C3E50] mb-2">
            Política de Privacidade
          </h1>
          <p className="text-slate-700 text-sm">
            Última atualização: Julho de 2026
          </p>
        </div>
      </header>

      {/* ---- CONTEÚDO ---- */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">1. Introdução</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A <strong>Coleção Pequenos Gênios™</strong> respeita a sua privacidade e está comprometida em proteger
            os dados pessoais que você nos fornece. Esta Política de Privacidade descreve como coletamos, utilizamos,
            armazenamos e protegemos suas informações ao acessar nosso site
            (<strong>pequenosgenios.laboratorioia.shop</strong>) e adquirir nossos produtos.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">2. Dados que Coletamos</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Podemos coletar os seguintes tipos de informações:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li><strong>Dados pessoais:</strong> nome, endereço de e-mail e telefone, fornecidos voluntariamente no momento da compra;</li>
            <li><strong>Dados de pagamento:</strong> processados integralmente pela plataforma de pagamento terceirizada — não armazenamos dados de cartão de crédito;</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e dados de cookies, coletados automaticamente para fins de análise e melhoria do serviço;</li>
            <li><strong>Dados de marketing:</strong> origem do acesso (UTM), interações com anúncios e dados de pixel de rastreamento para otimização de campanhas publicitárias.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">3. Como Utilizamos seus Dados</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Os dados coletados são utilizados para:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Processar e entregar seu pedido (envio do material digital por e-mail);</li>
            <li>Fornecer suporte ao cliente e responder a dúvidas;</li>
            <li>Enviar comunicações relacionadas à compra (confirmação, atualizações do produto);</li>
            <li>Melhorar a experiência de navegação e otimizar nosso site;</li>
            <li>Realizar campanhas de marketing e mensurar a eficácia de anúncios (Meta Ads/Facebook);</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Utilizamos cookies e tecnologias similares (incluindo o Pixel do Meta/Facebook e scripts de rastreamento
            como Utmify) para coletar dados de navegação, medir o desempenho de campanhas publicitárias e oferecer
            uma experiência personalizada. Você pode gerenciar suas preferências de cookies através das configurações
            do seu navegador. Note que desabilitar cookies pode afetar o funcionamento do site.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">5. Compartilhamento de Dados</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Seus dados pessoais podem ser compartilhados com:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li><strong>Plataformas de pagamento:</strong> para processar transações financeiras com segurança;</li>
            <li><strong>Ferramentas de marketing:</strong> como Meta Ads (Facebook/Instagram) e Utmify, para fins de rastreamento e otimização de campanhas;</li>
            <li><strong>Serviços de hospedagem:</strong> Vercel, para manter o site funcionando;</li>
            <li><strong>Autoridades legais:</strong> quando exigido por lei ou ordem judicial.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-6">
            Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros para finalidades não
            relacionadas ao nosso serviço.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">6. Segurança dos Dados</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso
            não autorizado, alteração, divulgação ou destruição. Nosso site utiliza protocolo HTTPS (SSL/TLS) para
            garantir a criptografia das informações transmitidas. Contudo, nenhum método de transmissão ou
            armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">7. Seus Direitos (LGPD)</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), você tem o direito de:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Confirmar a existência de tratamento dos seus dados pessoais;</li>
            <li>Acessar, corrigir ou atualizar seus dados;</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Revogar o consentimento para uso dos seus dados;</li>
            <li>Solicitar a portabilidade dos seus dados a outro fornecedor;</li>
            <li>Obter informações sobre as entidades com as quais seus dados foram compartilhados.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-6">
            Para exercer qualquer um desses direitos, entre em contato conosco através da nossa{' '}
            <Link href="/suporte" className="text-[#E76F51] font-bold hover:underline">
              página de Suporte
            </Link>.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">8. Retenção de Dados</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Seus dados pessoais são mantidos apenas pelo tempo necessário para cumprir as finalidades descritas
            nesta política, ou conforme exigido por obrigações legais, fiscais ou regulatórias. Dados de compra
            são mantidos pelo prazo legal mínimo de 5 (cinco) anos para fins fiscais.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">9. Menores de Idade</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Nossos produtos são destinados a crianças em fase de alfabetização, porém a compra e o fornecimento
            de dados pessoais devem ser realizados exclusivamente por pais, responsáveis legais ou educadores
            maiores de 18 anos. Não coletamos intencionalmente dados de menores de idade.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">10. Alterações nesta Política</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento.
            A versão atualizada estará sempre disponível nesta página com a data da última modificação.
            Recomendamos que você revise esta página periodicamente.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">11. Contato</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais,
            entre em contato conosco através da nossa{' '}
            <Link href="/suporte" className="text-[#E76F51] font-bold hover:underline">
              página de Suporte
            </Link>.
          </p>

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
            <Link href="/politica-de-privacidade" className="text-white font-bold">Política de Privacidade</Link>
            <Link href="/suporte" className="hover:text-white transition-colors">Suporte</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
