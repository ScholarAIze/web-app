'use client';

import { useEffect, useRef } from 'react';
import ScienceParticles from './ScienceParticles';

export default function AnimatedHero() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ScienceParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 text-balance leading-tight animate-hero-fade-in" style={{ animationDelay: '0ms' }}>
            Bringing AI-Powered
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Research Tools to Scholars
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-hero-fade-in" style={{ animationDelay: '200ms' }}>
            We develop innovative AI applications that transform complex research into accessible, user-friendly tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-fade-in" style={{ animationDelay: '400ms' }}>
            <a
              href="/projects"
              className="animate-button-press px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              Explore Our Projects
            </a>
            <a
              href="#contact"
              className="animate-button-press px-8 py-4 bg-secondary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
          {[
            { emoji: '🎓', title: 'For Scholars', desc: 'AI tools designed specifically for academic research needs' },
            { emoji: '💻', title: 'User-Friendly', desc: 'Intuitive interfaces that require no technical expertise' },
            { emoji: '🔒', title: 'Offline Processing', desc: 'Client-side computation for data privacy and accessibility' }
          ].map((item, index) => (
            <div
              key={index}
              className="animate-card-hover bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center border border-slate-100"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
