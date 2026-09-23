import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../data/agencyData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ContactSectionProps {
  initialService?: string | null;
  initialEstimatorData?: {
    services: string[];
    timeline: string;
    budget: string;
    notes: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialEstimatorData,
}) => {
  const { t, isRtl } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [] as string[],
    budget: '250 – 500 JD',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(initialService)
          ? prev.services
          : [...prev.services, initialService],
      }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialEstimatorData) {
      setFormData((prev) => ({
        ...prev,
        services: Array.from(new Set([...prev.services, ...initialEstimatorData.services])),
        budget: initialEstimatorData.budget,
        details: prev.details
          ? `${prev.details}\n[Scope Brief]: Timeline: ${initialEstimatorData.timeline}`
          : `[Scope Brief]: Timeline: ${initialEstimatorData.timeline}\nTarget budget: ${initialEstimatorData.budget}`,
      }));
    }
  }, [initialEstimatorData]);

  const availableServices = [
    'Food Photography & Creative Design',
    'UI/UX & SaaS Digital Products',
    'Strategic Branding & Packaging',
    'Social Media & Media Production',
  ];

  const handleToggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const generateWhatsAppInquiry = () => {
    const text = isRtl
      ? `مرحباً وكالة ويسلي! أرغب في بدء استشارة مشروع:
الاسم: ${formData.name || 'غير محدد'}
الشركة: ${formData.company || 'غير محدد'}
الخدمات المطلوبة: ${formData.services.join(', ') || 'خدمة عامة'}
الميزانية المستهدفة: ${formData.budget}
التفاصيل: ${formData.details || 'يرجى التنسيق لمكالمة استكشافية'}`
      : `Hello Whislly! I would like to inquire about starting a project:
Name: ${formData.name || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Services: ${formData.services.join(', ') || 'General inquiry'}
Estimated Budget: ${formData.budget}
Details: ${formData.details || 'Please schedule a discovery call'}`;
    return `https://wa.me/962799124684?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 bg-transparent scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
            {t.contact.kicker}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display text-balance">
            {t.contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Agency Information Column (No symbols/icons) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone & WhatsApp Card with Blue Glow */}
            <div className="p-6 rounded-xl bg-[#04091a]/80 border border-slate-800/90 hover:border-blue-500/80 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all space-y-4 blue-glow-card">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {t.contact.phoneTitle}
                </div>
                <div className="text-lg font-bold text-white font-mono mt-1">
                  {AGENCY_INFO.contact.phone}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={AGENCY_INFO.contact.phoneCallUrl}
                  className="py-2.5 px-3 rounded-lg text-xs font-semibold text-center bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-colors block"
                >
                  <span>{t.contact.callNow}</span>
                </a>
                <a
                  href={AGENCY_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg text-xs font-semibold text-center bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 text-emerald-400 hover:text-emerald-300 transition-colors block"
                >
                  <span>{t.contact.whatsappChat}</span>
                </a>
              </div>
            </div>

            {/* Email Card with Blue Glow */}
            <div className="p-6 rounded-xl bg-[#04091a]/80 border border-slate-800/90 hover:border-blue-500/80 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all space-y-4 blue-glow-card">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {t.contact.emailTitle}
                </div>
                <div className="text-lg font-bold text-white font-mono mt-1">
                  {AGENCY_INFO.contact.email}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={AGENCY_INFO.contact.emailMailto}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-center bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-colors block"
                >
                  <span>{t.contact.openMail}</span>
                </a>
              </div>
            </div>

            {/* SLA Response Guarantee */}
            <div className="p-5 rounded-xl bg-[#02050e] border border-blue-950 space-y-2 text-xs">
              <div className="text-blue-400 font-mono font-semibold uppercase tracking-wider">
                {t.contact.guaranteeTitle}
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t.contact.guaranteeText}
              </p>
            </div>

            {/* Location Notice */}
            <div className="p-5 rounded-xl bg-[#02050e] border border-blue-950 space-y-2 text-xs">
              <div className="text-sky-400 font-mono font-semibold uppercase tracking-wider">
                {isRtl ? 'مقر الاستوديو' : 'Headquarters'}
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t.contact.studioLocation}
              </p>
            </div>
          </div>

          {/* Form Column with Blue Glow Focus (No icons) */}
          <div className="lg:col-span-7 bg-[#04091a]/85 border border-slate-800/90 p-8 rounded-xl shadow-2xl blue-glow-card">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-emerald-400 font-mono text-xs font-bold">
                  {isRtl ? 'تم الإرسال بنجاح' : 'TRANSMISSION CONFIRMED'}
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  {t.contact.successTitle}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.contact.successText}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={generateWhatsAppInquiry()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center shadow-md"
                  >
                    <span>{t.contact.sendWhatsappBtn}</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        services: [],
                        budget: '250 – 500 JD',
                        details: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs hover:text-white cursor-pointer"
                  >
                    {t.contact.submitAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {t.contact.formSubtitle}
                  </p>
                </div>

                {/* Service checkboxes (No checkmark icons) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2.5">
                    {t.contact.disciplinesLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableServices.map((srv) => {
                      const isSelected = formData.services.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => handleToggleService(srv)}
                          className={`p-3 rounded-lg text-xs font-medium text-left transition-all border flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-blue-950/60 border-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                              : 'bg-[#02050e] border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="truncate">{srv}</span>
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                              isSelected ? 'bg-blue-600 text-white font-bold' : 'text-slate-500 border border-slate-800'
                            }`}
                          >
                            {isSelected ? (isRtl ? 'محدد' : 'ACTIVE') : (isRtl ? 'إضافة' : '+')}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Budget Bracket in JD (100-200, 250-500, 500-1000, 1000+) */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    {t.contact.budgetLabel}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all"
                  >
                    {t.contact.budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#02050e] text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    {t.contact.detailsLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.contact.detailsPlaceholder}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Actions (No icons) */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-6 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>{isRtl ? 'جاري الإرسال...' : 'Transmitting Brief...'}</span>
                    ) : (
                      <span>{t.contact.submitBtn}</span>
                    )}
                  </button>

                  <a
                    href={generateWhatsAppInquiry()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 rounded-lg text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 transition-colors flex items-center justify-center"
                  >
                    <span>{t.contact.sendWhatsappBtn}</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
