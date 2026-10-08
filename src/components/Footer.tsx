import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-neutral-900">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl font-bold font-display tracking-tight text-white block">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              General Manager at Lords Stan Concept, content creator exploring financial literacy and personal discipline, and professional voiceover artist. Bringing operational excellence and narrative clarity together.
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-400 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                {PERSONAL_INFO.location}
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-lime-400" />
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-white font-mono block">
              Portfolios & Roles
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('management'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-lime-400 transition-colors text-left"
                >
                  Management & Packaging Operations
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('content'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-lime-400 transition-colors text-left"
                >
                  Content Creation & Social Threads
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('voiceover'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-lime-400 transition-colors text-left"
                >
                  Voiceover Artistry & Audio Demos
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-lime-400 transition-colors text-left"
                >
                  Cross-Disciplinary Synergy Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Direct Inquiry */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-white font-mono block">
              Professional Inquiries
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Open to manufacturing operations consulting, packaging project management, high-impact content partnerships, and voiceover commercial bookings.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded border border-neutral-800 transition-colors inline-flex items-center gap-1.5"
              >
                LinkedIn <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.x}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded border border-neutral-800 transition-colors inline-flex items-center gap-1.5"
              >
                X (Twitter) <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded border border-neutral-800 transition-colors inline-flex items-center gap-1.5"
              >
                Instagram <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Ethical Transparency & Disclaimers Accord */}
        <div className="py-6 border-b border-neutral-900/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-start gap-2 max-w-4xl">
            <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="text-neutral-300 font-medium">Portfolio Transparency Notice:</span> Visual portraits and packaging machinery scenes represent high-fidelity workflow illustrative photography for presentation purposes. Social metrics are illustrative demo figures. Voiceover audio players are configured with complete technical specifications awaiting production master audio files.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors py-1 px-3 rounded hover:bg-neutral-900 whitespace-nowrap self-end md:self-auto"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Uzondu Anujulu. All rights reserved.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Built with React & Tailwind CSS</span>
            <span>·</span>
            <span>Optimized for Netlify Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
