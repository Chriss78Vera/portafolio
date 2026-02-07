import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import React from 'react';
export function Projects() {
  const projects = [
    {
      title: 'TotalCommerce',
      description: 'Desarrollo de plataforma de autogestion para empresas del retail, que permite consolidar solicitudes y automatizar procesos complejos. ',
      image: 'https://storageportaldev.blob.core.windows.net/portal-mf-header-dev/Totalcommerce_icon_big.png',
      tech: ['React', 'Node.js', 'Azure DevOps', 'GitLab', 'Zendesk'],
    },
    {
      title: 'TUIIO',
      description: 'Desarrollo de aplicación móvil bancaria para Banco Santander utilizando servicios de COBIS TOPAZ. Implementada con React Native y TypeScript, incluyendo consumo de servicios corporativos, pruebas unitarias con Jest y JMeter, y despliegue en AWS con funciones Lambda y GraphQL.',
      image: 'https://portfolio-jeremy-leon.netlify.app/tuiio.png',
      tech: ['React Native', 'TypeScript', 'Jest', 'JMeter', 'AWS', 'GraphQL'],
    },
    {
      title: 'Ciro',
      description: 'Proyecto de mantenimiento y evolución de un sistema contable ecuatoriano, con backend en Php y Laravel, frontend en Vue.js, optimización MySQL e implementación de facturación electrónica conforme a normativas locales.',
      image: 'https://ciro.com.ec/_image?href=%2F_astro%2FLOGO-CIRO-CONTABLE.cPVU_iMm.png&w=150&h=75&f=webp',
      tech: ['Vue.js', 'PHP', 'MySQL','Docker', 'Laravel'],
    },
    {
      title: 'Zendesk Mobile',
      description: 'Proyecto para visualizar los tickets de zendesk desde una aplicación móvil, con backend en Node.js y en React Native con expo.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzcwMzc5ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Node.js', 'React Native', 'Expo', 'Zendesk API'],
    },
    {
      title: 'Aloundra Tour',
      description: 'Proyecto de administración de reservas de viajes, con backend en Java Spring Boot y PostgreSQL, frontend en React Typescript.',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzAzNDg1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['React', 'Java 18 ', 'Spring Boot', 'PostgreSQL'],
    },
    {
      title: 'MainSoft',
      description: 'Proyecto de tesis enfocado en el control de asistencia del personal, mediante una aplicación móvil que permite a los empleados registrar horarios de ingreso, salida y almuerzo, con notificaciones automáticas. Desarrollado con React Native, Expo y Firebase, y publicado en Google Play.',
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcwMzgwMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['React Native', 'Expo', 'Firebase'],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full"></div>

          {/* Primeros 3 proyectos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-purple-300 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* División */}
          <div className="border-t border-purple-500/30 my-12 max-w-md mx-auto"></div>
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Proyectos Personales
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full"></div>
          <div className="w-16 h-0.5 bg-purple-500/50 mx-auto mb-8 rounded-full"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-purple-300 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
