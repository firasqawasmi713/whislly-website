import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/agencyData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface HeroProps {
  onOpenInquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiryModal }) => {
  const { t, isRtl } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(AGENCY_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-transparent">
      {/* Background ambient lighting - deep blue glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Agency Category Kicker (No symbols) */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-xs text-blue-300 font-mono">
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.14] font-display text-balance">
            {t.hero.titleLine1}{' '}
            <span>{t.hero.titleLine2} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto text-balance">
            {t.hero.subtitle}
          </p>

          {/* Primary Action Group with interactive blue glow (No icons) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenInquiryModal}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-blue-400/80 active:scale-95 cursor-pointer"
            >
              <span>{t.hero.ctaPrimary}</span>
            </button>

            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all blue-glow-hover"
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Direct Agency Contact Quick-Access Bar (Phone + Email, no symbols) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
            {/* Clickable Phone & WhatsApp */}
            <div className="flex items-center bg-slate-900/90 border border-blue-950 hover:border-blue-500 rounded-lg overflow-hidden p-1 shadow-sm blue-glow-hover">
              <a
                href={AGENCY_INFO.contact.phoneCallUrl}
                className="px-3 py-1.5 text-slate-200 hover:text-blue-400 transition-colors font-mono tracking-tight"
                title="Direct Phone Call"
              >
                <span>{AGENCY_INFO.contact.phone}</span>
              </a>
              <span className="h-4 w-[1px] bg-slate-800" />
              <a
                href={AGENCY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                title="Chat on WhatsApp"
              >
                <span>{t.nav.whatsappChat}</span>
              </a>
            </div>

            {/* Clickable Direct Email */}
            <div className="flex items-center bg-slate-900/90 border border-blue-950 hover:border-blue-500 rounded-lg overflow-hidden p-1 shadow-sm blue-glow-hover">
              <a
                href={AGENCY_INFO.contact.emailMailto}
                className="px-3 py-1.5 text-slate-200 hover:text-blue-400 transition-colors"
                title="Send Email"
              >
                <span>{AGENCY_INFO.contact.email}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer text-[11px]"
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copiedEmail ? (
                  <span className="text-blue-400 font-semibold">{isRtl ? 'تم النسخ' : 'Copied'}</span>
                ) : (
                  <span>{isRtl ? 'نسخ' : 'Copy'}</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Key Figures / Metrics Section: Exactly 3 metrics requested (no reel video above it) */}
        <div className="mt-20 pt-10 border-t border-slate-800/80 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {keyMetrics.map((metric, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#04091a]/70 border border-slate-800/90 hover:border-blue-500/70 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 blue-glow-card"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight text-blue-400">
                  {metric.value}
                </div>
                <div className="text-base font-semibold text-slate-200 mt-2 font-display">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
