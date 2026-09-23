import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    { title: t.about.pillar1Title, description: t.about.pillar1Desc },
    { title: t.about.pillar2Title, description: t.about.pillar2Desc },
    { title: t.about.pillar3Title, description: t.about.pillar3Desc },
  ];

  return (
    <section id="about" className="py-24 bg-transparent scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
            {t.about.kicker}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display text-balance leading-tight">
            {t.about.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* 3 Core Pillars with interactive blue glow outlines (No symbols/icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="blue-glow-card p-8 rounded-lg bg-[#04091a]/70 border border-slate-800/80 hover:border-blue-500/80 hover:bg-[#07112b]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="px-3 py-1.5 rounded-md bg-[#02050e] border border-blue-950 w-fit mb-6 text-xs font-mono text-blue-400 font-bold">
                  PILLAR 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{t.about.pillarOf} {idx + 1} / 3</span>
                <span className="text-blue-400 font-semibold">{t.about.pillarBadge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
