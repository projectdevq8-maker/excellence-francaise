import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const times = ['10:00', '14:00', '16:00', '18:00', '20:00'];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans transition-all duration-500 relative">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[8px] font-bold">EF</div>
          <div className="flex flex-col">
            <span className="text-[9px] tracking-[0.3em] font-black uppercase leading-none">L'Excellence</span>
            <span className="text-[9px] tracking-[0.3em] font-black uppercase leading-none mt-1">Française</span>
          </div>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="px-6 py-2 border border-black rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
          Contact
        </button>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-6 pb-20 text-center">
        {/* DRAPEAUX IMAGES */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <img src="https://flagcdn.com/w80/fr.png" alt="France" className="w-10 h-auto shadow-sm" />
          <span className="text-gray-200 font-light text-2xl">|</span>
          <img src="https://flagcdn.com/w80/kw.png" alt="Kuwait" className="w-10 h-auto shadow-sm" />
        </div>

        <h1 className="text-5xl md:text-6xl font-serif italic mb-4 tracking-tight text-gray-900">
          L'Excellence Française
        </h1>
        
        <p className="text-gray-400 text-[9px] tracking-[0.4em] uppercase font-light mb-12">
          L'art de vivre • Prestige • Kuwait
        </p>

        {/* GRILLE DES 3 CARTES AVEC CONTOUR DORÉ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-[#0047AB] rounded-[30px] p-6 text-white min-h-[280px] flex flex-col justify-between shadow-xl border-2 border-[#C5A059] text-left">
            <div>
              <h2 className="text-xl font-bold mb-2">Soutien Scolaire</h2>
              <p className="text-[11px] opacity-80 font-light">Accompagnement d'élite pour élèves des écoles françaises.</p>
            </div>
            <div className="text-[8px] font-bold uppercase tracking-widest">Détails →</div>
          </div>

          <div className="bg-white rounded-[30px] p-6 text-gray-900 min-h-[280px] flex flex-col justify-between shadow-lg border-2 border-[#C5A059] transform scale-105 z-10 relative text-left">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-[7px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em]">Populaire</div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-[#C5A059]">Conversation</h2>
              <p className="text-[11px] text-gray-500 italic">Maîtrisez l'art de parler avec l'accent de Paris.</p>
            </div>
            <div className="text-[#C5A059] text-[8px] font-bold uppercase tracking-widest">Réserver →</div>
          </div>

          <div className="bg-[#D32F2F] rounded-[30px] p-6 text-white min-h-[280px] flex flex-col justify-between shadow-xl border-2 border-[#C5A059] text-left">
            <div>
              <h2 className="text-xl font-bold mb-2">Français Pro</h2>
              <p className="text-[11px] opacity-80 font-light">Business, Diplomatie et préparation examens.</p>
            </div>
            <div className="text-[8px] font-bold uppercase tracking-widest">Détails →</div>
          </div>
        </div>

        {/* NOUVEAU : BOUTON TESTEZ VOTRE NIVEAU */}
        <div className="mb-12">
          <button className="group relative px-10 py-4 bg-white border border-[#C5A059] rounded-full overflow-hidden transition-all hover:bg-black">
            <span className="relative z-10 text-[#C5A059] group-hover:text-white text-[10px] font-bold uppercase tracking-[0.3em]">
              ✨ Testez votre Niveau
            </span>
          </button>
        </div>

        {/* SECTION CALENDRIER COMPACTE */}
        <div className="bg-gray-900 rounded-[30px] p-6 text-white shadow-2xl border-b-4 border-[#C5A059] max-w-3xl mx-auto">
          <h2 className="text-lg tracking-[0.2em] uppercase font-extralight mb-6 text-center">Réserver une séance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="text-[#C5A059] text-[8px] font-bold uppercase tracking-[0.2em] mb-3">1. Jour</p>
              <div className="flex flex-wrap gap-2">
                {days.map(day => (
                  <button key={day} onClick={() => setSelectedDay(day)}
                    className={`px-3 py-1.5 rounded-full text-[8px] font-bold transition-all ${selectedDay === day ? 'bg-[#C5A059] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
                    {day}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] text-[8px] font-bold uppercase tracking-[0.2em] mb-3">2. Heure</p>
              <div className="flex flex-wrap gap-2">
                {times.map(time => (
                  <button key={time} onClick={() => setSelectedTime(time)}
                    className={`px-3 py-1.5 rounded-full text-[8px] font-bold transition-all ${selectedTime === time ? 'bg-[#C5A059] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="pb-8 text-center text-[8px] text-gray-300 tracking-[0.3em] uppercase font-light">
        L'Excellence Française • 2026
      </footer>

      {/* MODALE CONTACT */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[30px] p-8 max-w-sm w-full border-2 border-[#C5A059] shadow-2xl">
            <h2 className="text-2xl font-serif italic mb-4">Contact Privé</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Nom" className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50 text-sm outline-none focus:border-[#C5A059]" />
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50 text-sm outline-none focus:border-[#C5A059]" />
              <textarea placeholder="Message" className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50 h-24 text-sm outline-none focus:border-[#C5A059]"></textarea>
            </div>
            <div className="flex gap-4 mt-6">
              <button onClick={() => setShowModal(false)} className="flex-1 text-[9px] font-bold uppercase tracking-widest text-gray-400">Annuler</button>
              <button className="flex-1 py-3 bg-[#C5A059] text-white rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">Envoyer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;