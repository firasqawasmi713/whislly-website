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
    <div className="w-11/12 max-w-5xl h-[1px] bg-white/10" />
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
      className={`min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#C6FF00] selection:text-black relative ${
        isRtl ? 'font-arabic' : "font-['Space_Grotesk',sans-serif]"
      }`}
    >
      {/* Background Grid Accent */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Navigation Bar */}
      <div className="relative z-50">
        <Navbar onOpenInquiryModal={() => handleOpenModalWithService()} />
      </div>

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Header */}
        <Hero onOpenInquiryModal={() => handleOpenModalWithService()} />

        <SectionDivider />

        {/* 2. Core Services */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        <SectionDivider />

        {/* 3. Media & Portfolio Showcase */}
        <PortfolioShowcase
          onRequestSimilarProject={(projectName) =>
            handleSelectServiceForInquiry(`Project inspired by ${projectName}`)
          }
        />

        <SectionDivider />

        {/* 4. About / Philosophy & 3 Pillars */}
        <AboutSection />

        <SectionDivider />

        {/* Interactive Project Scope Estimator */}
        <InteractiveScopeEstimator
          onTransferToForm={handleTransferEstimatorToForm}
        />

        <SectionDivider />

        {/* Frequently Asked Questions */}
        <FaqSection />

        <SectionDivider />

        {/* 5. Contact Section */}
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
