import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { PortfolioShowcase } from './components/PortfolioShowcase.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { InteractiveScopeEstimator } from './components/InteractiveScopeEstimator.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { InquiryModal } from './components/InquiryModal.tsx';

// Thin white line divider centered in the middle of the page
const SectionDivider: React.FC = () => (
  <div className="flex justify-center items-center py-2 relative z-10" aria-hidden="true">
    <div className="w-11/12 max-w-5xl h-[1px] bg-white/20" />
  </div>
);

function MainApp() {
  const { dir, isRtl } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPreselectedService, setModalPreselectedService] = useState<string>('Food Photography & Creative Design');
  const [inquiryTargetService, setInquiryTargetService] = useState<string | null>(null);
  const [estimatorData, setEstimatorData] = useState<{
    services: string[];
    timeline: string;
    budget: string;
    notes: string;
  } | null>(null);

  const handleOpenModalWithService = (serviceName?: string) => {
    if (serviceName) setModalPreselectedService(serviceName);
    setModalOpen(true);
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setInquiryTargetService(serviceName);
    // Smooth scroll down to contact section
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferEstimatorToForm = (data: {
    services: string[];
    timeline: string;
    budget: string;
    notes: string;
  }) => {
    setEstimatorData(data);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      dir={dir}
      className={`min-h-screen bg-gradient-to-b from-[#02050e] via-[#060e22] via-[#091536] to-[#02050e] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white relative ${
        isRtl ? 'font-arabic' : 'font-sans'
      }`}
    >
      {/* Deep blue atmospheric ambient glow in background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-blue-600/20 via-blue-900/15 to-transparent blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] w-[650px] h-[650px] bg-blue-700/15 blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[700px] h-[700px] bg-indigo-900/15 blur-[160px]" />
      </div>

      {/* Navigation Bar */}
      <div className="relative z-50">
        <Navbar onOpenInquiryModal={() => handleOpenModalWithService()} />
      </div>

      {/* Main Content Sections with Centered Thin White Line Dividers */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Header */}
        <Hero onOpenInquiryModal={() => handleOpenModalWithService()} />

        <SectionDivider />

        {/* 2. Core Services (Food Photography & Design, UI/UX SaaS, Branding, Social Media) */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        <SectionDivider />

        {/* 3. Media & Portfolio Showcase (Ghaith & Asmar, Wisco, Rawabi Butchery, Crust Burgers 9-photo) */}
        <PortfolioShowcase
          onRequestSimilarProject={(projectName) =>
            handleSelectServiceForInquiry(`Project inspired by ${projectName}`)
          }
        />

        <SectionDivider />

        {/* 4. About / Philosophy & 3 Pillars */}
        <AboutSection />

        <SectionDivider />

        {/* Interactive Project Scope Estimator (JD Currency) */}
        <InteractiveScopeEstimator
          onTransferToForm={handleTransferEstimatorToForm}
        />

        <SectionDivider />

        {/* Frequently Asked Questions */}
        <FaqSection />

        <SectionDivider />

        {/* 5. Contact Section with Inquiry Form, Clickable Phone & Email (JD Currency) */}
        <ContactSection
          initialService={inquiryTargetService}
          initialEstimatorData={estimatorData}
        />
      </main>

      <SectionDivider />

      {/* 6. Footer */}
      <Footer />

      {/* Fast Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={modalPreselectedService}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
