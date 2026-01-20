'use client';

import { motion } from 'framer-motion';

const project = {
  title: 'BacTermFinder',
  description: 'A comprehensive ensemble of Convolutional Neural Networks for identifying both intrinsic and factor-dependent transcription terminators in bacterial genomes.',
  tags: ['Deep Learning', 'Bioinformatics', 'CNN Ensemble'],
  emoji: '🧬',
  href: '/projects/bactermfinder'
};

export default function AnimatedProjects() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-slate-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world applications of AI solving complex biological and research challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div
                className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-8xl">{project.emoji}</span>
              </motion.div>

              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className={`
                        px-4 py-2 rounded-full text-sm font-medium
                        ${index === 0 ? 'bg-primary/10 text-primary' :
                          index === 1 ? 'bg-secondary/10 text-secondary' :
                          'bg-accent/10 text-accent'}
                      `}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow w-fit"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
