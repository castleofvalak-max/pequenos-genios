import type {Metadata} from 'next';
import { Baloo_2, Nunito } from 'next/font/google';
import './globals.css';

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  weight: ['400', '500', '600', '700', '800'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Pequenos Gênios™ — Jornada Mágica de Alfabetização | Programa Completo',
  description:
    'O Pequenos Gênios™ é uma jornada lúdica e progressiva em 3 missões que transforma a curiosidade da criança em confiança para ler. Do primeiro A até as primeiras histórias — com imagens, atividades e o Baú Mágico da Leitura. Por apenas R$27.',
  keywords: [
    'alfabetização infantil',
    'cartilha de alfabetização',
    'caderno silábico',
    'atividades de leitura',
    'material didático para crianças',
    'programa de alfabetização',
    'pequenos gênios',
    'ensino fundamental',
    'educação infantil',
    'baú mágico da leitura',
  ],
  openGraph: {
    title: 'Pequenos Gênios™ — Do Primeiro A até a Primeira Leitura',
    description:
      'Uma jornada completa, lúdica e progressiva de alfabetização em 3 missões. Mais de R$415 em materiais por apenas R$27.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/imgs/COLEÇÃO.png',
        width: 1200,
        height: 630,
        alt: 'Coleção Pequenos Gênios — Programa de Alfabetização',
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${baloo.variable} ${nunito.variable}`}>
      <head>
        {/* ============================================================== */}
        {/* INÍCIO DOS SCRIPTS DE TRAQUEAMENTO (META ADS E UTMIFY) */}
        {/* ============================================================== */}
        
        {/* 1. Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1537529211498878');
fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1537529211498878&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* 2. Script UTM baixado na UTMIFY */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          async
          defer
        ></script>

        {/* 3. Pixel Facebook cadastrado na UTMIFY */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.pixelId = "6a4b029684bca8ebef0ab808";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
            `,
          }}
        />
        {/* ============================================================== */}
        {/* FIM DOS SCRIPTS DE TRAQUEAMENTO */}
        {/* ============================================================== */}
      </head>
      <body className="font-sans antialiased text-slate-800 bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
