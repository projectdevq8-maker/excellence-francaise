import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Languages, Briefcase, ArrowRight, Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  const [lang, setLang] = useState('fr');
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const content = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "PRESTIGE • ÉDUCATION • KOWEÏT",
      services: [
        { title: "Soutien Scolaire", icon: <GraduationCap size={28}/>, desc: "Coaching d'élite pour les cursus français internationaux." },
        { title: "Conversation", icon: <Languages size={28}/>, desc: "L'art de l'éloquence et du savoir-vivre parisien." },
        { title: "Français Pro", icon: <Briefcase size={28}/>, desc: "Maîtrise diplomatique et business de haut niveau." }
      ],
      cta: "Déterminer mon niveau",
      booking: "Réservation Concierge",
      footer: "© 2026 L'Excellence Française — L'Art de la Perfection."
    },
    // Les autres langues suivent la même structure...
  };

  const t = content[lang] || content['fr'];

  // Animation de Fade-In (Roadmap Étape 2)
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${darkMode ? 'bg-[#0A0A0A] text-white' : 'bg-[#FDFDFD] text-[#1A1A1A]'} font-['Inter']`}>
      
      {/* NAVIGATION MINIMALISTE */}
      <nav className="fixed top-0 w-full z-[100] px-12 py-8 flex justify-between items-center backdrop-blur-sm">
        <div className="font-['Playfair_Display'] italic text-2xl tracking-tighter uppercase font-bold text-[#C5A059]">EF</div>
        <div className="flex items-center gap-10">
           <button onClick={() => setDarkMode(!darkMode)} className="opacity-50 hover:opacity-100 transition-opacity">
            {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <button onClick={() => setShowModal(true)} className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-[#C5A059] pb-1">Contact</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-10 pt-48 pb-40">
        
        {/* HERO SECTION - TYPO & ESPACEMENT */}
        <motion.header {...fadeIn} className="text-center mb-56">
          <p className="text-[#C5A059] text-[11px] tracking-[0.9em] font-medium mb-8 uppercase ml-[0.9em]">{t.subtitle}</p>
          <h1 className="font-['Playfair_Display'] text-7xl md:text-[110px] italic leading-[0.85] mb-20 tracking-tighter">
            {t.title}
          </h1>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowQuiz(true)}
            className="px-16 py-7 bg-[#1A1A1A] dark:bg-white dark:text-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.4em] shadow-2xl flex items-center gap-4 mx-auto"
          >
            {t.cta} <ArrowRight size={14}/>
          </motion.button>
        </motion.header>

        {/* BENTO GRID - LE "SOUFFLE" & ICONES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-56">
          {t.services.map((service, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.2 }}
              className={`p-16 rounded-[45px] border-[0.5px] ${darkMode ? 'border-gray-800 bg-[#111111]' : 'border-gray-100 bg-white'} shadow-sm flex flex-col justify-between min-h-[480px] hover:shadow-2xl transition-all group`}
            >
              <div>
                <div className="text-[#C5A059] mb-12 group-hover:scale-110 transition-transform duration-500 inline-block">
                  {service.icon}
                </div>
                <h2 className="font-['Playfair_Display'] text-3xl italic mb-6 tracking-tight">{service.title}</h2>
                <p className="text-gray-400 font-light leading-relaxed text-lg">{service.desc}</p>
              </div>
              <div className="pt-10 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-30">Prestige Service</span>
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all"/>
              </div>
            </motion.div>
          ))}
        </section>

        {/* SECTION RÉSERVATION - BENTO MODERNE */}
        <motion.section 
          {...fadeIn}
          className={`rounded-[70px] p-20 md:p-32 ${darkMode ? 'bg-[#111111]' : 'bg-white'} border-[0.5px] border-gray-100 dark:border-gray-800 shadow-sm text-center relative overflow-hidden`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[#C5A059]"></div>
          <h2 className="font-['Playfair_Display'] text-5xl italic mb-12">{t.booking}</h2>
          <p className="text-gray-400 font-light italic text-xl max-w-2xl mx-auto mb-16">
            "Le détail fait la perfection, et la perfection n'est pas un détail."
          </p>
          <div className="flex justify-center gap-6">
             <button onClick={() => setShowModal(true)} className="px-10 py-5 border-[0.5px] border-gray-200 dark:border-gray-700 rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-black dark:hover:border-white transition-all">Consulter l'Agenda</button>
          </div>
        </motion.section>

      </main>

      <footer className="py-24 text-center">
        <div className="w-12 h-[1px] bg-gray-200 mx-auto mb-10"></div>
        <p className="text-[10px] text-gray-400 tracking-[0.6em] font-light uppercase">{t.footer}</p>
      </footer>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} />
    </div>
  );
}

export default App;