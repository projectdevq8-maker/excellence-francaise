import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Sparkles, Briefcase, Moon, Sun, 
  ArrowRight, ChevronRight, X, Phone 
} from 'lucide-react';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  const [lang, setLang] = useState('fr');
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [nom, setNom] = useState('');

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [lang, darkMode]);

  const content = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "PRESTIGE • ÉDUCATION • KOWEÏT",
      heroDesc: "L'art de la transmission et le luxe du savoir au service de votre réussite.",
      services: [
        { id: 1, title: "Gastronomie", icon: <Sparkles size={24} />, desc: "Découvrez l'art culinaire et les codes des grandes tables françaises." },
        { id: 2, title: "Soutien Scolaire", icon: <GraduationCap size={24} />, desc: "Coaching d'élite pour les cursus français internationaux de haut niveau." },
        { id: 3, title: "Mode & Style", icon: <Briefcase size={24} />, desc: "Maîtrisez l'élégance et les codes du luxe à la française." }
      ],
      cta: "Évaluer mon niveau",
      booking: "Prendre rendez-vous",
      send: "Réserver via WhatsApp",
      footer: "© 2026 L'Excellence Française — Luxe & Savoir"
    },
    en: { /* ... structure identique ... */ },
    ar: { /* ... structure identique ... */ }
  };

  const t = content[lang] || content['fr'];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#0f0f0f] text-white' : 'bg-[#fafafa] text-[#1a1a1a]'} font-['Inter']`}>
      
      {/* 4. NAVIGATION SÉRIEUSE (Sticky & Propre) */}
      <nav className="sticky top-0 w-full z-[100] bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-[#f0f0f0] dark:border-gray-900 px-12 py-6 flex justify-between items-center">
        <div className="font-['Playfair_Display'] text-2xl font-bold tracking-tighter">EF</div>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest opacity-60">
            <button onClick={() => setLang('fr')}>FR</button>
            <button onClick={() => setLang('en')}>EN</button>
            <button onClick={() => setLang('ar')}>AR</button>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="opacity-50 hover:opacity-100 transition-opacity">
            {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* 2. AÉRATION (Hero Section avec py-24) */}
        <header className="py-32 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#C5A059] text-[10px] tracking-[0.6em] font-bold mb-6 uppercase">
            {t.subtitle}
          </motion.p>
          <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl mb-10 leading-tight">
            {t.title}
          </h1>
          <p className="font-['Inter'] font-light text-gray-400 text-xl max-w-2xl mx-auto mb-12 italic">
            "{t.heroDesc}"
          </p>
          <button onClick={() => setShowQuiz(true)} className="bg-black text-white dark:bg-white dark:text-black px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-xl">
            {t.cta}
          </button>
        </header>

        {/* 3. STRUCTURE BENTO (Cartes élégantes) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-24">
          {(t.services || []).map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-[#161616] border border-[#f0f0f0] dark:border-gray-800 rounded-lg p-12 flex flex-col justify-between min-h-[400px] shadow-sm transition-all"
            >
              <div>
                <div className="text-[#C5A059] mb-8">{service.icon}</div>
                <h2 className="font-['Playfair_Display'] text-3xl mb-6">{service.title}</h2>
                <p className="font-['Inter'] text-gray-400 font-light leading-relaxed mb-8">{service.desc}</p>
              </div>
              
              {/* 5. ACTION (Le bouton Découvrir) */}
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all">
                Découvrir <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </section>

        {/* SECTION RÉSERVATION (Espace & Souffle) */}
        <section className="py-24 border-t border-[#f0f0f0] dark:border-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-['Playfair_Display'] text-5xl mb-8">{t.booking}</h2>
              <p className="font-['Inter'] text-gray-400 font-light text-lg">Sélectionnez votre créneau pour une consultation privée.</p>
            </div>
            
            <div className="bg-white dark:bg-[#161616] p-10 border border-[#f0f0f0] dark:border-gray-800 rounded-lg space-y-8">
              <div className="flex gap-4 overflow-x-auto pb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(d => (
                  <button key={d} onClick={() => setSelectedDay(d)} className={`px-6 py-3 rounded text-xs border transition-all ${selectedDay === d ? 'bg-black text-white' : 'border-[#f0f0f0]'}`}>{d}</button>
                ))}
              </div>
              <button onClick={() => window.open(`https://wa.me/33667569993`)} className="w-full bg-black text-white py-5 rounded text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-3">
                <Phone size={14}/> {t.send}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-[#f0f0f0] dark:border-gray-900">
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">{t.footer}</p>
      </footer>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} />
    </div>
  );
}

export default App;