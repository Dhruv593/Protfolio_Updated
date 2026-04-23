import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Always fetch fresh data to avoid caching issues
});

// Unified data fetching function - single GROQ query for all sections
export async function getPortfolioData() {
  try {
    const query = `{
      "hero": *[_type == "hero"][0],
      "about": *[_type == "about"][0],
      "experience": *[_type == "experience"] | order(startDate desc),
      "projects": *[_type == "projects"] | order(_createdAt desc),
      "contact": *[_type == "contact"][0]
    }`;

    const data = await client.fetch(query);
    return data || {};
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return {
      hero: null,
      about: null,
      experience: [],
      projects: [],
      contact: null,
    };
  }
}

// Legacy fetch helpers for backward compatibility
export async function getHero() {
  return client.fetch(`*[_type == "hero"][0]`);
}

export async function getAbout() {
  return client.fetch(`*[_type == "about"][0]`);
}

export async function getExperience() {
  return client.fetch(`*[_type == "experience"] | order(startDate desc)`);
}

export async function getProjects() {
  return client.fetch(`*[_type == "projects"] | order(_createdAt desc)`);
}

export async function getProjectBySlug(slug: string) {
  try {
    if (!slug) {
      return null;
    }
    
    const query = `*[_type == "projects" && slug.current == $slug][0]{
      _id,
      title,
      description,
      detailedDescription,
      techStack,
      image,
      githubUrl,
      liveUrl,
      slug,
      _createdAt
    }`;
    
    const result = await client.fetch(query, { slug });
    return result || null;
  } catch (error) {
    console.error('Error fetching project by slug:', slug, error);
    return null;
  }
}

export async function getContact() {
  return client.fetch(`*[_type == "contact"][0]`);
}

export async function fetchFromSanity(query: string, params = {}) {
  return client.fetch(query, params);
}
