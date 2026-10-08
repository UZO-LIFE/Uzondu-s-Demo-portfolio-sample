import React, { useState } from 'react';
import { PageId, PackagingStep } from '../types';
import { PACKAGING_STEPS, PERSONAL_INFO } from '../data/portfolioData';
import { ImageModal } from '../components/ImageModal';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Layers,
  Printer,
  Scissors,
  PackageCheck,
  ShieldAlert,
  Clock,
  TrendingDown,
  Award,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface ManagementPageProps {
  onNavigate: (page: PageId) => void;
}

export const ManagementPage: React.FC<ManagementPageProps> = ({ onNavigate }) => {
  const [activeStepId, setActiveStepId] = useState<string>(PACKAGING_STEPS[0].id);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; title: string; caption: string } | null>(null);

  const activeStep = PACKAGING_STEPS.find((s) => s.id === activeStepId) || PACKAGING_STEPS[0];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Layers className="w-5 h-5" />;
      case 1: return <Printer className="w-5 h-5" />;
      case 2: return <Scissors className="w-5 h-5" />;
      default: return <PackageCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full">
      {/* 1. Header / Breadcrumb & Hero */}
      <section className="relative border-b border-neutral-900 bg-neutral-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb back */}
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
                <span>Executive Operations Portfolio</span>
                <span aria-hidden="true">·</span>
                <span>Lords Stan Concept</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
                General Manager, <br />
                Packaging Production
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed pt-2">
                Orchestrating end-to-end industrial packaging operations at Lords Stan Concept: transforming raw paperboard substrates into precision-engineered retail folding cartons and structural packages. Emphasizing client requirement scoping, technical material sourcing, zero-defect prepress printing, steel-rule die-cutting, and rigorous batch quality assurance.
              </p>
            </div>

            {/* Quick Operational Metrics */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider block">
                Operational Scope at a Glance
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold font-display text-white tabular-nums">
                    FBB & Chip
                  </div>
                  <div className="text-xs text-neutral-400">Primary Substrates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-display text-lime-400 tabular-nums">
                    ±0.3mm
                  </div>
                  <div className="text-xs text-neutral-400">Die-Cut Tolerance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-display text-white tabular-nums">
                    End-to-End
                  </div>
                  <div className="text-xs text-neutral-400">Workflow Supervision</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-display text-white tabular-nums">
                    100% QC
                  </div>
                  <div className="text-xs text-neutral-400">Batch Inspection</div>
                </div>
              </div>
            </div>
          </div>

          {/* Ethical Disclaimer Banner */}
          <div className="mt-10 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 flex items-start gap-3 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-neutral-300">Notice of Representation:</strong> The photography on this page showcases the technical workflow stages supervised at Lords Stan Concept (Material Sourcing, Offset Printing, Die-Cutting, and Quality Packaging). These images serve as high-fidelity illustrative representations of industrial packaging practices and are not proprietary photographs of client packaging or the company's private facility.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Interactive Packaging Production Workflow Pipeline */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950/70" id="workflow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
              Supervised Production Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Four Stages of Packaging Manufacturing
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Click through the interactive workflow stages below to examine how raw substrates are sourced, printed, precision-cut, and quality-cleared under my supervision.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {PACKAGING_STEPS.map((step, idx) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`p-4 sm:p-5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[110px] ${
                    isActive
                      ? 'bg-neutral-900 border-lime-400 text-white shadow-lg'
                      : 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-mono font-bold tracking-wider text-lime-400">
                      STAGE {step.number}
                    </span>
                    <div className={`p-1.5 rounded-lg ${isActive ? 'text-lime-400 bg-neutral-800' : 'text-neutral-500'}`}>
                      {getStepIcon(idx)}
                    </div>
                  </div>
                  <div className="text-sm font-semibold font-display line-clamp-1 mt-2 text-white">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Container */}
          <div className="rounded-3xl bg-neutral-900/40 border border-neutral-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Media Viewport */}
              <div className="lg:col-span-6 relative bg-black flex items-center justify-center min-h-[380px] lg:min-h-[500px] group">
                <img
                  src={activeStep.image}
                  alt={activeStep.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20" />
                
                {/* Floating Image Inspector Button */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-neutral-300 border border-neutral-700">
                    Stage {activeStep.number} · {activeStep.subtitle}
                  </span>
                  <button
                    onClick={() => setModalImage({
                      src: activeStep.image,
                      alt: activeStep.title,
                      title: `Stage ${activeStep.number}: ${activeStep.title}`,
                      caption: activeStep.subtitle
                    })}
                    className="p-2.5 bg-black/80 hover:bg-neutral-800 text-white rounded-lg border border-neutral-700 transition-colors shadow-lg"
                    title="Inspect high resolution image"
                    aria-label="Inspect high resolution image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Technical Specifications & Operational Narrative */}
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400">
                      <span>Production Stage {activeStep.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>Lords Stan Concept</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                      {activeStep.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 font-mono">
                      {activeStep.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {activeStep.description}
                  </p>

                  {/* Substrate & Material Nuances */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white font-mono block">
                      Substrate & Mechanical Specs:
                    </span>
                    <ul className="space-y-2">
                      {activeStep.materialDetails.map((detail, i) => (
                        <li key={i} className="text-xs sm:text-sm text-neutral-400 flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Supervision Responsibilities */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white font-mono block">
                      General Manager Responsibilities:
                    </span>
                    <ul className="space-y-2">
                      {activeStep.responsibilities.map((resp, i) => (
                        <li key={i} className="text-xs sm:text-sm text-neutral-400 flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quality Metric Bar */}
                <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-neutral-400 uppercase font-mono block text-[10px]">Quality Standard</span>
                    <span className="text-white font-medium">{activeStep.qualityMetrics}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Deep-Dive: Material Chemistry — FBB vs Chipboard */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
              Material Engineering & Selection
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Understanding Substrates: FBB vs. Chipboard
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              One of my primary roles as General Manager is steering clients away from costly material mismatches. Sourcing the right packaging card dictates folding integrity, print brilliance, and total cost of production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* FBB Box */}
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-display text-white">
                  Folding Box Board (FBB)
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-800 text-lime-400 border border-neutral-700">
                  250 – 400 GSM
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                FBB comprises middle layers of mechanical pulp sandwiched between double-coated chemical bleached virgin pulp. The coated surface yields exceptional ink holdout, allowing razor-sharp halftone dots, photographic fidelity, and micro-embossing without surface rupture.
              </p>
              <div className="space-y-3 pt-2 text-xs text-neutral-400">
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                  <span>Surface Coating</span>
                  <span className="text-white font-mono">Double mineral coated top</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                  <span>Best Suited For</span>
                  <span className="text-white">Pharmaceuticals, Cosmetics, High-End Retail</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                  <span>Folding Crease Behavior</span>
                  <span className="text-white">High flexibility, zero edge white crack</span>
                </div>
              </div>
            </div>

            {/* Chipboard Box */}
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-display text-white">
                  Chipboard (Greyback / Whiteback)
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-800 text-lime-400 border border-neutral-700">
                  300 – 600 GSM
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Made from dense recycled fiber pulps, chipboard provides structural stiffness and crush resistance at an economical price point. Ideal for heavy consumer goods, rigid presentation box cores, and secondary distribution packaging.
              </p>
              <div className="space-y-3 pt-2 text-xs text-neutral-400">
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                  <span>Substrate Density</span>
                  <span className="text-white font-mono">High bulk, maximum rigidity</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                  <span>Best Suited For</span>
                  <span className="text-white">Hardware, Dry Food, Outer Cartons, Rigid Cores</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                  <span>Scoring Consideration</span>
                  <span className="text-white">Requires wider creasing channels to avoid delamination</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Leadership & Factory Floor Crisis Resolution */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
              Leadership & Problem-Solving Case Study
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Calm Decision-Making Under Production Pressure
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              A general manager's value is proved not when machinery runs smoothly, but when unforeseen bottlenecks threaten tight shipping commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-4">
              <div className="p-3 w-fit rounded-xl bg-neutral-800 text-lime-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                01. The Bottleneck: Humidity & Register Shift
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                During a high-volume festive print campaign, sudden ambient humidity spikes caused paperboard edges to absorb moisture, creating a 0.8mm register drift between printing and die-cut creases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-4">
              <div className="p-3 w-fit rounded-xl bg-neutral-800 text-lime-400">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                02. The Intervention: Real-time Re-calibration
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Halted the automated die-cutter immediately before material was compromised. Adjusted pressroom airflow, re-conditioned stacked sheets under shrink wrapping, and fine-tuned steel die registration margins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-4">
              <div className="p-3 w-fit rounded-xl bg-neutral-800 text-lime-400">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                03. The Outcome: Zero Client Discard
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Rescued 99.2% of the total print volume, delivered all 85,000 retail cartons within the client’s scheduled distribution window, and standardized pre-cut moisture inspection protocols for future runs.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Navigation Footer to other portfolios */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono text-neutral-400">Next Discipline in Portfolio</span>
            <h3 className="text-xl font-bold font-display text-white">Explore Content Creation</h3>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('home')}
              className="px-5 py-2.5 rounded-lg border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('content')}
              className="px-6 py-2.5 rounded-lg bg-white hover:bg-lime-400 text-neutral-950 text-sm font-semibold transition-all inline-flex items-center gap-2"
            >
              <span>View Content Creation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
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
