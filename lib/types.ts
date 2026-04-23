// Portfolio Data Types

export interface HeroData {
  _id?: string;
  headline: string;
  subheadline: string;
  availability?: 'available' | 'busy' | 'leave';
}

export interface AboutData {
  _id?: string;
  title?: string;
  bio: string;
  skills?: string[];
}

export interface ExperienceData {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description?: string;
  achievements?: Array<{ achievement?: string }>;
}

export interface ProjectData {
  _id: string;
  title: string;
  slug?: { current: string };
  description: string;
  detailedDescription?: any[];
  techStack?: string[];
  image?: any;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactData {
  _id?: string;
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
}

export interface PortfolioDataResponse {
  hero?: HeroData;
  about?: AboutData;
  experience?: ExperienceData[];
  projects?: ProjectData[];
  contact?: ContactData;
}
