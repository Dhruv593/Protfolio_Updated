/**
 * Type definitions for Sanity content schema objects
 * Generated from schema definitions
 */

// Base Sanity document interface
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// Hero Section Types
export interface Hero extends SanityDocument {
  _type: 'hero';
  headline: string;
  subheadline: string;
  availability: 'available' | 'busy' | 'leave';
}

// About Section Types
export interface PortableTextBlock {
  _type: 'block';
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'blockquote';
  _key?: string;
  children: {
    _type: 'span';
    marks: string[];
    text: string;
    _key: string;
  }[];
  markDefs?: {
    _type: 'link';
    _key: string;
    href: string;
  }[];
}

export interface About extends SanityDocument {
  _type: 'about';
  bio: PortableTextBlock[];
  currentResearch?: string;
}

// Experience Types
export interface Achievement {
  achievement: string;
  _key: string;
}

export interface Experience extends SanityDocument {
  _type: 'experience';
  company: string;
  role: string;
  startDate: string; // ISO 8601
  endDate?: string; // ISO 8601
  isCurrent: boolean;
  achievements: Achievement[];
  description?: string;
}

// Projects Types
export type TechStackOption =
  | 'python'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nextjs'
  | 'nodejs'
  | 'express'
  | 'mongodb'
  | 'postgresql'
  | 'aws'
  | 'gcp'
  | 'docker'
  | 'pytorch'
  | 'tensorflow'
  | 'ml'
  | 'datascience'
  | 'ai';

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface Project extends SanityDocument {
  _type: 'projects';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: string;
  detailedDescription?: PortableTextBlock[];
  techStack: TechStackOption[];
  image?: SanityImage;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  publishedAt: string; // ISO 8601
}

// Contact Types
export interface Contact extends SanityDocument {
  _type: 'contact';
  email: string;
  linkedinUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  phoneNumber?: string;
}

// Collection types (arrays)
export type Experiences = Experience[];
export type Projects = Project[];

// Query result types
export interface QueryResult<T> {
  data: T;
  isLoading: boolean;
  error?: Error;
}
