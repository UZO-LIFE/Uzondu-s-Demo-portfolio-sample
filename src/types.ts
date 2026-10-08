export type PageId = 'home' | 'management' | 'content' | 'voiceover' | 'skills' | 'contact';

export interface PackagingStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  materialDetails: string[];
  responsibilities: string[];
  qualityMetrics: string;
}

export interface ContentTopic {
  id: string;
  title: string;
  category: string;
  image: string;
  hook: string;
  slides: {
    title: string;
    body: string;
    takeaway: string;
  }[];
  postPreview: {
    platform: 'instagram' | 'x';
    caption: string;
    fictionalStats: {
      likes: string;
      comments: string;
      shares: string;
      views: string;
    };
  };
}

export interface VoiceoverCategory {
  id: string;
  title: string;
  tagline: string;
  tone: string;
  useCases: string[];
  pacing: string;
  sampleScript: string;
  duration: string;
}

export interface CrossSkill {
  id: string;
  name: string;
  tagline: string;
  inOperations: string;
  inContent: string;
  inVoiceover: string;
  iconName: string;
}
