import React, { useState } from 'react';
import { PageId } from '../types';
import { CONTENT_TOPICS } from '../data/portfolioData';
import { ImageModal } from '../components/ImageModal';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Maximize2,
  ShieldCheck,
  Sparkles,
  Info,
  CheckCircle2,
  Repeat
} from 'lucide-react';

interface ContentCreationPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContentCreationPage: React.FC<ContentCreationPageProps> = ({ onNavigate }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(CONTENT_TOPICS[0].id);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [activePlatformPreview, setActivePlatformPreview] = useState<'instagram' | 'x'>('instagram');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<string, boolean>>({});
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; title: string; caption: string } | null>(null);

  const selectedTopic = CONTENT_TOPICS.find((t) => t.id === selectedTopicId) || CONTENT_TOPICS[0];

  const handleTopicChange = (id: string) => {
    setSelectedTopicId(id);
    setCurrentSlideIndex(0);
    const newTopic = CONTENT_TOPICS.find((t) => t.id === id);
    if (newTopic) {
      setActivePlatformPreview(newTopic.postPreview.platform);
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : selectedTopic.slides.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < selectedTopic.slides.length - 1 ? prev + 1 : 0));
  };

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full">
      {/* 1. Header & Vision Statement */}
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
                <span>Educational Media & Thought Leadership</span>
                <span aria-hidden="true">·</span>
                <span>Content Strategy</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
                Making People Think Differently, <br />
                Act With Precision.
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed pt-2">
                I create structured, high-signal content exploring wealth accumulation, compounding math, daily rigor, personal accountability, and the psychological architecture of healthy relationships. The goal is simple: stripping away sensationalism to help individuals make better long-term decisions.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider block">
                Editorial Principles
              </span>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-1.5 shrink-0" />
                  <span><strong>Zero Fluff:</strong> Every slide must deliver an actionable mental model.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-1.5 shrink-0" />
                  <span><strong>Visual Restraint:</strong> Monochrome Swiss design with lime accents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-1.5 shrink-0" />
                  <span><strong>First-Principles:</strong> Backed by behavioral economics & operational reality.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ethical Disclaimer Banner */}
          <div className="mt-10 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 flex items-start gap-3 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-neutral-300">Transparency Notice:</strong> All engagement statistics (likes, shares, views) shown across these post mockups are <em>illustrative demo metrics — not actual analytics</em>. Posts are rendered using standard HTML/CSS typography to ensure crisp layout fidelity and zero spelling artifacts.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Interactive Topic Switcher Bar */}
      <section className="py-6 border-b border-neutral-900 bg-neutral-950 sticky top-20 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono uppercase text-neutral-400 whitespace-nowrap mr-2 hidden sm:inline">
              Select Pillar:
            </span>
            {CONTENT_TOPICS.map((topic) => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => handleTopicChange(topic.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                    isSelected
                      ? 'bg-neutral-900 text-lime-400 border-lime-400 font-semibold shadow-sm'
                      : 'bg-neutral-950 text-neutral-400 hover:text-white border-neutral-800 hover:bg-neutral-900'
                  }`}
                >
                  {topic.category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Main Showcase: Interactive Coordinated 3-Slide Carousel + Graphic Art */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400">
              <span>Coordinated Masterclass Series</span>
              <span aria-hidden="true">·</span>
              <span>{selectedTopic.category}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              {selectedTopic.title}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed italic">
              “{selectedTopic.hook}”
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Topic Conceptual Graphic Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group shadow-2xl">
                <img
                  src={selectedTopic.image}
                  alt={selectedTopic.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-300 bg-black/80 px-3 py-1 rounded-md border border-neutral-700">
                    {selectedTopic.category} Graphic Cover
                  </span>
                  <button
                    onClick={() => setModalImage({
                      src: selectedTopic.image,
                      alt: selectedTopic.title,
                      title: selectedTopic.title,
                      caption: selectedTopic.category
                    })}
                    className="p-2 bg-black/80 hover:bg-neutral-800 text-white rounded-lg border border-neutral-700 transition-colors"
                    title="Enlarge graphic"
                    aria-label="Enlarge graphic"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 text-xs text-neutral-400 leading-relaxed font-mono">
                Designed for high-contrast social feeds: stark negative space and geometric clarity to stop the thumb.
              </div>
            </div>

            {/* Right: Coordinated 3-Slide Interactive Carousel */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-10 shadow-xl min-h-[420px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Top of Slide Card */}
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                    <span className="text-xs font-mono tracking-wider text-lime-400 uppercase">
                      Slide {currentSlideIndex + 1} of {selectedTopic.slides.length}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {selectedTopic.slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlideIndex(idx)}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === currentSlideIndex
                              ? 'w-6 bg-lime-400'
                              : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Slide Content Rendered Crisp in HTML/CSS */}
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                      {selectedTopic.slides[currentSlideIndex].title}
                    </h3>
                    <p className="text-base text-neutral-300 leading-relaxed pt-2">
                      {selectedTopic.slides[currentSlideIndex].body}
                    </p>
                  </div>
                </div>

                {/* Bottom Principle Highlight Box */}
                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                        Core Takeaway
                      </span>
                      <p className="text-sm font-medium text-white leading-snug">
                        {selectedTopic.slides[currentSlideIndex].takeaway}
                      </p>
                    </div>
                  </div>

                  {/* Carousel Prev / Next Controls */}
                  <div className="flex items-center justify-between mt-6 pt-2">
                    <button
                      onClick={handlePrevSlide}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous Slide</span>
                    </button>
                    <span className="text-xs font-mono text-neutral-400">
                      {currentSlideIndex + 1} / {selectedTopic.slides.length}
                    </span>
                    <button
                      onClick={handleNextSlide}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-lime-400 hover:text-neutral-950 text-white text-xs font-medium transition-colors"
                    >
                      <span>Next Slide</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Social Media Previews: Instagram vs. X (Twitter) Feed Mockups */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
                Multi-Platform Distribution
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Sample Social Media Previews
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Examining how ideas translate into native platform formats. Toggle between visual Instagram cards and text-forward X threads below.
              </p>
            </div>

            {/* Toggle Platform Buttons */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800 self-start md:self-auto">
              <button
                onClick={() => setActivePlatformPreview('instagram')}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                  activePlatformPreview === 'instagram'
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Instagram Carousel View
              </button>
              <button
                onClick={() => setActivePlatformPreview('x')}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                  activePlatformPreview === 'x'
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                X (Twitter) Thread View
              </button>
            </div>
          </div>

          {/* Social Post Mockup Container */}
          <div className="max-w-2xl mx-auto">
            
            {activePlatformPreview === 'instagram' ? (
              /* Instagram Post Mockup */
              <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 overflow-hidden shadow-2xl">
                
                {/* Account Header */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-950/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold font-display text-white">
                      UA
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>uzondu_anujulu</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                      </div>
                      <div className="text-[11px] text-neutral-400">Lagos, Nigeria · Original Post</div>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">1/3</span>
                </div>

                {/* Media Aspect */}
                <div className="relative aspect-square bg-black flex items-center justify-center">
                  <img
                    src={selectedTopic.image}
                    alt={selectedTopic.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/80 px-2.5 py-1 rounded text-[11px] font-mono text-white border border-neutral-700">
                    Swipe →
                  </div>
                </div>

                {/* Action Row */}
                <div className="p-4 space-y-3 bg-neutral-950/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleLike(selectedTopic.id)}
                        className={`transition-colors ${likedPosts[selectedTopic.id] ? 'text-red-500' : 'text-neutral-300 hover:text-white'}`}
                        aria-label="Like post"
                      >
                        <Heart className={`w-5 h-5 ${likedPosts[selectedTopic.id] ? 'fill-current' : ''}`} />
                      </button>
                      <button className="text-neutral-300 hover:text-white transition-colors" aria-label="Comment">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button className="text-neutral-300 hover:text-white transition-colors" aria-label="Share">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => toggleBookmark(selectedTopic.id)}
                      className={`transition-colors ${bookmarkedPosts[selectedTopic.id] ? 'text-lime-400' : 'text-neutral-300 hover:text-white'}`}
                      aria-label="Bookmark"
                    >
                      <Bookmark className={`w-5 h-5 ${bookmarkedPosts[selectedTopic.id] ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Fictional Engagement Stats Bar */}
                  <div className="flex items-center justify-between text-xs font-mono pt-1 pb-1 border-b border-neutral-800 text-neutral-300">
                    <span>
                      {likedPosts[selectedTopic.id] ? '2,841' : selectedTopic.postPreview.fictionalStats.likes} likes
                    </span>
                    <span>{selectedTopic.postPreview.fictionalStats.comments} comments</span>
                    <span>{selectedTopic.postPreview.fictionalStats.shares} shares</span>
                    <span>{selectedTopic.postPreview.fictionalStats.views} views</span>
                  </div>

                  {/* Clear Label Disclaimer */}
                  <div className="text-[11px] font-mono text-amber-400/90 bg-amber-950/20 px-2.5 py-1 rounded border border-amber-900/40 text-center">
                    Notice: Illustrative demo metrics — not actual analytics.
                  </div>

                  {/* Post Caption */}
                  <div className="text-xs text-neutral-300 leading-relaxed whitespace-pre-line pt-1">
                    <span className="font-bold text-white mr-1.5">uzondu_anujulu</span>
                    {selectedTopic.postPreview.caption}
                  </div>
                </div>

              </div>
            ) : (
              /* X (Twitter) Thread Mockup */
              <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 shadow-2xl space-y-4">
                
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold font-display text-white">
                      UA
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>Uzondu Anujulu</span>
                        <span className="text-xs text-neutral-400 font-normal">@uzondu_anujulu</span>
                      </div>
                      <div className="text-[11px] text-neutral-400">Operations · Content · Voice</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">1/4</span>
                </div>

                <div className="text-sm text-neutral-200 leading-relaxed whitespace-pre-line pt-1">
                  {selectedTopic.postPreview.caption}
                </div>

                {/* Inline Quote / Attached Graphic */}
                <div className="rounded-xl overflow-hidden border border-neutral-800 bg-black aspect-[16/9] relative">
                  <img
                    src={selectedTopic.image}
                    alt={selectedTopic.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-neutral-300 border border-neutral-700">
                    Graphic Concept: {selectedTopic.category}
                  </div>
                </div>

                {/* Engagement Bar */}
                <div className="pt-2 border-t border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-400 py-1">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-1.5 hover:text-lime-400 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="tabular-nums">{selectedTopic.postPreview.fictionalStats.comments}</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
                        <Repeat className="w-4 h-4" />
                        <span className="tabular-nums">{selectedTopic.postPreview.fictionalStats.shares}</span>
                      </button>
                      <button
                        onClick={() => toggleLike(selectedTopic.id)}
                        className={`flex items-center gap-1.5 transition-colors ${likedPosts[selectedTopic.id] ? 'text-red-500' : 'hover:text-red-400'}`}
                      >
                        <Heart className={`w-4 h-4 ${likedPosts[selectedTopic.id] ? 'fill-current' : ''}`} />
                        <span className="tabular-nums">{selectedTopic.postPreview.fictionalStats.likes}</span>
                      </button>
                    </div>
                    <span className="tabular-nums">{selectedTopic.postPreview.fictionalStats.views} Views</span>
                  </div>

                  {/* Clear Label Disclaimer */}
                  <div className="text-[11px] font-mono text-amber-400/90 bg-amber-950/20 px-2.5 py-1 rounded border border-amber-900/40 text-center">
                    Notice: Illustrative demo metrics — not actual analytics.
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* 5. Navigation Footer to next portfolio */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono text-neutral-400">Next Discipline in Portfolio</span>
            <h3 className="text-xl font-bold font-display text-white">Explore Voiceover Artistry</h3>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('management')}
              className="px-5 py-2.5 rounded-lg border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors"
            >
              Management
            </button>
            <button
              onClick={() => onNavigate('voiceover')}
              className="px-6 py-2.5 rounded-lg bg-white hover:bg-lime-400 text-neutral-950 text-sm font-semibold transition-all inline-flex items-center gap-2"
            >
              <span>View Voiceover Portfolio</span>
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
