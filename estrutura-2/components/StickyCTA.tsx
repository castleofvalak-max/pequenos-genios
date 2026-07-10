'use client';
import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-cta-mobile md:hidden ${visible ? 'visible' : ''}`}>
      <a
        href="#oferta"
        className="flex items-center justify-center gap-3 bg-[#F4A261] hover:bg-[#E76F51] text-white font-display font-black text-base rounded-2xl py-4 px-6 transition-all duration-200 active:scale-95 w-full"
        id="sticky-cta-btn"
      >
        <Rocket className="w-5 h-5 flex-shrink-0" />
        <span>Garantir por R$27 — Acesso Imediato</span>
      </a>
      <p className="text-center text-xs text-slate-400 mt-2">
        ✅ Pagamento único · ✅ Acesso imediato · ✅ Garantia de 7 dias
      </p>
    </div>
  );
}
