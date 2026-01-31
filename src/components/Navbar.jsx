import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ setShowModal }) => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="flex justify-between items-center p-6 max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-3 text-left">
        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[8px] font-bold">EF</div>
        <div className="flex flex-col">
          <span className="text-[9px] tracking-[0.3em] font-black uppercase leading-none text-left">L'Excellence</span>
          <span className="text-[9px] tracking-[0.3em] font-black uppercase leading-none mt-1 text-left">Française</span>
        </div>
      </div>
      <button 
        onClick={() => setShowModal(true)} 
        className="px-6 py-2 border border-black rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
      >
        Contact
      </button>
    </motion.nav>
  );
};

export default Navbar;