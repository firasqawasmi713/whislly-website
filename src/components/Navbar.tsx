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
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF00] rounded-none"
          >
            <img 
              src="/logo.png" 
              alt={AGENCY_INFO.name} 
              className="h-5 sm:h-6 w-auto object-contain max-h-6" 
            />
          </a>

          {/* Clean Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C6FF00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Actions & Language Button (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-6">
            <button
              onClick={toggleLanguage}
              type="button"
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
              title={language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <span>{t.nav.langToggle}</span>
            </button>

            {/* Removed the desktop WhatsApp phone number as requested */}

            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenInquiryModal) {
                  e.preventDefault();
                  onOpenInquiryModal();
                }
              }}
              className="bg-[#C6FF00] text-black px-5 py-2.5 font-bold text-xs md:text-sm uppercase tracking-wide hover:bg-[#aee600] transition-colors rounded-none whitespace-nowrap cursor-pointer"
            >
              <span>{t
