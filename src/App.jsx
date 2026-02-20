import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Sparkles, Briefcase, Moon, Sun, 
  ArrowRight, ChevronRight, X, Phone 
} from 'lucide-react';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  const [lang, setLang] = useState('fr');
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [lang, darkMode]);

  const content = {
    fr: {
      title: "L'Excellence Française",
      subtitle: "PRESTIGE • ÉDUCATION • KOWEÏT",
      heroDesc: "L'art de la transmission et le luxe du savoir au service de votre réussite.",
      cards: [
        { id: 1, title: "Soutien Scolaire", icon: <GraduationCap size={28} />, desc: "Coaching d'élite, cursus français.", tag: "RÉUSSITE", color: "text-[#0047AB]" },
        { id: 2, title: "Art de Vivre", icon: <Sparkles size={28} />, desc: "L'éloquence et le savoir-vivre.", tag: "POPULAIRE", color: "text-[#C5A059]", popular: true },
        { id: 3, title: "Français Pro", icon: <Briefcase size={28} />, desc: "Diplomatie et Business.", tag: "CARRIÈRE", color: "text-[#D32F2F]" }
      ],
      cta: "Évaluer mon niveau",
      booking: "Conciergerie & Agenda",
      step1: "1. Sélectionner le Jour",
      step2: "2. Choisir l'Heure",
      send: "Réserver via WhatsApp",
      footer: "L'Excellence Française — 2026"
    },
    en: {
      title: "French Excellence",
      subtitle: "PRESTIGE • EDUCATION • KUWAIT",
      heroDesc: "The art of teaching and the luxury of knowledge at the service of your success.",
      cards: [
        { id: 1, title: "Academic Support", icon: <GraduationCap size={28} />, desc: "Elite coaching, French curriculum.", tag: "SUCCESS", color: "text-[#0047AB]" },
        { id: 2, title: "Lifestyle", icon: <Sparkles size={28} />, desc: "Eloquence and savoir-vivre.", tag: "POPULAR", color: "text-[#C5A059]", popular: true },
        { id: 3, title: "Professional French", icon: <Briefcase size={28} />, desc: "Diplomacy and Business.", tag: "CAREER", color: "text-[#D32F2F]" }
      ],
      cta: "Assess my level",
      booking: "Calendrier",
      step1: "1. Select Day",
      step2: "2. Select Time",
      send: "Book via WhatsApp",
      footer: "French Excellence — 2026"
    },
    ar: {
      title: "التميز الفرنسي",
      subtitle: "فخامة • تعليم • مدينة الكويت",
      heroDesc: "فن النقل وفخامة المعرفة في خدمة نجاحكم.",
      cards: [
        { id: 1, title: "الدعم الأكاديمي", icon: <GraduationCap size={28} />, desc: "تدريب متميز للمنهج الفرنسي.", tag: "نجاح", color: "text-[#0047AB]" },
        { id: 2, title: "فن الحياة", icon: <Sparkles size={28} />, desc: "الرقي وأصول اللياقة الفرنسية.", tag: "مطلوب", color: "text-[#C5A059]", popular: true },
        { id: 3, title: "الفرنسية المهنية", icon: <Briefcase size