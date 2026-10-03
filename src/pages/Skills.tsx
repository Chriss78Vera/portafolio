import { motion } from 'motion/react';
import React from 'react';
import { Bot, Container, FileCode2 } from 'lucide-react';
import { useLanguage } from '../i18n';

type Skill = { name: string; level: number; gradient: string };
type SkillSection = { title: string; skills: Skill[] };

export function Skills() {
  const { t, language } = useLanguage();
  const skillSections: SkillSection[] = [
    {
      title: t.skills.frontend,
      skills: [
        { name: 'JavaScript/TypeScript', level: 90, gradient: 'linear-gradient(to right, #eab308, #ca8a04)' },
        { name: 'React + React Native', level: 85, gradient: 'linear-gradient(to right, #3b82f6, #06b6d4)' },
        { name: 'Next.js', level: 70, gradient: 'linear-gradient(to right, #64748b, #111827)' },
        { name: 'React Query + Axios', level: 75, gradient: 'linear-gradient(to right, #ef4444, #7c3aed)' },
        { name: 'Vue.js', level: 80, gradient: 'linear-gradient(to right, #22c55e, #10b981)' },
        { name: 'Tailwind CSS', level: 75, gradient: 'linear-gradient(to right, #06b6d4, #2563eb)' },
      ],
    },
    {
      title: t.skills.backend,
      skills: [
        { name: 'Java', level: 50, gradient: 'linear-gradient(to right, #ef4444, #f97316)' },
        { name: 'Java 17 + Spring Boot', level: 65, gradient: 'linear-gradient(to right, #22c55e, #059669)' },
        { name: 'Spring Security + OAuth2/OIDC', level: 60, gradient: 'linear-gradient(to right, #f97316, #dc2626)' },
        { name: 'REST APIs + OpenAPI', level: 78, gradient: 'linear-gradient(to right, #0ea5e9, #4f46e5)' },
        { name: 'Node.js', level: 82, gradient: 'linear-gradient(to right, #16a34a, #15803d)' },
        { name: 'Laravel', level: 40, gradient: 'linear-gradient(to right, #dc2626, #b91c1c)' },
        { name: 'Php', level: 40, gradient: 'linear-gradient(to right, #6366f1, #8b5cf6)' },
        { name: 'GraphQL', level: 60, gradient: 'linear-gradient(to right, #e879f9, #d946ef)' },
      ],
    },
    {
      title: t.skills.database,
      skills: [
        { name: 'SQL/PostgreSQL', level: 85, gradient: 'linear-gradient(to right, #2563eb, #1d4ed8)' },
        { name: 'JDBC + Flyway', level: 65, gradient: 'linear-gradient(to right, #f97316, #eab308)' },
        { name: 'MongoDB', level: 70, gradient: 'linear-gradient(to right, #059669, #047857)' },
        { name: 'Supabase Storage', level: 60, gradient: 'linear-gradient(to right, #22c55e, #14b8a6)' },
        { name: 'Redis', level: 50, gradient: 'linear-gradient(to right, #dc2626, #991b1b)' },
      ],
    },
    {
      title: t.skills.cloud,
      skills: [
        { name: 'Git & GitHub', level: 88, gradient: 'linear-gradient(to right, #4b5563, #1f2937)' },
        { name: 'Azure DevOps', level: 50, gradient: 'linear-gradient(to right, #a855f7, #ec4899)' },
        { name: 'GitLab', level: 80, gradient: 'linear-gradient(to right, #f97316, #eab308)' },
        { name: 'Docker + Docker Compose', level: 78, gradient: 'linear-gradient(to right, #0ea5e9, #2563eb)' },
        { name: 'Keycloak + Firebase FCM', level: 62, gradient: 'linear-gradient(to right, #f59e0b, #ef4444)' },
        { name: 'Cloudflare Tunnel', level: 55, gradient: 'linear-gradient(to right, #f97316, #facc15)' },
      ],
    },
  ];

  const tools = [
    { name: 'Codex', description: language === 'en' ? 'Assistance with implementation, debugging, code review and technical documentation.' : 'Asistencia para implementar, depurar, revisar y documentar código.', icon: Bot, gradient: 'from-emerald-500 to-cyan-500' },
    { name: 'Claude', description: language === 'en' ? 'Technical analysis, solution design and documentation support.' : 'Análisis técnico, diseño de soluciones y apoyo en documentación.', icon: Bot, gradient: 'from-orange-500 to-amber-500' },
    { name: 'Docker', description: language === 'en' ? 'Containerized and reproducible environments with Docker Compose.' : 'Contenedores y entornos reproducibles con Docker Compose.', icon: Container, gradient: 'from-sky-500 to-blue-600' },
    { name: 'Swagger / OpenAPI', description: language === 'en' ? 'Design, documentation and validation of REST APIs.' : 'Diseño, documentación y validación de APIs REST.', icon: FileCode2, gradient: 'from-green-500 to-lime-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-purple-900/10 to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full"></div>

          <div className="max-w-4xl mx-auto space-y-12">
            {skillSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl text-purple-300 font-medium mb-6 text-center">
                  {section.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.08 + 0.2 }}
                          className="h-full rounded-full shadow-lg"
                          style={{ background: skill.gradient }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <h3 className="text-xl md:text-2xl text-purple-300 font-medium mb-3 text-center">{t.skills.tools}</h3>
              <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6">{t.skills.toolsDescription}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center mb-4`}>
                      <tool.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg text-purple-300 mb-2">{tool.name}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
