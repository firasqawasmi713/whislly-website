import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface EstimatorProps {
  onTransferToForm: (data: {
    services: string[];
    timeline: string;
    budget: string;
    notes: string;
  }) => void;
}

export const InteractiveScopeEstimator: React.FC<EstimatorProps> = ({
  onTransferToForm,
}) => {
  const { t, isRtl } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Food Photography & Creative Design',
    'Strategic Branding & Packaging',
  ]);
  const [timeline, setTimeline] = useState<string>('Standard (3 – 5 Weeks)');
  const [budgetTier, setBudgetTier] = useState<string>('250 – 500 JD');

  const availableServices = [
    {
      id: 'Food Photography & Creative Design',
      label: isRtl ? 'تصوير الأطعمة وتنسيق القوائم' : 'Food Photography & Design',
      tag: isRtl ? 'تطبيقات التوصيل / استوديو أطعمة' : 'Delivery Apps / Culinary Studio',
    },
    {
      id: 'UI/UX & SaaS Digital Products',
      label: isRtl ? 'واجهات وتجربة المستخدم للساس' : 'UI/UX & SaaS Products',
      tag: isRtl ? 'منصات سحابية / أنظمة تصميم' : 'Cloud Apps / Figma Systems',
    },
    {
      id: 'Strategic Branding & Packaging',
      label: isRtl ? 'الهوية البصرية وتصميم التغليف' : 'Branding & Packaging',
      tag: isRtl ? 'شعار وهوية / علب وتغليف' : 'Identity / Retail Packaging',
    },
    {
      id: 'Social Media & Media Production',
      label: isRtl ? 'إدارة السوشيال ميديا وشبكات الصور' : 'Social Media & 9-Photo Grids',
      tag: isRtl ? 'فيديوهات ريلز / شبكات صور' : '9-Shot Grids / Viral Reels',
    },
  ];

  const timelineOptions = isRtl
    ? [
        { value: 'Fast Sprint (1 – 2 Weeks)', label: 'سبرنت سريع (1 – 2 أسبوع)' },
        { value: 'Standard (3 – 5 Weeks)', label: 'قياسي (3 – 5 أسابيع)' },
        { value: 'Comprehensive (6+ Weeks)', label: 'شامل (6+ أسابيع)' },
        { value: 'Monthly Retainer', label: 'عقد شهري مستمر' },
      ]
    : [
        { value: 'Fast Sprint (1 – 2 Weeks)', label: 'Sprint (1 – 2 Wks)' },
        { value: 'Standard (3 – 5 Weeks)', label: 'Standard (3 – 5 Wks)' },
        { value: 'Comprehensive (6+ Weeks)', label: 'Deep (6+ Wks)' },
        { value: 'Monthly Retainer', label: 'Retainer' },
      ];

  const budgetOptions = [
    '100 – 200 JD',
    '250 – 500 JD',
    '500 – 1,000 JD',
    '1,000+ JD',
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = isRtl
      ? `مرحباً وكالة ويسلي! استخدمت حاسبة نطاق المشروع على موقعكم.
الخدمات المطلوبة: ${selectedServices.join(' + ')}
الجدول الزمني: ${timeline}
الميزانية التقديرية: ${budgetTier}
أرغب في حجز مكالمة استكشافية لمناقشة هذا المشروع.`
      : `Hello Whislly! I used your project scope estimator on your website.
Services: ${selectedServices.join(' + ')}
Timeline: ${timeline}
Estimated Budget: ${budgetTier}
I would like to schedule a discovery call to discuss this brief.`;
    return `https://wa.me/962799124684?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-24 bg-transparent scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (No icons) */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
            {t.estimator.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            {t.estimator.heading}
          </h2>
          <p className="text-sm text-slate-400">
            {t.estimator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-[#04091a]/70 border border-slate-800/80 p-6 sm:p-8 rounded-xl blue-glow-card">
            
            {/* Step 1: Select Disciplines */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  {t.estimator.step1Title}
                </label>
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/50">
                  {selectedServices.length} Selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableServices.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-4 rounded-lg text-left transition-all border flex items-start justify-between cursor-pointer ${
                        isChecked
                          ? 'bg-blue-950/50 border-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.3)] text-white'
                          : 'bg-[#02050e]/70 border-slate-800 text-slate-400 hover:border-blue-800 hover:text-slate-200'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-white font-display">
                          {srv.label}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {srv.tag}
                        </div>
                      </div>
                      <div
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? 'bg-blue-600 text-white font-bold'
                            : 'text-slate-500 border border-slate-800'
                        }`}
                      >
                        {isChecked ? (isRtl ? 'محدد' : 'ACTIVE') : (isRtl ? 'إضافة' : '+')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Target Timeline */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
                {t.estimator.step2Title}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timelineOptions.map((opt) => {
                  const isActive = timeline === opt.value;
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setTimeline(opt.value)}
                      className={`py-3 px-3 rounded-lg text-xs font-medium transition-all text-center border cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white font-semibold border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                          : 'bg-[#02050e] text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Estimated Budget Bracket in JD (100-200JD, 250-500JD, 500-1000JD, 1000+JD) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  {t.estimator.step3Title}
                </label>
                <span className="text-[11px] font-mono text-emerald-400">
                  {t.estimator.currencyNotice}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {budgetOptions.map((opt) => {
                  const isActive = budgetTier === opt;
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setBudgetTier(opt)}
                      className={`py-3 px-3 rounded-lg text-xs font-medium transition-all text-center border cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white font-bold border-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.45)]'
                          : 'bg-[#02050e] text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-Time Brief Summary Card with Blue Glow (No icons) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#060c1e] border border-blue-600/60 space-y-6 shadow-[0_0_35px_rgba(59,130,246,0.25)] blue-glow-card">
            <div className="flex items-center justify-between pb-4 border-b border-blue-900/40">
              <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                {t.estimator.blueprintTitle}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                {t.estimator.badgeSprint}
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="text-slate-400 font-mono mb-1">
                  {t.estimator.selectedDisciplines} ({selectedServices.length}):
                </div>
                <div className="text-sm font-semibold text-white">
                  {selectedServices.join(' + ')}
                </div>
              </div>

              <div>
                <div className="text-slate-400 font-mono mb-1">
                  {t.estimator.estimatedTimeline}:
                </div>
                <div className="text-sm font-semibold text-white">{timeline}</div>
              </div>

              <div>
                <div className="text-slate-400 font-mono mb-1">
                  {t.estimator.targetAllocation}:
                </div>
                <div className="text-lg font-bold text-blue-400 font-mono">{budgetTier}</div>
              </div>

              <div className="p-4 rounded-lg bg-[#02050e] border border-blue-950 text-slate-300 text-xs leading-relaxed space-y-1.5 font-mono">
                {t.estimator.perks.map((perk, pIdx) => (
                  <div key={pIdx}>
                    <span className="text-blue-400 mr-1.5">[{pIdx + 1}]</span>
                    {perk}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions (No icons) */}
            <div className="pt-2 space-y-3">
              <button
                type="button"
                onClick={() =>
                  onTransferToForm({
                    services: selectedServices,
                    timeline,
                    budget: budgetTier,
                    notes: `Scope estimate generated: ${selectedServices.join(', ')} over ${timeline}`,
                  })
                }
                className="w-full py-3 px-4 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center shadow-md shadow-blue-600/40 hover:shadow-blue-500/60 cursor-pointer"
              >
                <span>{t.estimator.transferBtn}</span>
              </button>

              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-xs font-medium text-emerald-300 hover:text-white bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-800/60 transition-colors flex items-center justify-center"
              >
                <span>{t.estimator.whatsappBtn}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
