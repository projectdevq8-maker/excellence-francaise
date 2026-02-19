import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  const [lang, setLang] = useState('en');
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');

  // Pour gérer la direction de la page automatiquement
  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const content = {
    en: {
      title: "French Excellence",
      subtitle: "The Art of Living • Prestige • Kuwait City",
      cards: [
        { title: "Academic Support", desc: "Elite coaching for French school students.", color: "border-blue-100" },
        { title: "Conversation", desc: "Master the art of speaking with grace and fluidity.", color: "border-[#C5A059]" },
        { title: "Professional French", desc: "Business, Diplomacy & Official Exams.", color: "border-red-100" }
      ],
      bookingTitle: "Reserve a Session",
      step1: "1. Select Day",
      step2: "2. Select Time",
      cta: "Determine my Level",
      send: "Send Request",
      back: "Back"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فن الحياة • فخامة • مدينة الكويت",
      cards: [
        { title: "الدعم الأكاديمي", desc: "تدريب متميز لطلاب المدارس الفرنسية.", color: "border-blue-100" },
        { title: "المحادثة", desc: "أتقن فن التحدث بكل رقي وانسيابية.", color: "border-[#C5A059]" },
        { title: "الفرنسية المهنية", desc: "الأعمال، الدبلوماسية والامتحانات الرسمية.", color: "border-red-100" }
      ],
      bookingTitle: "حجز جلسة خاصة",
      step1: "١. اختر اليوم",
      step2: "٢. اختر الوقت",
      cta: "حدد مستواي الآن",
      send: "إرسال الطلب",
      back: "عودة"
    }
  };

  const t = content[lang];
  const isAr = lang === 'ar';

  const envoyerWhatsApp = () => {
    const numero = "33667569993";
    const texte = `Bonjour. %0A*Nom:* ${nom}. %0A*Langue:* ${lang}. %0A*RDV:* ${selectedDay} à ${selectedTime}. %0A*Message:* ${message}`;
    window.open(`https://wa.me/${numero}?text=${texte}`, '_blank');
  };

  return (
    <div className={`min-h-screen bg-white text-gray-900 font-sans transition-colors duration-700`}>
      
      {/* Sélecteur de langue flottant */}
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-2">
        {['en', 'ar'].map((l) => (
          <button 
            key={l}
            onClick={() => setLang(l)} 
            className={`w-10 h-10 rounded-full border text-[10px] font-black transition-all shadow-sm flex items-center justify-center
              ${lang === l ? 'bg-black text-white scale-110' : 'bg-white text-gray-400 hover:border-black hover:text-black'}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-6xl mx-auto px-6 pt-12 pb-32 text-center">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex justify-center gap-4 mb-8 opacity-60">
            <img src="https://flagcdn.com/w40/fr.png" alt="FR" className="h-4 object-contain" />
            <img src="https://flagcdn.com/w40/kw.png" alt="KW" className="h-4 object-contain" />
          </div>
          <h1 className="text-5xl md:text-8xl font-serif italic mb-6 tracking-tighter">
            {t.title}
          </h1>
          <p className="text-[#C5A059] text-[10px] sm:text-[12px] tracking-[0.6em] uppercase font-light">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Formules avec animations fluides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 px-4">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -12, shadow: "0 30px 60px -12px rgba(0,0,0,0.12)" }}
              className={`p-10 rounded-[45px] bg-white border ${card.color} shadow-sm transition-all text-left flex flex-col justify-between min-h-[320px]`}
            >
              <div>
                <h2 className="text-2xl font-bold mb-4 tracking-tight">{card.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{card.desc}</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">Prestige</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors">
                   <span className="text-xs">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton Test de Niveau */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          className="mb-32"
        >
          <button 
            onClick={() => setShowQuiz(true)}
            className="group relative px-14 py-6 bg-black rounded-full overflow-hidden transition-all active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 text-white text-[11px] font-bold uppercase tracking-[0.4em]">
              {t.cta}
            </span>
            <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </motion.div>

        {/* Agenda Section (Light Mode) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FBFBFB] rounded-[60px] p-10 md:p-20 max-w-5xl mx-auto border border-gray-100 shadow-inner"
        >
          <h2 className="text-4xl font-serif italic mb-16">{t.bookingTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-8 tracking-widest pl-4 border-l-2 border-[#C5A059]">
                {t.step1}
              </p>
              <div className="flex flex-wrap gap-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <button 
                    key={d} 
                    onClick={() => setSelectedDay(d)}
                    className={`px-6 py-3 rounded-2xl text-[12px] font-medium transition-all border 
                      ${selectedDay === d ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-black'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-8 tracking-widest pl-4 border-l-2 border-[#C5A059]">
                {t.step2}
              </p>
              <div className="flex flex-wrap gap-3">
                {['10:00', '14:00', '16:00', '18:00', '20:00'].map(h => (
                  <button 
                    key={h} 
                    onClick={() => setSelectedTime(h)}
                    className={`px-6 py-3 rounded-2xl text-[12px] font-medium transition-all border 
                      ${selectedTime === h ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-black'}`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Modale de Contact / Conciergerie */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/80 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.9 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-[0_50px_100px_rgba(0,0,0,0.1)] max-w-md w-full"
            >
              <h2 className="text-4xl font-serif italic mb-8">{isAr ? 'اتصال' : 'Concierge'}</h2>
              <div className="space-y-6">
                <input 
                  type="text" 
                  placeholder={isAr ? 'الاسم الكامل' : 'Full