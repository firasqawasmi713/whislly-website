import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const FaqSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = isRtl
    ? [
        {
          question: 'ما هو الجدول الزمني المعتاد لإنجاز المشاريع في ويسلي؟',
          answer:
            'لسبرنتات الخدمات الفردية (مثل تصوير قوائم الطعام لتطبيقات التوصيل أو واجهات الساس)، يستغرق التنفيذ عادة من أسبوع إلى أسبوعين. أما الهويات البصرية الشاملة وإطلاقات المنصات فتستغرق من 3 إلى 5 أسابيع. كما نوفر عقوداً شهرية مستمرة.',
        },
        {
          question: 'كيف تتم آلية التعاون والتصوير للعملاء خارج عمّان؟',
          answer:
            'نعمل مع عملاء في مختلف محافظات المملكة ودول الخليج العربي (السعودية والإمارات) والولايات المتحدة. نعتمد أدوات تعاون رقمية رشيقة وسريعة إلى جانب اجتماعات دورية مباشرة مع القيادة الإبداعية.',
        },
        {
          question: 'هل الأسعار والتقديرات بالدينار الأردني (JD)؟',
          answer:
            'نعم، تعتمد وكالتنا الدينار الأردني (JD) كعملة رئيسية في عروض الأسعار وحاسبة النطاق التفاعلية، مع توفير خيارات دفع مصرفية محلية ودولية مرنة وميسرة.',
        },
        {
          question: 'ما هي الخطوات المطلوبة لبدء المشروع؟',
          answer:
            'بكل بساطة يمكنك الضغط على زر "ابدأ مشروعك"، أو مراسلتنا مباشرة عبر واتساب (+962 7 9912 4684) أو البريد info@whislly.com. سنقوم بمراجعة طلبك وتقديم مقترح تفصيلي خلال ساعتي عمل فقط.',
        },
      ]
    : [
        {
          question: "What is Whislly's typical project turnaround timeline?",
          answer:
            'For individual service sprints (e.g. food delivery menu photography or SaaS product UI/UX), turnaround is typically 1 to 2 weeks. Comprehensive brand systems or SaaS platforms require 3 to 5 weeks. We also offer dedicated monthly media retainers.',
        },
        {
          question: 'How do you coordinate with clients outside Amman?',
          answer:
            'We collaborate seamlessly across Jordan, the GCC (Saudi Arabia, UAE), and internationally. We utilize asynchronous platforms paired with weekly leadership video syncs to guarantee absolute clarity.',
        },
        {
          question: 'Are all project estimates quoted in Jordanian Dinars (JD)?',
          answer:
            'Yes, Whislly quotes in JD as our standard currency. We offer transparent phase-based billing structures and both local and international bank transfer channels.',
        },
        {
          question: 'What is required to initiate a production engagement?',
          answer:
            'Simply fill out our inquiry form or message us directly on WhatsApp (+962 7 9912 4684) or email info@whislly.com. Our creative directors review briefs and initiate discovery calls within 2 business hours.',
        },
      ];

  return (
    <section id="faq" className="py-24 bg-transparent scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (No icons) */}
        <div className="text-center mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
            {t.faq.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            {t.faq.heading}
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion with Blue Glow Hover (No icons) */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="blue-glow-card rounded-xl border border-slate-800/90 bg-[#04091a]/70 overflow-hidden hover:border-blue-500/70 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-bold text-white font-display">
                    {item.question}
                  </span>
                  <span className="text-xs font-mono text-blue-400 shrink-0 px-2 py-1 rounded bg-blue-950/60 border border-blue-900/50">
                    {isOpen ? '[-]' : '[+]'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
