import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  // --- ÉTATS (STATES) ---
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

  // --- TRADUCTIONS ---
  const translations = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "L'Art de vivre • Prestige • Kuwait City",
      booking: "Agenda des séances",
      step1: "1. Sélectionner le Jour",
      step2: "2. Choisir l'Heure",
      btnLevel: "✨ Déterminer mon niveau",
      contactTitle: "Prendre Contact",
      placeholderName: "Votre Nom",
      placeholderMsg: "Comment puis-je vous aider ?",
      send: "Envoyer",
      details: "Détails →",
      reserver: "Réserver →"
    },
    en: {
      title: "French Excellence",
      subtitle: "The Art of Living • Prestige • Kuwait City",
      booking: "Session Schedule",
      step1: "1. Select Day",
      step2: "2. Choose Time",
      btnLevel: "✨ Determine my level",
      contactTitle: "Get in Touch",
      placeholderName: "Your Name",
      placeholderMsg: "How can we help you?",
      send: "Send",
      details: "Details →",
      reserver: "Book Now →"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فن الحياة • فخامة • مدينة الكويت",
      booking: "جدول المواعيد",
      step1: "١. اختر اليوم",
      step2: "٢. اختر الوقت",
      btnLevel: "✨ حدد مستواي الآن",
      contactTitle: "اتصل بنا",
      placeholderName: "الاسم الكامل",
      placeholderMsg: "كيف يمكننا مساعدتك؟",
      send: "إرسال",
      details: "التفاصيل ←",
      reserver: "احجز الآن ←"
    }
  };

  const t = translations[lang];

  // --- LOGIQUE ---
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
    <div className={`min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-[#C5A059] selection:text-white ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
      
      <Navbar setShowModal={setShowModal} />

      {/* SÉLECTEUR DE LANGUE FLOTTANT */}
      <div className="fixed top-24 right-6 z-[60] flex flex-col gap-2">
        {['fr', 'en', 'ar'].map((l) => (
          <button 
            key={l} 
            onClick={() => setLang(l)} 
            className={`w-10 h-10 rounded-full border shadow-xl font-bold text-[9px] flex items-center justify-center transition-all ${lang === l ? 'bg-[#C5A059] text-white border-[#C5A059]' : 'bg-white text-gray-300 hover:border-black'}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-6 pb-20 text-center">
        {/* En-tête */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center items-center gap-4 mb-6">
          <img src="https://flagcdn.com/w80/fr.png" alt="France" className="w-10 h-auto shadow-sm" />
          <span className="text-gray-200 font-light text-2xl">|</span>
          <img src="https://flagcdn.com/w80/kw.png" alt="Kuwait" className="w-10 h-auto shadow-sm" />
        </motion.div>

        <motion.h1 className="text-4xl md:text-7xl font-serif italic mb-4 tracking-tight">
          {t.title}
        </motion.h1>
        
        <motion.p className="text-[#C5A059] text-[10px] tracking-[0.6em] uppercase font-light mb-16">
          {t.subtitle}
        </motion.p>

        {/* Grille de Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 w-full text-left">
          <motion.div whileHover={{ y: -8 }} className="bg-[#0047AB] rounded-[45px] p-10 text-white min-h-[350px] flex flex-col justify-between shadow-2xl border-2 border-[#C5A059]">
            <div><h2 className="text-2xl font-bold mb-4">Soutien Scolaire</h2><p className="text-sm opacity-80">Accompagnement d'élite pour élèves.</p></div>
            <div className="text-[9px] font-bold uppercase border-t border-white/20 pt-4">{t.details}</div>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-[45px] p-10 text-gray-900 min-h-[350px] flex flex-col justify-between shadow-2xl border-2 border-[#C5A059] relative">
            <div className="absolute -top-4 left-10 bg-[#C5A059] text-white text-[8px] font-bold px-4 py-1 rounded-full uppercase">TOP</div>
            <div><h2 className="text-2xl font-bold mb-4 text-[#C5A059]">Conversation</h2><p className="text-sm text-gray-500 italic">Maîtrisez l'art de parler avec élégance.</p></div>
            <div className="text-[#C5A059] text-[9px] font-bold uppercase border-t border-gray-100 pt-4">{t.reserver}</div>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="bg-[#D32F2F] rounded-[45px] p-10 text-white min-h-[350px] flex flex-col justify-between shadow-2xl border-2 border-[#C5A059]">
            <div><h2 className="text-2xl font-bold mb-4">Français Pro</h2><p className="text-sm opacity-80">Business et Diplomatie.</p></div>
            <div className="text-[9px] font-bold uppercase border-t border-white/20 pt-4">{t.details}</div>
          </motion.div>
        </div>

        {/* Bouton CTA Quiz */}
        <div className="flex justify-center mb-32">
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => {setShowQuiz(true); setQuizTermine(false); setCurrentQuestion(0); setScore(0);}} 
            className="px-12 py-6 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-[#C5A059] transition-all"
          >
            {t.btnLevel}
          </motion.button>
        </div>

        {/* Calendrier */}
        <motion.div className="bg-gray-900 rounded-[50px] p-10 sm:p-16 text-white shadow-2xl border-b-8 border-[#C5A059] max-w-5xl mx-auto">
          <h2 className="text-2xl tracking-[0.3em] uppercase font-light mb-12 text-center italic">{t.booking}</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-6 border-l-2 border-[#C5A059] pl-4">{t.step1}</p>
              <div className="flex flex-wrap gap-3">
                {days.map(day => (
                  <button key={day} onClick={() => setSelectedDay(day)} className={`px-4 py-3 rounded-xl text-[10px] font-bold transition-all border ${selectedDay === day ? 'bg-[#C5A059] border-[#C5A059]' : 'bg-white/5 border-white/10 text-white/50'}`}>{day}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-6 border-l-2 border-[#C5A059] pl-4">{t.step2}</p>
              <div className="flex flex-wrap gap-3">
                {times.map(time => (
                  <button key={time} onClick={() => setSelectedTime(time)} className={`px-4 py-3 rounded-xl text-[10px] font-bold transition-all border ${selectedTime === time ? 'bg-[#C5A059] border-[#C5A059]' : 'bg-white/5 border-white/10 text-white/50'}`}>{time}</button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* MODALES SÉCURISÉES */}
      {showQuiz && (
        <Quiz 
          showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={quizTermine} 
          currentQuestion={currentQuestion} questions={questions} 
          repondreQuiz={repondreQuiz} score={score} setShowModal={setShowModal} 
        />
      )}

      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-12 rounded-[50px] max-w-lg w-full relative text-left">
              <button onClick={() => setShowModal(false)} className="absolute top-10 right-10 text-gray-400 text-2xl">✕</button>
              <h2 className="text-3xl font-serif italic mb-8">{t.contactTitle}</h2>
              <div className="space-y-6">
                <input type="text" placeholder={t.placeholderName} onChange={(e) => setNom(e.target.value)} className="w-full py-4 border-b outline-none focus:border-[#C5A059] text-xl font-light" />
                <textarea placeholder={t.placeholderMsg} onChange={(e) => setMessage(e.target.value)} className="w-full py-4 border-b h-32 outline-none focus:border-[#C5A059] resize-none text-xl font-light"></textarea>
              </div>
              <button onClick={envoyerWhatsApp} className="w-full mt-10 py-6 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all">
                {t.send}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-16 text-center text-[9px] text-gray-300 tracking-[0.5em] uppercase font-light">
        L'Excellence Française • Kuwait • 2026
      </footer>
    </div>
  );
}

export default App;