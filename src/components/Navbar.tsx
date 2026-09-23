import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../data/agencyData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface NavbarProps {
  onOpenInquiryModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiryModal }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.philosophy, href: '#about' },
    { label: t.nav.estimator, href: '#estimator' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030716]/95 backdrop-blur-md border-b border-blue-900/40 py-2.5 shadow-2xl shadow-black/70'
          : 'bg-transparent py-3.5 border-b border-slate-800/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Only (Text removed) */}
          <a
            href="#"
            className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            <img 
              src="/logo.png" 
              alt={AGENCY_INFO.name} 
              className="h-7 sm:h-8 w-auto object-contain max-h-8" 
            />
          </a>

          {/* Clean Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-slate-300 hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Actions & Language Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-300 hover:text-white bg-blue-950/60 hover:bg-blue-900/80 border border-blue-800/80 hover:border-blue-400 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
              title={language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <span>{t.nav.langToggle}</span>
            </button>

            <a
              href={AGENCY_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 rounded-lg transition-colors"
              title="Chat on WhatsApp"
            >
              <span className="hidden lg:inline">{AGENCY_INFO.contact.phoneDisplay}</span>
              <span className="lg:hidden">{t.nav.whatsappChat}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenInquiryModal) {
                  e.preventDefault();
                  onOpenInquiryModal();
                }
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] border border-blue-400/80 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>{t.nav.getInTouch}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-blue-300 bg-blue-950/70 border border-blue-700/60"
              aria-label="Toggle language"
            >
              <span>{t.nav.langLabel}</span>
            </button>

            <a
              href={AGENCY_INFO.contact.phoneCallUrl}
              className="px-2.5 py-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Call Whislly"
            >
              <span>{language === 'ar' ? 'اتصال' : 'Call'}</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-2.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              <span>{mobileMenuOpen ? (language === 'ar' ? 'إغلاق' : 'Close') : (language === 'ar' ? 'القائمة' : 'Menu')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#030716] border-b border-blue-900/40 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold text-blue-300 bg-blue-950/60 border border-blue-700/60"
            >
              <span>{language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}</span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <a
              href={AGENCY_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 text-sm font-medium text-white bg-emerald-950/60 border border-emerald-800/70 rounded-lg text-center"
            >
              <span>{t.nav.whatsappChat}: {AGENCY_INFO.contact.phoneDisplay}</span>
            </a>
            <a
              href={AGENCY_INFO.contact.phoneCallUrl}
              className="block w-full py-2.5 text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg text-center"
            >
              <span>{t.nav.callDirect}: {AGENCY_INFO.contact.phoneDisplay}</span>
            </a>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInquiryModal) onOpenInquiryModal();
              }}
              className="block w-full py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-[0_0_15px_rgba(59,130,246,0.4)] text-center"
            >
              <span>{t.nav.startProject}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
