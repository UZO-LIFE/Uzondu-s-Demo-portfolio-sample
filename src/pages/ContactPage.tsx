import React, { useState } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowLeft,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  Briefcase,
  PenTool,
  Mic,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'packaging-operations',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || formData.inquiryType}`);
    const body = encodeURIComponent(`Hi Uzondu,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full">
      {/* 1. Header */}
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

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400">
              <span>Direct Communication Channel</span>
              <span aria-hidden="true">·</span>
              <span>Lagos, Nigeria</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
              Initiate a Conversation
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed pt-2">
              Whether you are looking to optimize manufacturing workflows, source custom packaging solutions, commission high-impact content, or book voiceover sessions, feel free to reach out.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 bg-neutral-950/70 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Info & Social Link Placeholders */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Email Card */}
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-lime-400 block">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                    <span className="text-sm font-mono text-white truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email to clipboard"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-xs text-lime-400 font-mono block">
                    ✓ Copied to clipboard!
                  </span>
                )}
                <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-lime-400" />
                  <span>Base Location: {PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Inquiry Pathways */}
              <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-white block">
                  Typical Collaboration Scopes
                </span>
                
                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-900">
                    <Briefcase className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Packaging Operations & Production</strong>
                      <span className="text-neutral-400">Turnkey FBB & chipboard carton manufacturing, dieline reviews, factory supervision at Lords Stan Concept.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-900">
                    <PenTool className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Content & Thought Leadership</strong>
                      <span className="text-neutral-400">Writing collaborations on financial literacy, compounding, productivity systems, and corporate training.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-900">
                    <Mic className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Voiceover Artistry & Audio Production</strong>
                      <span className="text-neutral-400">Commercial ads, corporate narration, documentaries, e-learning masterclasses, and custom reads.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Link Placeholders */}
              <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-white block">
                  Social Channels (Placeholders)
                </span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Links configured for official profiles. Replace with custom verified handles anytime.
                </p>
                <div className="flex flex-col gap-2 pt-1 text-xs">
                  <a
                    href={PERSONAL_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span>LinkedIn / Uzondu Anujulu</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socialLinks.x}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span>X (Twitter) / @uzondu_anujulu</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span>Instagram / @uzondu_anujulu</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Functional Message Submission Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-neutral-900/60 border border-neutral-800 p-8 sm:p-10 shadow-2xl">
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      Message Prepared Successfully!
                    </h3>
                    <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}. Your inquiry regarding{' '}
                      <span className="text-lime-400 font-mono">{formData.inquiryType}</span> has been logged.
                    </p>
                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleMailtoDirect}
                        className="px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 font-semibold text-xs transition-colors inline-flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send Direct Email Copy</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', inquiryType: 'packaging-operations', subject: '', message: '' });
                        }}
                        className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold font-display text-white">
                        Send a Message
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        Responses are typically delivered within 24–48 hours.
                      </p>
                    </div>

                    {/* Inquiry Type Radio / Selector */}
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-2">
                        Primary Discipline Area *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          { id: 'packaging-operations', label: 'Packaging Operations' },
                          { id: 'content-creation', label: 'Content Writing' },
                          { id: 'voiceover-audition', label: 'Voiceover Booking' },
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, inquiryType: item.id })}
                            className={`p-3 rounded-xl border text-xs font-medium text-left transition-colors ${
                              formData.inquiryType === item.id
                                ? 'bg-neutral-800 border-lime-400 text-lime-400 font-semibold'
                                : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-lime-400 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-lime-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject Line */}
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-1.5">
                        Subject Line *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Turnkey folding carton production run of 50,000 units"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-lime-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Detailed Message Body */}
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block mb-1.5">
                        Project Scope or Message Details *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Outline project specifications, target delivery timeline, substrate considerations, or voiceover script details..."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-lime-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submission Action */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <button
                        type="button"
                        onClick={handleMailtoDirect}
                        className="text-xs text-neutral-400 hover:text-white font-mono flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-lime-400" />
                        <span>Or open in default mail client</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-lime-400 text-neutral-950 font-semibold rounded-xl text-sm transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-lime-400/20 active:scale-95 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Dispatching...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
