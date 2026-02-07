import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, FolderOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import React from 'react';
export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl mb-4">
              <span className="block text-gray-300">Hola, soy</span>
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Christopher Vera
              </span>
            </h1>
            <p className="text-2xl text-purple-300 mb-6">
              Full Stack Developer
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Soy Tecnólogo Superior en Desarrollo de Software, especializado en el desarrollo de aplicaciones web y en la implementación de backend, con experiencia en integraciones basadas en microservicios y microfrontends.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2">
                <FolderOpen size={20} />
                Ver Proyectos
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Chriss78Vera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-full text-gray-300 hover:bg-purple-600 hover:text-white transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ChrissVera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mv34613@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-full text-gray-300 hover:bg-purple-600 hover:text-white transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-2 shadow-2xl">
                <ImageWithFallback
                  src="https://res.cloudinary.com/dzsktn4sw/image/upload/v1770435179/Perfil_Page_exfghc.png"
                  alt="Professional portrait"
                  className="rounded-3xl w-full max-w-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
