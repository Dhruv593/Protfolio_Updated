/**
 * Example component showing how to integrate Sanity data with Next.js
 * This demonstrates server component usage with the query helpers
 */

'use client';

import { useEffect, useState } from 'react';
import { Hero, Project, Experience } from '@/types/sanity.types';
import {
  getHero,
  getProjects,
  getExperience,
  getContact,
} from '@/lib/sanity.client';
import { getOptimizedImageUrl } from '@/lib/sanity.image';

/**
 * Example: Hero Section Component
 * Server Component version (async)
 */
export async function HeroSectionServer() {
  const hero = await getHero();

  if (!hero) {
    return <div>Hero content not configured</div>;
  }

  return (
    <section className="py-20 px-4">
      <h1 className="text-5xl font-bold mb-4">{hero.headline}</h1>
      <p className="text-xl text-gray-600 mb-4">{hero.subheadline}</p>
      <span className={`badge ${hero.availability}`}>{hero.availability}</span>
    </section>
  );
}

/**
 * Example: Featured Projects Component
 * Client Component version with loading state
 */
export function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      const featured = data.filter((p) => p.isFeatured);
      setProjects(featured);
      setIsLoading(false);
    }

    fetchProjects();
  }, []);

  if (isLoading) return <div>Loading projects...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project._id} className="rounded-lg overflow-hidden shadow-lg">
          {project.image && (
            <img
              src={getOptimizedImageUrl(project.image, {
                width: 400,
                height: 250,
              })}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Example: Experience Timeline Component
 */
export function ExperienceTimeline() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function fetchExp() {
      const data = await getExperience();
      setExperiences(data);
    }

    fetchExp();
  }, []);

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={exp._id} className="relative">
          {/* Timeline line */}
          {index !== experiences.length - 1 && (
            <div className="absolute left-0 top-12 h-12 w-1 bg-gray-300" />
          )}

          {/* Timeline dot */}
          <div className="absolute left-0 top-1 w-6 h-6 bg-blue-600 rounded-full -translate-x-2.5" />

          {/* Content */}
          <div className="ml-8">
            <h3 className="text-lg font-bold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">
              {new Date(exp.startDate).toLocaleDateString()} -{' '}
              {exp.isCurrent
                ? 'Present'
                : new Date(exp.endDate!).toLocaleDateString()}
            </p>

            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-700">
                    • {achievement.achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Example: Contact Widget
 */
export function ContactWidget() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      const data = await getContact();
      setContact(data);
    }

    fetchContact();
  }, []);

  if (!contact) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
      <div className="space-y-3">
        <a
          href={`mailto:${contact.email}`}
          className="block text-blue-600 hover:underline"
        >
          📧 {contact.email}
        </a>
        <a
          href={contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 hover:underline"
        >
          💼 LinkedIn
        </a>
        {contact.githubUrl && (
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 hover:underline"
          >
            🐙 GitHub
          </a>
        )}
      </div>
    </div>
  );
}
