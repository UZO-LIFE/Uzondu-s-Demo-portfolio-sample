import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  caption?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title & Close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
          <div>
            <h3 className="text-base font-semibold text-white font-display">
              {title || 'Media Inspection'}
            </h3>
            {caption && (
              <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">{caption}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Content */}
        <div className="relative flex-1 bg-black flex items-center justify-center p-2 sm:p-4 overflow-auto">
          <img
            src={imageSrc}
            alt={imageAlt}
            referrerPolicy="no-referrer"
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Footer Note */}
        <div className="px-6 py-3 bg-neutral-950 border-t border-neutral-800/80 text-xs text-neutral-400 flex items-center justify-between">
          <span>High-Resolution Production & Design Archive</span>
          <span className="font-mono text-[11px] text-neutral-400">Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
};
