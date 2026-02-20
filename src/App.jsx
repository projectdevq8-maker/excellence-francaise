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

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const content = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "L'Art de vivre • Prestige • Kuwait City",
      cards: [
        { title: "Soutien Scolaire", desc: "Accompagnement d'élite pour élèves des écoles françaises.", bgColor: "bg-[#0047AB]", textColor: "text-white", tag: "RÉUSSITE" },
        { title: "Conversation", desc: "Maîtrisez l'art de parler avec aisance et élégance parisienne.", bgColor: "bg-white", textColor: "text-gray-900", tag: "POPULAIRE", popular: true },
        { title: "Français Pro", desc: "Business, Diplomatie et examens officiels.", bgColor: "bg-[#D32F2F]", textColor: "text-white", tag: "CARRIÈRE" }
      ],
      testBtn: "✨ Déterminer mon niveau",
      booking: "Réservations & Contact",
      step1: "1. Choisir le Jour",
      step2: "2. Choisir l'Heure",
      send: "Envoyer via WhatsApp",
      footer: "Excellence Française • 2026",
      placeholderName: "Nom Complet",
      placeholderMsg: "Votre Message"
    },
    en: {
      title: "French Excellence",
      subtitle: "The Art of Living • Prestige • Kuwait City",
      cards: [
        { title: "Academic Support", desc: "Elite coaching for French school students.", bgColor: "bg-[#0047AB]", textColor: "text-white", tag: "SUCCESS" },
        { title: "Conversation", desc: "Master the art of speaking with grace and fluidity.", bgColor: "bg-white", textColor: "text-gray-900", tag: "POPULAR", popular: true },
        { title: "Professional French", desc: "Business, Diplomacy & Official Exams.", bgColor: "bg-[#D32F2F]", textColor: "text-white", tag: "CAREER" }
      ],
      testBtn: "✨ Determine my Level",
      booking: "Booking & Contact",
      step1: "1. Select Day",
      step2: "2. Select Time",
      send: "Send to WhatsApp",
      footer: "French Excellence • 2026",
      placeholderName: "Full Name",
      placeholderMsg: "Your Message"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فن الحياة • فخامة • مدينة الكويت",
      cards: [
        { title: "الدعم الأكاديمي", desc: "تدريب متميز لطلاب المدارس الفرنسية.", bgColor: "bg-[#0047AB]", textColor: "text-white", tag: "نجاح" },
        { title: "المحادثة", desc: "أتقن فن التحدث بكل رقي وانسيابية باريسية.", bgColor: "bg-white", textColor: "text-gray-900", tag: "مطلوب", popular: true },
        { title: "الفرنسية المهنية", desc: "الأعمال، الدبلوماسية والامتحانات الرسمية.", bgColor: "bg-[#D32F2F]", textColor: "text-white", tag: "مهني" }
      ],
      testBtn: "✨ ابدأ اختبار المستوى",
      booking: "حجز موعد وتواصل",
      step1: "١. اختر اليوم",
      step2: "٢. اختر الوقت",
      send: "إرسال عبر واتساب",
      footer: "التميز الفرنسي • ٢٠٢٦",
      placeholderName: "الاسم الكامل",
      placeholderMsg: "رسالتك"
    }
  };

  const t = content[lang];
  const isAr = lang === 'ar';

  const envoyerWhatsApp = () => {
    const numero = "33667569993";
    const texte = `Bonjour. Nom: ${nom}. RDV: ${selectedDay} à ${selectedTime}. Langue: ${lang}. Message: ${message}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texte)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* SÉLECTEUR DE LANGUE */}
      <div className="fixed top-24 right-6 z-[60] flex flex-col gap-2">
        {['fr', 'en', 'ar'].map((l) => (
          <button key={l} onClick={() => setLang(l)} className={`w-10 h-10 rounded-full border shadow-lg font-bold text-[9px] flex items-center justify-center transition-all ${lang === l ? 'bg-[#C5A059] text-white border-[#C5A059]' : 'bg-white text-gray-300 hover:border-black'}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar setShowModal={setShowModal} />

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-32 text-center">
        
        {/* HERO SECTION */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24">
          <div className="flex justify-center gap-4 mb-8"></div>