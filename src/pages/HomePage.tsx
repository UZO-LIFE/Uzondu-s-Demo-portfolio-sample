import React, { useState } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO, CROSS_SKILLS } from '../data/portfolioData';
import { ImageModal } from '../components/ImageModal';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  PenTool,
  Mic,
  Maximize2,
  CheckCircle2,
  Shield,
  Layers,
  Sparkles,
  Target,
  MessageSquare,
  Search,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; title: string; caption: string } | null>(null);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-lime-400" />;
      case 'Target': return <Target className="w-4 h-4 text-lime-400" />;
      case 'Shield': return <Shield className="w-4 h-4 text-lime-400" />;
      case 'Search': return <Search className="w-4 h-4 text-lime-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-lime-400" />;
      default: return <Sparkles className="w-4 h-4 text-lime-400" />;
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section - Split Screen Layout */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center border-b border-neutral-900 bg-neutral-950 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Bold Typographic Impact & Messaging */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Clean unboxed editorial kicker */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                <span>Multidisciplinary Professional Portfolio</span>
                <span aria-hidden="true">·</span>
                <span>Lagos, Nigeria</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08] text-balance">
                  Operations leader. <br className="hidden sm:inline" />
                  Content creator. <br className="hidden sm:inline" />
                  <span className="text-neutral-400">Voiceover artist.</span>
                </h1>
                <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl pt-2">
                  I transform complex realities into seamless outcomes—whether directing high-volume packaging manufacturing at Lords Stan Concept, architecting transformative ideas on wealth and discipline, or delivering authentic vocal storytelling.
                </p>
              </div>

              {/* Primary Call to Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('management')}
                  className="px-6 py-3.5 bg-white text-neutral-950 font-semibold rounded-lg hover:bg-lime-400 transition-all duration-200 inline-flex items-center gap-2 text-sm shadow-sm hover:shadow-lime-400/20 active:scale-95 group"
                >
                  <span>Explore Management Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all duration-200 inline-flex items-center gap-2 text-sm active:scale-95"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </button>
              </div>

              {/* Adjacency Proof Indicators (Unboxed, clean text) */}
              <div className="pt-6 border-t border-neutral-900 grid grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                    GM
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">Lords Stan Concept</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                    5
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">Content Disciplines</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                    3
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">Voiceover Formats</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Portrait Visual Container */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md group">
                
                {/* Visual border frame */}
                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl transition-all duration-300 group-hover:border-neutral-700">
                  <img
                    src="/images/hero-portrait.png"
                    alt="Editorial portrait of Uzondu Anujulu"
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[3/4] object-cover object-top grayscale contrast-110 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Subtle Dark Gradient Scrim at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white font-display font-bold text-lg block">
                          {PERSONAL_INFO.name}
                        </span>
                        <span className="text-xs text-neutral-300">
                          Multidisciplinary Practitioner
                        </span>
                      </div>
                      <button
                        onClick={() => setModalImage({
                          src: '/images/hero-portrait.png',
                          alt: 'Editorial portrait of Uzondu Anujulu',
                          title: 'Uzondu Anujulu · Professional Portrait',
                          caption: 'Photorealistic editorial placeholder representing professional presence. Prepared for easy replacement with personal headshot.'
                        })}
                        className="p-2 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-lg border border-neutral-700 backdrop-blur-sm transition-colors"
                        title="Enlarge portrait"
                        aria-label="Enlarge portrait"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Editorial Disclaimer note below portrait */}
                <div className="mt-3 text-[11px] text-neutral-400 text-center font-mono">
                  Photorealistic editorial placeholder representing Uzondu Anujulu · Lagos, Nigeria
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. About Me Section - How the Three Skillsets Connect */}
      <section className="py-24 border-b border-neutral-900 bg-neutral-950/60" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
              01. The Philosophy of Integration
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
              Why these three disciplines aren't separate careers, but a single cohesive engine.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed pt-2">
              Most professionals are told to narrow their focus to a single vertical. My strength lies in the rich cross-pollination between operational logistics, conceptual content architecture, and expressive vocal communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Operations */}
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white border border-neutral-700">
                  <Briefcase className="w-5 h-5 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  01. Operational Rigor
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Managing manufacturing workflows at Lords Stan Concept grounds every decision in physical realities: substrate tolerances, machine calibrations, cost spreadsheets, and strict delivery deadlines. There is no room for ambiguity when hundreds of thousands of carton sheets are on press.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-800/60 text-xs text-neutral-400 font-mono">
                Anchors content in tested reality, not armchair theory.
              </div>
            </div>

            {/* Pillar 2: Content Creation */}
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white border border-neutral-700">
                  <PenTool className="w-5 h-5 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  02. Conceptual Clarity
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Writing on financial literacy, compounding, and emotional boundaries requires stripping away superfluous noise to reveal the core principle. Communicating complex behavioral economics into a 3-slide carousel demands the same precision as drafting a packaging dieline.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-800/60 text-xs text-neutral-400 font-mono">
                Ensures every message produces measurable insight.
              </div>
            </div>

            {/* Pillar 3: Voiceover Artistry */}
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white border border-neutral-700">
                  <Mic className="w-5 h-5 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  03. Vocal Resonance
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Voiceover is the art of giving emotional weight to language. It trains listening, rhythm, breath control, and intentional pauses. This vocal sensitivity transforms routine client negotiations and factory floor team alignments into genuine trust.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-800/60 text-xs text-neutral-400 font-mono">
                Converts written insight into felt human emotion.
              </div>
            </div>

          </div>

          {/* Connective Quote Bar */}
          <div className="mt-12 p-8 rounded-2xl bg-neutral-900/20 border border-neutral-800 text-center max-w-4xl mx-auto">
            <blockquote className="text-lg sm:text-xl font-light text-neutral-200 italic leading-relaxed">
              “The factory floor teaches you that details cannot be faked. The writing desk teaches you that clarity is hard work. The microphone booth teaches you that truth is felt in the tone. Combined, they create unmatched executive capability.”
            </blockquote>
            <cite className="block mt-3 text-xs font-mono uppercase tracking-wider text-lime-400 not-italic">
              — Uzondu Anujulu
            </cite>
          </div>

        </div>
      </section>

      {/* 3. Three Dedicated Portfolio Cards (Clickable Gateways) */}
      <section className="py-24 border-b border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
                02. Dedicated Portfolios
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
                Explore the Work
              </h2>
              <p className="text-neutral-400 text-base">
                Select a discipline below to enter its comprehensive, deep-dive portfolio with case workflows, sample assets, and technical breakdowns.
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              3 Distinct Working Portfolios
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Management & Operations */}
            <div className="group relative rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src="/images/packaging-materials.png"
                    alt="Packaging production materials"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 text-xs font-mono bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-700 text-white">
                    Operations & Leadership
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-lime-400 transition-colors">
                    Management & Operations
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    General Manager at Lords Stan Concept. Directing end-to-end packaging workflows: client requirements, substrate selection (FBB, chipboard), prepress offset printing, precision die-cutting, and quality assurance.
                  </p>
                  
                  <ul className="space-y-2 pt-2 text-xs text-neutral-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      Turnkey Packaging Production Management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      FBB & Chipboard Substrate Engineering
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      Quality Control & Delivery Timeliness
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => onNavigate('management')}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-lime-400 hover:text-neutral-950 text-white font-medium text-sm transition-all duration-200 flex items-center justify-between group-hover:bg-white group-hover:text-neutral-950"
                >
                  <span>Enter Operations Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Content Creation */}
            <div className="group relative rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src="/images/content-financial-literacy.png"
                    alt="Financial literacy conceptual graphic"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 text-xs font-mono bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-700 text-white">
                    Thought Leadership
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-lime-400 transition-colors">
                    Content Creation
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Crafting viral, high-retention educational content on wealth building, compounding, discipline, emotional boundaries, and everyday observations. Converting abstract psychology into practical daily tools.
                  </p>

                  <ul className="space-y-2 pt-2 text-xs text-neutral-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      Financial Literacy & Wealth Compounding
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      Interactive 3-Slide Carousel Masterclasses
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      Realistic Social Thread Case Studies
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => onNavigate('content')}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-lime-400 hover:text-neutral-950 text-white font-medium text-sm transition-all duration-200 flex items-center justify-between group-hover:bg-white group-hover:text-neutral-950"
                >
                  <span>Enter Content Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Voiceover Artistry */}
            <div className="group relative rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src="/images/voiceover-studio.png"
                    alt="Recording studio booth"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 text-xs font-mono bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-700 text-white">
                    Vocal Storytelling
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-lime-400 transition-colors">
                    Voiceover Artistry
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Voice actor delivering warmth, authority, and subtle emotional cadence. Covering Commercial, Documentary Narration, and Conversational E-Learning audio formats with studio-grade equipment.
                  </p>

                  <ul className="space-y-2 pt-2 text-xs text-neutral-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      Commercial Advertising & Brand Taglines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      Documentary & Institutional Narration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      Polished Demo Players (Coming Soon)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => onNavigate('voiceover')}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-lime-400 hover:text-neutral-950 text-white font-medium text-sm transition-all duration-200 flex items-center justify-between group-hover:bg-white group-hover:text-neutral-950"
                >
                  <span>Enter Voiceover Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Cross-Discipline Skills Teaser */}
      <section className="py-24 border-b border-neutral-900 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
                03. The Synergy Matrix
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
                Skills Across Disciplines
              </h2>
              <p className="text-neutral-400 text-base">
                How communication, creativity, leadership, research, organization, and attention to detail connect across all three roles.
              </p>
            </div>
            <button
              onClick={() => onNavigate('skills')}
              className="inline-flex items-center gap-2 text-sm text-lime-400 hover:text-white font-medium transition-colors"
            >
              <span>Explore Full Synergy Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CROSS_SKILLS.slice(0, 6).map((skill) => (
              <div
                key={skill.id}
                className="p-6 rounded-xl bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-700 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-800 border border-neutral-700">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <h4 className="text-base font-semibold text-white font-display">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {skill.tagline}
                </p>
                <div className="pt-3 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-300 flex items-center justify-between">
                  <span>Amplifies Operations · Content · Voice</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct Collaboration Banner */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-8 sm:p-14 overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
                Available for Roles & Inquiries
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Ready to collaborate or discuss an upcoming project?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Whether you need senior packaging production direction, insightful content partnerships, or distinctive voiceover recordings, let’s talk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white hover:bg-lime-400 text-neutral-950 font-semibold rounded-xl transition-all duration-200 text-sm shadow-md hover:shadow-lime-400/20 active:scale-95 whitespace-nowrap"
              >
                Contact Uzondu Directly
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Lightbox Modal */}
      {modalImage && (
        <ImageModal
          isOpen={true}
          onClose={() => setModalImage(null)}
          imageSrc={modalImage.src}
          imageAlt={modalImage.alt}
          title={modalImage.title}
          caption={modalImage.caption}
        />
      )}
    </div>
  );
};
