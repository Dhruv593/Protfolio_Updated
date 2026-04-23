# Portfolio Content Engine - Sanity.io Setup Guide

## Project Structure

```
d:\Portfolio 2026\
├── sanity.config.ts              # Main Sanity configuration
├── lib/
│   └── sanity.client.ts          # Next.js Sanity client & query helpers
├── schemas/
│   ├── index.ts                  # Schema exports
│   ├── hero.ts                   # Hero section schema
│   ├── about.ts                  # About section schema
│   ├── experience.ts             # Work experience schema
│   ├── projects.ts               # Portfolio projects schema
│   └── contact.ts                # Contact information schema
├── .env.local.example            # Environment variables template
└── README.md                      # This file
```

## Installation Steps

### 1. Install Dependencies

```bash
npm install next-sanity sanity @sanity/image-url
```

### 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Add your Sanity Project ID:
   - Visit [Sanity.io Dashboard](https://manage.sanity.io/)
   - Create a new project or select existing
   - Copy your **Project ID**
   - Paste into `.env.local`

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Initialize Sanity Studio Route

In your Next.js app, create `app/admin/[[...index]]/page.tsx`:

```typescript
'use client';

import { NextStudio } from 'next-sanity/studio';
import { metadata } from 'next/head';
import config from '../../../sanity.config';

export default function AdminPage() {
  return <NextStudio config={config} />;
}
```

Then add to `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Portfolio Admin',
  description: 'Content management',
};
```

### 4. Start Your Project

```bash
npm run dev
```

Visit `http://localhost:3000/admin` to access your Sanity Studio.

## Schema Documentation

### Hero Section (`hero.ts`)

Manages the main hero/welcome section on your homepage.

**Fields:**
- **Headline** (string) - Main tagline
- **Sub-headline** (text) - Supporting message
- **Availability** (select) - Current status: Available, Busy, On Leave

**Usage:**
```typescript
import { getHero } from '@/lib/sanity.client';

const hero = await getHero();
// Returns: { headline, subheadline, availability }
```

---

### About Section (`about.ts`)

Contains your biography and research interests.

**Fields:**
- **Bio** (rich text array) - Full biography with formatting support
- **Current Research** (string) - Your research focus area

**Features:**
- Rich text with headings, bold, italic, code, and links
- Perfect for markdown-style content

**Usage:**
```typescript
import { getAbout } from '@/lib/sanity.client';

const about = await getAbout();
// Returns: { bio: [...], currentResearch }
```

---

### Experience (`experience.ts`)

Document-based schema for work history.

**Fields:**
- **Company** (string) - Organization name
- **Role** (string) - Job title
- **Start Date** (datetime) - Employment start
- **End Date** (datetime) - Employment end (optional)
- **Currently Working Here** (boolean) - Active role flag
- **Achievements** (array of objects) - List of key accomplishments
- **Description** (text) - Optional role details

**Usage:**
```typescript
import { getExperience } from '@/lib/sanity.client';

const experiences = await getExperience();
// Returns: Array of experience objects, sorted by endDate (newest first)
```

---

### Projects (`projects.ts`)

Comprehensive project portfolio schema.

**Fields:**
- **Title** (string) - Project name
- **Slug** (slug) - Auto-generated URL identifier
- **Description** (text) - Short overview
- **Detailed Description** (rich text) - Extended description
- **Tech Stack** (array) - Technologies used (predefined list)
- **Project Image** (image) - Featured image with hotspot cropping
- **GitHub URL** (url) - Repository link
- **Live URL** (url) - Deployed project link
- **Featured** (boolean) - Homepage highlight flag
- **Published Date** (datetime) - Project completion date

**Tech Stack Options:**
Python, JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL, AWS, Google Cloud, Docker, PyTorch, TensorFlow, Machine Learning, Data Science, AI/LLM

**Usage:**
```typescript
import { getProjects, getFeaturedProjects } from '@/lib/sanity.client';

const allProjects = await getProjects();
// Returns: All projects sorted by featured status, then published date

const featured = await getFeaturedProjects();
// Returns: Only featured projects
```

---

### Contact Information (`contact.ts`)

Professional contact details.

**Fields:**
- **Professional Email** (string) - Primary contact email
- **LinkedIn URL** (url) - LinkedIn profile
- **GitHub URL** (url) - GitHub profile (optional)
- **Twitter/X URL** (url) - Twitter profile (optional)
- **Phone Number** (string) - Contact phone (optional)

**Usage:**
```typescript
import { getContact } from '@/lib/sanity.client';

const contact = await getContact();
// Returns: { email, linkedinUrl, githubUrl, twitterUrl, phoneNumber }
```

---

## Client Helper Functions

The `lib/sanity.client.ts` file provides ready-to-use query helpers:

```typescript
import {
  getHero,
  getAbout,
  getExperience,
  getProjects,
  getFeaturedProjects,
  getContact,
  fetchFromSanity,
} from '@/lib/sanity.client';
```

All functions are async and return parsed Sanity documents:

```typescript
const hero = await getHero();
const allProjects = await getProjects();
const featured = await getFeaturedProjects();
```

### Custom Queries

For complex queries, use the generic fetch helper:

```typescript
import { fetchFromSanity } from '@/lib/sanity.client';

const query = `*[_type == "projects" && "react" in techStack] | order(publishedAt desc)`;
const projects = await fetchFromSanity(query);
```

---

## Data Retrieval in Next.js Components

### Server Component Example

```typescript
// app/page.tsx
import { getHero, getFeaturedProjects } from '@/lib/sanity.client';

export default async function HomePage() {
  const hero = await getHero();
  const projects = await getFeaturedProjects();

  return (
    <div>
      <h1>{hero.headline}</h1>
      <p>{hero.subheadline}</p>
      {projects.map((project) => (
        <div key={project._id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Client Component with SWR

```typescript
// components/Projects.tsx
'use client';

import useSWR from 'swr';
import { fetchFromSanity } from '@/lib/sanity.client';

export default function Projects() {
  const { data, isLoading } = useSWR(
    `*[_type == "projects" && isFeatured == true]`,
    fetchFromSanity
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map((project) => (
        <div key={project._id}>{project.title}</div>
      ))}
    </div>
  );
}
```

---

## Sanity Studio at /admin

The studio is automatically configured to run at `/admin` route.

**Features:**
- Visual content management interface
- Real-time collaboration
- Document preview
- Rich text editing
- Image upload with cropping

### Access the Studio

With `npm run dev` running:

```
http://localhost:3000/admin
```

---

## Environment Setup

### Required Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Optional Variables (for server-side operations)

```env
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token
```

To generate tokens:
1. Go to [Sanity.io Manage](https://manage.sanity.io/)
2. Select your project
3. Go to **API Tokens**
4. Create new token with appropriate permissions

---

## TypeScript Support

All schemas are fully typed. Import types in your components:

```typescript
import { Hero } from 'path-to-types'; // If you generate types with Sanity CLI

