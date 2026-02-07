import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, text: 'mv34613@gmail.com', link: 'mailto:mv34613@gmail.com' },
    { icon: Phone, text: '+593 983484551', link: 'tel:+593983484551' },
    { icon: MapPin, text: 'Quito, Ecuador', link: null },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full"></div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-400 mb-8 leading-relaxed">
                Estoy abierto a nuevas oportunidades. Si tienes alguna pregunta 
                o simplemente quieres saludar, no dudes en contactarme!
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <item.icon size={20} className="text-white" />
                    </div>
                    {item.link ? (
                      <a href={item.link} className="text-gray-300 hover:text-purple-400 transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>

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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-xl text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-xl text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-xl text-gray-300 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                >
                  Enviar mensaje <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
