import React, { useState } from 'react';

interface AgencyImageProps {
  src: string;
  alt: string;
  placeholderTag: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9';
  className?: string;
  category?: string;
  title?: string;
}

export const AgencyImage: React.FC<AgencyImageProps> = ({
  src,
  alt,
  placeholderTag,
  aspectRatio = '4/3',
  className = '',
  category,
  title,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
  }[aspectRatio] || 'aspect-[4/3]';

  return (
    <div
      className={`relative overflow-hidden bg-[#04091a] border border-blue-950/80 ${aspectClass} ${className} group`}
    >
      {/* Real Image Tag */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Styled Fallback / Placeholder Container (No icons/symbols) */}
      {(hasError || !isLoaded) && (
        <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-[#060e24] via-[#02050f] to-[#091535] text-slate-300">
          {/* Top Row: Category & Service indicator */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-900/40 px-2.5 py-1 rounded">
                {category || 'MEDIA'}
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 bg-[#02050e]/90 px-2 py-1 rounded border border-blue-950">
              <span>{placeholderTag}</span>
            </div>
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 my-auto text-center py-4">
            <div className="text-sm font-semibold tracking-tight text-slate-200">
              {title || alt}
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-[260px] mx-auto font-mono">
              Whislly Production Asset
            </p>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-blue-900/30 font-mono">
            <span className="truncate">/public/assets/{placeholderTag}</span>
            <span className="shrink-0 text-blue-400 text-[10px]">PRODUCTION READY</span>
          </div>
        </div>
      )}

      {/* Gradient vignette overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
