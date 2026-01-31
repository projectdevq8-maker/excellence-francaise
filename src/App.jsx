import React, { useState } from 'react';
import { motion } from 'framer-motion'; // On importe l'outil d'animation

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizTermine, setQuizTermine] = useState(false);

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
    const numero = "33667569993"; // Ton numéro
    const texte = `Bonjour, je suis ${nom}. Score test: ${score}/6. Réservation: ${selectedDay} à ${selectedTime}. Msg: ${message}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texte)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* NAV ANIMÉE */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[8px] font-bold">EF</div>
          <div className="flex flex-col">
            <span className="text-[9px] tracking-[0.3em] font-black uppercase leading-none">L'Excellence</span>
            <span className="text-[9px] tracking-[0.3em] font-black uppercase leading-none mt-1">Française</span>
          </div>
        </div>
        <button onClick={() => setShowModal(true)} className="px-6 py-2 border border-black rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
          Contact
        </button>
      </motion.nav>

      <main className="max-w-5xl mx-auto px-6 pt-6 pb-20 text-center">
        {/* DRAPEAUX ANIMÉS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-6">
          <img src="https://flagcdn.com/w80/fr.png" alt="France" className="w-10 h-auto shadow-sm" />
          <span className="text-gray-200 font-light text-2xl">|</span>
          <img src="https://flagcdn.com/w80/kw.png" alt="Kuwait" className="w-10 h-auto shadow-sm" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-serif italic mb-4 tracking-tight">
          L'Excellence Française
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-[9px] tracking-[0.4em] uppercase font-light mb-12">
          L'art de vivre • Prestige • Kuwait
        </motion.p>

        {/* CARTES ANIMÉES (EFFET CASCADE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { title: "Soutien Scolaire", bg: "bg-[#0047AB]", text: "Accompagnement d'élite pour élèves des écoles françaises." },
            { title: "Conversation", bg: "bg-white", text: "Maîtrisez l'art de la conversation avec aisance et élégance.", special: true },
            { title: "Français Pro", bg: "bg-[#D32F2F]", text: "Business, Diplomatie et préparation examens." }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.2) }}
              className={`${card.bg} rounded-[30px] p-6 min-h-[280px] flex flex-col justify-between shadow-xl border-2 border-[#C5A059] text-left ${card.special ? 'text-gray-900 scale-105 z-10' : 'text-white'}`}>
              <div>
                {card.special && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-[7px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em]">Populaire</div>}
                <h2 className={`text-xl font-bold mb-2 ${card.special ? 'text-[#C5A059]' : ''}`}>{card.title}</h2>
                <p className={`text-[11px] font-light ${card.special ? 'text-gray-500 italic' : 'opacity-80'}`}>{card.text}</p>
              </div>
              <div className={`text-[8px] font-bold uppercase tracking-widest ${card.special ? 'text-[#C5A059]' : ''}`}>Détails →</div>
            </motion.div>
          ))}
        </div>

        {/* BOUTON TEST ANIMÉ */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mb-12">
          <button 
            onClick={() => {setShowQuiz(true); setQuizTermine(false); setCurrentQuestion(0); setScore(0);}}
            className="group px-10 py-4 bg-white border border-[#C5A059] rounded-full transition-all hover:bg-black hover:scale-105 active:scale-95">
            <span className="text-[#C5A059] group-hover:text-white text-[10px] font-bold uppercase tracking-[0.3em]">
              ✨ Testez votre Niveau
            </span>
          </button>
        </motion.div>

        {/* CALENDRIER ANIMÉ */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="bg-gray-900 rounded-[30px] p-6 text-white shadow-2xl border-b-4 border-[#C5A059] max-w-3xl mx-auto">
          <h2 className="text-lg tracking-[0.2em] uppercase font-extralight mb-6 text-center text-left">Réserver une séance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="text-[#C5A059] text-[8px] font-bold uppercase tracking-[0.2em] mb-3">1. Jour</p>
              <div className="flex flex-wrap gap-2 text-left">
                {days.map(day => (
                  <button key={day} onClick={() => setSelectedDay(day)} className={`px-3 py-1.5 rounded-full text-[8px] font-bold transition-all ${selectedDay === day ? 'bg-[#C5A059] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>{day}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[8px] font-bold uppercase tracking-[0.2em] mb-3">2. Heure</p>
              <div className="flex flex-wrap gap-2 text-left">
                {times.map(time => (
                  <button key={time} onClick={() => setSelectedTime(time)} className={`px-3 py-1.5 rounded-full text-[8px] font-bold transition-all ${selectedTime === time ? 'bg-[#C5A059] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>{time}</button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="pb-8 text-center text-[8px] text-gray-300 tracking-[0.3em] uppercase font-light">
        L'Excellence Française • 2026
      </footer>

      {/* MODALES (QUIZ & CONTACT) AVEC ANIMATION */}
      {showQuiz && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-[30px] p-8 max-w-md w-full border-2 border-[#C5A059] shadow-2xl text-center">
            {!quizTermine ? (
              <>
                <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-4">Question {currentQuestion + 1} / 3</p>
                <h2 className="text-xl font-serif italic mb-8">{questions[currentQuestion].q}</h2>
                <div className="flex flex-col gap-3">
                  {questions[currentQuestion].options.map((opt, idx) => (
                    <button key={idx} onClick={() => repondreQuiz(questions[currentQuestion].points[idx])} className="py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-[#C5A059] transition-all text-sm font-medium">{opt}</button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-serif italic mb-4">Analyse Terminée</h2>
                <p className="text-gray-500 mb-8 text-sm">Votre score : <span className="text-[#C5A059] font-bold">{score} / 6</span></p>
                <button onClick={() => {setShowQuiz(false); setShowModal(true);}} className="w-full py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">Réserver mon programme</button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}

      {showModal && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm text-left">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white rounded-[30px] p-8 max-w-sm w-full border-2 border-[#C5A059] shadow-2xl">
            <h2 className="text-2xl font-serif italic mb-4">Contact Privé</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)} className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50 text-sm outline-none focus:border-[#C5A059]" />
              <textarea placeholder="Votre message" onChange={(e) => setMessage(e.target.value)} className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50 h-24 text-sm outline-none focus:border-[#C5A059]"></textarea>
            </div>
            <div className="flex gap-4 mt-6">
              <button onClick={() => setShowModal(false)} className="flex-1 text-[9px] font-bold uppercase tracking-widest text-gray-400">Annuler</button>
              <button onClick={envoyerWhatsApp} className="flex-1 py-3 bg-[#C5A059] text-white rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">Envoyer</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default App;