// Or define your own types based on schemas
interface Hero {
  _id: string;
  headline: string;
  subheadline: string;
  availability: 'available' | 'busy' | 'leave';
}
```

---

## Common Configurations

### Add Authentication to Studio

In `sanity.config.ts`:

```typescript
import { defineConfig } from 'sanity';
import { authWorkspace } from 'sanity/structure';

export default defineConfig({
  // ... existing config
  auth: {
    redirectOnSingleAuthProvider: false,
  },
});
```

### Customize Studio Workspace

```typescript
export default defineConfig({
  // ... config
  studio: {
    basePath: '/admin',
  },
});
```

---

## Next Steps

1. ✅ Set up environment variables
2. ✅ Install Sanity in your Next.js projects
3. ✅ Create the `/admin` route for Studio
4. ✅ Start creating content in Studio
5. ✅ Query data in your pages/components
6. 🔄 Deploy to production

---

## Resources

- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Next-Sanity Integration](https://www.sanity.io/plugins/next-sanity)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity CLI Reference](https://www.sanity.io/docs/cli)

---

## Troubleshooting

### Studio Not Loading

- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly
- Check that you're accessing `/admin` route
- Ensure `next-sanity` is installed: `npm install next-sanity`

### Queries Returning Empty

- Verify documents exist in your Sanity Studio
- Check query syntax (use GROQ playground: https://groq.sanity.dev/)
- Ensure dataset name matches in `.env.local`

### Image Upload Issues

- Check Sanity project has media enabled
- Verify project-level image configuration

---

**Happy coding! 🚀**
