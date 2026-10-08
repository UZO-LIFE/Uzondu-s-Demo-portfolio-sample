import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'management', label: 'Management & Operations' },
    { id: 'content', label: 'Content Creation' },
    { id: 'voiceover', label: 'Voiceover' },
    { id: 'skills', label: 'Skills & Synergy' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Wordmark Brand element */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-sm"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display group-hover:text-lime-400 transition-colors">
              Uzondu Anujulu
            </span>
            <span className="text-[11px] tracking-wider uppercase text-neutral-400 font-mono">
              Operations · Content · Voice
            </span>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded-md ${
                    isActive
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-lime-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white hover:bg-lime-400 rounded-full transition-all duration-200 shadow-sm hover:shadow-lime-400/20 active:scale-95 whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-neutral-950/98 px-4 pt-3 pb-6 space-y-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg text-left transition-colors ${
                  isActive
                    ? 'bg-neutral-900 text-lime-400 font-semibold'
                    : 'text-neutral-300 hover:bg-neutral-900/60 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />}
              </button>
            );
          })}
          <div className="pt-4 px-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-lime-400 rounded-lg hover:bg-lime-300 transition-colors"
            >
              <span>Initiate Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
