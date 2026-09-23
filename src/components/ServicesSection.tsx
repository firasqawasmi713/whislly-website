import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const { t, isRtl } = useLanguage();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const servicesList = [
    {
      id: 'design',
      number: '01',
      name: t.services.items.design.name,
      shortDesc: t.services.items.design.desc,
      imageSrc: '/food.png',
      deliverablesTitle: t.services.items.design.deliverablesTitle,
      impactMetric: t.services.items.design.impact,
      deliverables: isRtl
        ? [
            'تصوير أطباق احترافي لقوائم تطبيقات التوصيل (طلبات، كريم، جاهز)',
            'إضاءة وتنسيق استوديو غذائي متخصص للأطعمة والمشروبات',
            'تصميم قوائم مطاعم، مطبوعات راقية، ويافطات إعلانية',
            'إعلانات منصات رقمية وحملات ترويجية للمأكولات',
            'معالجة ألوان وتعديل صور فائق الجودة والشهية',
          ]
        : [
            'Food Apps Menu Photography (Talabat, Careem, Jahez)',
            'Culinary Studio Lighting & Professional Food Styling',
            'Print, Packaging, Billboards & Restaurant Menus',
            'Digital Display Ads & Social Promotional Creatives',
            'High-Res Retouching & Appetizing Color Grading',
          ],
    },
    {
      id: 'uiux',
      number: '02',
      name: t.services.items.uiux.name,
      shortDesc: t.services.items.uiux.desc,
      imageSrc: '/wisco.png',
      deliverablesTitle: t.services.items.uiux.deliverablesTitle,
      impactMetric: t.services.items.uiux.impact,
      deliverables: isRtl
        ? [
            'تصميم منصات الساس (SaaS) ولوحات التحكم السحابية المعقدة (مثل Wisco)',
            'بناء أنظمة تصميم ومكتبة مكونات متكاملة (Figma Design Systems)',
            'مخططات تفاعلية ونماذج قابلة للنقر وتجربة المستخدم',
            'تدقيق رحلة العميل وتقليل معدل التراجع (CRO)',
            'تسليم جاهز للمطورين مع توكنز برمجية (React / Next.js)',
          ]
        : [
            'End-to-End SaaS Web Apps & Cloud Dashboards (like Wisco)',
            'Design Systems & Component Tokens (Figma)',
            'Interactive Wireframing & Clickable Prototypes',
            'Conversion Rate Optimization (CRO) & Flow Audits',
            'Developer Handover & React/Next.js Tokens',
          ],
    },
    {
      id: 'branding',
      number: '03',
      name: t.services.items.branding.name,
      shortDesc: t.services.items.branding.desc,
      imageSrc: '/rawabi.png',
      deliverablesTitle: t.services.items.branding.deliverablesTitle,
      impactMetric: t.services.items.branding.impact,
      deliverables: isRtl
        ? [
            'استراتيجية التموضع وبناء الهوية للقطاعات الراقية (مثل ملحمة روابي مرج الحمام)',
            'تصميم شعار عربي وإنجليزي مع خطوط حصرية متناسقة',
            'تصميم علب التغليف، الأكياس، وأوراق التغليف التجارية',
            'دليل إرشادات الهوية البصرية الشامل (Brand Bible)',
            'تصميم الواجهات الخارجية والمتاجر وتجربة البيع بالتجزئة',
          ]
        : [
            'Brand Positioning & Strategy for Industry Leaders (like Rawabi Butchery)',
            'Logo System & Bespoke Arabic/English Monograms',
            'Packaging Architecture, Boxes & Retail Wrap Design',
            'Comprehensive 60+ Page Brand Bible & Guidelines',
            'Storefront Signage & Retail Environmental Graphics',
          ],
    },
    {
      id: 'social-media',
      number: '04',
      name: t.services.items.socialMedia.name,
      shortDesc: t.services.items.socialMedia.desc,
      imageSrc: '/09.png',
      deliverablesTitle: t.services.items.socialMedia.deliverablesTitle,
      impactMetric: t.services.items.socialMedia.impact,
      deliverables: isRtl
        ? [
            'تصوير فيديو سينمائي مخصص لريلز وتيك توك وشورتس',
            'تصميم وتصوير شبكات إنستغرام كاملة (مثل حملة 9 صور لكراست برجر)',
            'جلسات تصوير سينمائية بكاميرات احترافية وإضاءة استوديو',
            'إدارة المحتوى الشهري، كتابة سيناريوهات الفيديوهات',
            'تصميم إعلانات ممولة عالية التفاعل ومقاطع تصوير سريع',
          ]
        : [
            'Cinematic Short-Form Video (Reels, TikTok, Shorts)',
            'Curated 9-Photo Social Media Grid Campaigns (like Crust Burgers)',
            'Commercial Campaign Shoots (RED/ARRI / 4K Cinema)',
            'Monthly Content Calendar & Strategic Scripting',
            'High-Conversion Paid Performance Ads & UGC Styling',
          ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-transparent scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
            {t.services.kicker}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display text-balance">
            {t.services.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesList.map((service) => {
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                className="blue-glow-card group p-8 rounded-xl bg-[#04091a]/75 border border-slate-800/90 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top metadata line */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-blue-400 font-bold tracking-wider">
                      {service.number} // {service.id.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-[#02050e] border border-blue-950">
                      DISCIPLINE {service.number}
                    </span>
                  </div>

                  {/* Square Aspect Ratio Container (Zero Crop) */}
                  {service.imageSrc && (
                    <div className="w-full aspect-square max-h-80 mx-auto rounded-lg overflow-hidden mb-6 border border-blue-950/60 bg-[#02050e] flex items-center justify-center p-2 relative group-hover:border-blue-500/40 transition-colors">
                      <img 
                        src={service.imageSrc} 
                        alt={service.name} 
                        className="w-full h-full object-contain rounded-md transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  )}

                  {/* Title & Concise Summary */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors font-display mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist Toggle */}
                  <div className="space-y-3 pt-4 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="w-full flex items-center justify-between text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="font-semibold uppercase tracking-wider">
                        {service.deliverablesTitle} ({service.deliverables.length})
                      </span>
                      <span className="text-blue-400 text-xs font-mono">
                        {isExpanded ? (isRtl ? '[ إخفاء التفاصيل ]' : '[ Collapse ]') : (isRtl ? '[ عرض الكل ]' : '[ View All ]')}
                      </span>
                    </button>

                    <div className="space-y-2 pt-2">
                      {service.deliverables
                        .slice(0, isExpanded ? service.deliverables.length : 3)
                        .map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-300"
                          >
                            <span className="text-blue-400 font-mono text-[11px] shrink-0 mt-0.5">
                              0{idx + 1}.
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForInquiry(service.name)}
                    className="inline-flex items-center text-xs font-semibold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <span>{t.services.startInquiry}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
