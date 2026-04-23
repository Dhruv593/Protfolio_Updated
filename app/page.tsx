import { getPortfolioData } from '@/lib/sanity.client';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default async function Home() {
  const portfolioData = await getPortfolioData();

  // Destructure with fallback empty objects/arrays
  const hero = portfolioData?.hero || null;
  const about = portfolioData?.about || null;
  const experience = portfolioData?.experience || [];
  const projects = portfolioData?.projects || [];
  const contact = portfolioData?.contact || null;

  // Determine which sections have data
  const hasHero = !!hero;
  const hasAbout = !!about;
  const hasExperience = experience.length > 0;
  const hasProjects = projects.length > 0;
  const hasContact = !!contact;

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar
        hasHero={hasHero}
        hasAbout={hasAbout}
        hasExperience={hasExperience}
        hasProjects={hasProjects}
        hasContact={hasContact}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          headline={hero?.headline}
          subheadline={hero?.subheadline}
          availability={hero?.availability}
        />

        {/* About Section */}
        <About
          title={about?.title}
          bio={about?.bio}
          skills={about?.skills}
        />

        {/* Experience Section */}
        <Experience experience={experience} />

        {/* Projects Section */}
        <ProjectGrid projects={projects} />

        {/* Contact Section */}
        <Contact
          email={contact?.email}
          phone={contact?.phone}
          location={contact?.location}
          socialLinks={contact?.socialLinks}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
