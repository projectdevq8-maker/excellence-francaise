import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, MessageSquare, Briefcase, Moon, Sun, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  const [lang, setLang] = useState('fr');
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  // Roadmap Dev : Manipulation du DOM pour le Dark Mode
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const content = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "PRESTIGE • EDUCATION • KUWAIT CITY",
      cards: [
        { title: "Soutien Scolaire", icon: <GraduationCap size={24}/>, desc: "Coaching d'élite pour les cursus français internationaux." },
        { title: "Conversation", icon: <MessageSquare size={24}/>, desc: "L'art de l'éloquence pour briller en société." },
        { title: "Français Pro", icon: <Briefcase size={24}/>, desc: "Maîtrise diplomatique et business de haut niveau." }
      ],
      cta: "Déterminer mon niveau",
      book: "Réserver une session"
    }
    // ... EN et AR restent identiques mais avec ce nouveau style
  };

  const t = content[lang] || content['fr'];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#111827] text-white' : 'bg-[#F9FAFB] text-[#111827]'}`}>
      
      {/* HEADER / NAVIGATION LUXE */}
      <nav className="fixed top-0 w-full z-[100] px-10 py-6 flex justify-between items-center backdrop-blur-md">
        <div className="font-serif italic text-2xl tracking-tighter">EF</div>
        
        <div className="flex items-center gap-8">
          {/* DARK MODE SWITCHER (Roadmap Step 1) */}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button onClick={() => setShowModal(true)} className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-current pb-1">
            Contact
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-10 pt-44 pb-40">
        
        {/* HERO SECTION - ESPACEMENT MAXIMAL */}
        <section className="text-center mb-48">
          <motion.p 
            initial={{ opacity: 0, tracking: "0.1em" }}
            animate={{ opacity: 1, tracking: "0.8em" }}
            className="text-[#C5A059] text-[11px] font-medium mb-10"
          >
            {t.subtitle}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[100px] font-serif italic leading-[0.9] mb-16 tracking-tighter"
          >
            {t.title}
          </motion.h1>

          <div className="flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowQuiz(true)}
              className="group relative px-14 py-6 bg-[#111827] dark:bg-white dark:text-black text-white rounded-full overflow-hidden transition-all shadow-2xl"
            >
              <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.4em] flex items-center gap-4">
                {t.cta} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform"/>
              </span>
            </motion.button>
          </div>
        </section>

        {/* BENTO GRID - LE "SOUFFLE" */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-48">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className={`p-16 rounded-[40px] border-[0.5px] ${darkMode ? 'border-gray-800 bg-gray-900/50' : 'border-gray-100 bg-white'} shadow-sm flex flex-col justify-between min-h-[450px] transition-all`}
            >
              <div>
                <div className="text-[#C5A059] mb-12">{card.icon}</div>
                <h2 className="text-3xl font-serif italic mb-6 tracking-tight">{card.title}</h2>
                <p className="text-gray-400 font-light leading-relaxed text-lg">{card.desc}</p>
              </div>
              <div className="pt-10 border-t border-gray-50 dark:border-gray-800">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">Prestige Unit 0{i+1}</span>
              </div>
            </motion.div>
          ))}
        </section>

        {/* SECTION RÉSERVATION - STYLE MINIMALISTE */}
        <section className={`rounded-[60px] p-20 md:p-32 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-[0.5px] border-gray-100 dark:border-gray-800 shadow-2xl text-center`}>
          <h2 className="text-5xl font-serif italic mb-10">{t.book}</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-16 font-light italic">"L'excellence est un art que l'on ne maîtrise que par l'exercice constant."</p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* ... Tes sélecteurs d'horaires ici, mais avec p-6 pour l'espace ... */}
          </div>
        </section>

      </main>

      <footer className="py-20 text-center opacity-20">
        <p className="text-[10px] tracking-[0.5em] uppercase font-light">{t.footer}</p>
      </footer>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} />
    </div>
  );
}

export default App;