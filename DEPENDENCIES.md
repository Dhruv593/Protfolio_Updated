# Package Dependencies Reference

## Required Packages

Add these to your `package.json` or install via npm:

```bash
npm install next-sanity sanity @sanity/image-url
```

### Detailed Package Information

#### next-sanity
- **Version**: ^5.0.0 or latest
- **Purpose**: Official Sanity integration for Next.js
- **Features**: 
  - Sanity Studio integration
  - API routes for real-time content
  - Client setup and utilities
- **Docs**: https://www.sanity.io/plugins/next-sanity

#### sanity
- **Version**: ^3.0.0 or latest
- **Purpose**: Core Sanity client and schema definitions
- **Features**:
  - Schema definition tools
  - GROQ query builder
  - Configuration management
  - Content lake access
- **Docs**: https://www.sanity.io/docs

#### @sanity/image-url
- **Version**: ^1.0.0 or latest
- **Purpose**: Image URL builder for optimized images
- **Features**:
  - Responsive image generation
  - Format negotiation (WebP, etc.)
  - Quality control
  - Crop and hotspot support
- **Docs**: https://www.sanity.io/docs/image-url

## Dev Dependencies (Optional but Recommended)

```bash
npm install --save-dev @types/node typescript ts-node
```

These are typically already included in Next.js projects.

## Example package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "sanity": "^3.0.0",
    "next-sanity": "^5.0.0",
    "@sanity/image-url": "^1.0.0"
  }
}
```

## Peer Dependencies

These should already be in your Next.js project:
- `react@^18.0.0 || ^19.0.0`
- `react-dom@^18.0.0 || ^19.0.0`
- `next@^13.0.0` (or higher)

## TypeScript Configuration

Add to `tsconfig.json` for better type support:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## Installation Steps

### 1. Create Next.js Project (if needed)
```bash
npx create-next-app@latest portfolio --typescript --tailwind
cd portfolio
```

### 2. Install Sanity Packages
```bash
npm install next-sanity sanity @sanity/image-url
```

### 3. Copy All Files
Copy the created files to your project:
```
sanity.config.ts (root)
lib/sanity.client.ts
lib/sanity.image.ts
schemas/* (all schema files)
types/sanity.types.ts
components/SanityComponents.example.tsx (for reference)
```

### 4. Setup Environment Variables
```bash
# Create .env.local file
echo 'NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID' > .env.local
echo 'NEXT_PUBLIC_SANITY_DATASET=production' >> .env.local
```

### 5. Start Development
```bash
npm run dev
```

## Verifying Installation

### Check that packages are installed
```bash
npm list next-sanity sanity @sanity/image-url
```

### Test Sanity client connection
Create a test file:
```typescript
// test-sanity.ts
import { client } from '@/lib/sanity.client';

async function test() {
  try {
    const result = await client.fetch('*[_type == "hero"][0]');
    console.log('✅ Sanity connection successful');
  } catch (error) {
    console.error('❌ Sanity connection failed:', error);
  }
}

test();
```

Run:
```bash
npx ts-node test-sanity.ts
```

## Optional Enhancements

### For Real-time Updates
```bash
npm install @sanity/live-query
```

Usage:
```typescript
import { useLiveQuery } from '@sanity/react-loader';

export function MyComponent() {
  const { data, loading } = useLiveQuery(query, params);
  // ...
}
```

### For Image Optimization
Already included with `@sanity/image-url`, but you can also use Next.js Image:
```typescript
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.image';

export function ProjectImage({ image }) {
  return (
    <Image
      src={urlFor(image).width(400).url()}
      alt="Project"
      width={400}
      height={300}
    />
  );
}
```

### For Form Submissions
If submitting data to Sanity from your portfolio:
```bash
npm install @sanity/client @sanity/webhook
```

### For SEO
```bash
npm install next-seo
```

## Troubleshooting Installation

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors with Sanity types
```bash
# Ensure types are properly installed
npm install --save-dev @types/sanity
```

### Build errors in production
```bash
# Test production build locally
npm run build
npm start
```

## Version Compatibility

| Package | Min Version | Tested With |
|---------|------------|------------|
| Next.js | 13.0 | 15.0 |
| React | 18.0 | 19.0 |
| sanity | 3.0 | 3.x |
| next-sanity | 5.0 | 5.x |
| @sanity/image-url | 1.0 | 1.x |

## Security Notes

### API Keys & Tokens
- Never commit `.env.local` to git
- Use `.gitignore` to exclude:
  ```
  .env.local
  .env.local.backup
  .DS_Store
  node_modules/
  ```

### CORS Configuration
Sanity handles CORS automatically for public projects. For private projects, configure in Sanity project settings.

### API Rate Limits
- Production CDN: 10,000 requests/second
- API: Standard rate limits apply
- See https://www.sanity.io/docs/rate-limits

---

**Dependencies are lean and production-ready!** ✅
