import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { name: t.nav.home, id: 'home' }, { name: t.nav.about, id: 'about-me' }, { name: t.nav.projects, id: 'projects' }, { name: t.nav.skills, id: 'skills' }, { name: t.nav.education, id: 'education' }, { name: t.nav.contact, id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-purple-500/20">
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            CV
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end gap-3">
          <div className="flex items-center gap-1 rounded-full border border-purple-500/30 bg-white/5 p-1" aria-label={t.nav.language}>
            <button onClick={() => setLanguage('es')} className={`px-3 py-1 rounded-full text-xs transition-all ${language === 'es' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}>ES</button>
            <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-full text-xs transition-all ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>EN</button>
          </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4 pb-4"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
            <div className="flex gap-2"><button onClick={() => setLanguage('es')} className={`px-3 py-1 rounded-full text-xs ${language === 'es' ? 'bg-purple-600' : 'bg-white/10'}`}>ES</button><button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-full text-xs ${language === 'en' ? 'bg-blue-600' : 'bg-white/10'}`}>EN</button></div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
