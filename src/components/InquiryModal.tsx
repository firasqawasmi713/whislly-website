import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const { t, isRtl } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'Food Photography & Creative Design');
  const [overview, setOverview] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = isRtl
      ? `مرحباً وكالة ويسلي! أرغب في بدء تعاون بمشروع:
الاسم: ${name || 'غير محدد'}
الخدمة: ${service}
رقم الهاتف: ${phone || 'غير محدد'}
نبذة: ${overview || 'طلب مكالمة استكشافية'}`
      : `Hello Whislly! I submitted a fast project inquiry via your modal:
Name: ${name || 'Not provided'}
Service: ${service}
Phone: ${phone || 'Not provided'}
Overview: ${overview || 'Discovery call requested'}`;
    return `https://wa.me/962799124684?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#060c1e] border border-blue-600/50 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.3)] overflow-hidden">
        
        {/* Header (No icons) */}
        <div className="flex items-center justify-between p-5 border-b border-blue-900/40 bg-[#030612]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
              {t.modal.kicker}
            </span>
            <h3 className="text-lg font-bold text-white font-display mt-0.5">
              {t.modal.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors hover:border-blue-500 cursor-pointer"
            aria-label="Close"
          >
            {isRtl ? 'إغلاق' : 'CLOSE'}
          </button>
        </div>

        {/* Content (No icons) */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/60 text-emerald-400 font-mono text-xs font-bold">
                {isRtl ? 'تم التسجيل' : 'SUBMITTED'}
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                {t.modal.successTitle}
              </h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                {t.modal.successText}
              </p>

              <div className="pt-3 space-y-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center shadow-md transition-colors"
                >
                  <span>{t.modal.continueWhatsapp}</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.modal.dismiss}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-mono uppercase text-slate-400 mb-1">
                  {t.modal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zaid Kareem"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono uppercase text-slate-400 mb-1">
                    {t.modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="zaid@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-slate-400 mb-1">
                    {t.modal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+962 7 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono uppercase text-slate-400 mb-1">
                  {t.modal.serviceLabel}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all"
                >
                  <option value="Food Photography & Creative Design">
                    {isRtl ? 'تصوير الأطعمة وتنسيق القوائم' : 'Food Photography & Creative Design'}
                  </option>
                  <option value="UI/UX & SaaS Digital Products">
                    {isRtl ? 'واجهات وتجربة المستخدم للساس (Wiscolab.com)' : 'UI/UX & SaaS Digital Products'}
                  </option>
                  <option value="Strategic Branding & Packaging">
                    {isRtl ? 'الهوية البصرية وتصميم التغليف' : 'Strategic Branding & Packaging'}
                  </option>
                  <option value="Social Media & Media Production">
                    {isRtl ? 'إدارة السوشيال ميديا وشبكة 9 صور' : 'Social Media & Media Production'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-mono uppercase text-slate-400 mb-1">
                  {t.modal.overviewLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={isRtl ? 'أهداف المشروع أو التاريخ المستهدف...' : 'Project objectives, timeline, or scope notes...'}
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#02050e] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.35)] focus:outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.modal.cancelBtn}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-500 transition-all flex items-center shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{isRtl ? 'جاري الإرسال...' : 'Sending...'}</span>
                  ) : (
                    <span>{t.modal.sendBtn}</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
