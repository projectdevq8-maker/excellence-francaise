import React from 'react';
import { motion } from 'framer-motion';

const Quiz = ({ 
  showQuiz, 
  setShowQuiz, 
  quizTermine, 
  currentQuestion, 
  questions, 
  repondreQuiz, 
  score, 
  setShowModal 
}) => {
  // Si le quiz ne doit pas être affiché, on ne renvoie rien
  if (!showQuiz) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        className="bg-white rounded-[30px] p-8 max-w-md w-full border-2 border-[#C5A059] shadow-2xl text-center"
      >
        {!quizTermine ? (
          <>
            <p className="text-[#C5A059] text-[10px] font-bold uppercase mb-4">
              Question {currentQuestion + 1} / {questions.length}
            </p>
            <h2 className="text-xl font-serif italic mb-8">{questions[currentQuestion].q}</h2>
            <div className="flex flex-col gap-3">
              {questions[currentQuestion].options.map((opt, idx) => (
                <button 
                  key={idx} 
                  onClick={() => repondreQuiz(questions[currentQuestion].points[idx])} 
                  className="py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-[#C5A059] transition-all text-sm font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-serif italic mb-4">Analyse Terminée</h2>
            <p className="text-gray-500 mb-8 text-sm">
              Votre score : <span className="text-[#C5A059] font-bold">{score} / 6</span>
            </p>
            <button 
              onClick={() => { setShowQuiz(false); setShowModal(true); }} 
              className="w-full py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest"
            >
              Réserver mon programme
            </button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Quiz;