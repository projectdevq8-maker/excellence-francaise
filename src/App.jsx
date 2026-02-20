import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MessageCircle, Calendar, GraduationCap, Award, Briefcase, ChevronRight, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  const [lang, setLang] = useState('fr');
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizTermine, setQuizTermine] = useState(false);

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const content = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "PRESTIGE • EDUCATION • KUWAIT CITY",
      cards: [
        { title: "Soutien Scolaire", desc: "Accompagnement d'élite, cursus français.", icon: <GraduationCap size={20}/>, color: "text-[#0047AB]" },
        { title: "Conversation", desc: "L'art de l'éloquence et du savoir-vivre.", icon: <MessageCircle size={20}/>, color: "text-[#C5A059]" },
        { title: "Français Pro", desc: "Diplomatie et Business international.", icon: <Briefcase size={20}/>, color: "text-[#D32F2F]" }
      ],
      cta: "Évaluer mon niveau",
      booking: "Réservation Concierge",
      footer: "L'Excellence Française — Tous droits réservés 2026"
    },
    en: {
      title: "French Excellence",
      subtitle: "PRESTIGE • EDUCATION • KUWAIT CITY",
      cards: [
        { title: "Academic Support", desc: "Elite coaching for French curriculum.", icon: <GraduationCap size={20}/>, color: "text-[#0047AB]" },
        { title: "Conversation", desc: "Master the art of eloquent speech.", icon: <MessageCircle size={20}/>, color: "text-[#C5A059]" },
        { title: "Professional French", desc: "Diplomacy & International Business.", icon: <Briefcase size={20}/>, color: "text-[#D32F2F]" }
      ],
      cta: "Start Assessment",
      booking: "Concierge Booking",
      footer: "French Excellence — All rights reserved 2026"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فخامة • تعليم • مدينة الكويت",
      cards: [
        { title: "الدعم الأكاديمي", desc: "تدريب متميز للمنهج الفرنسي.", icon: <GraduationCap size={20}/>, color: "text-[#0047AB]" },
        { title: "المحادثة", desc: "إتقان فن التحدث بكل رقي.", icon: <MessageCircle size={20}/>, color: "text-[#C5A059]" },
        { title: "الفرنسية المهنية", desc: "الأعمال والدبلوماسية الدولية.", icon: <Briefcase size={20}/>, color: "text-[#D32F2F]" }
      ],
      cta: "ابدأ اختبار المستوى",
      booking: "حجز موعد خاص",
      footer: "التميز الفرنسي — جميع الحقوق محفوظة ٢٠٢٦"
    }
  };

  const t = content[lang];
  const isAr = lang === 'ar';

  const repondreQuiz = (p) => { setScore(score + p); if (currentQuestion + 1 < 3) setCurrentQuestion(currentQuestion + 1); else setQuizTermine(true); };
  const envoyerWhatsApp = () => { window.open(`https://wa.me/33667569993?text=Nom: ${nom}. RDV: ${selectedDay} ${selectedTime}.`, '_blank'); };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* LANGUAGE SELECTOR */}
      <nav className="fixed top-24 right-8 z-[70] flex flex-col gap-3">
        {['fr', 'en', 'ar'].map((l) => (
          <button key={l} onClick={() => setLang(l)} className={`w-11 h-11 rounded-full border-[0.5px] bg-white shadow-sm flex items-center justify-center text-[10px] font-bold tracking-tighter transition-all hover:scale-110 active:scale-95 ${lang === l ? 'border-black text-black' : 'border-gray-100 text-gray-300'}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </nav>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-6xl mx-auto px-8 pt-24 pb-32">
        
        {/* HEADER SECTION */}
        <header className="text-center mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[#C5A059] text-[10px] tracking-[0.8em] font-medium mb-6 uppercase">{t.subtitle}</p>
            <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter mb-12">{t.title}</h1>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span className="w-12 h-[0.5px] bg-current"></span>
              <Globe size={16} />
              <span className="w-12 h-[0.5px] bg-current"></span>
            </div>
          </motion.div>
        </header>

        {/* BENTO GRID SERVICES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-10 bg-white rounded-3xl border-[0.5px] border-gray-100 shadow-sm flex flex-col justify-between min-h-[320px] transition-all group"
            >
              <div className={isAr ? 'text-right' : 'text-left'}>
                <div className={`mb-8 p-3 inline-block rounded-2xl bg-[#F9FAFB] ${card.color}`}>
                  {card.icon}
                </div>
                <h2 className="text-2xl font-serif italic mb-4 tracking-tight">{card.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{card.desc}</p>
              </div>
              <div className={`flex items-center gap-2 pt-8 text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all ${isAr ? 'flex-row-reverse' : ''}`}>
                <span>{isAr ? 'اكتشف' : 'Découvrir'}</span>
                <ChevronRight size={12} />
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA SECTION */}
        <section className="flex justify-center mb-32">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {setShowQuiz(true); setQuizTermine(false);}}
            className="px-12 py-6 bg-[#111827] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.4em] shadow-xl hover:bg-black transition-all"
          >
            {t.cta}
          </motion.button>
        </section>

        {/* BENTO BOOKING SECTION */}
        <section className="bg-white rounded-[40px] border-[0.5px] border-gray-100 p-12 md:p-20 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-30"></div>
          <div className={`flex flex-col md:flex-row justify-between items-start gap-16 ${isAr ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
            <div className="max-w-xs">
              <h2 className="text-4xl font-serif italic mb-6 tracking-tight">{t.booking}</h2>
              <p className="text-gray-400 text-sm font-light">Service exclusif disponible sur rendez-vous uniquement.</p>
            </div>
            
            <div className="flex-1 w-full grid grid-cols-1 gap-12">
              <div className="space-y-6">
                <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase">{t.step1}</span>
                <div className="flex flex-wrap gap-3">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                    <button key={d} onClick={() => setSelectedDay(d)} className={`px-6 py-3 rounded-xl text-xs border-[0.5px] transition-all ${selectedDay === d ? 'bg-black text-white border-black' : 'bg-white border-gray-100 hover:border-black'}`}>{d}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase">{t.step2}</span>
                <div className="flex flex-wrap gap-3">
                  {['10:00', '14:00', '16:00', '18:00', '20:00'].map(h => (
                    <button key={h} onClick={() => setSelectedTime(h)} className={`px-6 py-3 rounded-xl text-xs border-[0.5px] transition-all ${selectedTime === h ? 'bg-black text-white border-black' : 'bg-white border-gray-100 hover:border-black'}`}>{h}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-gray-50 text-center">
        <p className="text-[9px] text-gray-300 tracking-[0.5em] font-light uppercase">{t.footer}</p>
      </footer>

      {/* MODAL CONCIERGE */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#F9FAFB]/95 backdrop-blur-md">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-12 md:p-16 rounded-[40px] border-[0.5px] border-gray-100 shadow-2xl max-w-xl w-full">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-serif italic tracking-tight">Concierge</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-300 hover:text-black transition-colors"><X size={20}/></button>
              </div>
              <div className="space-y-10">
                <input type="text" placeholder="Full Name" onChange={(e)=>setNom(e.target.value)} className="w-full py-4 bg-transparent border-b-[0.5px] border-gray-100 outline-none focus:border-black transition-all text-lg font-light" />
                <textarea placeholder="Your Message" onChange={(e)=>setMessage(e.target.value)} className="w-full py-4 bg-transparent border-b-[0.5px] border-gray-100 h-24 resize-none outline-none focus:border-black transition-all text-lg font-light" />
                <button onClick={envoyerWhatsApp} className="w-full py-6 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.3em]">Envoyer</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={quizTermine} currentQuestion={currentQuestion} questions={[]} repondreQuiz={repondreQuiz} score={score} setShowModal={setShowModal} />
    </div>
  );
}

export default App;