import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [lang, setLang] = useState('fr');
  
  const content = {
    fr: { title: "L'Excellence Française", sub: "L'Art de vivre • Prestige", cards: [
      { t: "Soutien Scolaire", d: "Élite pour écoles françaises.", c: "bg-[#0047AB]" },
      { t: "Conversation", d: "Aisance et élégance.", c: "bg-white" },
      { t: "Français Pro", d: "Business et Diplomatie.", c: "bg-[#D32F2F]" }
    ]},
    ar: { title: "التميز الفرنسي", sub: "فن الحياة • فخامة", cards: [
      { t: "الدعم الأكاديمي", d: "تدريب متميز للمدارس.", d: "bg-[#0047AB]" },
      { t: "المحادثة", d: "رقي وانسيابية.", c: "bg-white" },
      { t: "الفرنسية المهنية", d: "الأعمال والدبلوماسية.", c: "bg-[#D32F2F]" }
    ]}
  };

  const t = content[lang] || content.fr;

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-gray-900 font-sans p-4">
      {/* Sélecteur de langue simple */}
      <div className="flex justify-end gap-2 mb-8">
        <button onClick={() => setLang('fr')} className="p-2 border rounded">FR</button>
        <button onClick={() => setLang('ar')} className="p-2 border rounded">AR</button>
      </div>

      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-7xl font-serif italic mb-4">{t.title}</h1>
        <p className="text-[#C5A059] tracking-widest uppercase text-sm">{t.sub}</p>
      </header>

      {/* SECTION CARTES : LE FIX EST ICI */}
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-20">
        {t.cards.map((card, i) => (
          <div key={i} className={`${card.c} border-2 border-[#C5A059] rounded-[30px] p-8 w-full shadow-xl flex flex-col justify-between min-h-[250px]`}>
            <div>
              <h2 className={`text-2xl font-bold mb-4 ${card.c === 'bg-white' ? 'text-black' : 'text-white'}`}>{card.t}</h2>
              <p className={card.c === 'bg-white' ? 'text-gray-600' : 'text-white/90'}>{card.d}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/10 font-bold uppercase text-[10px]">Prestige</div>
          </div>
        ))}
      </div>

      <footer className="text-center text-gray-300 text-[10px] uppercase tracking-widest">
        Excellence Française • 2026
      </footer>
    </div>
  );
}