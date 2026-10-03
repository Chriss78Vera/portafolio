import React, { createContext, useContext, useMemo, useState } from 'react';

export type Language = 'es' | 'en';

const translations = {
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', skills: 'Habilidades', education: 'Educación y experiencia', contact: 'Contacto', language: 'Idioma' },
    hero: { greeting: 'Hola, soy', role: 'Full Stack Developer', intro: 'Soy Tecnólogo Superior en Desarrollo de Software, especializado en el desarrollo de aplicaciones web y en la implementación de backend, con experiencia en integraciones basadas en microservicios y microfrontends.', projects: 'Ver proyectos' },
    about: { title: 'Sobre mí', body1: 'Soy apasionado por crear soluciones digitales que realmente aporten valor. Mi interés por la tecnología nació de la curiosidad por entender cómo funcionan las cosas y hoy se refleja en mi enfoque por construir aplicaciones web eficientes, escalables y bien diseñadas.', body2: 'Me formé en la Escuela Politécnica Nacional y actualmente continúo mis estudios en la Universidad Israel, combinando la teoría con la práctica en proyectos reales. Disfruto aprender constantemente, adaptarme a nuevas tecnologías y cuidar cada detalle del código, la experiencia de usuario y la arquitectura de las soluciones que desarrollo.', highlights: [['Full-Stack Developer', 'Especializado en el desarrollo de aplicaciones web modernas, eficientes y escalables.'], ['Tecnólogo en Desarrollo de Software', 'Graduado en la Escuela Politécnica Nacional del Ecuador.'], ['Brindar soluciones eficientes', 'Me apasiona crear soluciones digitales que realmente aporten valor.']] },
    projects: { title: 'Proyectos', personal: 'Proyectos personales', development: 'En desarrollo', available: 'Próximo disponible para Apple', paktay: 'Aplicación de finanzas personales para registrar gastos, revisar movimientos, organizar tarjetas y categorías, definir presupuestos y gestionar pagos recurrentes. También integra el flujo de Wallet y Atajos de iOS para capturar consumos con menos fricción.', paktayTech: ['iOS', 'Swift', 'Wallet', 'Atajos'] },
    skills: { title: 'Habilidades y Tecnologías', frontend: 'Desarrollo Front End', backend: 'Desarrollo Back End', database: 'Bases de datos y almacenamiento', cloud: 'Cloud y DevOps', tools: 'Herramientas', toolsDescription: 'Herramientas utilizadas para diseñar, desarrollar, probar y documentar soluciones de software.' },
    education: { title: 'Educación y Experiencia' },
    contact: { title: 'Contacto', intro: 'Estoy abierto a nuevas oportunidades. Si tienes alguna pregunta o simplemente quieres saludar, no dudes en contactarme!', name: 'Nombre', email: 'Correo electrónico', message: 'Mensaje', namePlaceholder: 'Tu nombre', emailPlaceholder: 'tu.email@ejemplo.com', messagePlaceholder: 'Tu mensaje...', send: 'Enviar mensaje', sent: '¡Mensaje enviado! (Esto es una demostración)' },
    footer: { madeWith: 'Hecho con', by: 'por' },
  },
  en: {
    nav: { home: 'Home', about: 'About me', projects: 'Projects', skills: 'Skills', education: 'Education & experience', contact: 'Contact', language: 'Language' },
    hero: { greeting: "Hi, I'm", role: 'Full Stack Developer', intro: 'I am a Higher Technician in Software Development, specialized in web application development and backend implementation, with experience in microservice and microfrontend integrations.', projects: 'View projects' },
    about: { title: 'About me', body1: 'I am passionate about creating digital solutions that deliver real value. My interest in technology began with a curiosity about how things work and is now reflected in my focus on building efficient, scalable and well-designed web applications.', body2: 'I studied at the National Polytechnic School and am currently continuing my studies at Universidad Israel, combining theory with hands-on work in real projects. I enjoy learning continuously, adapting to new technologies and caring about every detail of the code, user experience and architecture of the solutions I build.', highlights: [['Full-Stack Developer', 'Specialized in building modern, efficient and scalable web applications.'], ['Software Development Technologist', 'Graduate of the National Polytechnic School of Ecuador.'], ['Delivering efficient solutions', 'I am passionate about creating digital solutions that deliver real value.']] },
    projects: { title: 'Projects', personal: 'Personal projects', development: 'In development', available: 'Coming soon to Apple', paktay: 'A personal finance app for recording expenses, reviewing transactions, organizing cards and categories, setting budgets and managing recurring payments. It also integrates with Apple Wallet and Shortcuts to capture purchases with less friction.', paktayTech: ['iOS', 'Swift', 'Wallet', 'Shortcuts'] },
    skills: { title: 'Skills & Technologies', frontend: 'Front End Development', backend: 'Back End Development', database: 'Database & Storage', cloud: 'Cloud & DevOps', tools: 'Tools', toolsDescription: 'Tools used to design, build, test and document software solutions.' },
    education: { title: 'Education & Experience' },
    contact: { title: 'Contact', intro: "I am open to new opportunities. If you have any questions or simply want to say hello, feel free to reach out!", name: 'Name', email: 'Email', message: 'Message', namePlaceholder: 'Your name', emailPlaceholder: 'your.email@example.com', messagePlaceholder: 'Your message...', send: 'Send message', sent: 'Message sent! (This is a demo)' },
    footer: { madeWith: 'Made with', by: 'by' },
  },
} as const;

type Translation = typeof translations.es;
const LANGUAGE_STORAGE_KEY = 'portfolio-language-v2';
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: Translation }>({ language: 'es', setLanguage: () => {}, t: translations.es });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language) || 'en');
  const value = useMemo(() => ({ language, setLanguage: (next: Language) => { localStorage.setItem(LANGUAGE_STORAGE_KEY, next); setLanguage(next); }, t: translations[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
