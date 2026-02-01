import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

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
    const numero = "33667569993"; // <--- METS TON NUMÉRO ICI
    const texte = `Bonjour, je suis ${nom}. %0A*Score test:* ${score}/6. %0A*Réservation:* ${selectedDay} à ${selectedTime}. %0A*Message:* ${message}`;
    window.open(`https://wa.me/${numero}?text=${texte}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      
      <Navbar setShowModal={setShowModal} />

      <main className="max-w-5xl mx-auto px-6 pt-6 pb-20 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex justify-center items-center gap-4 mb-6">
          <img src="https://flagcdn.com/w80/fr.png" alt="France" className="w-10 h-auto shadow-sm" />
          <span className="text-gray-200 font-light text-2xl">|</span>
          <img src="https://flagcdn.com/w80/kw.png" alt="Kuwait" className="w-10 h-auto shadow-sm" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-5xl md:text-6xl font-serif italic mb-4 tracking-tight">L'Excellence Française</motion.h1>
        <p className="text-gray-400 text-[9px] tracking-[0.4em] uppercase font-light mb-12 text-center">L'art de vivre • Prestige • Kuwait</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-[#0047AB] rounded-[30px] p-6 text-white min-h-[280px] flex flex-col justify-between shadow-xl border-2 border-[#C5A059] text-left">
            <h2 className="text-xl font-bold mb-2">Soutien Scolaire</h2>
            <p className="text-[11px] opacity-80 font-light">Accompagnement d'élite pour élèves des écoles françaises.</p>
            <div className="text-[8px] font-bold uppercase tracking-widest">Détails →</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-white rounded-[30px] p-6 text-gray-900 min-h-[280px] flex flex-col justify-between shadow-lg border-2 border-[#C5A059] transform md:scale-105 z-10 relative text-left">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-[7px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em]">Populaire</div>
            <h2 className="text-xl font-bold mb-2 text-[#C5A059]">Conversation</h2>
            <p className="text-[11px] text-gray-500 italic">Maîtrisez l'art de la conversation avec aisance et élégance.</p>
            <div className="text-[#C5A059] text-[8px] font-bold uppercase tracking-widest">Réserver →</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="bg-[#D32F2F] rounded-[30px] p-6 text-white min-h-[280px] flex flex-col justify-between shadow-xl border-2 border-[#C5A059] text-left">
            <h2 className="text-xl font-bold mb-2">Français Pro</h2>
            <p className="text-[11px] opacity-80 font-light">Business, Diplomatie et préparation examens.</p>
            <div className="text-[8px] font-bold uppercase tracking-widest">Détails →</div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="py-16 max-w-4xl mx-auto border-t border-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-[#C5A059] text-[9px] font-bold uppercase mb-2 italic">Sur-mesure</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">Programme adapté à vos objectifs.</p>
            </div>
            <div>
              <h3 className="text-[#C5A059] text-[9px] font-bold uppercase mb-2 italic">Excellence</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">Pédagogie française authentique.</p>
            </div>
            <div>
              <h3 className="text-[#C5A059] text-[9px] font-bold uppercase mb-2 italic">Prestige</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">Service exclusif.</p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mb-20">
          <button onClick={() => {setShowQuiz(true); setQuizTermine(false); setCurrentQuestion(0); setScore(0);}} className="group px-10 py-4 bg-white border border-[#C5A059] rounded-full transition-all hover:bg-black">
            <span className="text-[#C5A059] group-hover:text-white text-[10px] font-bold uppercase tracking-[0.3em]">✨ Testez votre Niveau</span>
          </button>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gray-900 rounded-[30px] p-6 text-white shadow-2xl border-b-4 border-[#C5A059] max-w-3xl mx-auto">
          <h2 className="text-lg tracking-[0.2em] uppercase font-extralight mb-6 text-center">Réserver une séance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="text-[#C5A059] text-[8px] font-bold uppercase tracking-[0.2em] mb-3">1. Jour</p>
              <div className="flex flex-wrap gap-2">
                {days.map(day => (
                  <button key={day} onClick={() => setSelectedDay(day)} className={`px-3 py-1.5 rounded-full text-[8px] font-bold transition-all ${selectedDay === day ? 'bg-[#C5A059] text-white' : 'bg-white/5 text-white/50'}`}>{day}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[8px] font-bold uppercase tracking-[0.2em] mb-3">2. Heure</p>
              <div className="flex flex-wrap gap-2">
                {times.map(time => (
                  <button key={time} onClick={() => setSelectedTime(time)} className={`px-3 py-1.5 rounded-full text-[8px] font-bold transition-all ${selectedTime === time ? 'bg-[#C5A059] text-white' : 'bg-white/5 text-white/50'}`}>{time}</button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Quiz 
        showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={quizTermine} 
        currentQuestion={currentQuestion} questions={questions} 
        repondreQuiz={repondreQuiz} score={score} setShowModal={setShowModal} 
      />

      {showModal && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white rounded-[30px] p-8 max-w-sm w-full border-2 border-[#C5A059] shadow-2xl text-left">
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

      <footer className="pb-8 text-center text-[8px] text-gray-300 tracking-[0.3em] uppercase font-light">L'Excellence Française • 2026</footer>
    </div>
  );
}

export default App;