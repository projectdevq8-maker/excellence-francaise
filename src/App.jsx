import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

// Styles globaux pour corriger le box-sizing et éviter les débordements
const globalStyles = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    overflow-x: hidden;
    background-color: #FDFCFB;
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
        { t: "Soutien Scolaire", d: "Accompagnement d'élite pour élèves des écoles françaises.", c: "bg-[#0047AB]", text: "text-white" },
        { t: "Conversation", d: "Maîtrisez l'art de parler avec aisance et élégance.", c: "bg-white", text: "text-gray-900", pop: true },
        { t: "Français Pro", d: "Business, Diplomatie et préparation examens.", c: "bg-[#D32F2F]", text: "text-white" }
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
        { t: "Academic Support", d: "Elite coaching for French school students.", c: "bg-[#0047AB]", text: "text-white" },
        { t: "Conversation", d: "Master the art of speaking with grace and fluidity.", c: "bg-white", text: "text-gray-900", pop: true },
        { t: "Professional French", d: "Business, Diplomacy & Exam prep.", c: "bg-[#D32F2F]", text: "text-white" }
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
        { t: "الدعم الأكاديمي", d: "تدريب متميز لطلاب المدارس الفرنسية.", c: "bg-[#0047AB]", text: "text-white" },
        { t: "المحادثة", d: "أتقن فن التحدث بكل رقي وانسيابية.", c: "bg-white", text: "text-gray-900", pop: true },
        { t: "الفرنسية المهنية", d: "الأعمال، الدبلوماسية والامتحانات الرسمية.", c: "bg-[#D32F2F]", text: "text-white" }
      ]
    }
  };

  const t = translations[lang];
  const isAr = lang === 'ar';

  const envoyerWhatsApp = () => {
    const numero = "33667569993";
    const texte = `Bonjour, je suis ${nom}. %0ARDV: ${selectedDay} à ${selectedTime}. %0AMessage: ${message}`;
    window.open(`https://wa.me/${numero}?text=${texte}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <style>{globalStyles}</style>

      <Navbar setShowModal={setShowModal} />

      <main className="flex-grow max-w-6xl mx-auto px-6 pt-16 pb-20 flex flex-col items-center">
        
        {/* HERO SECTION */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-8xl font-serif italic mb-6 leading-tight tracking-tight">{t.title}</h1>
          <p className="text-[#C5A059] text-[10px] md:text-[12px] tracking-[0.6em] uppercase font-light">{t.subtitle}</p>
        </div>

        {/* GRILLE DE CARTES (FLEXBOX AUTO-ADAPTATIVE) */}
        <div className="flex flex-wrap justify-center gap-8 w-full mb-32">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`flex flex-col p-10 rounded-[45px] border-2 border-[#C5A059] shadow-2xl ${card.c} ${card.text} 
              w-full md:w-[340px] h-auto min-h-[380px] relative overflow-hidden mb-5`}
            >
              {card.pop && (
                <div className="absolute top-6 right-8 bg-[#C5A059] text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase">Populaire</div>
              )}
              <div className={isAr ? 'text-right' : 'text-left'}>
                <div className={`w-10 h-1 mb-8 ${card.c === 'bg-white' ? 'bg-[#C5A059]' : 'bg-white'}`}></div>
                <h2 className="text-2xl font-bold mb-4">{card.t}</h2>
                <p className="text-sm font-light leading-relaxed mb-10">{card.d}</p>
              </div>
              
              {/* Le bouton Prestige reste en bas grâce au mt-auto de Flexbox */}
              <div className={`mt-auto pt-6 border-t ${card.c === 'bg-white' ? 'border-gray-100' : 'border-white/10'} flex items-center justify-between`}>
                <span className="text-[10px] font-bold uppercase tracking-widest">Prestige</span>
                <span className="text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA QUIZ */}
        <button 
          onClick={() => setShowQuiz(true)}
          className="mb-40 px-16 py-6 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-[#C5A059] transition-all"
        >
          {t.btnLevel}
        </button>

        {/* SECTION CALENDRIER PROPRE */}
        <div className="w-full bg-white rounded-[50px] p-10 md:p-20 shadow-sm border border-gray-100 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-serif italic mb-16 text-center">{t.booking}</h2>
          
          <div className="w-full flex flex-col md:flex-row gap-16 text-left">
            {/* JOURS */}
            <div className="flex-1">
              <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-8 border-l-2 border-[#C5A059] pl-4">{t.step1}</p>
              <div className="flex flex-wrap gap-3">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day => (
                  <button key={day} onClick={() => setSelectedDay(day)} className={`px-5 py-3 rounded-2xl text-[11px] font-bold transition-all border ${selectedDay === day ? 'bg-black text-white border-black shadow-lg' : 'bg-white border-gray-200 hover:border-black'}`}>{day}</button>
                ))}
              </div>
            </div>
            
            {/* HEURES */}
            <div className="flex-1">
              <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-8 border-l-2 border-[#C5A059] pl-4">{t.step2}</p>
              <div className="flex flex-wrap gap-3">
                {['10:00', '14:00', '16:00', '18:00', '20:00'].map(time => (
                  <button key={time} onClick={() => setSelectedTime(time)} className={`px-5 py-3 rounded-2xl text-[11px] font-bold transition-all border ${selectedTime === time ? 'bg-black text-white border-black shadow-lg' : 'bg-white border-gray-200 hover:border-black'}`}>{time}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL CONTACT */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/90 backdrop-blur-xl">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-3xl max-w-lg w-full h-auto overflow-y-auto max-h-[90vh]">
              <h2 className="text-3xl font-serif italic mb-8">{t.contactTitle}</h2>
              <input type="text" placeholder={t.placeholderName} onChange={(e) => setNom(e.target.value)} className="w-full py-4 border-b border-gray-100 outline-none focus:border-[#C5A059] mb-6 text-xl" />
              <textarea placeholder={t.placeholderMsg} onChange={(e) => setMessage(e.target.value)} className="w-full py-4 border-b border-gray-100 h-32 outline-none focus:border-[#C5A059] resize-none mb-10 text-xl"></textarea>
              <button onClick={envoyerWhatsApp} className="w-full py-6 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-2xl hover:bg-[#C5A059] transition-all">
                {t.send}
              </button>
              <button onClick={() => setShowModal(false)} className="w-full mt-4 text-[9px] uppercase tracking-widest text-gray-400">Fermer</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} setShowModal={setShowModal} />
      
      <footer className="py-12 text-center text-[9px] text-gray-300 tracking-[0.5em] uppercase font-light">
        Excellence Française • 2026
      </footer>
    </div>
  );
}

export default App;