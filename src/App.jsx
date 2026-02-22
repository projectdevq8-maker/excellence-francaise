import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

// Ajout du CSS global directement pour garantir le box-sizing
const globalStyles = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    overflow-x: hidden;
  }
`;

function App() {
  const [lang, setLang] = useState('fr');
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const content = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "L'Art de vivre • Prestige • Kuwait City",
      cards: [
        { title: "Soutien Scolaire", desc: "Accompagnement d'élite pour élèves des écoles françaises.", bgColor: "bg-[#0047AB]", textColor: "text-white" },
        { title: "Conversation", desc: "Maîtrisez l'art de parler avec aisance et élégance parisienne.", bgColor: "bg-white", textColor: "text-gray-900" },
        { title: "Français Pro", desc: "Business, Diplomatie et préparation examens.", bgColor: "bg-[#D32F2F]", textColor: "text-white" }
      ],
      testBtn: "✨ Testez votre niveau",
      booking: "Réserver une séance",
      step1: "1. Jour",
      step2: "2. Heure",
      send: "Envoyer la demande",
      footer: "L'Excellence Française • 2026"
    },
    en: {
      title: "French Excellence",
      subtitle: "The Art of Living • Prestige • Kuwait City",
      cards: [
        { title: "Academic Support", desc: "Elite coaching for French school students.", bgColor: "bg-[#0047AB]", textColor: "text-white" },
        { title: "Conversation", desc: "Master the art of speaking with grace and fluidity.", bgColor: "bg-white", textColor: "text-gray-900" },
        { title: "Professional French", desc: "Business, Diplomacy & Official Exams.", bgColor: "bg-[#D32F2F]", textColor: "text-white" }
      ],
      testBtn: "✨ Test your level",
      booking: "Book a session",
      step1: "1. Day",
      step2: "2. Time",
      send: "Send Request",
      footer: "French Excellence • 2026"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فن الحياة • فخامة • مدينة الكويت",
      cards: [
        { title: "الدعم الأكاديمي", desc: "تدريب متميز لطلاب المدارس الفرنسية.", bgColor: "bg-[#0047AB]", textColor: "text-white" },
        { title: "المحادثة", desc: "أتقن فن التحدث بكل رقي وانسيابية.", bgColor: "bg-white", textColor: "text-gray-900" },
        { title: "الفرنسية المهنية", desc: "الأعمال، الدبلوماسية والامتحانات الرسمية.", bgColor: "bg-[#D32F2F]", textColor: "text-white" }
      ],
      testBtn: "✨ ابدأ اختبار المستوى",
      booking: "حجز موعد",
      step1: "١. اليوم",
      step2: "٢. الوقت",
      send: "إرسال الطلب",
      footer: "التميز الفرنسي • ٢٠٢٦"
    }
  };

  const t = content[lang];
  const isAr = lang === 'ar';

  const envoyerWhatsApp = () => {
    const numero = "33667569993";
    const texte = `Bonjour. Nom: ${nom}. RDV: ${selectedDay} à ${selectedTime}. Langue: ${lang}. Message: ${message}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texte)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <style>{globalStyles}</style>
      
      {/* SÉLECTEUR DE LANGUE */}
      <div className="fixed top-24 right-6 z-[60] flex flex-col gap-2">
        {['fr', 'en', 'ar'].map((l) => (
          <button key={l} onClick={() => setLang(l)} className={`w-10 h-10 rounded-full border shadow-lg font-bold text-[10px] flex items-center justify-center transition-all ${lang === l ? 'bg-[#C5A059] text-white' : 'bg-white text-gray-300'}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-7xl mx-auto px-4 pt-12 pb-32 flex flex-col items-center">
        
        {/* HERO */}
        <div className="mb-16 text-center w-full">
          <h1 className="text-4xl md:text-8xl font-serif italic mb-6 break-words">{t.title}</h1>
          <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-light leading-relaxed">{t.subtitle}</p>
        </div>

        {/* SECTION DES CARTES - ZÉRO HEIGHT FIXE */}
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mb-24">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-[35px] border-2 border-[#C5A059] ${card.bgColor} ${card.textColor} 
              flex flex-col w-full md:w-[340px] h-auto min-h-[300px] shadow-xl relative transition-all`}
            >
              <div className={isAr ? 'text-right' : 'text-left'}>
                <div className={`w-12 h-1 mb-6 ${card.bgColor === 'bg-white' ? 'bg-[#C5A059]' : 'bg-white'}`}></div>
                <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                <p className="text-base opacity-90 leading-relaxed mb-6">{card.desc}</p>
              </div>
              <div className={`mt-auto pt-6 border-t border-current/10 flex items-center justify-between ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="text-[10px] font-bold uppercase tracking-widest">Prestige</span>
                <span className="text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOUTON TEST */}
        <button 
          onClick={() => setShowQuiz(true)}
          className="mb-24 px-10 py-5 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] transition-all shadow-xl"
        >
          {t.testBtn}
        </button>

        {/* AGENDA - ZÉRO HEIGHT FIXE */}
        <div className="w-full max-w-4xl bg-[#FBFBFB] rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-inner flex flex-col items-center">
          <h2 className="text-3xl font-serif italic mb-12 text-center">{t.booking}</h2>
          
          <div className="w-full flex flex-col md:flex-row gap-12 text-left">
            <div className="flex-1">
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-6 tracking-widest">{t.step1}</p>
              <div className="flex flex-wrap gap-2">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(d => (
                  <button key={d} onClick={() => setSelectedDay(d)} className={`px-4 py-2 rounded-xl border text-sm transition-all ${selectedDay === d ? 'bg-black text-white' : 'bg-white border-gray-200'}`}>{d}</button>
                ))}
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-6 tracking-widest">{t.step2}</p>
              <div className="flex flex-wrap gap-2">
                {['10:00', '14:00', '16:00', '18:00', '20:00'].map(h => (
                  <button key={h} onClick={() => setSelectedTime(h)} className={`px-4 py-2 rounded-xl border text-sm transition-all ${selectedTime === h ? 'bg-black text-white' : 'bg-white border-gray-200'}`}>{h}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-[9px] text-gray-400 tracking-[0.4em] uppercase font-light">
        {t.footer}
      </footer>

      {/* MODAL CONTACT SANS DÉBORDEMENT */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/95 backdrop-blur-md">
            <motion.div initial={{ y: 30 }} animate={{ y: 0 }} className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-3xl max-w-lg w-full h-auto overflow-y-auto max-h-[90vh]">
              <h2 className="text-2xl font-serif italic mb-8">Contact</h2>
              <input type="text" placeholder="Nom Complet" onChange={(e)=>setNom(e.target.value)} className="w-full py-4 border-b border-gray-200 outline-none focus:border-[#C5A059] mb-6 text-lg" />
              <textarea placeholder="Votre Message" onChange={(e)=>setMessage(e.target.value)} className="w-full py-4 border-b border-gray-200 h-24 mb-10 outline-none focus:border-[#C5A059] resize-none text-lg"></textarea>
              <div className="flex flex-col gap-4">
                <button onClick={envoyerWhatsApp} className="w-full py-5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">WhatsApp</button>
                <button onClick={() => setShowModal(false)} className="text-[10px] font-bold uppercase text-gray-300">Fermer</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={false} currentQuestion={0} questions={[]} repondreQuiz={()=>{}} score={0} setShowModal={setShowModal} />
    </div>
  );
}

export default App;