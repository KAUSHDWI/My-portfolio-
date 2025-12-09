export interface Project {
  title: string;
  year: string;
  tech: string[];
  description: string;
  category: 'Mobile' | 'Web' | 'Other';
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  year?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}