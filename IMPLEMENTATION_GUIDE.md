# Portfolio Frontend Implementation Guide

## Overview

This portfolio frontend is built with **Next.js**, **Tailwind CSS**, and **Sanity CMS**. It features an ultra-minimalist, light-themed design with clean typography and generous white space.

## Design Principles

- **Background**: Pure white (#FFFFFF)
- **Text**: Slate gray (text-slate-900)
- **Accents**: Soft professional blue
- **Spacing**: Generous white space between sections
- **Styling**: Clean, modern Tailwind classes
- **Borders**: Sharp, minimal borders—no heavy shadows or rounded corners

## Project Structure

```
components/
├── Navbar.tsx          # Sticky navigation with dynamic section links
├── Hero.tsx            # Clean typography-focused intro section
├── About.tsx           # About section with skills
├── Experience.tsx      # Vertical timeline with thin connectors
├── ProjectGrid.tsx     # 2-column grid of bordered project cards
├── Contact.tsx         # Contact information and CTA
├── Footer.tsx          # Minimal footer
└── index.ts            # Component exports

lib/
├── sanity.client.ts    # Sanity client with unified data fetching
├── types.ts            # TypeScript types for portfolio data
└── utils.ts            # Utility functions (formatting, colors, etc.)

app/
├── page.tsx            # Main page that assembles all sections
├── layout.tsx          # Root layout
└── globals.css         # Global styles and theme
```

## Data Fetching

### Single GROQ Query

The portfolio uses a **unified data fetching function** that fetches all sections in a single query:

```typescript
export async function getPortfolioData() {
  const query = `{
    "hero": *[_type == "hero"][0],
    "about": *[_type == "about"][0],
    "experience": *[_type == "experience"] | order(startDate desc),
    "projects": *[_type == "projects"] | order(_createdAt desc),
    "contact": *[_type == "contact"][0]
  }`;

  return client.fetch(query);
}
```

This returns all portfolio data in one request for optimal performance.

## Conditional Rendering

Each section implements the rule: **if (!data) return null;**

This means:
- If a section has no data in Sanity, it doesn't render any HTML
- The Navbar automatically hides links to empty sections
- Performance is optimized—no unnecessary DOM elements

Example from `Hero.tsx`:
```typescript
if (!headline || !subheadline) {
  return null; // Don't render if no data
}
```

## Components

### Navbar
- **Sticky** with blurred background (`backdrop-blur-sm`)
- **Dynamic**: Only shows links to sections that have data
- **Light**: White background with subtle border

### Hero
- **Typography-focused**: Large, light font weight
- **Status Badge**: Shows availability (Available/Busy/On Leave)
- **CTAs**: "View Work" and "Get in Touch" buttons

### About
- **Bio Section**: Paragraph text with generous spacing
- **Skills Grid**: Displays skills as light gray pills

### Experience
- **Timeline Layout**: Vertical list with thin connecting lines
- **Blue Dots**: Timeline markers
- **Duration**: Calculated duration for each role (e.g., "2yr 3mo")
- **Achievements**: Bulleted list of accomplishments
- **Current Badge**: Shows if actively working

### ProjectGrid
- **2-Column Layout**: Responsive (1 column on mobile, 2 on desktop)
- **Bordered Cards**: Clean borders, hover effects
- **Tech Tags**: Small, light-gray pills with color coding
- **Links**: GitHub, Live Demo, and Detail page links

### Contact
- **Information Layout**: Email, phone, location
- **Social Links**: Display social media profiles
- **Email CTA**: Direct call-to-action button

### Footer
- **Minimal**: Copyright and attribution
- **Light Theme**: Subtle background color

## Styling Guidelines

### Colors
- **White**: `#FFFFFF` (background)
- **Slate Gray**: `text-slate-900` (main text), `text-slate-600` (secondary)
- **Blue Accent**: `bg-blue-500` (primary actions)
- **Light Grays**: `bg-slate-100` (pills, badges)

### Typography
- **Font Weight**: `font-light` (300) for most text
- **Spacing**: `tracking-tight` for headings
- **Line Height**: `leading-relaxed` for body text

### Hover States
- Smooth transitions: `transition-colors duration-200`
- Color shifts: hover over text and buttons changes color
- Border highlighting: cards highlight border on hover

### Spacing
- **Sections**: `py-20` (vertical padding)
- **Padding**: `px-6` (horizontal padding)
- **Gaps**: `gap-8` between items
- **Max Width**: `max-w-6xl` for content width

## Utility Functions

The `lib/utils.ts` file provides helper functions:

- `formatDate(dateString, format)` - Format dates
- `calculateDuration(startDate, endDate)` - Calculate work duration
- `getTechTagColor(tech)` - Get color class for tech tags
- `formatTechName(tech)` - Format tech names for display
- `truncateText(text, length)` - Truncate long text
- `getStatusColor(status)` - Get status badge color
- `getStatusText(status)` - Get status text

## Type Definitions

TypeScript types are defined in `lib/types.ts`:

- `HeroData` - Hero section data
- `AboutData` - About section data
- `ExperienceData` - Experience entries
- `ProjectData` - Project entries
- `ContactData` - Contact information
- `PortfolioDataResponse` - Complete response from `getPortfolioData()`

## Adding New Content

### Adding a Project

1. Go to Sanity Studio at `/admin`
2. Create a new "Projects" document
3. Fill in:
   - Title
   - Description
   - Tech Stack (select from predefined list)
   - Project Image
   - GitHub URL (optional)
   - Live URL (optional)
4. The project automatically appears on the portfolio

### Updating Hero Section

1. Go to Sanity Studio `/admin`
2. Edit the "Hero Section" document
3. Update:
   - Headline
   - Sub-headline
   - Availability status
4. Changes appear immediately

## Performance Considerations

1. **Single GROQ Query**: All data fetched in one request
2. **Conditional Rendering**: Empty sections don't render HTML
3. **Image Optimization**: Use Sanity's image optimization
4. **Lazy Loading**: Next.js handles component code splitting
5. **CSS**: Tailwind purges unused styles in production

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Design

- **Mobile**: Single column layout
- **Tablet**: Optimized for touch (md breakpoint at 768px)
- **Desktop**: Full 2-column layouts for projects

## Customization

### Color Scheme

Modify the `text-blue-500` accent color throughout:

1. Buttons: Change `bg-blue-500` to your color
2. Accents: Change `border-blue-500` and `text-blue-500`
3. Links: Update hover colors

### Typography

1. Adjust `font-light` to `font-normal` for heavier text
2. Modify `tracking-tight` and `leading-relaxed` for spacing
3. Change `text-slate-900` to any color for text

### Spacing

1. Adjust `py-20` and `px-6` for section padding
2. Modify `gap-8` for component gaps
3. Change `max-w-6xl` for content width

## Deployment

1. Ensure environment variables are set:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`

2. Build: `npm run build`

3. Deploy to:
   - Vercel (recommended)
   - Netlify
   - AWS
   - Any Node.js hosting

## Troubleshooting

### Sections Not Showing

- Check Sanity Studio to ensure data exists
- Verify `getPortfolioData()` query in `lib/sanity.client.ts`
- Check browser console for errors

### Styling Issues

- Ensure Tailwind CSS compiled (check `globals.css`)
- Verify `tailwind.config.ts` includes all component paths
- Check CSS specificity conflicts

### Data Not Fetching

- Verify Sanity project ID and dataset
- Check network tab for API errors
- Ensure data has been published in Sanity

## Best Practices

1. **Keep Sections Focused**: Each section has one purpose
2. **Minimalist Approach**: Remove non-essential elements
3. **Readable Text**: Maintain high contrast (white bg, dark text)
4. **Consistent Spacing**: Use consistent padding/margins
5. **Fast Loading**: Optimize images in Sanity
6. **Mobile First**: Test on mobile devices
7. **Link Accessibility**: Ensure links are keyboard accessible

## Tech Stack

- **Next.js 15**: React framework with server components
- **TypeScript**: Type safety
- **Tailwind CSS 3**: Utility-first CSS
- **Sanity CMS 3**: Headless CMS
- **React 18**: UI framework

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
