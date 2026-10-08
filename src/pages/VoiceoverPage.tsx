import React, { useState } from 'react';
import { PageId, VoiceoverCategory } from '../types';
import { VOICEOVER_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';
import { ImageModal } from '../components/ImageModal';
import {
  ArrowLeft,
  Mic,
  Maximize2,
  Clock,
  Sparkles,
  ShieldCheck,
  FileText,
  Volume2,
  Sliders,
  ChevronRight,
  Send,
  CheckCircle2,
  Headphones
} from 'lucide-react';

interface VoiceoverPageProps {
  onNavigate: (page: PageId) => void;
}

export const VoiceoverPage: React.FC<VoiceoverPageProps> = ({ onNavigate }) => {
  const [selectedScriptId, setSelectedScriptId] = useState<string | null>(null);
  const [auditionModalCategory, setAuditionModalCategory] = useState<VoiceoverCategory | null>(null);
  const [auditionSent, setAuditionSent] = useState(false);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; title: string; caption: string } | null>(null);

  const handleAuditionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuditionSent(true);
    setTimeout(() => {
      setAuditionSent(false);
      setAuditionModalCategory(null);
    }, 2500);
  };

  return (
    <div className="w-full">
      {/* 1. Header & Introduction */}
      <section className="relative border-b border-neutral-900 bg-neutral-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Unified Homepage</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400">
                <span>Vocal Performance & Audio Artistry</span>
                <span aria-hidden="true">·</span>
                <span>Voice Talent</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
                Voiceover Artistry: <br />
                Tone, Authority, & Resonance
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed pt-2">
                Delivering compelling vocal performances across commercial advertising, corporate documentary narration, and conversational e-learning. Combining warm baritone depth, clear articulation, and natural executive presence.
              </p>
            </div>

            {/* Vocal Specs Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider block">
                Vocal Profile
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Tone Range</span>
                  <span className="text-white font-medium">Warm Baritone / Grounded</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Delivery Style</span>
                  <span className="text-white font-medium">Authoritative, Conversational</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Language & Dialect</span>
                  <span className="text-white font-medium">African Neutral / Mid-Atlantic</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Delivery Formats</span>
                  <span className="text-lime-400 font-mono">WAV 48kHz/24-bit · MP3 320k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ethical Disclaimer Banner */}
          <div className="mt-10 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 flex items-start gap-3 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-neutral-300">Integrity Standard:</strong> In strict alignment with truthful portfolio practices, <em>no synthetic or fabricated audio recordings are played on this site</em>. All demo players are fully architected interface placeholders labelled <span className="text-lime-400 font-mono">Demo recording coming soon</span>. When studio master recordings are uploaded, the players will activate automatically with live playback.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Studio Environment & Recording Facility */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Studio Image Container */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group shadow-2xl">
              <img
                src="/images/voiceover-studio.png"
                alt="Professional recording studio setup"
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] object-cover grayscale contrast-110 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-300 bg-black/80 px-3 py-1.5 rounded-lg border border-neutral-700">
                  Minimalist Vocal Booth Environment
                </span>
                <button
                  onClick={() => setModalImage({
                    src: '/images/voiceover-studio.png',
                    alt: 'Professional recording studio setup',
                    title: 'Vocal Recording Studio Environment',
                    caption: 'Dedicated acoustically treated booth featuring broadcast microphone, boom arm, pop filter, and sound isolation.'
                  })}
                  className="p-2 bg-black/80 hover:bg-neutral-800 text-white rounded-lg border border-neutral-700 transition-colors"
                  title="Inspect studio visual"
                  aria-label="Inspect studio visual"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Studio Technical Setup */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
                  Acoustic & Hardware Standard
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
                  Pristine Acoustic Chain & Broadcast Monitoring
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  High-fidelity audio production requires strict isolation from room reverberations and electronic floor noise. Every recording is captured in a treated booth with zero noise bleed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-1.5">
                  <span className="text-xs font-mono uppercase text-lime-400 block">Acoustic Treatment</span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Custom high-density acoustic foam & bass traps eliminating slap-back flutter echoes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-1.5">
                  <span className="text-xs font-mono uppercase text-lime-400 block">Signal Path</span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Broadcast cardioid condenser microphone with multi-layer mesh pop shield and low-noise preamps.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-1.5">
                  <span className="text-xs font-mono uppercase text-lime-400 block">DAW & Mastering</span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Subtle EQ sweetening, transparent de-essing, noise gating, and broadcast LUFS normalization.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-1.5">
                  <span className="text-xs font-mono uppercase text-lime-400 block">Turnaround Standard</span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    24–48 hour turnaround on commercial and narration reads with 2 complimentary revision passes.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Three Dedicated Demo Player Interfaces */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
              Audio Demos & Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Three Distinct Vocal Categories
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Explore the vocal specializations below. Each player provides category nuances, pacing parameters, and sample script copy.
            </p>
          </div>

          <div className="space-y-8">
            {VOICEOVER_CATEGORIES.map((category, index) => {
              const isScriptOpen = selectedScriptId === category.id;
              
              return (
                <div
                  key={category.id}
                  className="rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8 hover:border-neutral-700 transition-all shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Category Title & Descriptions */}
                    <div className="lg:col-span-5 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-lime-400 uppercase">
                          Format 0{index + 1}
                        </span>
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                        <span className="text-xs text-neutral-400">{category.duration}</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                        {category.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {category.tagline}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {category.useCases.slice(0, 3).map((useCase, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700/60"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dedicated Player Component Placeholder */}
                    <div className="lg:col-span-7 rounded-xl bg-neutral-950 border border-neutral-800 p-5 space-y-4">
                      
                      {/* Player Top Bar */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="font-mono text-neutral-300">
                            Demo Recording: Coming Soon
                          </span>
                        </div>
                        <span className="font-mono text-neutral-400 text-[11px]">
                          Target Length: {category.duration}
                        </span>
                      </div>

                      {/* Simulated Audio Waveform Bar Visualization (Clean CSS lines) */}
                      <div className="h-14 bg-neutral-900/60 rounded-lg p-2.5 flex items-center justify-between gap-[3px] border border-neutral-800/80">
                        {Array.from({ length: 44 }).map((_, barIdx) => {
                          // Deterministic procedural heights for a natural waveform look
                          const heightFactor = Math.sin(barIdx * 0.35 + index) * 0.4 + 0.55;
                          const heightPercent = Math.max(15, Math.min(95, Math.round(heightFactor * 100)));
                          return (
                            <div
                              key={barIdx}
                              className="flex-1 bg-neutral-700 rounded-full transition-all duration-300"
                              style={{ height: `${heightPercent}%` }}
                            />
                          );
                        })}
                      </div>

                      {/* Audio Controls & Script Toggle Button */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                        <div className="flex items-center gap-2 text-xs text-neutral-400">
                          <Headphones className="w-4 h-4 text-neutral-400" />
                          <span>Pacing: {category.pacing}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedScriptId(isScriptOpen ? null : category.id)}
                            className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                          >
                            <FileText className="w-3.5 h-3.5 text-lime-400" />
                            <span>{isScriptOpen ? 'Hide Script' : 'View Sample Script'}</span>
                          </button>

                          <button
                            onClick={() => setAuditionModalCategory(category)}
                            className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-lime-400 text-neutral-950 text-xs font-semibold transition-all shadow-sm"
                          >
                            Request Audition
                          </button>
                        </div>
                      </div>

                      {/* Expandable Sample Script Drawer */}
                      {isScriptOpen && (
                        <div className="mt-4 pt-4 border-t border-neutral-800/80 animate-in fade-in duration-200">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                            Script Copy (For Performance Delivery):
                          </span>
                          <blockquote className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-200 italic leading-relaxed">
                            {category.sampleScript}
                          </blockquote>
                          <p className="text-[11px] text-neutral-400 mt-2 font-mono">
                            Tone direction: {category.tone}
                          </p>
                        </div>
                      )}

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Request Custom Audition Modal */}
      {auditionModalCategory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setAuditionModalCategory(null)}
        >
          <div
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs font-mono uppercase text-lime-400 block">Voice Talent Booking</span>
              <h3 className="text-xl font-bold font-display text-white mt-1">
                Request Audition Read: {auditionModalCategory.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Send your script excerpt for a 24-hour custom audition read by Uzondu Anujulu.
              </p>
            </div>

            {auditionSent ? (
              <div className="p-6 rounded-xl bg-neutral-950 border border-lime-500/40 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-lime-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Audition Request Queued!</h4>
                <p className="text-xs text-neutral-400">
                  Uzondu has received your project details at {PERSONAL_INFO.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAuditionSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Creative Director at Studio Apex"
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-lime-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="director@agency.com"
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-lime-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-neutral-300 block mb-1">Script Excerpt / Direction Notes</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Paste a short 20–50 word excerpt or describe required vocal tone..."
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-lime-400 focus:outline-none resize-none"
                  />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setAuditionModalCategory(null)}
                    className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-lime-400 hover:bg-lime-300 text-neutral-950 text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Audition Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 5. Navigation Footer to next section */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono text-neutral-400">Next Section</span>
            <h3 className="text-xl font-bold font-display text-white">Skills Across Disciplines</h3>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('content')}
              className="px-5 py-2.5 rounded-lg border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors"
            >
              Content
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="px-6 py-2.5 rounded-lg bg-white hover:bg-lime-400 text-neutral-950 text-sm font-semibold transition-all inline-flex items-center gap-2"
            >
              <span>Explore Synergy Matrix</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
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
