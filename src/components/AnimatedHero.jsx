'use client';

import { motion } from 'framer-motion';
import Hero3DBackground from './Hero3D';

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function AnimatedHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Hero3DBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 text-balance leading-tight"
          >
            Bringing AI-Powered
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Research Tools to Scholars
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            We develop innovative AI applications that transform complex research into accessible, user-friendly tools.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Explore Our Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-secondary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '🎓', title: 'For Scholars', desc: 'AI tools designed specifically for academic research needs' },
              { emoji: '💻', title: 'User-Friendly', desc: 'Intuitive interfaces that require no technical expertise' },
              { emoji: '🔒', title: 'Offline Processing', desc: 'Client-side computation for data privacy and accessibility' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center border border-slate-100"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
