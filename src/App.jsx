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
      title: "L'Éclat du Savoir",
      subtitle: "L'Excellence Française • Kowëit • 2026",
      booking: "Calendrier des Séances",
      step1: "1. Sélectionner le Jour",
      step2: "2. Choisir l'Heure",
      btnLevel: "Démarrarte",
      contactTitle: "Prendre Contact",
      placeholderName: "Votre Nom",
      placeholderMsg: "Comment puis-je vous aider ?",
      send: "Envoyer",
      cards: [
        { t: "Soutien Scolaire", st: "français 2", d: "Accompagnement d'élite pour élèves des écoles françaises & bilingues & bilingues.", c: "bg-gradient-to-b from-[#0052D4] to-[#0047AB]" },
        { t: "Conversation", d: "Maîtrisez l'art de parler avec accent de Paris. Adultes & Professionnels.", c: "bg-white", pop: true },
        { t: "Français Pro", d: "Business, Diplomatie et préparation aux examens officiels DELF/DALF.", c: "bg-gradient-to-b from-[#E52D27] to-[#B31217]" }
      ]
    },
    en: {
      title: "The Glow of Knowledge",
      subtitle: "French Excellence • Kuwait • 2026",
      booking: "Session Schedule",
      step1: "1. Select Day",
      step2: "2. Choose Time",
      btnLevel: "Start Now",
      contactTitle: "Get in Touch",
      placeholderName: "Your Name",
      placeholderMsg: "How can we help you?",
      send: "Send",
      cards: [
        { t: "Academic Support", st: "French 2", d: "Elite coaching for French & bilingual school students.", c: "bg-gradient-to-b from-[#0052D4] to-[#0047AB]" },
        { t: "Conversation", d: "Master the art of speaking with a Paris accent. Adults & Professionals.", c: "bg-white", pop: true },
        { t: "Professional French", d: "Business, Diplomacy & Official DELF/DALF exam prep.", c: "bg-gradient-to-b from-[#E52D27] to-[#B31217]" }
      ]
    },
    ar: {
      title: "بريق المعرفة",
      subtitle: "التميز الفرنسي • الكويت • ٢٠٢٦",
      booking: "جدول المواعيد",
      step1: "١. اختر اليوم",
      step2: "٢. اختر الوقت",
      btnLevel: "ابدأ الآن",
      contactTitle: "اتصل بنا",
      placeholderName: "الاسم الكامل",
      placeholderMsg: "كيف يمكننا مساعدتك؟",
      send: "إرسال",
      cards: [
        { t: "الدعم الأكاديمي", st: "الفرنسية ٢", d: "تدريب متميز لطلاب المدارس الفرنسية وثنائية اللغة.", c: "bg-gradient-to-b from-[#0052D4] to-[#0047AB]" },
        { t: "المحادثة", d: "أتقن فن التحدث بلكنة باريسية. للكبار والمهنيين.", c: "bg-white", pop: true },
        { t: "الفرنسية المهنية", d: "الأعمال، الدبلوماسية والتحضير لامتحانات DELF/DALF.", c: "bg-gradient-to-b from-[#E52D27] to-[#B31217]" }
      ]
    }
  };

  const t = translations[lang];
  const questions = [
    { q: "Connaissez-vous l'alphabet ?", options: ["Non", "Un peu", "Oui"], points: [0, 1, 2] },
    { q: "Présentation ?", options: ["Non", "Oui", "Expert"], points: [0, 1, 2] },
    { q: "Tu vs Vous ?", options: ["Non", "Flou", "Oui"], points: [0, 1, 2] }
  ];

  const repondreQuiz = (points) => {
    setScore(score + points);
    if (currentQuestion + 1 < questions.length) setCurrentQuestion(currentQuestion + 1);
    else setQuizTermine(true);
  };

  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const times = ['10:00', '14:00', '16:00', '18:00', '20:00'];

  const envoyerWhatsApp = () => {
    const numero = "33667569993";
    const texte = `Bonjour, je suis ${nom}. %0A*Score test:* ${score}/6. %0A*Réservation:* ${selectedDay} à ${selectedTime}. %0A*Message:* ${message}`;
    window.open(`https://wa.me/${numero}?text=${texte}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#E5E7EB] text-gray-900 font-sans overflow-x-hidden selection:bg-[#C5A059] selection:text-white">
      
      {/* SÉLECTEUR DE LANGUE */}
      <div className="fixed top-24 right-8 z-[100] flex flex-col gap-3">
        {['fr', 'en', 'ar'].map((l) => (
          <button key={l} onClick={() => setLang(l)} className={`w-12 h-12 rounded-full border shadow-2xl font-bold text-[10px] flex items-center justify-center transition-all ${lang === l ? 'bg-[#C5A059] text-white border-[#C5A059]' : 'bg-white text-gray-300 hover:text-black'}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-40">
        
        {/* TITRE LUXE (IMAGE) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-40">
          <h1 className="text-7xl md:text-[100px] font-serif italic mb-10 tracking-tight text-gray-800">
            {t.title}
          </h1>
        </motion.div>

        {/* GRILLE DE CARTES (DÉGRADÉS & ARRONDIS COMME IMAGE) */}
        <div className="flex flex-wrap justify-center gap-16 mb-60">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20 }}
              className={`${card.c} rounded-[60px] p-12 w-full max-w-[350px] min-h-[480px] flex flex-col items-center justify-center shadow-2xl border-[1px] border-gray-200 relative text-center group`}
            >
              {card.pop && (
                <div className="absolute top-10 bg-[#C5A059] text-white text-[10px] font-black px-6 py-2 rounded-xl uppercase tracking-widest shadow-md">Populaire</div>
              )}
              <div className="mt-10">
                <h2 className={`text-4xl font-serif italic mb-2 ${card.c === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>{card.t}</h2>
                {card.st && <p className={`text-2xl font-serif italic mb-6 ${card.c === 'bg-white' ? 'text-gray-600' : 'text-white/80'}`}>{card.st}</p>}
                <p className={`text-lg font-light leading-relaxed px-4 ${card.c === 'bg-white' ? 'text-gray-500' : 'text-white/90'}`}>{card.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TESTEUR DE NIVEAU (DESIGN IMAGE : GRIS AVEC BORDURE BLEU NÉON) */}
        <div className="max-w-5xl mx-auto mb-60">
          <motion.div 
            className="bg-[#C0C0C2] rounded-[70px] p-16 border-[6px] border-[#59B2FF] shadow-[0_0_30px_rgba(89,178,255,0.4)] text-center relative"
          >
            <h2 className="text-5xl font-serif italic text-white mb-12 text-left">Testez vour Niveau</h2>
            
            <div className="flex justify-center gap-8 mb-16">
              {['Debalartt', 'Moyen', 'Rexullat'].map((btn, idx) => (
                <button key={idx} className="px-10 py-4 rounded-full border-2 border-white text-white font-serif italic text-xl bg-white/10 hover:bg-white hover:text-gray-600 transition-all">
                  {btn}
                </button>
              ))}
            </div>

            <div className="flex justify-start gap-3 mb-20">
               {[1,2].map(i => <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>)}
               {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 rounded-full bg-[#EBCB8B]"></div>)}
            </div>

            <button 
              onClick={() => {setShowQuiz(true); setQuizTermine(false); setCurrentQuestion(0);}} 
              className="px-24 py-6 bg-[#007AFF] text-white rounded-[30px] text-3xl font-serif italic shadow-xl hover:bg-blue-600 transition-all"
            >
              {t.btnLevel}
            </button>
          </motion.div>
        </div>

        {/* AGENDA (SANS MOT CONTACT) */}
        <motion.div className="bg-white rounded-[80px] p-16 md:p-32 shadow-sm border border-gray-100 max-w-6xl mx-auto mb-40 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-[#C5A059]"></div>
          <h2 className="text-6xl font-serif italic mb-24 text-center">{t.booking}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
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

      <footer className="pb-24 text-center text-[12px] text-gray-400 tracking-[0.6em] uppercase font-light">
        {t.subtitle}
      </footer>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={quizTermine} currentQuestion={currentQuestion} questions={questions} repondreQuiz={repondreQuiz} score={score} setShowModal={setShowModal} />
      
      {/* MODALE RESTE IDENTIQUE AUX BALISES PRÉCÉDENTES */}
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