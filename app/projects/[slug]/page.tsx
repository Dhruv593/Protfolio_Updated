import { getProjectBySlug } from '@/lib/sanity.client';
import { ProjectDetail } from '@/components/ProjectDetail';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        hasHero={true}
        hasAbout={true}
        hasExperience={true}
        hasProjects={true}
        hasContact={true}
      />
      <ProjectDetail
        title={project.title}
        description={project.description}
        detailedDescription={project.detailedDescription}
        techStack={project.techStack}
        githubUrl={project.githubUrl}
        liveUrl={project.liveUrl}
        image={project.image}
      />
      <Footer />
    </div>
  );
}
