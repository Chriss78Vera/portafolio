import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import React from 'react';
export function Education() {
  const timeline = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Tecnólogo en Desarrollo de Software',
      organization: 'Escuela Politécnica Nacional',
      period: 'abril 2019 - noviembre 2022',
      description: 'Graduado en la Escuela Politécnica Nacional del Ecuador.',
      color: 'from-purple-600 to-blue-600',
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: 'Junior Software Developer | Aplicaciones Móviles & Integraciones API',
      organization: 'Clear Minds Consultores',
      period: 'diciembre 2020 - mayo 2021',
      description: 'Participé en el desarrollo de aplicaciones móviles contables para clientes empresariales y una entidad bancaria, integrando APIs, desarrollando funcionalidades con React Native, apoyando el backend en Node.js y fortaleciendo habilidades en Java (Maven), trabajando de forma colaborativa y enfocada en el aprendizaje continuo.',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: 'Full Stack Developer | Sistemas Contables & Soluciones en la Nube',
      organization: 'Ciro',
      period: 'abril 2023 - enero 2024',
      description: 'Mantenimiento y evolución de un sistema contable para el mercado ecuatoriano, resolviendo incidencias funcionales y técnicas, desarrollando backend en Node.js y Laravel, frontend en Vue.js, optimizando consultas MySQL, gestionando proyectos en la nube, brindando soporte a clientes e implementando facturación electrónica conforme a normativas locales, con participación activa en decisiones técnicas y mejoras del sistema.',
      color: 'from-cyan-600 to-teal-600',
    },

    {
      type: 'experience',
      icon: Briefcase,
      title: 'Full Stack Developer | Arquitectura en Azure & CI/CD | Tech Leader',
      organization: 'IXcomercio',
      period: 'enero 2025 - enero 2026',
      description: 'Desarrollo de la plataforma TotalCommerce para el sector retail, actuando también como Tech Lead, implementando arquitecturas escalables en Azure basadas en microservicios y micro frontends, desarrollando frontend en React y backend en Node.js, liderando procesos de CI/CD con GitLab, promoviendo un enfoque de Vibe Coding orientado a buenas prácticas, calidad y colaboración, ejecutando pruebas unitarias, resolviendo incidencias, documentando soluciones técnicas y gestionando soporte mediante Zendesk, en un entorno ágil y de mejora continua.',
      color: 'from-cyan-600 to-teal-600',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Ingeniero en sistemas de la información',
      organization: 'Universidad Israel',
      period: 'abril 2025 - presente',
      description: 'Estudiante de Ingeniería en Sistemas de la Información en la Universidad Israel, con especialidad en desarrollo de software y seguridad informática.',
      color: 'from-purple-600 to-blue-600',
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Educación y Experiencia
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full"></div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-cyan-600 hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex gap-6">
                      {/* Icon */}
                      <div className="hidden md:block relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <item.icon size={28} className="text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                          <div>
                            <h3 className="text-xl text-purple-300 mb-1">{item.title}</h3>
                            <p className="text-gray-400">{item.organization}</p>
                          </div>
                          <span className="px-4 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
