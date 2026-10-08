import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ManagementPage } from './pages/ManagementPage';
import { ContentCreationPage } from './pages/ContentCreationPage';
import { VoiceoverPage } from './pages/VoiceoverPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Synchronize hash with current page
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (['home', 'management', 'content', 'voiceover', 'skills', 'contact'].includes(rawHash)) {
        setCurrentPage(rawHash as PageId);
      } else if (rawHash === 'about') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-lime-400 selection:text-neutral-950">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'management' && <ManagementPage onNavigate={handleNavigate} />}
        {currentPage === 'content' && <ContentCreationPage onNavigate={handleNavigate} />}
        {currentPage === 'voiceover' && <VoiceoverPage onNavigate={handleNavigate} />}
        {currentPage === 'skills' && <SkillsPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Persistent Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
