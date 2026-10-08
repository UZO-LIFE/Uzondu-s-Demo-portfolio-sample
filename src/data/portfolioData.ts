import { PackagingStep, ContentTopic, VoiceoverCategory, CrossSkill } from '../types';

export const PERSONAL_INFO = {
  name: "Uzondu Anujulu",
  roleHeadline: "Operations Leader · Content Creator · Voiceover Artist",
  tagline: "Bridging operational rigor, thoughtful narrative creation, and vocal storytelling.",
  email: "anujuluuzondu@gmail.com",
  location: "Lagos, Nigeria",
  currentRole: "General Manager at Lords Stan Concept",
  aboutSummary: `I operate at the intersection of systematic execution, compelling ideas, and expressive communication. As General Manager at Lords Stan Concept, I direct complex packaging production pipelines from raw substrate procurement to pristine finished cartons. As a content creator, I deconstruct financial principles, personal discipline, and human psychology to spark meaningful behavior change. As a voiceover artist, I bring warmth, authority, and emotional resonance to narratives. While these roles appear diverse on the surface, they are powered by the exact same core engine: obsessive attention to detail, structured clarity, and a passion for turning complex concepts into tangible, high-value outcomes.`,
  socialLinks: {
    linkedin: "https://linkedin.com/in/uzondu-anujulu",
    x: "https://x.com/uzondu_anujulu",
    instagram: "https://instagram.com/uzondu_anujulu",
    youtube: "https://youtube.com/@uzonduanujulu",
  }
};

export const PACKAGING_STEPS: PackagingStep[] = [
  {
    id: "material-sourcing",
    number: "01",
    title: "Substrate & Material Engineering",
    subtitle: "Precision Material Selection & Supplier Procurement",
    image: "/images/packaging-materials.png",
    description: "Every durable packaging structure begins with the right card chemistry. I analyze client product weight, shelf durability, humidity sensitivity, and unboxing tactile expectations to engineer the ideal paperboard specification.",
    materialDetails: [
      "Folding Box Board (FBB): 250–400 GSM virgin fiber board with multi-coated virgin pulp surface for ultra-sharp offset reproduction and food/cosmetic grade safety.",
      "Greyback & Whiteback Chipboard: 300–600 GSM recycled rigid substrates selected for structural rigidity, transport crush-resistance, and cost efficiency.",
      "Kraft & Bleached Boards: Specially evaluated for tear resistance, grain direction alignment, and folding endurance."
    ],
    responsibilities: [
      "Conducting substrate tensile and caliper testing prior to bulk reel procurement.",
      "Auditing supplier sheet flatness and moisture levels to eliminate press jams.",
      "Optimizing sheet yield and nesting layouts to cut material waste by up to 18%."
    ],
    qualityMetrics: "Zero substrate delamination · Optimal grain orientation along primary fold axes"
  },
  {
    id: "printing-prepress",
    number: "02",
    title: "Prepress & Precision Offset Printing",
    subtitle: "Color Accuracy, Dieline Registration & Print Run Coordination",
    image: "/images/packaging-printing.png",
    description: "Transforming approved artwork into flawless physical print runs. I bridge client brand design requirements with mechanical press limitations, overseeing ink viscosity, color calibration, and registration fidelity.",
    materialDetails: [
      "Process & Spot Color Matching: Direct Pantone matching and CMYK color consistency monitoring across multi-thousand unit runs.",
      "Coatings & Varnishes: Application of aqueous gloss, matte finishes, and spot UV varnishes to protect print surfaces from transit scuffing.",
      "Trapping & Bleed Scrutiny: Micro-alignment inspection to prevent white gap leaks on die-cut fold edges."
    ],
    responsibilities: [
      "Sign-off on initial prepress digital proofs and aluminum CTP plate generation.",
      "Press-side color approval during first-sheet pull tests under standardized D50 lighting.",
      "Managing production schedules across high-speed industrial sheet-fed offset presses."
    ],
    qualityMetrics: "ΔE color variance strictly within ISO tolerances · Crisp micro-typography legibility"
  },
  {
    id: "die-cutting-shaping",
    number: "03",
    title: "Die-Cutting, Creasing & Structural Shaping",
    subtitle: "Laser-Steel Tooling, Scoring Precision & Clean Stripping",
    image: "/images/packaging-die-cutting.png",
    description: "The mechanical heart of packaging production. Flat printed sheets are transformed into fold-ready carton blanks using customized steel-rule dies, matrix channels, and hydraulic stamping pressure.",
    materialDetails: [
      "Creasing Channel Calibration: Ensuring crease depth and width correspond accurately to card thickness (FBB vs rigid chipboard) to eliminate cracking.",
      "Stripping & Waste Extraction: Clean edge separation removing surrounding matrix waste without damaging internal carton tabs.",
      "Embossing & Debossing Integration: Simultaneous tactile branding impression aligned with printed graphics."
    ],
    responsibilities: [
      "Verifying structural dieline drawings with sample plotter cutting before steel die fabrication.",
      "Fine-tuning cylinder stamping pressure to protect substrate coatings while achieving 100% clean through-cuts.",
      "Managing operator teams and shift handovers on die-cutting machinery."
    ],
    qualityMetrics: "Sub-millimeter dimension tolerance (±0.3mm) · Zero fibre cracking along scored hinges"
  },
  {
    id: "folding-gluing-qc",
    number: "04",
    title: "Folding, Gluing & Final Quality Assurance",
    subtitle: "Automated Gluing, Carton Erection & Rigorous Inspection",
    image: "/images/finished-packaging.png",
    description: "The final barrier before distribution. Carton blanks are folded along creases, secured with industrial adhesives, inspected batch by batch, and packed in moisture-shielded master cartons for client delivery.",
    materialDetails: [
      "Adhesive Formulation: High-tack cold emulsions and hot-melt adhesives engineered for coated board surfaces.",
      "Lock-Bottom & Crash-Lock Boxes: Testing quick-erect cartons for load bearing and bottom pop-open resistance.",
      "Bundling & Palletization: Shrink-wrapped palletizing with desiccant protection against humidity shifts."
    ],
    responsibilities: [
      "Conducting random 100-unit batch sampling for joint adhesion and squareness.",
      "Managing client logistics, dispatch timetables, and on-site delivery sign-offs.",
      "Leading post-production retrospective reviews to institutionalize process efficiencies."
    ],
    qualityMetrics: "100% glue seam integrity · On-time delivery rate exceeding 98.4%"
  }
];

