import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    const numero = "33667569993"; 
    const texte = `Bonjour, je suis ${nom}. %0A*Score test:* ${score}/6. %0A*Réservation:* ${selectedDay} à ${selectedTime}. %0A*Message:* ${message}`;
    window.open(`https://wa.me/${numero}?text=${texte}`, '_blank');
  };

  const mobileAnim = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-[#C5A059] selection:text-white">
      
      <Navbar setShowModal={setShowModal} />

      <main className="max-w-7xl mx-auto px-6 pt-6 pb-20 text-center">
        {/* En-tête Dynamique */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="flex justify-center items-center gap-4 mb-6"
        >
          <img src="https://flagcdn.com/w80/fr.png" alt="France" className="w-10 h-auto shadow-sm" />
          <span className="text-gray-200 font-light text-2xl">|</span>
          <img src="https://flagcdn.com/w80/kw.png" alt="Kuwait" className="w-10 h-auto shadow-sm" />
        </motion.div>

        <motion.h1 className="text-4xl md:text-7xl font-serif italic mb-4 tracking-tight">
          L'Excellence Française
        </motion.h1>
        
        <motion.p className="text-[#C5A059] text-[10px] tracking-[0.6em] uppercase font-light mb-16">
          L'art de vivre • Prestige • Kuwait City
        </motion.p>

        {/* GRILLE DE CARTES : Largeur augmentée et gap maîtrisé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 w-full">
          <motion.div 
            {...mobileAnim}
            whileHover={{ y: -8 }}
            className="bg-[#0047AB] rounded-[45px] p-10 text-white h-auto min-h-[350px] flex flex-col justify-between shadow-2xl border-2 border-[#C5A059] text-left"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Soutien Scolaire</h2>
              <p className="text-sm opacity-80 font-light leading-relaxed">Accompagnement d'élite pour élèves des écoles françaises.</p>
            </div>
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] border-t border-white/20 pt-4">Détails →</div>
          </motion.div>

          <motion.div 
            {...mobileAnim}
            whileHover={{ y: -8 }}
            className="bg-white rounded-[45px] p-10 text-gray-900 h-auto min-h-[350px] flex flex-col justify-between shadow-2xl border-2 border-[#C5A059] relative text-left"
          >
            <div className="absolute -top-4 left-10 bg-[#C5A059] text-white text-[8px] font-bold px-4 py-1 rounded-full uppercase">Populaire</div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#C5A059]">Conversation</h2>
              <p className="text-sm text-gray-500 italic leading-relaxed">Maîtrisez l'art de la conversation avec aisance et élégance.</p>
            </div>
            <div className="text-[#C5A059] text-[9px] font-bold uppercase tracking-[0.2em] border-t border-gray-100 pt-4">Réserver →</div>
          </motion.div>

          <motion.div 
            {...mobileAnim}
            whileHover={{ y: -8 }}
            className="bg-[#D32F2F] rounded-[45px] p-10 text-white h-auto min-h-[350px] flex flex-col justify-between shadow-2xl border-2 border-[#C5A059] text-left"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Français Pro</h2>
              <p className="text-sm opacity-80 font-light leading-relaxed">Business, Diplomatie et préparation examens.</p>
            </div>
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] border-t border-white/20 pt-4">Détails →</div>
          </motion.div>
        </div>

        {/* SECTION FORMULES : MODIFIÉE POUR ÊTRE CÔTE À CÔTE ET ESPACÉE */}
        <div className="py-20 border-t border-gray-50 mb-10 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left px-4">
            <div className="flex-1">
              <h3 className="text-[#C5A059] text-[10px] font-bold uppercase mb-3 tracking-widest italic">Sur-mesure</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">Programme adapté à vos objectifs personnels et professionnels.</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[#C5A059] text-[10px] font-bold uppercase mb-3 tracking-widest italic">Excellence</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">Pédagogie française authentique et résultats garantis.</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[#C5A059] text-[10px] font-bold uppercase mb-3 tracking-widest italic">Prestige</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">Service exclusif et conciergerie éducative à Kuwait City.</p>
            </div>
          </div>
        </div>

        {/* Bouton CTA */}
        <div className="flex justify-center mb-32">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {setShowQuiz(true); setQuizTermine(false); setCurrentQuestion(0); setScore(0);}} 
            className="px-12 py-6 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-[#C5A059] transition-all"
          >
            ✨ Déterminer mon niveau
          </motion.button>
        </div>

        {/* Calendrier */}
        <motion.div className="bg-gray-900 rounded-[50px] p-10 sm:p-16 text-white shadow-2xl border-b-8 border-[#C5A059] max-w-5xl mx-auto">
          <h2 className="text-2xl tracking-[0.3em] uppercase font-light mb-12 text-center italic">Agenda des séances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-6 border-l-2 border-[#C5A059] pl-4">1. Sélectionner le Jour</p>
              <div className="flex flex-wrap gap-3">
                {days.map(day => (
                  <button key={day} onClick={() => setSelectedDay(day)} className={`px-4 py-3 rounded-xl text-[10px] font-bold transition-all border ${selectedDay === day ? 'bg-[#C5A059] border-[#C5A059] text-white' : 'bg-white/5 border-white/10 text-white/50 hover:border-white'}`}>{day}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-6 border-l-2 border-[#C5A059] pl-4">2. Choisir l'Heure</p>
              <div className="flex flex-wrap gap-3">
                {times.map(time => (
                  <button key={time} onClick={() => setSelectedTime(time)} className={`px-4 py-3 rounded-xl text-[10px] font-bold transition-all border ${selectedTime === time ? 'bg-[#C5A059] border-[#C5A059] text-white' : 'bg-white/5 border-white/10 text-white/50 hover:border-white'}`}>{time}</button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} quizTermine={quizTermine} currentQuestion={currentQuestion} questions={questions} repondreQuiz={repondreQuiz} score={score} setShowModal={setShowModal} />

      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white rounded-[40px] p-10 max-w-sm w-full border-2 border-[#C5A059] shadow-2xl">
              <h2 className="text-2xl font-serif italic mb-6">Conciergerie</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Votre Nom" onChange={(e) => setNom(e.target.value)} className="w-full p-4 border-b border-gray-100 outline-none focus:border-[#C5A059]" />
                <textarea placeholder="Message..." onChange={(e) => setMessage(e.target.value)} className="w-full p-4 border-b border-gray-100 h-24 outline-none focus:border-[#C5A059] resize-none"></textarea>
              </div>
              <div className="flex gap-4 mt-10">
                <button onClick={() => setShowModal(false)} className="flex-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">Retour</button>
                <button onClick={envoyerWhatsApp} className="flex-[2] py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl hover:bg-[#C5A059] transition-all">Envoyer</button>
              </div>
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