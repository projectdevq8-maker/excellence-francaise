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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizTermine, setQuizTermine] = useState(false);

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const translations = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "L'Art de vivre • Prestige • Kuwait City",
      booking: "Réservations & Contact",
      step1: "1. Sélectionner le Jour",
      step2: "2. Choisir l'Heure",
      btnLevel: "✨ Déterminer mon niveau",
      contactTitle: "Prendre Contact",
      placeholderName: "Votre Nom",
      placeholderMsg: "Comment puis-je vous aider ?",
      send: "Envoyer",
      cards: [
        { t: "Soutien Scolaire", d: "Accompagnement d'élite pour élèves des écoles françaises.", c: "bg-[#0047AB]" },
        { t: "Conversation", d: "Maîtrisez l'art de parler avec aisance et élégance.", c: "bg-white", pop: true },
        { t: "Français Pro", d: "Business, Diplomatie et préparation examens.", c: "bg-[#D32F2F]" }
      ]
    },
    en: {
      title: "French Excellence",
      subtitle: "The Art of Living • Prestige • Kuwait City",
      booking: "Booking & Contact",
      step1: "1. Select Day",
      step2: "2. Choose Time",
      btnLevel: "✨ Determine my level",
      contactTitle: "Get in Touch",
      placeholderName: "Your Name",
      placeholderMsg: "How can we help you?",
      send: "Send",
      cards: [
        { t: "Academic Support", d: "Elite coaching for French school students.", c: "bg-[#0047AB]" },
        { t: "Conversation", d: "Master the art of speaking with grace and fluidity.", c: "bg-white", pop: true },
        { t: "Professional French", d: "Business, Diplomacy & Exam prep.", c: "bg-[#D32F2F]" }
      ]
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فن الحياة • فخامة • مدينة الكويت",
      booking: "الحجز والتواصل",
      step1: "١. اختر اليوم",
      step2: "٢. اختر الوقت",
      btnLevel: "✨ حدد مستواي الآن",
      contactTitle: "اتصل بنا",
      placeholderName: "الاسم الكامل",
      placeholderMsg: "كيف يمكننا مساعدتك؟",
      send: "إرسال",
      cards: [
        { t: "الدعم الأكاديمي", d: "تدريب متميز لطلاب المدارس الفرنسية.", c: "bg-[#0047AB]" },
        { t: "المحادثة", d: "أتقن فن التحدث بكل رقي وانسيابية.", c: "bg-white", pop: true },
        { t: "الفرنسية المهنية", d: "الأعمال، الدبلوماسية والامتحانات الرسمية.", c: "bg-[#D32F2F]" }
      ]
    }
  };

  const t = translations[lang];
  const questions = [
    { q: "Connaissez-vous l'alphabet français ?", options: ["Pas du tout", "Un peu", "Parfaitement"], points: [0, 1, 2] },
    { q: "Savez-vous vous présenter (Nom, âge) ?", options: ["Non", "Oui", "Je peux tenir une conversation"], points: [0, 1, 2] },
    { q: "Comprenez-vous la différence entre 'Tu' et 'Vous' ?", options: ["Non", "C'est flou", "Oui, je l'utilise"], points: [0, 1, 2] }
  ];

  const repondreQuiz = (points) => {
    setScore(score + points);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizTermine(true);
    }
  };

  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const times = ['10:00', '14:00', '16:00', '18:00', '20:00'];

  const envoyerWhatsApp = () => {
    const numero = "33667569993"; 
    const texte = `Bonjour, je suis ${nom}. %0A*Score test:* ${score}/6. %0A*Réservation:* ${selectedDay} à ${selectedTime}. %0A*Message:* ${message}`;
    window.open(`https://wa.me/${numero}?text=${texte}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-gray-900 font-sans overflow-x-hidden">
      
      {/* SÉLECTEUR DE LANGUE */}
      <div className="fixed top-24 right-4 z-[60] flex flex-col gap-2">
        {['fr', 'en', 'ar'].map((l) => (
          <button key={l} onClick={() => setLang(l)} className={`w-10 h-10 rounded-full border shadow-xl font-bold text-[9px] flex items-center justify-center transition-all ${lang === l ? 'bg-[#C5A059] text-white' : 'bg-white text-gray-400'}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-6xl mx-auto px-4 pt-12 pb-20 text-center">
        
        {/* TITRES */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl md:text-8xl font-serif italic mb-6">{t.title}</h1>
          <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase mb-20">{t.subtitle}</p>
        </motion.div>

        {/* CARTES - FIXÉ POUR MOBILE */}
        <div className="flex flex-col md:flex-row gap-6 mb-24 items-center">
          {t.cards.map((card, i) => (
            <div key={i} className={`${card.c} rounded-[40px] p-8 w-full md:w-1/3 min-h-[300px] border-2 border-[#C5A059] flex flex-col justify-between text-left shadow-lg`}>
              <div>
                <h2 className={`text-2xl font-bold mb-4 ${card.c === 'bg-white' ? 'text-black' : 'text-white'}`}>{card.t}</h2>
                <p className={`text-sm ${card.c === 'bg-white' ? 'text-gray-500' : 'text-white/80'}`}>{card.d}</p>
              </div>
              <div className="pt-4 border-t border-black/10 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest">Prestige</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* BOUTON TEST */}
        <button onClick={() => {setShowQuiz(true); setQuizTermine(false);}} className="mb-24 px-12 py-5 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-widest">
          {t.btnLevel}
        </button>

        {/* CALENDRIER - FIXÉ */}
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-gray-100 max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-serif italic mb-12">{t.booking}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold mb-4 uppercase">{t.step1}</p>
              <div className="grid grid-cols-3 gap-2">
                {days.map(d => <button key={d} onClick={() => setSelectedDay(d)} className={`py-3 rounded-xl border text-[10px] ${selectedDay === d ? 'bg-black text-white' : 'bg-white'}`}>{d}</button>)}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold mb-4 uppercase">{t.step2}</p>
              <div className="grid grid-cols-3 gap-2">
                {times.map(tm => <button key={tm} onClick={() => setSelectedTime(tm)} className={`py-3 rounded-xl border text-[10px] ${selectedTime === tm ? 'bg-black text-white' : 'bg-white'}`}>{tm}</button>)}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={quizTermine} currentQuestion={currentQuestion} questions={questions} repondreQuiz={repondreQuiz} score={score} setShowModal={setShowModal} />

      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/80 backdrop-blur-md">
            <div className="bg-white p-10 rounded-[40px] shadow-2xl max-w-md w-full relative border border-gray-100">
              <button onClick={() => setShowModal(false)} className="absolute top-6 right-6">✕</button>
              <h2 className="text-2xl font-serif italic mb-6">{t.contactTitle}</h2>
              <input type="text" placeholder={t.placeholderName} onChange={(e) => setNom(e.target.value)} className="w-full py-3 border-b mb-4 outline-none" />
              <textarea placeholder={t.placeholderMsg} onChange={(e) => setMessage(e.target.value)} className="w-full py-3 border-b mb-6 h-24 outline-none resize-none"></textarea>
              <button onClick={envoyerWhatsApp} className="w-full py-5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                {t.send}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="pb-10 text-center text-[8px] text-gray-300 tracking-[0.5em] uppercase">
        Excellence Française • 2026
      </footer>
    </div>
  );
}

export default App;