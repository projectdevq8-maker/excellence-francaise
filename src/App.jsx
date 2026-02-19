import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  const [lang, setLang] = useState('fr'); // Français par défaut
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
      subtitle: "L'Art de vivre • Prestige • Kuwait City",
      cards: [
        { title: "Soutien Scolaire", desc: "Accompagnement d'élite pour élèves des écoles françaises. Résultats garantis.", bgColor: "bg-[#0047AB]", textColor: "text-white", tag: "RÉUSSITE" },
        { title: "Conversation", desc: "Maîtrisez l'art de parler avec aisance et élégance parisienne.", bgColor: "bg-white", textColor: "text-gray-900", tag: "POPULAIRE", popular: true },
        { title: "Français Pro", desc: "Business, Diplomatie et préparation aux examens officiels.", bgColor: "bg-[#D32F2F]", textColor: "text-white", tag: "CARRIÈRE" }
      ],
      testBtn: "✨ Déterminer mon niveau",
      booking: "Conciergerie & Réservations",
      step1: "1. Choisir le Jour",
      step2: "2. Choisir l'Heure",
      send: "Envoyer via WhatsApp"
    },
    en: {
      title: "French Excellence",
      subtitle: "The Art of Living • Prestige • Kuwait City",
      cards: [
        { title: "Academic Support", desc: "Elite coaching for French school students. High performance.", bgColor: "bg-[#0047AB]", textColor: "text-white", tag: "SUCCESS" },
        { title: "Conversation", desc: "Master the art of speaking with grace and fluidity.", bgColor: "bg-white", textColor: "text-gray-900", tag: "POPULAR", popular: true },
        { title: "Professional French", desc: "Business, Diplomacy & Official Exams.", bgColor: "bg-[#D32F2F]", textColor: "text-white", tag: "CAREER" }
      ],
      testBtn: "✨ Determine my Level",
      booking: "Booking & Concierge",
      step1: "1. Select Day",
      step2: "2. Select Time",
      send: "Send to WhatsApp"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فن الحياة • فخامة • مدينة الكويت",
      cards: [
        { title: "الدعم الأكاديمي", desc: "تدريب متميز لطلاب المدارس الفرنسية. نتائج عالية.", bgColor: "bg-[#0047AB]", textColor: "text-white", tag: "نجاح" },
        { title: "المحادثة", desc: "أتقن فن التحدث بكل رقي وانسيابية باريسية.", bgColor: "bg-white", textColor: "text-gray-900", tag: "مطلوب", popular: true },
        { title: "الفرنسية المهنية", desc: "الأعمال، الدبلوماسية والامتحانات الرسمية.", bgColor: "bg-[#D32F2F]", textColor: "text-white", tag: "مهني" }
      ],
      testBtn: "✨ ابدأ اختبار المستوى",
      booking: "حجز موعد خاص",
      step1: "١. اختر اليوم",
      step2: "٢. اختر الوقت",
      send: "إرسال عبر واتساب"
    }
  };

  const t = content[lang];
  const isAr = lang === 'ar';

  const repondreQuiz = (points) => {
    setScore(score + points);
    if (currentQuestion + 1 < 3) setCurrentQuestion(currentQuestion + 1);
    else setQuizTermine(true);
  };

  const envoyerWhatsApp = () => {
    const numero = "33667569993";
    const texte = `Bonjour. Nom: ${nom}. RDV: ${selectedDay} ${selectedTime}. Langue: ${lang}.`;
    window.open(`https://wa.me/${numero}?text=${texte}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* SÉLECTEUR DE LANGUE (DISCRET ET LUXUEUX) */}
      <div className="fixed top-24 right-6 z-[60] flex flex-col gap-2">
        {['fr', 'en', 'ar'].map((l) => (
          <button 
            key={l} 
            onClick={() => setLang(l)} 
            className={`w-10 h-10 rounded-full border shadow-lg font-bold text-[9px] transition-all flex items-center justify-center
              ${lang === l ? 'bg-[#C5A059] text-white border-[#C5A059] scale-110' : 'bg-white text-gray-300 hover:border-black'}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-32 text-center">
        
        {/* HERO SECTION */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-24">
          <div className="flex justify-center gap-4 mb-8">
            <img src="https://flagcdn.com/w80/fr.png" alt="FR" className="w-10 shadow-sm" />
            <div className="w-[1px] bg-gray-200 h-8"></div>
            <img src="https://flagcdn.com/w80/kw.png" alt="KW" className="w-10 shadow-sm" />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-6 tracking-tighter leading-tight">{t.title}</h1>
          <p className="text-[#C5A059] text-[11px] tracking-[0.6em] uppercase font-light">{t.subtitle}</p>
        </motion.div>

        {/* LES FORMULES (BLEU BLANC ROUGE + ANIMATIONS RESTAURÉES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 px-4 relative">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 50 }}
              whileHover={{ y: -20, scale: 1.02, boxShadow: "0 40px 80px -20px rgba(0,0,0,0.15)" }}
              className={`p-10 rounded-[45px] border-2 border-[#C5A059] ${card.bgColor} ${card.textColor} flex flex-col justify-between min-h-[380px] relative text-left shadow-2xl transition-all group overflow-hidden`}
            >
              {card.popular && (
                <div className="absolute top-6 right-8 bg-[#C5A059] text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-10">
                  {card.tag}
                </div>
              )}
              {!card.popular && (
                <div className={`absolute top-6 right-8 text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-current opacity-30`}>
                  {card.tag}
                </div>
              )}

              <div className={isAr ? 'text-right' : 'text-left'}>
                <div className={`w-12 h-1 mb-8 ${card.bgColor === 'bg-white' ? 'bg-[#C5A059]' : 'bg-white'}`}></div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">{card.title}</h2>
                <p className={`text-base leading-relaxed font-light ${card.bgColor === 'bg-white' ? 'text-gray-500' : 'opacity-80'}`}>
                  {card.desc}
                </p>
              </div>

              <div className={`flex items-center gap-3 mt-10 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${card.bgColor === 'bg-white' ? 'border-gray-100' : 'border-white/20'}`}>
                   <span className="text-xs">→</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">{isAr ? 'تفاصيل' : 'Détails'}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION TEST & SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-y border-gray-50 py-16">
          {["Sur-mesure", "Excellence", "Prestige"].map((item, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-2 italic">{item}</h3>
              <div className="w-8 h-[1px] bg-gray-100 mx-auto"></div>
            </div>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => {setShowQuiz(true); setQuizTermine(false);}}
          className="px-16 py-6 bg-black text-white rounded-full text-[12px] font-black uppercase tracking-[0.4em] hover:bg-[#C5A059] transition-all shadow-2xl mb-40"
        >
          {t.testBtn}
        </motion.button>

        {/* AGENDA LUXE RESTAURÉ */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#FBFBFB] rounded-[60px] p-12 md:p-24 border border-gray-100 shadow-inner max-w-6xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059]"></div>
          <h2 className={`text-4xl font-serif italic mb-16 ${isAr ? 'text-right' : ''}`}>{t.booking}</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-20 ${isAr ? 'text-right' : ''}`}>
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-8 tracking-widest pl-4 border-l-2 border-[#C5A059]">{t.step1}</p>
              <div className="flex flex-wrap gap-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <button key={d} onClick={() => setSelectedDay(d)} className={`px-6 py-3 rounded-2xl text-[12px] border transition-all ${selectedDay === d ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-black'}`}>{d}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-8 tracking-widest pl-4 border-l-2 border-[#C5A059]">{t.step2}</p>
              <div className="flex flex-wrap gap-3">
                {['10:00', '14:00', '16:00', '18:00', '20:00'].map(h => (
                  <button key={h} onClick={() => setSelectedTime(h)} className={`px-6 py-3 rounded-2xl text-[12px] border transition-all ${selectedTime === h ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-black'}`}>{h}</button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* MODALE CONCIERGERIE */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/95 backdrop-blur-xl">
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="bg-white p-16 rounded-[60px] border border-gray-100 shadow-3xl max-w-xl w-full">
              <h2 className="text-4xl font-serif italic mb-8">Concierge</h2>
              <input type="text" placeholder="Full Name" onChange={(e)=>setNom(e.target.value)} className="w-full py-5 border-b border-gray-100 outline-none focus:border-[#C5A059] mb-6 text-xl" />
              <textarea placeholder="Your Message" onChange={(e)=>setMessage(e.target.value)} className="w-full py-5 border-b border-gray-100 h-24 resize-none outline-none focus:border-[#C5A059] mb-12 text-xl"></textarea>
              <div className="flex gap-4">
                <button onClick={() => setShowModal(false)} className="text-[10px] font-bold uppercase text-gray-400">Back</button>
                <button onClick={envoyerWhatsApp} className="flex-1 py-6 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">{t.send}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={quizTermine} currentQuestion={currentQuestion} questions={[]} repondreQuiz={repondreQuiz} score={score} setShowModal={setShowModal} />

      <footer className="pb-16 text-center text-[9px] text-gray-300 tracking-[0.5em] uppercase font-light">
        Excellence Française • 2026
      </footer>
    </div>
  );
}

export default App;