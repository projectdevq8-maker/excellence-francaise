import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, MessageSquare, Briefcase, Moon, Sun, 
  ArrowRight, Globe, Award, Sparkles, Calendar, 
  CheckCircle2, ChevronRight, X, Phone 
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
  const [message, setMessage] = useState('');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizTermine, setQuizTermine] = useState(false);

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
      cards: [
        { id: 1, title: "Soutien Scolaire", icon: <GraduationCap size={28} />, desc: "Coaching d'élite, cursus français.", tag: "RÉUSSITE", color: "text-[#0047AB]" },
        { id: 2, title: "Art de Vivre", icon: <Sparkles size={28} />, desc: "L'éloquence et le savoir-vivre.", tag: "POPULAIRE", color: "text-[#C5A059]", popular: true },
        { id: 3, title: "Français Pro", icon: <Briefcase size={28} />, desc: "Diplomatie et Business.", tag: "CARRIÈRE", color: "text-[#D32F2F]" }
      ],
      cta: "Évaluer mon niveau",
      booking: "Conciergerie & Agenda",
      step1: "1. Sélectionner le Jour",
      step2: "2. Choisir l'Heure",
      send: "Réserver via WhatsApp",
      footer: "L'Excellence Française — 2026"
    },
    en: {
      title: "French Excellence",
      subtitle: "PRESTIGE • EDUCATION • KUWAIT",
      heroDesc: "The art of teaching and the luxury of knowledge at the service of your success.",
      cards: [
        { id: 1, title: "Academic Support", icon: <GraduationCap size={28} />, desc: "Elite coaching, French curriculum.", tag: "SUCCESS", color: "text-[#0047AB]" },
        { id: 2, title: "Lifestyle", icon: <Sparkles size={28} />, desc: "Eloquence and savoir-vivre.", tag: "POPULAR", color: "text-[#C5A059]", popular: true },
        { id: 3, title: "Professional French", icon: <Briefcase size={28} />, desc: "Diplomacy and Business.", tag: "CAREER", color: "text-[#D32F2F]" }
      ],
      cta: "Assess my level",
      booking: "Concierge & Booking",
      step1: "1. Select Day",
      step2: "2. Select Time",
      send: "Book via WhatsApp",
      footer: "French Excellence — 2026"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فخامة • تعليم • مدينة الكويت",
      heroDesc: "فن النقل وفخامة المعرفة في خدمة نجاحكم.",
      cards: [
        { id: 1, title: "الدعم الأكاديمي", icon: <GraduationCap size={28} />, desc: "تدريب متميز للمنهج الفرنسي.", tag: "نجاح", color: "text-[#0047AB]" },
        { id: 2, title: "فن الحياة", icon: <Sparkles size={28} />, desc: "الرقي وأصول اللياقة الفرنسية.", tag: "مطلوب", color: "text-[#C5A059]", popular: true },
        { id: 3, title: "الفرنسية المهنية", icon: <Briefcase size={28} />, desc: "الأعمال والدبلوماسية.", tag: "مهني", color: "text-[#D32F2F]" }
      ],
      cta: "ابدأ اختبار المستوى",
      booking: "حجز موعد خاص",
      step1: "١. اختر اليوم",
      step2: "٢. اختر الوقت",
      send: "إرسال عبر واتساب",
      footer: "التميز الفرنسي — ٢٠٢٦"
    }
  };

  const t = content[lang];
  const isAr = lang === 'ar';

  const envoyerWhatsApp = () => {
    const texte = `Bonjour Excellence. Nom: ${nom}. RDV: ${selectedDay} à ${selectedTime}. Langue: ${lang}.`;
    window.open(`https://wa.me/33667569993?text=${encodeURIComponent(texte)}`, '_blank');
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${darkMode ? 'bg-[#0A0A0A] text-white' : 'bg-[#FDFDFD] text-[#1A1A1A]'} font-['Inter'] overflow-x-hidden`}>
      
      {/* --- INTERFACE NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-[100] px-8 md:px-12 py-8 flex justify-between items-center backdrop-blur-md border-b border-gray-100 dark:border-gray-900">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-['Playfair_Display'] italic text-2xl font-bold text-[#C5A059]">EF</motion.div>
        
        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex gap-4">
            {['fr', 'en', 'ar'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold tracking-widest uppercase transition-all ${lang === l ? 'text-[#C5A059]' : 'text-gray-300 hover:text-black dark:hover:text-white'}`}>
                {l}
              </button>
            ))}
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-50 dark:bg-gray-900 rounded-full transition-all">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setShowModal(true)} className="bg-[#1A1A1A] dark:bg-white dark:text-black text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg">
            Contact
          </button>
        </div>
      </nav>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-48 pb-40">
        
        {/* --- SECTION HERO (MASSIVE) --- */}
        <header className="text-center mb-56 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="flex justify-center items-center gap-4 mb-10">
              <span className="h-[1px] w-12 bg-[#C5A059] opacity-30"></span>
              <p className="text-[#C5A059] text-[11px] tracking-[0.8em] font-medium uppercase">{t.subtitle}</p>
              <span className="h-[1px] w-12 bg-[#C5A059] opacity-30"></span>
            </div>
            <h1 className="font-['Playfair_Display'] text-6xl md:text-[120px] italic leading-[0.85] mb-12 tracking-tighter">
              {t.title}
            </h1>
            <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light mb-16 italic">
              "{t.heroDesc}"
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setShowQuiz(true)}
              className="px-12 py-6 bg-[#1A1A1A] dark:bg-white dark:text-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.4em] shadow-2xl flex items-center gap-4 mx-auto group"
            >
              {t.cta} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </header>

        {/* --- BENTO GRID SERVICES (COMPLEXE) --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-56">
          {t.cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -15, shadow: "0 50px 100px -20px rgba(0,0,0,0.15)" }}
              className={`p-14 rounded-[50px] border-[0.5px] ${darkMode ? 'bg-[#111] border-gray-800' : 'bg-white border-gray-100'} shadow-sm flex flex-col justify-between min-h-[500px] relative overflow-hidden group`}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-20"></div>
              
              <div className={isAr ? 'text-right' : 'text-left'}>
                <div className={`mb-10 p-4 inline-block rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'} ${card.color} group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[9px] font-black tracking-widest uppercase py-1 px-3 bg-[#C5A059]/10 text-[#C5A059] rounded-full">
                    {card.tag}
                  </span>
                </div>
                <h2 className="font-['Playfair_Display'] text-4xl italic mb-6 tracking-tight">{card.title}</h2>
                <p className="text-gray-400 font-light leading-relaxed text-lg">{card.desc}</p>
              </div>

              <div className={`flex items-center gap-3 pt-10 border-t ${darkMode ? 'border-gray-800' : 'border-gray-50'} ${isAr ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                  <ChevronRight size={14} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">Prestige Level</span>
              </div>
            </motion.div>
          ))}
        </section>

        {/* --- RÉSERVATION & AGENDA (BENTO LARGE) --- */}
        <section className={`rounded-[80px] p-12 md:p-24 ${darkMode ? 'bg-[#111]' : 'bg-white'} border-[0.5px] border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden`}>
          <div className={`flex flex-col md:flex-row gap-20 items-center ${isAr ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
            <div className="flex-1">
              <h2 className="font-['Playfair_Display'] text-5xl italic mb-8 tracking-tighter">{t.booking}</h2>
              <div className="space-y-4 text-gray-400 font-light text-lg italic mb-12">
                <p>— Expertise certifiée</p>
                <p>— Accompagnement personnalisé</p>
                <p>— Confidentialité absolue</p>
              </div>
            </div>

            <div className="flex-1 w-full space-y-12">
              <div>
                <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border-l-2 border-[#C5A059] pl-4">{t.step1}</p>
                <div className="flex flex-wrap gap-3">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                    <button key={d} onClick={() => setSelectedDay(d)} className={`px-6 py-3 rounded-xl text-xs border transition-all ${selectedDay === d ? 'bg-black text-white border-black' : 'bg-transparent border-gray-100 dark:border-gray-800 hover:border-black'}`}>{d}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border-l-2 border-[#C5A059] pl-4">{t.step2}</p>
                <div className="flex flex-wrap gap-3">
                  {['10:00', '14:00', '18:00', '20:00'].map(h => (
                    <button key={h} onClick={() => setSelectedTime(h)} className={`px-6 py-3 rounded-xl text-xs border transition-all ${selectedTime === h ? 'bg-black text-white border-black' : 'bg-transparent border-gray-100 dark:border-gray-800 hover:border-black'}`}>{h}</button>
                  ))}
                </div>
              </div>
              <button onClick={envoyerWhatsApp} className="w-full py-5 bg-black dark:bg-white dark:text-black text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-4">
                <Phone size={14} /> {t.send}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-24 text-center border-t border-gray-50 dark:border-gray-900">
        <p className="text-[10px] text-gray-300 tracking-[0.6em] font-light uppercase">{t.footer}</p>
      </footer>

      {/* --- MODALE CONTACT --- */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-white/95 dark:bg-black/95 backdrop-blur-xl">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={`p-16 rounded-[60px] border-[0.5px] ${darkMode ? 'bg-[#0A0A0A] border-gray-800' : 'bg-white border-gray-100'} shadow-2xl max-w-xl w-full relative`}>
              <button onClick={() => setShowModal(false)} className="absolute top-10 right-10 opacity-30 hover:opacity-100 transition-opacity"><X size={24} /></button>
              <h2 className="font-['Playfair_Display'] text-4xl italic mb-12">Concierge</h2>
              <div className="space-y-8">
                <input type="text" placeholder="Full Name" onChange={(e)=>setNom(e.target.value)} className="w-full py-4 bg-transparent border-b border-gray-100 dark:border-gray-800 outline-none focus:border-[#C5A059] text-xl font-light" />
                <textarea placeholder="Your Message" onChange={(e)=>setMessage(e.target.value)} className="w-full py-4 bg-transparent border-b border-gray-100 dark:border-gray-800 h-32 resize-none outline-none focus:border-[#C5A059] text-xl font-light" />
                <button onClick={envoyerWhatsApp} className="w-full py-6 bg-black dark:bg-white dark:text-black text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-xl">Send Request</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} />
    </div>
  );
}

export default App;