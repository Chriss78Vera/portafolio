import { motion } from 'motion/react';
import { Code, Rocket, GraduationCap } from 'lucide-react';
import React from 'react';
export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Developer',
      description: 'Especializado en el desarrollo de aplicaciones web modernas, eficientes y escalables.',
    },
    {
      icon: GraduationCap,
      title: 'Tecnólogo en Desarrollo de Software',
      description: 'Graduado en la Escuela Politécnica Nacional del Ecuador.',
    },
    {
      icon: Rocket,
      title: 'Brindar soluciones eficientes',
      description: 'Me apasiona crear soluciones digitales que realmente aporten valor.',
    },
  ];

  return (
    <section id="about-me" className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full"></div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 md:p-12 mb-12 shadow-xl"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Soy apasionado por crear soluciones digitales que realmente aporten valor. Mi interés por la tecnología nació de la curiosidad por entender cómo funcionan las cosas y hoy se refleja en mi enfoque por construir aplicaciones web eficientes, escalables y bien diseñadas.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
              Me formé en la Escuela Politécnica Nacional y actualmente continúo mis estudios en la Universidad Israel, combinando la teoría con la práctica en proyectos reales. Disfruto aprender constantemente, adaptarme a nuevas tecnologías y cuidar cada detalle del código, la experiencia de usuario y la arquitectura de las soluciones que desarrollo.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl text-purple-300 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