export const CONTENT_TOPICS: ContentTopic[] = [
  {
    id: "financial-literacy",
    title: "The Math of Wealth Building & Asymmetric Growth",
    category: "Financial Literacy & Wealth",
    image: "/images/content-financial-literacy.png",
    hook: "Most people view money as a tool for consumption. High net-worth thinkers view money as deployed capital units working 24/7.",
    slides: [
      {
        title: "Slide 1: Income is Defense, Capital is Offense",
        body: "A high salary pays for lifestyle maintenance. Only retained capital that buys compounding assets can buy sovereign freedom. If 100% of your energy is spent earning linear hourly wages, you remain tethered to the treadmill regardless of the figure.",
        takeaway: "Principle: Focus on expanding the gap between income and expenditure, then deploy the surplus relentlessly."
      },
      {
        title: "Slide 2: The Silent Leak: Lifestyle Creep",
        body: "When earnings jump by 40%, expenses quietly inflate by 45%. The luxury car or upscale apartment isn't a reward; it is an ongoing recurring operational cost that demands your continuous labor to feed.",
        takeaway: "Principle: Freeze your baseline living expenses for 18 months following every promotion or windfall."
      },
      {
        title: "Slide 3: Compounding Requires Survival",
        body: "The superpower of compound interest isn't the percentage rate—it's uninterrupted duration. If an emergency forces you to liquidate assets at market troughs, the compounding curve breaks. Liquidity guarantees continuity.",
        takeaway: "Action: Maintain an impenetrable 6-month liquid cushion before hunting high-risk speculative returns."
      }
    ],
    postPreview: {
      platform: "instagram",
      caption: "You don't need a finance degree to build wealth. You need emotional regulation when your income rises. Here is the 3-step capital retention playbook I practice and share with clients and readers.\n\nSave this for your monthly financial review. 📊\n\n#WealthBuilding #PersonalFinance #FinancialDiscipline #AssetAllocation",
      fictionalStats: {
        likes: "2,840",
        comments: "142",
        shares: "689",
        views: "44.2K"
      }
    }
  },
  {
    id: "discipline-routine",
    title: "Rigor Over Motivation: The Architecture of Daily Execution",
    category: "Discipline & Productivity",
    image: "/images/content-discipline.png",
    hook: "Motivation is an emotional weather pattern. Discipline is an engineered factory floor.",
    slides: [
      {
        title: "Slide 1: Remove Decision Friction",
        body: "Willpower depletes with every micro-decision. When high performers succeed, it's rarely superhuman grit; it is the deliberate elimination of low-value choices before 9 AM.",
        takeaway: "Principle: Standardize your morning setup the previous evening. Make the productive choice the default path."
      },
      {
        title: "Slide 2: The Two-Minute Initiation Threshold",
        body: "The human mind magnifies task difficulty when static. Once physical motion begins, psychological resistance drops by over 80%. Don't commit to running 10 kilometers; commit to tying your laces.",
        takeaway: "Principle: Measure yourself solely on starting, not on feeling inspired."
      },
      {
        title: "Slide 3: Non-Negotiable Standards",
        body: "Amateurs wait until they are in the mood. Professionals honor their commitments to themselves regardless of environmental friction or mental resistance.",
        takeaway: "Principle: Respect for your own word is the foundation of genuine self-esteem."
      }
    ],
    postPreview: {
      platform: "x",
      caption: "Motivation lasts 72 hours at best. Systems survive for decades.\n\nIf you rely on 'feeling like it' to execute on your key projects, you have already surrendered control of your outcomes.\n\nBuild the schedule, seal the leaks, execute the reps.",
      fictionalStats: {
        likes: "1,520",
        comments: "88",
        shares: "410",
        views: "31.8K"
      }
    }
  },
  {
    id: "personal-development",
    title: "Taking Deliberate Action in Uncertain Climates",
    category: "Personal Development",
    image: "/images/content-personal-development.png",
    hook: "Overthinking is frequently procrastination wearing an intellectual disguise.",
    slides: [
      {
        title: "Slide 1: Information Without Action is Noise",
        body: "Consuming ten books on management does not teach you how to resolve an interpersonal crisis on a factory floor. Real wisdom is born at the contact point between theory and direct execution.",
        takeaway: "Principle: Cap information intake at 30% and allocate 70% to testing and doing."
      },
      {
        title: "Slide 2: Failure is Merely Diagnostic Data",
        body: "In production, an imperfect print sheet tells you exactly which roller valve needs tightening. In life, a failed launch or rejected proposal tells you what to adjust—not that you should quit.",
        takeaway: "Principle: Treat every setback as operational feedback rather than an emotional verdict."
      },
      {
        title: "Slide 3: The 1% Daily Compound Iteration",
        body: "Grand overnight breakthroughs are an optical illusion. Mastercraft comes from tiny, relentless micro-improvements sustained over years until the gap between you and the average becomes insurmountable.",
        takeaway: "Principle: Focus on refining the smallest unit of your daily work."
      }
    ],
    postPreview: {
      platform: "instagram",
      caption: "Stop waiting for absolute certainty before you begin. Certainty is an after-effect of momentum, not a prerequisite. What is one high-leverage decision you've been delaying this week?\n\nTake the first irreversible step today. 🚀\n\n#PersonalGrowth #ActionBias #LeadershipMindset",
      fictionalStats: {
        likes: "3,110",
        comments: "219",
        shares: "870",
        views: "52.6K"
      }
    }
  },
  {
    id: "relationships-boundaries",
    title: "Emotional Boundaries & Social Psychology in Modern Life",
    category: "Relationships & Psychology",
    image: "/images/content-relationships.png",
    hook: "A boundary is not a wall to punish others; it is a clear perimeter that preserves your capacity to love and lead.",
    slides: [
      {
        title: "Slide 1: The Cost of Chronic People-Pleasing",
        body: "When you say yes to avoid momentary awkwardness, you say no to your health, your long-term focus, and your inner peace. False harmony is a high-interest debt that eventually bankrupts relationships.",
        takeaway: "Principle: Honest friction today is far healthier than repressed resentment tomorrow."
      },
      {
        title: "Slide 2: Separate the Person from the Dynamic",
        body: "Most interpersonal friction in business and personal relationships is structural rather than malicious. When expectations are unexpressed, conflict is inevitable.",
        takeaway: "Principle: Over-communicate clarity early so nobody has to guess your limits."
      },
      {
        title: "Slide 3: Protecting Your Creative & Mental Energy",
        body: "You cannot pour from an empty vessel. The leaders and creators who endure are those who guard their restorative downtime with the same seriousness they bring to their public duties.",
        takeaway: "Principle: Protecting your peace is a prerequisite for sustained excellence."
      }
    ],
    postPreview: {
      platform: "x",
      caption: "You don't need to explain yourself to people committed to misunderstanding you.\n\nClear boundaries filter out entitlement and create room for genuine reciprocity.\n\nLearn to say a quiet, confident 'No' without offering a paragraph of excuses.",
      fictionalStats: {
        likes: "4,680",
        comments: "340",
        shares: "1,210",
        views: "78.4K"
      }
    }
  },
  {
    id: "life-observations",
    title: "Everyday Observations: Finding Clarity in the Noise",
    category: "Reflective Observations",
    image: "/images/content-life-observations.png",
    hook: "The pace of modern life speeds up our reactions while dulling our perception.",
    slides: [
      {
        title: "Slide 1: The Illusion of Urgency",
        body: "Most notifications that hijack your nervous system do not matter 48 hours later. Learning to distinguish between what is truly consequential and what is merely noisy is the ultimate modern superpower.",
        takeaway: "Principle: Slow down the reflex between stimulus and response."
      },
      {
        title: "Slide 2: Everyday Craftsmanship",
        body: "Whether organizing a warehouse inventory, cutting a video frame, or preparing a simple meal: how you do anything is how you do everything. Dignity lives in unheralded thoroughness.",
        takeaway: "Principle: Find quiet pride in precision that nobody else will ever notice."
      },
      {
        title: "Slide 3: Meaning is Self-Generated",
        body: "Life does not arrive with pre-packaged significance. You infuse meaning into your hours through deliberate choices, deep relationships, and the work you choose to care about.",
        takeaway: "Principle: Stop waiting to be inspired; choose what deserves your devotion."
      }
    ],
    postPreview: {
      platform: "instagram",
      caption: "Walking through the city early this morning reminded me: the world is overwhelmingly loud, but clarity is always quiet.\n\nTake five minutes today to sit with no input, no audio, no feed. Listen to your own thoughts again.\n\n#Mindfulness #ReflectiveLiving #LifeLessons",
      fictionalStats: {
        likes: "2,430",
        comments: "165",
        shares: "530",
        views: "38.9K"
      }
    }
  }
];

