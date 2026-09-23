import React from 'react';
import { AGENCY_INFO } from '../data/agencyData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

export const Footer: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="bg-[#030612] border-t border-blue-900/30 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Agency Identity with Logo */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt={AGENCY_INFO.name} 
                className="h-8 w-auto object-contain" 
              />
              <span className="text-2xl font-bold text-white font-display">
                {AGENCY_INFO.name}
              </span>
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              {t.footer.desc}
            </p>
            <div className="text-[11px] font-mono text-slate-400">
              {t.footer.location}
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-semibold tracking-wider text-xs">
              {t.footer.navTitle}
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {t.nav.philosophy}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-blue-400 transition-colors">
                  {t.nav.estimator}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Capabilities */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-semibold tracking-wider text-xs">
              {t.footer.servicesTitle}
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>{isRtl ? 'تصوير أطعمة وقوائم تطبيقات' : 'Food Apps Photography'}</li>
              <li>{isRtl ? 'واجهات ساس وأنظمة تصميم' : 'SaaS UI/UX & Design Systems'}</li>
              <li>{isRtl ? 'هوية بصرية وتصميم تغليف' : 'Branding & Packaging'}</li>
              <li>{isRtl ? 'سوشيال ميديا وشبكة 9 صور' : '9-Shot Social Campaigns'}</li>
            </ul>
          </div>

          {/* Col 5: Direct Inquiries */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-semibold tracking-wider text-xs">
              {t.footer.contactTitle}
            </div>
            <div className="space-y-2.5">
              <a
                href={AGENCY_INFO.contact.phoneCallUrl}
                className="block hover:text-blue-400 transition-colors font-mono"
              >
                <span>{AGENCY_INFO.contact.phone}</span>
              </a>
              <a
                href={AGENCY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>WhatsApp: {AGENCY_INFO.contact.phoneDisplay}</span>
              </a>
              <a
                href={AGENCY_INFO.contact.emailMailto}
                className="block hover:text-blue-400 transition-colors"
              >
                <span>{AGENCY_INFO.contact.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {AGENCY_INFO.name}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono">Currency: Jordanian Dinar (JD)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};