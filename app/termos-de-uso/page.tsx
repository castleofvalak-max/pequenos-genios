import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso — Pequenos Gênios™',
  description: 'Termos de Uso do programa de alfabetização Pequenos Gênios™. Leia os termos e condições para uso dos nossos materiais e serviços.',
};

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-white">
      {/* ---- HEADER ---- */}
      <header className="bg-[#D8C3E5] py-10 px-6 text-center magic-bg">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-bold text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar à Página Inicial
          </Link>
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-12 h-12 text-[#2C3E50]" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black text-[#2C3E50] mb-2">
            Termos de Uso
          </h1>
          <p className="text-slate-700 text-sm">
            Última atualização: Julho de 2026
          </p>
        </div>
      </header>

      {/* ---- CONTEÚDO ---- */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Ao acessar e utilizar o site <strong>pequenosgenios.laboratorioia.shop</strong> e adquirir qualquer produto
            da Coleção Pequenos Gênios™, você declara estar de acordo com estes Termos de Uso. Caso não concorde com
            alguma cláusula, solicitamos que não utilize nossos serviços.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">2. Descrição do Produto</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A Coleção Pequenos Gênios™ é um programa digital de alfabetização infantil composto por materiais em
            formato PDF (cadernos, cartilhas, jogos e guias) organizados em 3 Missões progressivas. Após a confirmação
            do pagamento, o acesso ao material é liberado imediatamente por meio de link de download enviado ao
            e-mail cadastrado na compra.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">3. Propriedade Intelectual</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Todo o conteúdo presente no site e nos materiais da Coleção Pequenos Gênios™ — incluindo textos, imagens,
            ilustrações, logotipos, design e layout — é protegido por direitos autorais e demais legislações de
            propriedade intelectual vigentes no Brasil. É expressamente proibido:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Reproduzir, distribuir, vender ou compartilhar os materiais, total ou parcialmente, com terceiros;</li>
            <li>Modificar, adaptar ou criar obras derivadas sem autorização prévia e por escrito;</li>
            <li>Utilizar os materiais para fins comerciais que não sejam o uso pessoal ou educacional previsto.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">4. Uso Permitido</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A licença de uso é concedida de forma pessoal e intransferível. Os materiais podem ser impressos e
            utilizados para uso próprio, com filhos, alunos ou pacientes, dentro de um contexto educacional e privado.
            O compartilhamento dos arquivos digitais (PDFs) com terceiros não é permitido.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">5. Política de Reembolso</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Oferecemos garantia incondicional de <strong>7 (sete) dias corridos</strong> a partir da data de compra.
            Se, por qualquer motivo, o produto não atender às suas expectativas dentro desse período, basta entrar em
            contato conosco solicitando o reembolso integral. A devolução do valor será processada pelo mesmo método de
            pagamento utilizado na compra.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">6. Pagamentos e Segurança</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            As transações de pagamento são processadas por plataformas terceirizadas especializadas, que utilizam
            criptografia e protocolos de segurança (SSL) para proteger seus dados financeiros. Não armazenamos dados
            de cartão de crédito ou informações bancárias em nossos servidores.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">7. Limitação de Responsabilidade</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Os materiais da Coleção Pequenos Gênios™ são ferramentas de apoio à alfabetização. Os resultados podem
            variar de criança para criança, e não garantimos resultados específicos. Não nos responsabilizamos por
            eventuais danos diretos, indiretos ou consequenciais decorrentes do uso ou da impossibilidade de uso dos
            materiais.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">8. Modificações dos Termos</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio.
            A versão atualizada estará sempre disponível nesta página. O uso continuado dos nossos serviços após
            alterações constitui aceitação dos novos termos.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">9. Foro e Legislação Aplicável</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer
            controvérsias, fica eleito o foro da comarca do domicílio do consumidor, conforme previsto no Código de
            Defesa do Consumidor (Lei nº 8.078/1990).
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">10. Contato</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco através da nossa{' '}
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
            <Link href="/termos-de-uso" className="text-white font-bold">Termos de Uso</Link>
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/suporte" className="hover:text-white transition-colors">Suporte</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