export const VOICEOVER_CATEGORIES: VoiceoverCategory[] = [
  {
    id: "commercial-voiceover",
    title: "Commercial & Advertising Voiceover",
    tagline: "Dynamic, persuasive, and brand-defining delivery for TV, radio, and digital campaigns.",
    tone: "Warm, authoritative, premium, confident, engaging",
    useCases: [
      "Television & Online Video Commercials",
      "Automotive, Luxury Goods & Fintech Spots",
      "Social Media Video Ads & Brand Tagline Sign-offs",
      "Promotional Product Launch Trailers"
    ],
    pacing: "Adaptive — from energetic 30-second retail punch to intimate cinematic storytelling",
    sampleScript: "“Precision isn’t just an aspiration; it’s an uncompromising standard. In a world full of shortcuts, we build for the few who notice the difference. Meet the next generation of performance.”",
    duration: "0:30 · 0:60 formats"
  },
  {
    id: "narration-documentary",
    title: "Documentary & Corporate Narration",
    tagline: "Thoughtful, grounded, and articulate narration for complex documentaries and institutional films.",
    tone: "Intelligent, measured, gravitas-filled, resonant, authentic",
    useCases: [
      "Documentaries & Long-Form Cultural Films",
      "Corporate Heritage & Annual Shareholder Overviews",
      "Industrial & Architectural Walkthroughs",
      "Museum Audio Guides & Educational Series"
    ],
    pacing: "Deliberate, rhythmic, breathing space between insights",
    sampleScript: "“Across decades of industrial transformation, the raw foundation remained unchanged: human hands shaping raw material into instruments of purpose. Today, that legacy enters a new chapter.”",
    duration: "2:00 – 15:00 formats"
  },
  {
    id: "conversational-elearning",
    title: "Conversational & E-Learning Narration",
    tagline: "Approachable, relatable, and clear delivery that makes complex topics effortless to grasp.",
    tone: "Friendly, conversational, reassuring, knowledgeable peer",
    useCases: [
      "E-Learning Modules & Masterclass Voice tracks",
      "Tech Explainer Videos & SaaS Product Demos",
      "Audiobooks & Non-Fiction Chapter Readings",
      "Podcast Intros, Outros & Interactive System Prompts"
    ],
    pacing: "Natural conversational flow, empathetic pauses",
    sampleScript: "“Think about the last time you made an impulse purchase. It felt spontaneous, right? But underneath that decision was a subtle psychological trigger engineered days before. Let’s break down how that works.”",
    duration: "1:00 – 5:00 formats"
  }
];

