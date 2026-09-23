import React, { useState } from 'react';
import {
  PORTFOLIO_ITEMS,
  PortfolioItem,
  ASSET_PLACEHOLDERS,
  CrustBurgerPhoto,
} from '../data/agencyData.ts';
import { AgencyImage } from './AgencyImage.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface PortfolioShowcaseProps {
  onRequestSimilarProject: (projectName: string) => void;
}

// 9-Photo Social Media Grid Images mapping
const SOCIAL_GRID_PHOTOS = [
  { id: '1', src: '/01.png', title: 'Signature Drop', tag: 'Reels Hook' },
  { id: '2', src: '/02.png', title: 'Macro Detail', tag: 'Visual Texture' },
  { id: '3', src: '/04.png', title: 'Cinematic Prep', tag: 'Motion Still' },
  { id: '4', src: '/05.png', title: 'Hero Centerpiece', tag: 'Grid Anchor' },
  { id: '5', src: '/06.png', title: 'Atmosphere', tag: 'Brand Story' },
  { id: '6', src: '/07.png', title: 'Packaging Detail', tag: 'Unboxing' },
  { id: '7', src: '/08.png', title: 'Action Capture', tag: 'High-Speed' },
  { id: '8', src: '/09.png', title: 'Golden Hour', tag: 'Mood Lighting' },
  { id: '9', src: '/010.png', title: 'Final Showcase', tag: 'Grid Outro' },
];

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onRequestSimilarProject,
}) => {
  const { t, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [activeGalleryPhotoIndex, setActiveGalleryPhotoIndex] = useState<number>(0);

  const filterTabs = [
    { key: 'All', label: t.portfolio.filterAll },
    { key: 'Design', label: t.portfolio.filterDesign },
    { key: 'UI/UX', label: t.portfolio.filterUiUx },
    { key: 'Branding', label: t.portfolio.filterBranding },
    { key: 'Social Media', label: t.portfolio.filterSocial },
  ];

  const filteredItems =
    activeFilter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  // Helper to determine the real image path for each project card
  const getProjectImage = (item: PortfolioItem): string => {
    if (item.category === 'Design' || item.id.includes('food') || item.id.includes('photo')) {
      return '/food.png';
    }
    if (item.category === 'Branding' || item.id.includes('rawabi')) {
      return '/rawabi.png';
    }
    return ASSET_PLACEHOLDERS[item.assetKey] || '/food.png';
  };

  return (
    <section id="portfolio" className="py-24 bg-transparent scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
              {t.portfolio.kicker}
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display text-balance">
              {t.portfolio.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Segmented Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#040919] border border-blue-950 rounded-lg">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/40 border border-blue-400/60'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item) => {
            const isCrustBurgers = item.id === 'crust-burgers-9shots' || item.category === 'Social Media';
            const realImagePath = getProjectImage(item);

            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedProject(item);
                  setActiveGalleryPhotoIndex(0);
                }}
                className="blue-glow-card group relative bg-[#04091a]/80 border border-slate-800/90 rounded-xl overflow-hidden flex flex-col justify-between hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300 cursor-pointer"
              >
                {/* Visual Media Placeholder or 9-Photo Mini-Grid */}
                <div className="relative overflow-hidden bg-[#02050f]">
                  {isCrustBurgers ? (
                    <div className="p-3 bg-[#030716] border-b border-blue-900/40">
                      <div className="flex items-center justify-between mb-2 text-xs font-mono text-slate-300">
                        <span className="text-blue-400 font-semibold">
                          9-Photo Social Media Grid Showcase
                        </span>
                        <span className="text-slate-400 text-[10px]">9 Real Assets</span>
                      </div>
                      
                      {/* 3x3 Real Media Grid */}
                      <div className="grid grid-cols-3 gap-2 aspect-[4/3] rounded-lg overflow-hidden">
                        {SOCIAL_GRID_PHOTOS.map((photo, pIdx) => (
                          <div
                            key={photo.id}
                            className="relative rounded overflow-hidden bg-slate-900 border border-blue-900/40 group-hover:border-blue-500/50 transition-colors"
                          >
                            <img 
                              src={photo.src} 
                              alt={photo.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute top-1 left-1 bg-black/70 px-1 py-0.5 rounded text-[8px] font-mono text-blue-300">
                              0{pIdx + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                      <img 
                        src={realImagePath} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04091a] via-transparent to-transparent opacity-60" />
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                      <span className="text-blue-400 font-semibold">{item.category}</span>
                      <span>·</span>
                      <span className="text-slate-200">{item.client}</span>
                      <span>·</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors font-display mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-end text-xs">
                    <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                      {t.portfolio.viewDetails}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Case Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#060c1e] border border-blue-600/50 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.3)] overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-blue-900/40 bg-[#030612]">
              <div>
                <div className="text-xs font-mono text-slate-400">
                  <span className="text-blue-400 font-semibold uppercase">{selectedProject.category}</span>
                  <span> / </span>
                  <span className="text-white font-medium">{selectedProject.client}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors hover:border-blue-500 cursor-pointer"
                aria-label="Close modal"
              >
                {isRtl ? 'إغلاق' : 'CLOSE'}
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-200">
              
              {/* If Social Media / Crust Burgers: Render full 9-photo gallery */}
              {selectedProject.id === 'crust-burgers-9shots' || selectedProject.category === 'Social Media' ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                        {t.portfolio.galleryHeading}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {t.portfolio.gallerySubtitle}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2.5 py-1 rounded">
                      9/9 Master Frames
                    </span>
                  </div>

                  {/* Active Selected Full Frame */}
                  <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-blue-500/50 bg-black">
                    <img 
                      src={SOCIAL_GRID_PHOTOS[activeGalleryPhotoIndex].src} 
                      alt={SOCIAL_GRID_PHOTOS[activeGalleryPhotoIndex].title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono text-blue-400">FRAME 0{activeGalleryPhotoIndex + 1}</div>
                        <div className="text-sm font-bold text-white">{SOCIAL_GRID_PHOTOS[activeGalleryPhotoIndex].title}</div>
                      </div>
                      <span className="text-xs font-mono bg-blue-600/30 text-blue-300 border border-blue-500/50 px-2 py-1 rounded">
                        {SOCIAL_GRID_PHOTOS[activeGalleryPhotoIndex].tag}
                      </span>
                    </div>
                  </div>

                  {/* 9-photo clickable thumbnail strip */}
                  <div className="grid grid-cols-9 gap-2">
                    {SOCIAL_GRID_PHOTOS.map((photo, pIdx) => {
                      const isSelected = activeGalleryPhotoIndex === pIdx;
                      return (
                        <button
                          key={photo.id}
                          type="button"
                          onClick={() => setActiveGalleryPhotoIndex(pIdx)}
                          className={`aspect-square rounded overflow-hidden border transition-all cursor-pointer ${
                            isSelected
                              ? 'border-blue-400 ring-2 ring-blue-400 scale-105'
                              : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                          }`}
                        >
                          <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Regular Single Media Box */
                <div className="rounded-lg overflow-hidden border border-blue-950 aspect-[16/9] max-h-96 w-full bg-black">
                  <img 
                    src={getProjectImage(selectedProject)} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}

              {/* Case Overview */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Project Brief & Production Execution
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Website link if applicable */}
              {selectedProject.websiteUrl && (
                <div className="p-4 rounded-lg bg-blue-950/30 border border-blue-500/40 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-blue-400 uppercase font-bold">Official Client Platform</div>
                    <div className="text-sm font-bold text-white">Wiscolab.com</div>
                  </div>
                  <a
                    href={selectedProject.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-colors"
                  >
                    <span>{t.portfolio.visitWebsite}</span>
                  </a>
                </div>
              )}

              {/* Concrete Outcome */}
              <div className="p-4 rounded-lg bg-blue-950/30 border border-blue-900/40 text-sm">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
                  {t.portfolio.validatedImpact}
                </div>
                <div className="text-slate-200 font-semibold text-base font-mono">
                  {selectedProject.impactResult}
                </div>
              </div>

              {/* Deliverable Tags */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {t.portfolio.keyScope}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-900 px-2.5 py-1 rounded text-slate-300 border border-slate-800 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 border-t border-blue-900/40 bg-[#030612] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {t.portfolio.closePreview}
              </button>
              <button
                onClick={() => {
                  const name = selectedProject.title;
                  setSelectedProject(null);
                  onRequestSimilarProject(name);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-600/40 hover:shadow-blue-500/60 cursor-pointer"
              >
                <span>{t.portfolio.inquireSimilar}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};