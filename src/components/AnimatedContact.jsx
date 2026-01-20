'use client';

import { motion } from 'framer-motion';

const contacts = [
  {
    icon: '📧',
    title: 'Email',
    value: 'amintg@mun.ca',
    href: 'mailto:amintg@mun.ca'
  },
  {
    icon: '💻',
    title: 'GitHub',
    value: '@aminTaheri23',
    href: 'https://github.com/amintaheri23'
  }
];

export default function AnimatedContact() {
  return (
    <motion.section
      id="contact"
      className="py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Interested in collaborating or using our tools for your research? We'd love to hear from you.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <span className="text-4xl">{contact.icon}</span>
                <div className="text-left">
                  <div className="font-semibold text-slate-900">{contact.title}</div>
                  <div className="text-primary hover:text-primary-light transition-colors">{contact.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://aminTaheri23.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
            >
              <span>Visit my personal website</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