export const CROSS_SKILLS: CrossSkill[] = [
  {
    id: "communication",
    name: "Strategic Communication",
    tagline: "Translating intricate complexity into clear, action-oriented messages across audiences.",
    inOperations: "Aligning clients, graphic designers, machine operators, and delivery drivers with unambiguous technical instructions.",
    inContent: "Distilling dense economic concepts and behavioral psychology into sticky, memorable social threads and carousels.",
    inVoiceover: "Modulating cadence, inflection, and tone to convey exact brand emotion and subconscious trust.",
    iconName: "MessageSquare"
  },
  {
    id: "attention-to-detail",
    name: "Micro & Macro Attention to Detail",
    tagline: "Spotting the millimeter flaw or subtle nuance before it propagates down the pipeline.",
    inOperations: "Detecting paperboard grain misalignment, register drift under magnification, or 0.2mm die-cut score variance.",
    inContent: "Scrutinizing syntax, visual negative space, typography balance, and source accuracy on every single slide.",
    inVoiceover: "Catching minute audio mouth clicks, syllable timing, breath placement, and subtle emotional micro-tones.",
    iconName: "Target"
  },
  {
    id: "leadership",
    name: "Adaptive Leadership & Problem Solving",
    tagline: "Navigating unforeseen bottlenecks with calm composure and decisive intervention.",
    inOperations: "Managing production crunches, resolving machine breakdowns, and keeping cross-functional factory teams motivated.",
    inContent: "Guiding an audience through cognitive dissonance and encouraging uncomfortable yet necessary lifestyle changes.",
    inVoiceover: "Directing collaborative vocal sessions, taking client feedback gracefully, and adjusting reads on the spot.",
    iconName: "Shield"
  },
  {
    id: "research",
    name: "Deep Research & Conceptual Rigor",
    tagline: "Refusing superficial assumptions in favor of first-principles understanding.",
    inOperations: "Investigating paperboard GSM limits, coating chemistry, and cost-yield trade-offs for custom packaging.",
    inContent: "Studying behavioural economics, wealth-building case studies, and cognitive biases before writing.",
    inVoiceover: "Researching target demographics, cultural pronunciations, and brand background prior to voice sessions.",
    iconName: "Search"
  },
  {
    id: "organization",
    name: "Workflow Systems & Process Organization",
    tagline: "Structuring multi-stage pipelines that eliminate chaos and guarantee consistency.",
    inOperations: "Orchestrating raw material supply, press schedules, die-cutting queues, and dispatch fleets on strict deadlines.",
    inContent: "Maintaining disciplined editorial calendars, asset templates, and cross-platform publishing cadences.",
    inVoiceover: "Managing high-fidelity acoustic recording setups, DAW session hierarchies, and organized delivery stems.",
    iconName: "Layers"
  },
  {
    id: "creativity",
    name: "Creative Engineering & Narrative Polish",
    tagline: "Infusing functional utility with aesthetic distinction and compelling storytelling.",
    inOperations: "Devising innovative folding carton mechanisms and premium finishes that stand out on retail shelves.",
    inContent: "Designing visually arresting monochrome carousel layouts with punchy copy hooks.",
    inVoiceover: "Bringing flat written scripts to vivid three-dimensional life through imaginative vocal characterization.",
    iconName: "Sparkles"
  }
];
