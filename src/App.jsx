import React, { useState } from 'react';

export default function App() {
  const [etapeTest, setEtapeTest] = useState("accueil");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [niveauSuggere, setNiveauSuggere] = useState("");
  
  // États pour le Calendrier
  const [dateSelectionnee, setDateSelectionnee] = useState("");
  const [heureSelectionnee, setHeureSelectionnee] = useState("");

  const envoyerWhatsApp = (msg) => {
    const numero = "965XXXXXXXX"; 
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const questions = [
    { q: "Connaissez-vous l'alphabet ?", r: ["Non", "Un peu", "Oui"], action: (i) => i === 0 ? finir("Débutant") : setQuestionIndex(1) },
    { q: "Lecture de phrases ?", r: ["Difficile", "Moyen", "Facile"], action: (i) => i === 2 ? finir("Avancé") : finir("Intermédiaire") }
  ];

  const finir = (n) => { setNiveauSuggere(n); setEtapeTest("resultat"); };

  const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const creneaux = ["10:00", "14:00", "16:00", "18:00", "20:00"];

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-slate-900 font-sans antialiased pb-20">
      
      {/* NAVBAR */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-serif font-bold shadow-sm border border-slate-200 text-xs text-slate-400">EF</div>
          <h1 className="text-[10px] font-serif tracking-[0.2em] uppercase font-bold opacity-70">L'Excellence Française</h1>
        </div>
        <button onClick={() => envoyerWhatsApp("Demande d'informations")} className="border-2 border-slate-900 px-6 py-1.5 rounded-full text-[9px] font-black tracking-widest hover:bg-slate-900 hover:text-white transition-all">CONTACT</button>
      </nav>

      <header className="py-12 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 italic">L'Excellence Française</h2>
      </header>

      {/* SECTION FORMULES */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10 pb-20 mt-4">
        <div className="relative h-[380px] rounded-[30px] shadow-lg border-2 border-[#D4AF37] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0055A4] to-[#003366]"></div>
          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center text-white">
            <h3 className="text-xl font-serif font-bold mb-4">Soutien Scolaire</h3>
            <p className="text-xs italic opacity-90 leading-relaxed">Accompagnement d'élite pour élèves des écoles françaises.</p>
          </div>
        </div>

        <div className="relative h-[380px] rounded-[30px] shadow-lg border-2 border-[#D4AF37] bg-white">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 bg-[#D4AF37] text-black text-[7px] px-5 py-1.5 rounded-full font-black tracking-[0.2em] border-2 border-white shadow-md text-center">POPULAIRE</div>
          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center text-slate-900">
            <h3 className="text-xl font-serif font-bold mb-4">Conversation</h3>
            <p className="text-xs italic opacity-60 leading-relaxed">Maîtrisez l'art de parler avec l'accent de Paris.</p>
          </div>
        </div>

        <div className="relative h-[380px] rounded-[30px] shadow-lg border-2 border-[#D4AF37] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EF4135] to-[#B31919]"></div>
          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center text-white">
            <h3 className="text-xl font-serif font-bold mb-4">Français Pro</h3>
            <p className="text-xs italic opacity-90 leading-relaxed">Business, Diplomatie et préparations aux examens.</p>
          </div>
        </div>
      </section>

      {/* NOUVEAU MODULE : RÉSERVATION CALENDRIER */}
      <section className="max-w-4xl mx-auto px-10 mb-20">
        <div className="bg-white border-2 border-[#D4AF37] rounded-[40px] overflow-hidden shadow-2xl">
          <div className="bg-slate-900 p-6 text-center">
            <h3 className="text-white font-serif italic text-xl">Réserver votre séance découverte</h3>
            <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-2 font-bold">Choisissez votre créneau</p>
          </div>
          
          <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Colonne Jours */}
            <div>
              <p className="text-[10px] font-bold uppercase mb-4 opacity-50">1. Sélectionner le jour</p>
              <div className="grid grid-cols-2 gap-2">
                {jours.map(j => (
                  <button key={j} onClick={() => setDateSelectionnee(j)} className={`p-3 rounded-xl text-[10px] font-bold transition-all border ${dateSelectionnee === j ? 'bg-slate-900 text-[#D4AF37] border-slate-900 shadow-lg' : 'bg-slate-50 border-slate-100 hover:border-[#D4AF37]'}`}>{j}</button>
                ))}
              </div>
            </div>

            {/* Colonne Heures */}
            <div>
              <p className="text-[10px] font-bold uppercase mb-4 opacity-50">2. Sélectionner l'heure</p>
              <div className="grid grid-cols-2 gap-2">
                {creneaux.map(h => (
                  <button key={h} onClick={() => setHeureSelectionnee(h)} className={`p-3 rounded-xl text-[10px] font-bold transition-all border ${heureSelectionnee === h ? 'bg-[#0055A4] text-white border-[#0055A4] shadow-lg' : 'bg-slate-50 border-slate-100 hover:border-[#D4AF37]'}`}>{h}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-50 border-t border-slate-100 text-center">
            {dateSelectionnee && heureSelectionnee ? (
              <button onClick={() => envoyerWhatsApp(`Bonjour, je souhaite réserver une séance le ${dateSelectionnee} à ${heureSelectionnee}.`)} className="bg-slate-900 text-white px-12 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl hover:scale-105 transition-all">Confirmer pour le {dateSelectionnee} à {heureSelectionnee}</button>
            ) : (
              <p className="text-slate-400 text-[10px] italic">Veuillez choisir un jour et une heure pour continuer</p>
            )}
          </div>
        </div>
      </section>

      {/* SECTION TEST NIVEAU */}
      <section className="max-w-xl mx-auto px-10">
        <div className="bg-white border-2 border-white p-10 rounded-[40px] text-center shadow-xl">
          {etapeTest === "accueil" && (
            <><h3 className="text-xl font-serif mb-6 italic">Testez votre Niveau</h3>
            <button onClick={() => setEtapeTest("test")} className="bg-[#0055A4] text-white px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest shadow-md">Démarrer</button></>
          )}
          {etapeTest === "test" && (
            <div className="text-left max-w-xs mx-auto">
              <h4 className="text-lg mb-6 font-serif italic">{questions[questionIndex].q}</h4>
              <div className="space-y-3">
                {questions[questionIndex].r.map((r, i) => (
                  <button key={i} onClick={() => questions[questionIndex].action(i)} className="w-full p-4 text-left bg-slate-50 border border-slate-100 rounded-xl font-bold text-[10px] uppercase tracking-widest text-slate-600 shadow-sm hover:border-[#D4AF37] transition-all">{r}</button>
                ))}
              </div>
            </div>
          )}
          {etapeTest === "resultat" && (
            <div className="text-center">
              <h3 className="text-3xl font-serif mb-8 italic">Niveau : {niveauSuggere}</h3>
              <button onClick={() => envoyerWhatsApp(`Mon résultat au test : ${niveauSuggere}`)} className="bg-[#0055A4] text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest">Envoyer WhatsApp</button>
            </div>
          )}
        </div>
      </section>

      <footer className="mt-24 text-center opacity-30">
        <p className="text-[7px] tracking-[0.4em] font-black uppercase italic">L'Excellence Française • 2026</p>
      </footer>
    </div>
  );
}