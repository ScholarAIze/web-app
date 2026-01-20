'use client';

import { useEffect, useRef } from 'react';

const project = {
  title: 'BacTermFinder',
  description: 'A comprehensive ensemble of Convolutional Neural Networks for identifying both intrinsic and factor-dependent transcription terminators in bacterial genomes.',
  tags: ['Deep Learning', 'Bioinformatics', 'CNN Ensemble'],
  emoji: '🧬',
  href: '/projects/bactermfinder'
};

function ScrollReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function AnimatedProjects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world applications of AI solving complex biological and research challenges.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-5xl mx-auto">
            <div className="animate-card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-8xl animate-float">{project.emoji}</span>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`
                          px-4 py-2 rounded-full text-sm font-medium scroll-reveal
                          ${index === 0 ? 'bg-primary/10 text-primary' :
                            index === 1 ? 'bg-secondary/10 text-secondary' :
                            'bg-accent/10 text-accent'}
                        `}
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    className="animate-button-press inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow w-fit cursor-pointer"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
