'use client'
import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center mt-6">
      <p className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">Oferta válida por mais</p>
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center">
            <div className="bg-slate-800 text-white font-bold text-3xl px-4 py-3 rounded-xl shadow-lg border-b-4 border-slate-900">
            {String(minutes).padStart(2, '0')}
            </div>
            <span className="text-xs font-bold text-slate-700 mt-1 uppercase">Min</span>
        </div>
        <span className="text-3xl font-bold text-slate-800 mb-6">:</span>
        <div className="flex flex-col items-center">
            <div className="bg-slate-800 text-white font-bold text-3xl px-4 py-3 rounded-xl shadow-lg border-b-4 border-slate-900">
            {String(seconds).padStart(2, '0')}
            </div>
            <span className="text-xs font-bold text-slate-700 mt-1 uppercase">Seg</span>
        </div>
      </div>
    </div>
  );
}
