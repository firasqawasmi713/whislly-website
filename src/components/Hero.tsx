import React from 'react';
import { AGENCY_INFO } from '../data/agencyData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface HeroProps {
  onOpenInquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiryModal }) => {
  const { t, isRtl } = useLanguage();

  const keyMetrics = [
    {
      value: t.hero.stats.designs,
      label: t.hero.stats.designsLabel,
      detail: isRtl ? 'أنظمة بصرية وهوية رقمية' : 'Brand systems & digital collaterals',
    },
    {
      value: t.hero.stats.retention,
      label: t.hero.stats.retentionLabel,
      detail: isRtl ? 'علاقات شراكة طويلة الأمد' : 'Long-term client partnerships',
    },
    {
      value: t.hero.stats.photographs,
      label: t.hero.stats.photographsLabel,
      detail: isRtl ? 'تصوير أطباق ومأكولات احترافي' : 'Commercial culinary productions',
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 lg:py-40 max-w-7xl mx-auto">
      
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Main Hero Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold uppercase tracking-tight leading-[1.1] mb-8 text-white">
          {t.hero.titleLine1}{' '}
          <br className="hidden md:block" />
          {t.hero.titleLine2}{' '}
          <br className="hidden md:block" />
          <span className="text-[#2962FF]">
            {t.hero.titleHighlight}
          </span>
        </h1>

        {/* Value Proposition Description */}
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg lg:text-xl mb-12 leading-relaxed px-4 md:px-0">
          {t.hero.subtitle}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          
          {/* Primary CTA: Connected to WhatsApp */}
          <a
            href="https://wa.me/962799124684"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#C6FF00] text-black px-8 py-4 font-bold uppercase text-sm tracking-widest flex items-center justify-center hover:bg-[#aee600] transition-transform active:scale-95 rounded-none"
          >
            {t.hero.ctaPrimary}
          </a>

          {/* Secondary CTA */}
          <a
            href="#portfolio"
            className="w-full sm:w-auto bg-transparent border border-[#222222] text-white px-8 py-4 font-bold uppercase text-sm tracking-widest flex items-center justify-center hover:bg-white/5 transition-colors rounded-none"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Key Figures / Metrics Section */}
      <div className="mt-24 pt-12 border-t border-white/10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {keyMetrics.map((metric, i) => (
            <div
              key={i}
              className="p-8 bg-[#0a0a0a] border border-[#222222] rounded-none hover:border-[#2962FF] transition-colors duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#2962FF] tracking-tight mb-3">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-widest">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500 mt-2 font-medium">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
