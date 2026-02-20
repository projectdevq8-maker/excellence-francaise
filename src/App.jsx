import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  GraduationCap, Sparkles, Briefcase, Moon, Sun, 
  ChevronRight, X, Phone, Globe
} from 'lucide-react';

// Note: Assure-toi que ces composants existent ou commente-les si tu ne les as pas encore
// import Navbar from './components/Navbar'; 
// import Quiz from './components/Quiz';

function App() {
  const [lang, setLang] = useState('fr');
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [nom, setNom] = useState('');

  // Barre de progression de scroll
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [lang, darkMode]);

  const content = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "PRESTIGE • ÉDUCATION • KOWEÏT",
      heroDesc: "L'art de la transmission et le luxe du savoir au service de votre réussite.",
      cards: [
        { id: 1, title: "Soutien Scolaire", icon: <GraduationCap size={28} />, desc: "Coaching d'élite, cursus français.", tag: "RÉUSSITE", color: "text-[#0047AB]" },
        { id: 2, title: "Art de Vivre", icon: <Sparkles size={28} />, desc: "L'éloquence et le savoir-vivre.", tag: "POPULAIRE", color: "text-[#C5A059]" },
        { id: 3, title: "Français Pro", icon: <Briefcase size={28} />, desc: "Diplomatie et Business.", tag: "CARRIÈRE", color: "text-[#D32F2F]" }
      ],
      cta: "Évaluer mon niveau",
      booking: "Conciergerie & Agenda",
      send: "Réserver via WhatsApp",
      footer: "L'Excellence Française — 2026"
    },
    en: {
      title: "French Excellence",
      subtitle