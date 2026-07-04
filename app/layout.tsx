import type {Metadata} from 'next';
import { Baloo_2, Nunito } from 'next/font/google';
import './globals.css'; // Global styles

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
  title: 'Pequenos Gênios™ | O Mundo da Leitura',
  description: 'Uma jornada lúdica e progressiva que transforma a curiosidade natural da criança em confiança para ler.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${baloo.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
