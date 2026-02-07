import { motion } from 'motion/react';
import React from 'react';

type Skill = { name: string; level: number; gradient: string };
type SkillSection = { title: string; skills: Skill[] };

export function Skills() {
  const skillSections: SkillSection[] = [
    {
      title: 'Front End Development',
      skills: [
        { name: 'JavaScript/TypeScript', level: 90, gradient: 'linear-gradient(to right, #eab308, #ca8a04)' },
        { name: 'React + React Native', level: 85, gradient: 'linear-gradient(to right, #3b82f6, #06b6d4)' },
        { name: 'Vue.js', level: 80, gradient: 'linear-gradient(to right, #22c55e, #10b981)' },
        { name: 'Angular', level: 40, gradient: 'linear-gradient(to right, #dc2626, #ea580c)' },
      ],
    },
    {
      title: 'Back End Development',
      skills: [
        { name: 'Java', level: 50, gradient: 'linear-gradient(to right, #ef4444, #f97316)' },
        { name: 'Spring Boot', level: 50, gradient: 'linear-gradient(to right, #22c55e, #059669)' },
        { name: 'Node.js', level: 82, gradient: 'linear-gradient(to right, #16a34a, #15803d)' },
        { name: 'Laravel', level: 40, gradient: 'linear-gradient(to right, #dc2626, #b91c1c)' },
        { name: 'Php', level: 40, gradient: 'linear-gradient(to right, #6366f1, #8b5cf6)' },
        { name: 'GraphQL', level: 60, gradient: 'linear-gradient(to right, #e879f9, #d946ef)' },
      ],
    },
    {
      title: 'Data Base y Storage',
      skills: [
        { name: 'SQL/PostgreSQL', level: 85, gradient: 'linear-gradient(to right, #2563eb, #1d4ed8)' },
        { name: 'MongoDB', level: 70, gradient: 'linear-gradient(to right, #059669, #047857)' },
        { name: 'Redis', level: 50, gradient: 'linear-gradient(to right, #dc2626, #991b1b)' },
      ],
    },
    {
      title: 'Cloud & Develops',
      skills: [
        { name: 'Git & GitHub', level: 88, gradient: 'linear-gradient(to right, #4b5563, #1f2937)' },
        { name: 'Azure DevOps', level: 50, gradient: 'linear-gradient(to right, #a855f7, #ec4899)' },
        { name: 'GitLab', level: 80, gradient: 'linear-gradient(to right, #f97316, #eab308)' },
        { name: 'Firebase', level: 80, gradient: 'linear-gradient(to right, #f59e0b, #ef4444)' },
      ],
    },
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
            Habilidades y Tecnologías
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
