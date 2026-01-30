import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const times = ['10:00', '14:00', '16:00', '18:00', '20:00'];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans transition-all duration-500 relative">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold">EF</div>
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.4em] font-black uppercase leading-none">L'Excellence</span>
            <span className="text-[10px] tracking-[0.4em] font-black uppercase leading-none mt-1">Française</span>
          </div>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="px-8 py-2 border border-black rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
          Contact
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center">
        {/* DRAPEAUX */}
        <div className="flex justify-center gap-6 text-5xl mb-8">
          <span>🇫🇷</span> <span className="text-gray-200 font-light">|</span> <span>🇰🇼</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-serif italic mb-6 tracking-tight text-gray-900">
          L'Excellence Française
        </h1>
        
        <p className="text-gray-400 text-sm tracking-[0.5em] uppercase font-light mb-20">
          L'art de vivre • Prestige • Kuwait
        </p>

        {/* GRILLE DES 3 CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          <div className="bg-[#0047AB] rounded-[50px] p-12 text-white min-h-[450px] flex flex-col justify-between shadow-2xl text-left">
            <div>
              <h2 className="text-3xl font-bold mb-4">Soutien Scolaire</h2>
              <p className="opacity-70 font-light">Accompagnement d'élite pour élèves des écoles françaises.</p>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest">En savoir plus →</div>
          </div>

          <div className="bg-white rounded-[50px] p-12 text-gray-900 min-h-[450px] flex flex-col justify-between shadow-xl border border-gray-100 transform scale-105 z-10 relative text-left">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-[9px] font-bold px-6 py-2 rounded-full uppercase tracking-[0.3em]">Populaire</div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#C5A059]">Conversation</h2>
              <p className="text-gray-500 italic">Maîtrisez l'art de parler avec l'accent de Paris.</p>
            </div>
            <div className="text-[#C5A059] text-xs font-bold uppercase tracking-widest">Réserver →</div>
          </div>

          <div className="bg-[#D32F2F] rounded-[50px] p-12 text-white min-h-[450px] flex flex-col justify-between shadow-2xl text-left">
            <div>
              <h2 className="text-3xl font-bold mb-4">Français Pro</h2>
              <p className="opacity-70 font-light">Business, Diplomatie et examens.</p>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest">En savoir plus →</div>
          </div>
        </div>

        {/* SECTION CALENDRIER (Celle qui manquait !) */}
        <div className="bg-gray-900 rounded-[40px] p-12 text-white shadow-2xl border-b-4 border-[#C5A059] mb-12">
          <h2 className="text-2xl tracking-[0.3em] uppercase font-extralight mb-10 text-center">Réserver votre séance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">1. Sélectionner le jour</p>
              <div className="flex flex-wrap gap-3">
                {days.map(day => (
                  <button 
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-6 py-3 rounded-full text-[10px] font-bold transition-all ${selectedDay === day ? 'bg-[#C5A059] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">2. Sélectionner l'heure</p>
              <div className="flex flex-wrap gap-3">
                {times.map(time => (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-6 py-3 rounded-full text-[10px] font-bold transition-all ${selectedTime === time ? 'bg-[#C5A059] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="pb-12 text-center text-[10px] text-gray-300 tracking-[0.4em] uppercase font-light">
        L'Excellence Française • 2026
      </footer>

      {/* LA FENÊTRE MODALE */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-[40px] p-10 max-w-md w-full shadow-2xl">
            <h2 className="text-3xl font-serif italic mb-2">Contact Privé</h2>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-8 text-center">Service d'Excellence</p>
            <div className="space-y-4">
              <input type="text" placeholder="Votre Nom" className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:border-[#C5A059]" />
              <input type="email" placeholder="Votre Email" className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:border-[#C5A059]" />
              <textarea placeholder="Votre message" className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 h-32 outline-none focus:border-[#C5A059]"></textarea>
            </div>
            <div className="flex gap-4 mt-8">
              <button onClick={() => setShowModal(false)} className="flex-1 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Annuler</button>
              <button className="flex-1 py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Envoyer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;