import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const content = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "L'Art de vivre • Prestige • Kuwait City",
      cards: [
        { title: "Soutien Scolaire", desc: "Accompagnement d'élite pour élèves des écoles françaises.", bgColor: "bg-[#0047AB]", textColor: "text-white", tag: "RÉUSSITE" },
        { title: "Conversation", desc: "Maîtrisez l'art de parler avec aisance et élégance parisienne.", bgColor: "bg-white", textColor: "text-gray-900", tag: "POPULAIRE", popular: true },
        { title: "Français Pro", desc: "Business, Diplomatie et examens officiels.", bgColor: "bg-[#D32F2F]", textColor: "text-white", tag: "CARRIÈRE" }
      ],
      testBtn: "✨ Déterminer mon niveau",
      booking: "Conciergerie & Réservations",
      step1: "1. Choisir le Jour",
      step2: "2. Choisir l'Heure",
      send: "Envoyer via WhatsApp",
      footer: "Excellence Française • 2026"
    },
    en: {
      title: "French Excellence",
      subtitle: "The Art of Living • Prestige • Kuwait City",
      cards: [
        { title: "Academic Support", desc: "Elite coaching for French school students.", bgColor: "bg-[#0047AB]", textColor: "text-white", tag: "SUCCESS" },
        { title: "Conversation", desc: "Master the art of speaking with grace and fluidity.", bgColor: "bg-white", textColor: "text-gray-900", tag: "POPULAR", popular: true },
        { title: "Professional French", desc: "Business, Diplomacy & Official Exams.", bgColor: "bg-[#D32F2F]", textColor: "text-white", tag: "CAREER" }
      ],
      testBtn: "✨ Determine my Level",
      booking: "Booking & Concierge",
      step1: "1. Select Day",
      step2: "2. Select Time",
      send: "Send to WhatsApp",
      footer: "French Excellence • 2026"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فن الحياة • فخامة • مدينة الكويت",
      cards: [
        { title: "الدعم الأكاديمي", desc: "تدريب متميز لطلاب المدارس الفرنسية.", bgColor: "bg-[#0047AB]", textColor: "text-white", tag: "نجاح" },
        { title: "المحادثة", desc: "أتقن فن التحدث بكل رقي وانسيابية باريسية.", bgColor: "bg-white", textColor: "text-gray-900", tag: "مطلوب", popular: true },
        { title: "الفرنسية المهنية", desc: "الأعمال، الدبلوماسية والامتحانات الرسمية.", bgColor: "bg-[#D32F2F]", textColor: "text-white", tag: "مهني" }
      ],
      testBtn: "✨ ابدأ اختبار المستوى",
      booking: "حجز موعد خاص",
      step1: "١. اختر اليوم",
      step2: "٢. اختر الوقت",
      send: "إرسال عبر واتساب",
      footer: "التميز الفرنسي • ٢٠٢٦"
    }
  };

  const t = content[lang];

  const envoyerWhatsApp = () => {
    const numero = "33667569993";
    const texte = `Bonjour Excellence Française. Nom: ${nom}. RDV souhaité: ${selectedDay} à ${selectedTime}. Langue: ${lang}. Message: ${message}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texte)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C5A059]">
      
      {/* Sélecteur de langue */}
      <div className="fixed top-24 right-6 z-[60] flex flex-col gap-2">
        {['fr', 'en', 'ar'].map((l) => (
          <button key={l} onClick={() => setLang(l)} className={`w-10 h-10 rounded-full border shadow-lg font-bold text-[9px] flex items-center justify-center transition-all ${lang === l ? 'bg-[#C5A059] text-white' : 'bg-white text-gray-300'}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-32 text-center">
        
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-6 tracking-tighter leading-tight">{t.title}</h1>
          <p className="text-[#C5A059] text-[11px] tracking-[0.6em] uppercase font-light">{t.subtitle}</p>
        </motion.div>

        {/* Cartes Bleu Blanc Rouge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className={`p-10 rounded-[45px] border-2 border-[#C5A059] ${card.bgColor} ${card.textColor} flex flex-col justify-between min-h-[380px] shadow-2xl relative text-left transition-all`}
            >
              <div className="absolute top-6 right-8 text-[8px] font-black px-3 py-1 rounded-full border border-current opacity-50 uppercase tracking-widest">{card.tag}</div>
              <div>
                <div className={`w-10 h-1 mb-8 ${card.bgColor === 'bg-white' ? 'bg-[#C5A059]' : 'bg-white'}`}></div>
                <h2 className="text-3xl font-bold mb-6">{card.title}</h2>
                <p className="text-base opacity-80 leading-relaxed">{card.desc}</p>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest pt-4 border-t border-current/10">Prestige Service →</div>
            </motion.div>
          ))}
        </div>

        {/* Bouton Quiz */}
        <button 
          onClick={() => setShowQuiz(true)}
          className="px-16 py-6 bg-black text-white rounded-full text-[12px] font-black uppercase tracking-[0.4em] hover:bg-[#C5A059] transition-all shadow-2xl mb-40"
        >
          {t.testBtn}
        </button>

        {/* AGENDA RESTAURÉ */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#FBFBFB] rounded-[60px] p-12 md:p-24 border border-gray-100 shadow-inner max-w-6xl mx-auto mb-32">
          <h2 className="text-4xl font-serif italic mb-16">{t.booking}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-8 tracking-widest border-l-2 border-[#C5A059] pl-4">{t.step1}</p>
              <div className="flex flex-wrap gap-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <button key={d} onClick={() => setSelectedDay(d)} className={`px-6 py-3 rounded-2xl border transition-all ${selectedDay === d ? 'bg-black text-white' : 'bg-white border-gray-200 hover:border-black'}`}>{d}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-8 tracking-widest border-l-2 border-[#C5A059] pl-4">{t.step2}</p>
              <div className="flex flex-wrap gap-3">
                {['10:00', '14:00', '16:00', '18:00', '20:00'].map(h => (
                  <button key={h} onClick={() => setSelectedTime(h)} className={`px-6 py-3 rounded-2xl border transition-all ${selectedTime === h ? 'bg-black text-white' : 'bg-white border-gray-200 hover:border-black'}`}>{h}</button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* MODAL CONTACT RESTAURÉ */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/95 backdrop-blur-xl">
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }} className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-3xl max-w-xl w-full text-left">
              <h2 className="text-3xl font-serif italic mb-8">Concierge</h2>
              <input type="text" placeholder="Full Name" onChange={(e)=>setNom(e.target.value)} className="w-full py-4 border-b border-gray-100 outline-none focus:border-[#C5A059] mb-4" />
              <textarea placeholder="Your Message" onChange={(e)=>setMessage(e.target.value)} className="w-full py-4 border-b border-gray-100 h-24 mb-10 outline-none focus:border-[#C5A059] resize-none"></textarea>
              <div className="flex gap-4">
                <button onClick={() => setShowModal(false)} className="text-[10px] font-bold uppercase text-gray-400">Close</button>
                <button onClick={envoyerWhatsApp} className="flex-1 py-5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest">Send to WhatsApp</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={false} currentQuestion={0} questions={[]} repondreQuiz={()=>{}} score={score} setShowModal={setShowModal} />

      <footer className="pb-16 text-center text-[9px] text-gray-300 tracking-[0.5em] uppercase font-light">
        {t.footer}
      </footer>
    </div>
  );
}

export default App;