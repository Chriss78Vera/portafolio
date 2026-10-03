import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../i18n';
import React from 'react';

type Project = { title: string; description: string; image: string; tech: readonly string[] };

const APPLE_PATH = 'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701';

function AppleMark({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d={APPLE_PATH} fill="currentColor" /></svg>;
}

export function Projects() {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';
  const professionalProjects: Project[] = [
    { title: 'TotalCommerce', description: isEnglish ? 'Self-service platform for retail companies, consolidating requests and automating complex business processes.' : 'Desarrollo de plataforma de autogestión para empresas del retail, que permite consolidar solicitudes y automatizar procesos complejos.', image: 'https://storageportaldev.blob.core.windows.net/portal-mf-header-dev/Totalcommerce_icon_big.png', tech: ['React', 'Node.js', 'Azure DevOps', 'GitLab', 'Zendesk'] },
    { title: 'TUIIO', description: isEnglish ? 'Mobile banking application for Banco Santander using COBIS TOPAZ services, built with React Native and TypeScript.' : 'Desarrollo de aplicación móvil bancaria para Banco Santander utilizando servicios de COBIS TOPAZ. Implementada con React Native y TypeScript.', image: 'https://res.cloudinary.com/dzsktn4sw/image/upload/v1791000905/Tuiio_x0f3ab.png', tech: ['React Native', 'TypeScript', 'Jest', 'AWS', 'GraphQL'] },
    { title: 'Ciro', description: isEnglish ? 'Maintenance and evolution of an Ecuadorian accounting system, with PHP/Laravel backend, Vue.js frontend and MySQL optimization.' : 'Mantenimiento y evolución de un sistema contable ecuatoriano, con backend en PHP y Laravel, frontend en Vue.js y optimización MySQL.', image: 'https://res.cloudinary.com/dzsktn4sw/image/upload/v1791000680/LOGO-CIRO-CONTABLE.DgoYxXph_O7Qo6_dstrdf.webp', tech: ['Vue.js', 'PHP', 'MySQL', 'Docker', 'Laravel'] },
  ];
  const personalProjects: Project[] = [
    { title: 'Paktay', description: t.projects.paktay, image: 'https://res.cloudinary.com/dzsktn4sw/image/upload/v1791000372/Group_1_o0tkea.png', tech: t.projects.paktayTech },
    { title: 'Zendesk Mobile', description: isEnglish ? 'Mobile application for viewing Zendesk tickets, with a Node.js backend and React Native with Expo.' : 'Aplicación móvil para visualizar tickets de Zendesk, con backend en Node.js y React Native con Expo.', image: 'https://res.cloudinary.com/dzsktn4sw/image/upload/v1770434623/Zendesk_App_ux9kft.png', tech: ['Node.js', 'React Native', 'Expo', 'Zendesk API'] },
    { title: 'Aloundra Tour', description: isEnglish ? 'Travel reservation management platform with a Java Spring Boot and PostgreSQL backend and a React TypeScript frontend.' : 'Proyecto de administración de reservas de viajes, con backend en Java Spring Boot y PostgreSQL, frontend en React TypeScript.', image: 'https://res.cloudinary.com/dzsktn4sw/image/upload/v1770434198/Alondra_Tour_bv4eak.png', tech: ['React', 'Java', 'Spring Boot', 'PostgreSQL'] },
    { title: 'MainSoft', description: isEnglish ? 'Thesis project focused on employee attendance management through a mobile application for check-in, check-out and lunch records, with automated notifications.' : 'Proyecto de tesis enfocado en el control de asistencia del personal, mediante una aplicación móvil que permite registrar horarios de ingreso, salida y almuerzo, con notificaciones automáticas.', image: 'https://res.cloudinary.com/dzsktn4sw/image/upload/v1770433764/MainSoft_hda1yj.png', tech: ['React Native', 'Expo', 'Firebase'] },
  ];
  const renderCard = (project: Project, index: number, isPaktay = false) => (
    // Paktay y Zendesk tienen más espacio transparente alrededor del recurso original.
    // Se amplían ligeramente para que tengan una presencia visual equivalente al resto.
    (() => {
      const featuredImage = project.title === 'Paktay' || project.title === 'Zendesk Mobile';
      return (
    <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group">
      <div className="relative h-48 overflow-hidden bg-gray-900/50 flex items-center justify-center">
        <ImageWithFallback src={project.image} alt={project.title} className={`max-w-full max-h-full object-contain transition-transform duration-300 ${featuredImage ? 'scale-125 group-hover:scale-[1.35]' : 'group-hover:scale-110'}`} />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-2"><h3 className="text-xl text-purple-300">{project.title}</h3>{isPaktay && <span className="text-gray-200" aria-label={t.projects.available}><AppleMark size={18} /></span>}</div>
        {isPaktay && <p className="text-xs text-gray-400 mb-3 flex items-center gap-2"><AppleMark size={14} />{t.projects.available}</p>}
        <p className="text-gray-400 mb-4 line-clamp-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300">{tech}</span>)}</div>
      </div>
    </motion.div>
      );
    })()
  );
  return <section id="projects" className="py-20"><div className="container mx-auto px-6"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
    <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t.projects.title}</h2><div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">{professionalProjects.map((project, index) => renderCard(project, index))}</div>
    <div className="border-t border-purple-500/30 my-16 max-w-md mx-auto" /><h2 className="text-4xl md:text-5xl text-center mb-4 mt-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t.projects.personal}</h2><div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{personalProjects.map((project, index) => renderCard(project, index, project.title === 'Paktay'))}</div>
  </motion.div></div></section>;
}
