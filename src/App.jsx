import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  const [lang, setLang] = useState('en'); // 'en' ou 'ar'
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizTermine, setQuizTermine] = useState(false);

  // Gère la direction Arabe (RTL) ou Anglais (LTR)
  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const content = {
    en: {
      title: "French Excellence",
      subtitle: "The Art of Living • Prestige • Kuwait City",
      cards: [
        { title: "Academic Support", desc: "Elite coaching for French school students.", border: "border-blue-100" },
        { title: "Conversation", desc: "Master the art of speaking with grace and fluidity.", border: "border-[#C5A059]" },
        { title: "Professional French", desc: "Business, Diplomacy & Official Exams.", border: "border-red-100" }
      ],
      testBtn: "✨ Start Level Test",
      bookingTitle: "Book a Private Session",
      step1: "1. Select Day",
      step2: "2. Select Time",
      footer: "Excellence Française • 2026",
      contactTitle: "Concierge Service",
      send: "Send to WhatsApp"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فن الحياة • فخامة • مدينة الكويت",
      cards: [
        { title: "الدعم الأكاديمي", desc: "تدريب متميز لطلاب المدارس الفرنسية.", border: "border-blue-100" },
        { title: "المحادثة", desc: "أتقن فن التحدث بكل رقي وانسيابية.", border: "border-[#C5A059]" },
        { title: "الفرنسية المهنية", desc: "الأعمال، الدبلوماسية والامتحانات الرسمية.", border: "border-red-100" }
      ],
      testBtn: "✨ ابدأ اختبار المستوى",
      bookingTitle: "حجز جلسة خاصة",
      step1: "١. اختر اليوم",
      step2: "٢. اختر الوقت",
      footer: "التميز الفرنسي • ٢٠٢٦",
      contactTitle: "خدمة المساعدة",
      send: "إرسال عبر واتساب"
    }
  };

  const t = content[lang];
  const isAr = lang === 'ar';

  const repondreQuiz = (points) => {
    setScore(score + points);
    if (currentQuestion + 1 < 3) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizTermine(true);
    }
  };

  const envoyerWhatsApp = () => {
    const numero = "33667569993";
    const texte = `Bonjour. Nom: ${nom}. RDV: ${selectedDay} ${selectedTime}. Message: ${message}`;
    window.open(`https://wa.me/${numero}?text=${texte}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      
      {/* BOUTONS DE LANGUE FLOTTANTS */}
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-3">
        {['en', 'ar'].map((l) => (
          <button 
            key={l}
            onClick={() => setLang(l)} 
            className={`w-12 h-12 rounded-full border-2 transition-all shadow-lg flex items-center justify-center font-bold text-[10px]
              ${lang === l ? 'bg-[#C5A059] border-[#C5A059] text-white scale-110' : 'bg-white border-gray-100 text-gray-400 hover:border-black'}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-6xl mx-auto px-6 pt-12 pb-32 text-center">
        
        {/* TITRE PRINCIPAL */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-serif italic mb-6 tracking-tight">
            {t.title}
          </h1>
          <p className="text-[#C5A059] text-[10px] sm:text-[12px] tracking-[0.6em] uppercase font-light">
            {t.subtitle}
          </p>
        </motion.div>

        {/* CARTES / FORMULES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`p-10 rounded-[45px] bg-white border ${card.border} shadow-xl text-left flex flex-col justify-between min-h-[340px] cursor-pointer`}
            >
              <div>
                <div className="w-10 h-1 bg-[#C5A059] mb-6"></div>
                <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{card.desc}</p>
              </div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">Prestige Service →</div>
            </motion.div>
          ))}
        </div>

        {/* BOUTON TEST */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-32">
          <button 
            onClick={() => {setShowQuiz(true); setQuizTermine(false); setCurrentQuestion(0); setScore(0);}}
            className="px-12 py-5 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] transition-all shadow-2xl"
          >
            {t.testBtn}
          </button>
        </motion.div>

        {/* AGENDA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#FBFBFB] rounded-[60px] p-10 md:p-20 border border-gray-100 shadow-inner max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-serif italic mb-16">{t.bookingTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-8 tracking-widest border-l-2 border-[#C5A059] pl-4">{t.step1}</p>
              <div className="flex flex-wrap gap-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <button key={d} onClick={() => setSelectedDay(d)} className={`px-6 py-3 rounded-2xl text-[12px] border transition-all ${selectedDay === d ? 'bg-black text-white border-black shadow-lg' : 'bg-white border-gray-200 hover:border-black'}`}>{d}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-8 tracking-widest border-l-2 border-[#C5A059] pl-4">{t.step2}</p>
              <div className="flex flex-wrap gap-3">
                {['10:00', '14:00', '16:00', '18:00', '20:00'].map(h => (
                  <button key={h} onClick={() => setSelectedTime(h)} className={`px-6 py-3 rounded-2xl text-[12px] border transition-all ${selectedTime === h ? 'bg-black text-white border-black shadow-lg' : 'bg-white border-gray-200 hover:border-black'}`}>{h}</button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* MODALE CONTACT */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/90 backdrop-blur-xl">
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-2xl max-w-md w-full text-left">
              <h2 className="text-3xl font-serif italic mb-8">{t.contactTitle}</h2>
              <input type="text" placeholder="Name" onChange={(e)=>setNom(e.target.value)} className="w-full py-4 border-b outline-none focus:border-[#C5A059] mb-4" />
              <textarea placeholder="Message" onChange={(e)=>setMessage(e.target.value)} className="w-full py-4 border-b h-24 resize-none outline-none focus:border-[#C5A059] mb-8"></textarea>
              <div className="flex gap-4">
                <button onClick={() => setShowModal(false)} className="text-[10px] font-bold uppercase text-gray-400">Back</button>
                <button onClick={envoyerWhatsApp} className="flex-1 py-5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">{t.send}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Quiz 
        showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={quizTermine} 
        currentQuestion={currentQuestion} questions={[]} 
        repondreQuiz={repondreQuiz} score={score} setShowModal={setShowModal} 
      />

      <footer className="pb-16 text-center text-[9px] text-gray-300 tracking-[0.5em] uppercase font-light">
        {t.footer}
      </footer>
    </div>
  );
}

export default App;