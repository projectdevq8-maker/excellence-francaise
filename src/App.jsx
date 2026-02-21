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
      booking: "Calendrier des Séances",
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
      booking: "Session Calendar",
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
      booking: "جدول المواعيد",
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
      
      {/* BOUTONS LANGUES PLUS GRANDS */}
      <div className="fixed top-28 right-8 z-[100] flex flex-col gap-4">
        {['fr', 'en', 'ar'].map((l) => (
          <button key={l} onClick={() => setLang(l)} className={`w-12 h-12 rounded-full border shadow-2xl font-bold text-[10px] flex items-center justify-center transition-all ${lang === l ? 'bg-[#C5A059] text-white border-[#C5A059] scale-125' : 'bg-white text-gray-400 hover:text-black hover:border-black'}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-7xl mx-auto px-6">
        
        {/* TITRE : GROS ESPACEMENT EN BAS (MB-40) */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center pt-24 mb-40">
          <div className="flex justify-center items-center gap-6 mb-12 opacity-80">
            <img src="https://flagcdn.com/w80/fr.png" alt="France" className="w-10 h-auto shadow-md" />
            <div className="w-[1px] h-10 bg-[#C5A059]/30"></div>
            <img src="https://flagcdn.com/w80/kw.png" alt="Kuwait" className="w-10 h-auto shadow-md" />
          </div>
          <h1 className="text-6xl md:text-9xl font-serif italic mb-10 tracking-tighter">{t.title}</h1>
          <p className="text-[#C5A059] text-[12px] md:text-[14px] tracking-[0.8em] uppercase font-light">{t.subtitle}</p>
        </motion.div>

        {/* CARTES : GAP-16 ET MB-60 POUR BIEN SÉPARER DU TEST */}
        <div className="flex flex-wrap justify-center gap-16 mb-60">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -25 }}
              className={`${card.c} rounded-[60px] p-12 w-full max-w-[350px] min-h-[450px] flex flex-col justify-between shadow-2xl border-[3px] border-[#C5A059] relative text-left group transition-all`}
            >
              {card.pop && (
                <div className="absolute top-10 right-10 bg-[#C5A059] text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">Populaire</div>
              )}
              <div>
                <div className={`w-14 h-1.5 mb-12 ${card.c === 'bg-white' ? 'bg-[#C5A059]' : 'bg-white'}`}></div>
                <h2 className={`text-3xl font-bold mb-6 ${card.c === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>{t.cards[i].t}</h2>
                <p className={`text-base font-light leading-relaxed ${card.c === 'bg-white' ? 'text-gray-500' : 'text-white/90'}`}>{t.cards[i].d}</p>
              </div>
              <div className={`pt-10 border-t ${card.c === 'bg-white' ? 'border-gray-100' : 'border-white/10'} flex items-center justify-between`}>
                <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${card.c === 'bg-white' ? 'text-[#C5A059]' : 'text-white'}`}>Prestige Service</span>
                <span className="text-2xl group-hover:translate-x-4 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TEST DE NIVEAU : BIEN ISOLÉ PAR MY-40 (MARGE HAUT ET BAS) */}
        <div className="my-60 text-center">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {setShowQuiz(true); setQuizTermine(false); setCurrentQuestion(0); setScore(0);}} 
            className="px-24 py-10 bg-black text-white rounded-full text-[13px] font-bold uppercase tracking-[0.5em] shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:bg-[#C5A059] transition-all"
          >
            {t.btnLevel}
          </motion.button>
        </div>

        {/* AGENDA : TITRE SANS "CONTACT" ET MARGE MB-40 */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[80px] p-16 md:p-32 shadow-xl border border-gray-100 max-w-6xl mx-auto mb-40 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-[#C5A059]"></div>
          <h2 className="text-5xl md:text-6xl font-serif italic mb-24 text-center text-gray-900">{t.booking}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 text-left">
            <div>
              <p className="text-[#C5A059] text-[12px] font-bold uppercase tracking-[0.4em] mb-12 border-l-4 border-[#C5A059] pl-8">{t.step1}</p>
              <div className="flex flex-wrap gap-5">
                {days.map(day => (
                  <button key={day} onClick={() => setSelectedDay(day)} className={`px-8 py-5 rounded-2xl text-[13px] font-bold transition-all border-2 ${selectedDay === day ? 'bg-black text-white border-black shadow-2xl scale-110' : 'bg-white border-gray-100 hover:border-black'}`}>{day}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[12px] font-bold uppercase tracking-[0.4em] mb-12 border-l-4 border-[#C5A059] pl-8">{t.step2}</p>
              <div className="flex flex-wrap gap-5">
                {times.map(time => (
                  <button key={time} onClick={() => setSelectedTime(time)} className={`px-8 py-5 rounded-2xl text-[13px] font-bold transition-all border-2 ${selectedTime === time ? 'bg-black text-white border-black shadow-2xl scale-110' : 'bg-white border-gray-100 hover:border-black'}`}>{time}</button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* FOOTER ESPACÉ */}
      <footer className="py-24 text-center text-[11px] text-gray-300 tracking-[0.7em] uppercase font-light border-t border-gray-50">
        Excellence Française • Kuwait • 2026
      </footer>

      {/* QUIZ ET MODALE RESTENT LES MÊMES (BALISES NON SUPPRIMÉES) */}
      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={quizTermine} currentQuestion={currentQuestion} questions={questions} repondreQuiz={repondreQuiz} score={score} setShowModal={setShowModal} />

      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-white/95 backdrop-blur-3xl">
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="bg-white p-16 rounded-[60px] border border-gray-100 shadow-3xl max-w-2xl w-full text-left relative">
              <button onClick={() => setShowModal(false)} className="absolute top-12 right-12 text-3xl text-gray-300">✕</button>
              <h2 className="text-4xl font-serif italic mb-12">{t.contactTitle}</h2>
              <div className="space-y-10">
                <input type="text" placeholder={t.placeholderName} onChange={(e) => setNom(e.target.value)} className="w-full py-6 border-b-2 border-gray-100 outline-none focus:border-[#C5A059] text-2xl font-light transition-all" />
                <textarea placeholder={t.placeholderMsg} onChange={(e) => setMessage(e.target.value)} className="w-full py-6 border-b-2 border-gray-100 h-48 outline-none focus:border-[#C5A059] resize-none text-2xl font-light transition-all"></textarea>
              </div>
              <button onClick={envoyerWhatsApp} className="w-full mt-16 py-8 bg-black text-white rounded-full text-[13px] font-bold uppercase tracking-[0.5em] shadow-3xl hover:bg-[#C5A059] transition-all">
                {t.send}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;