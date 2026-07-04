'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const CAROUSEL_IMAGES = [
  { src: "https://i.imgur.com/1Hr4RvD.png",  alt: "Material Pequenos Gênios — Cartilha de Alfabetização" },
  { src: "https://i.imgur.com/2O594Pc.jpeg", alt: "Material Pequenos Gênios — Caderno Silábico Simples" },
  { src: "https://i.imgur.com/PI47zZ9.jpeg", alt: "Material Pequenos Gênios — Caderno Silábico Complexo" },
  { src: "https://i.imgur.com/vB2DBhC.jpeg", alt: "Material Pequenos Gênios — Atividades Silábicas" },
  { src: "https://i.imgur.com/lGN61W9.jpeg", alt: "Material Pequenos Gênios — Baú Mágico da Leitura" },
];

export function AutoCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const next = () => {
    goTo((current + 1) % CAROUSEL_IMAGES.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  return (
    <div className="auto-carousel" id="materials-carousel">
      {/* Main slide */}
      <div className="carousel-track">
        {CAROUSEL_IMAGES.map((img, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === current ? 'active' : ''}`}
            aria-hidden={i !== current}
          >
            <div className="relative aspect-square sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-video w-full watercolor-card p-2 md:p-4 overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 1000px"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="carousel-dots" role="tablist" aria-label="Slides do carrossel">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => {
              if (intervalRef.current) clearInterval(intervalRef.current);
              goTo(i);
              intervalRef.current = setInterval(next, 5000);
            }}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        className="carousel-arrow carousel-arrow-prev"
        onClick={() => {
          if (intervalRef.current) clearInterval(intervalRef.current);
          goTo((current - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
          intervalRef.current = setInterval(next, 5000);
        }}
        aria-label="Slide anterior"
      >
        ‹
      </button>
      <button
        className="carousel-arrow carousel-arrow-next"
        onClick={() => {
          if (intervalRef.current) clearInterval(intervalRef.current);
          goTo((current + 1) % CAROUSEL_IMAGES.length);
          intervalRef.current = setInterval(next, 5000);
        }}
        aria-label="Próximo slide"
      >
        ›
      </button>
    </div>
  );
}
