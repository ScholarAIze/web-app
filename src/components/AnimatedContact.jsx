'use client';

import { useEffect, useRef } from 'react';

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

export default function AnimatedContact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl text-slate-600 mb-12">
              Interested in collaborating or using our tools for your research? We'd love to hear from you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-card-hover flex items-center gap-4 p-6 bg-slate-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer"
                >
                  <span className="text-4xl">{contact.icon}</span>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">{contact.title}</div>
                    <div className="text-primary hover:text-primary-light transition-colors">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <a
              href="https://aminTaheri23.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors cursor-pointer"
            >
              <span>Visit my personal website</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
