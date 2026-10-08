import React, { useState } from 'react';
import { PageId, CrossSkill } from '../types';
import { CROSS_SKILLS } from '../data/portfolioData';
import {
  ArrowLeft,
  Briefcase,
  PenTool,
  Mic,
  MessageSquare,
  Target,
  Shield,
  Search,
  Layers,
  Sparkles,
  ChevronRight,
  SlidersHorizontal,
  Compass
} from 'lucide-react';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(CROSS_SKILLS[0].id);
  const [filterDiscipline, setFilterDiscipline] = useState<'all' | 'operations' | 'content' | 'voiceover'>('all');

  const selectedSkill = CROSS_SKILLS.find((s) => s.id === selectedSkillId) || CROSS_SKILLS[0];

  const renderSkillGraphic = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return (
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-lime-400/5 group-hover:bg-lime-400/10 transition-colors" />
            <div className="flex gap-1 items-end h-7">
              <span className="w-1.5 h-3 bg-neutral-600 rounded-full" />
              <span className="w-1.5 h-6 bg-lime-400 rounded-full" />
              <span className="w-1.5 h-4 bg-neutral-400 rounded-full" />
              <span className="w-1.5 h-7 bg-white rounded-full" />
              <span className="w-1.5 h-2 bg-neutral-500 rounded-full" />
            </div>
          </div>
        );
      case 'Target':
        return (
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative group">
            <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border border-lime-400/80 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-lime-400" />
              </div>
            </div>
            <div className="absolute inset-x-2 top-1/2 h-[1px] bg-neutral-700/50" />
            <div className="absolute inset-y-2 left-1/2 w-[1px] bg-neutral-700/50" />
          </div>
        );
      case 'Shield':
        return (
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative group">
            <div className="relative">
              <Shield className="w-8 h-8 text-neutral-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-lime-400 absolute top-2 right-2 border-2 border-neutral-900" />
            </div>
          </div>
        );
      case 'Search':
        return (
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative group">
            <div className="w-8 h-8 rounded-full border-2 border-neutral-500 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-lime-400" />
            </div>
            <div className="w-3 h-0.5 bg-neutral-400 absolute bottom-4 right-4 rotate-45" />
          </div>
        );
      case 'Layers':
        return (
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative group">
            <div className="space-y-1 w-8">
              <div className="h-1.5 bg-white rounded-sm w-full" />
              <div className="h-1.5 bg-neutral-400 rounded-sm w-4/5" />
              <div className="h-1.5 bg-lime-400 rounded-sm w-full" />
              <div className="h-1.5 bg-neutral-600 rounded-sm w-3/5" />
            </div>
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative group">
            <Sparkles className="w-7 h-7 text-lime-400" />
          </div>
        );
    }
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400">
                <span>The Transversal Architecture</span>
                <span aria-hidden="true">·</span>
                <span>Cross-Disciplinary Synergies</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
                Skills Across Disciplines: <br />
                The Connective Tissue
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed pt-2">
                Specialization creates silos; cross-disciplinary integration creates leverage. Communication, attention to detail, leadership, research, organization, and creativity do not belong to one title—they multiply effectiveness across manufacturing, writing, and vocal delivery.
              </p>
            </div>

            {/* Matrix View Filter */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider block">
                Discipline Perspective Lens
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setFilterDiscipline('all')}
                  className={`px-3 py-2 rounded-lg border text-left transition-colors ${filterDiscipline === 'all' ? 'bg-neutral-800 text-lime-400 border-lime-400 font-semibold' : 'border-neutral-800 text-neutral-400 hover:text-white'}`}
                >
                  All 3 Roles Unified
                </button>
                <button
                  onClick={() => setFilterDiscipline('operations')}
                  className={`px-3 py-2 rounded-lg border text-left transition-colors ${filterDiscipline === 'operations' ? 'bg-neutral-800 text-lime-400 border-lime-400 font-semibold' : 'border-neutral-800 text-neutral-400 hover:text-white'}`}
                >
                  Operations Lens
                </button>
                <button
                  onClick={() => setFilterDiscipline('content')}
                  className={`px-3 py-2 rounded-lg border text-left transition-colors ${filterDiscipline === 'content' ? 'bg-neutral-800 text-lime-400 border-lime-400 font-semibold' : 'border-neutral-800 text-neutral-400 hover:text-white'}`}
                >
                  Content Lens
                </button>
                <button
                  onClick={() => setFilterDiscipline('voiceover')}
                  className={`px-3 py-2 rounded-lg border text-left transition-colors ${filterDiscipline === 'voiceover' ? 'bg-neutral-800 text-lime-400 border-lime-400 font-semibold' : 'border-neutral-800 text-neutral-400 hover:text-white'}`}
                >
                  Voiceover Lens
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive Matrix Selector */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {CROSS_SKILLS.map((skill) => {
              const isSelected = skill.id === selectedSkillId;
              return (
                <button
                  key={skill.id}
                  onClick={() => setSelectedSkillId(skill.id)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[120px] ${
                    isSelected
                      ? 'bg-neutral-900 border-lime-400 text-white shadow-lg'
                      : 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-lime-400 uppercase">
                      Skill #{CROSS_SKILLS.indexOf(skill) + 1}
                    </span>
                  </div>
                  <div className="text-sm font-semibold font-display text-white mt-2 leading-tight">
                    {skill.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Skill Deep-Dive Showcase */}
          <div className="rounded-3xl bg-neutral-900/40 border border-neutral-800 p-8 sm:p-12 shadow-2xl">
            
            {/* Top Skill Identity Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-neutral-800 gap-6">
              <div className="flex items-center gap-5">
                {renderSkillGraphic(selectedSkill.iconName)}
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block mb-1">
                    Transversal Capability
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
                    {selectedSkill.name}
                  </h2>
                  <p className="text-sm text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                    {selectedSkill.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* 3-Way Cross-Disciplinary Activation Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
              
              {/* Operations Column */}
              {(filterDiscipline === 'all' || filterDiscipline === 'operations') && (
                <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-900 text-white border border-neutral-800">
                      <Briefcase className="w-4 h-4 text-lime-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
                        Management & Operations
                      </h4>
                      <span className="text-[11px] text-neutral-400">At Lords Stan Concept</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                    {selectedSkill.inOperations}
                  </p>
                  <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                    Yields: Zero machine jams · Precise cost control
                  </div>
                </div>
              )}

              {/* Content Creation Column */}
              {(filterDiscipline === 'all' || filterDiscipline === 'content') && (
                <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-900 text-white border border-neutral-800">
                      <PenTool className="w-4 h-4 text-lime-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
                        Content Creation
                      </h4>
                      <span className="text-[11px] text-neutral-400">Media & Frameworks</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                    {selectedSkill.inContent}
                  </p>
                  <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                    Yields: High retention · Actionable mental models
                  </div>
                </div>
              )}

              {/* Voiceover Column */}
              {(filterDiscipline === 'all' || filterDiscipline === 'voiceover') && (
                <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-900 text-white border border-neutral-800">
                      <Mic className="w-4 h-4 text-lime-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
                        Voiceover Artistry
                      </h4>
                      <span className="text-[11px] text-neutral-400">Studio & Performance</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                    {selectedSkill.inVoiceover}
                  </p>
                  <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                    Yields: Emotional resonance · Trustworthy authority
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 3. Value Creation Matrix for Employers & Clients */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
              Value Equation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              How This Multidisciplinary Triad Creates Value
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Why hiring or collaborating with a professional fluent in operations, narrative architecture, and vocal delivery delivers disproportionate results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono text-lime-400">01. For Manufacturing & Operations</span>
              <h3 className="text-lg font-bold font-display text-white">Clearer Executive Leadership</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Most operational managers lack narrative polish. Because I write and speak publicly, I communicate production targets, safety standards, and client briefs with infectious clarity, avoiding costly miscommunications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono text-lime-400">02. For Content & Brand Partnerships</span>
              <h3 className="text-lg font-bold font-display text-white">Tested, Real-World Credibility</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                My content isn’t recycled internet platitudes. It is backed by daily operational responsibility managing real factory workers, suppliers, and deadlines. That authenticity resonates deeply with readers and partners.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono text-lime-400">03. For Commercial Voiceover Clients</span>
              <h3 className="text-lg font-bold font-display text-white">Nuanced Copy Interpretation</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                As an experienced writer and business manager, I don't just read words off a page—I grasp the marketing intention and underlying business objective behind the script, requiring fewer revision rounds.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Navigation Footer */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono text-neutral-400">Final Step</span>
            <h3 className="text-xl font-bold font-display text-white">Get in Touch with Uzondu</h3>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('home')}
              className="px-5 py-2.5 rounded-lg border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 rounded-lg bg-white hover:bg-lime-400 text-neutral-950 text-sm font-semibold transition-all inline-flex items-center gap-2"
            >
              <span>Initiate Contact</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
