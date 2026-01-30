import React, { useState } from 'react'; // ON IMPORTE LA MÉMOIRE

function App() {
  // ON CRÉE L'INTERRUPTEUR (Fermé par défaut : false)
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative">
      
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold">EF</div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] tracking-[0.4em] font-black uppercase leading-none">L'Excellence</span>
            <span className="text-[10px] tracking-[0.4em] font-black uppercase leading-none mt-1">Française</span>
          </div>
        </div>
        
        {/* AU CLIC : ON OUVRE LA FENÊTRE (true) */}
        <button 
          onClick={() => setShowModal(true)}
          className="px-8 py-2 border border-black rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
          Contact
        </button>
      </nav>

      {/* TON DESIGN DE PRESTIGE (Le contenu reste le même) */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="flex justify-center gap-6 text-5xl mb-8">
          <span>🇫🇷</span> <span className="text-gray-200 font-light">|</span> <span>🇰🇼</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-serif italic mb-6 tracking-tight">L'Excellence Française</h1>
        <p className="text-gray-400 text-sm tracking-[0.5em] uppercase font-light mb-20">L'art de vivre • Prestige • Kuwait</p>
        
        {/* ... (Tes 3 cartes bleu/blanc/rouge sont ici) ... */}
      </main>

      {/* --- LA NOUVEAUTÉ : LA FENÊTRE MODALE --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-[40px] p-10 max-w-md w-full shadow-2xl scale-in-center">
            <h2 className="text-3xl font-serif italic mb-2">Contact Privé</h2>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-8 text-center">Service d'Excellence</p>
            
            <div className="space-y-4">
              <input type="text" placeholder="Votre Nom" className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:border-[#C5A059]" />
              <input type="email" placeholder="Votre Email" className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:border-[#C5A059]" />
              <textarea placeholder="Votre message" className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 h-32 outline-none focus:border-[#C5A059]"></textarea>
            </div>

            <div className="flex gap-4 mt-8">
              {/* AU CLIC : ON FERME LA FENÊTRE (false) */}
              <button onClick={() => setShowModal(false)} className="flex-1 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Annuler</button>
              <button className="flex-1 py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Envoyer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;