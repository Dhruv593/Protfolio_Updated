# Portfolio Frontend - Quick Start Guide

## What's New

Your portfolio frontend is now complete with an ultra-minimalist, light-themed design. Here's what was created:

### Components Created

1. **Navbar.tsx** - Sticky navigation with dynamic section links
2. **Hero.tsx** - Clean intro section with availability badge
3. **About.tsx** - Bio and skills display
4. **Experience.tsx** - Timeline-based work experience
5. **ProjectGrid.tsx** - 2-column grid of projects
6. **Contact.tsx** - Contact info and email CTA
7. **Footer.tsx** - Minimal footer

### Utilities Created

1. **lib/utils.ts** - Helper functions for formatting, colors, etc.
2. **lib/types.ts** - TypeScript type definitions
3. **components/index.ts** - Component exports for cleaner imports

### Documentation Created

1. **IMPLEMENTATION_GUIDE.md** - Complete setup and customization guide
2. **VISUAL_REFERENCE.md** - Design system and layout reference
3. **QUICK_START.md** - This file

### Modified Files

1. **lib/sanity.client.ts** - Added unified `getPortfolioData()` function
2. **app/page.tsx** - Main page with all components
3. **app/globals.css** - Light theme defaults

## Getting Started

### 1. Ensure Data is in Sanity

Make sure you have content in your Sanity dashboard:
- **Hero**: Headline, subheadline, availability
- **Projects**: At least one project with description and tech stack
- **Experience**: (optional) Your work history
- **About**: (optional) Your bio and skills
- **Contact**: (optional) Email, phone, location

If a section is empty, it won't render on the page.

### 2. Build and Run

```bash
# Install dependencies (if not already done)
npm install

# Run dev server
npm run dev

# Open browser to http://localhost:3000
```

### 3. Visit Your Sanity Dashboard

Update content at: `http://localhost:3000/admin`

Changes will appear immediately on the portfolio.

## Features

✅ **Single GROQ Query** - All data fetched in one request  
✅ **Conditional Rendering** - Empty sections don't appear  
✅ **Responsive Design** - Mobile, tablet, desktop support  
✅ **Light Theme** - Ultra-minimalist aesthetic  
✅ **TypeScript** - Full type safety  
✅ **Clean Code** - Reusable utilities and components  
✅ **Smooth Scrolling** - Anchor links animate  
✅ **Tech Tag Colors** - Visual distinction for technologies  

## Key Design Elements

### Colors
- **Background**: Pure white (#FFFFFF)
- **Text**: Slate 900 (dark gray)
- **Accent**: Blue 500 (soft professional blue)
- **Borders**: Slate 200 (light gray)

### Typography
- **Font Weight**: Light (300) throughout
- **Spacing**: `tracking-tight` on headings
- **Sizes**: Scale from xs (12px) to 7xl (96px)

### Components
- **No rounded corners** - Sharp, professional edges
- **No heavy shadows** - Subtle borders instead
- **Generous white space** - Breathing room
- **Clean hover states** - Color transitions only

## Section Details

### Hero Section
- Large typography-focused intro
- Availability badge (Available/Busy/On Leave)
- Two CTA buttons: "View Work" and "Get in Touch"
- Auto-hides if no headline/subheadline

### Projects Section
- 2-column grid (responsive)
- Bordered cards with hover effects
- Tech tags with color coding
- Links: GitHub, Live Demo, Details page
- Auto-hides if no projects

### Experience Section
- Vertical timeline with thin connectors
- Blue dots for timeline markers
- Duration calculation (e.g., "2yr 3mo")
- "Current" badge for active roles
- Auto-hides if no experience

### About Section
- Bio paragraph
- Skills grid with pill styling
- Auto-hides if no bio or skills

### Contact Section
- Email, phone, location info
- Social media links
- Large CTA button
- Auto-hides if no contact info

### Navbar
- Sticky with blurred background
- Only shows links to sections with data
- Light font and hover colors
- Always visible

## Data Structure

The `getPortfolioData()` function returns:

```typescript
{
  hero?: { headline, subheadline, availability },
  about?: { title, bio, skills[] },
  experience?: [{ company, role, startDate, endDate, isCurrent, description, achievements[] }],
  projects?: [{ title, description, techStack[], githubUrl, liveUrl, slug }],
  contact?: { email, phone, location, socialLinks[] }
}
```

If any section is null/empty, it won't render.

## Easy Customization

### Change the Accent Color

1. Open all component files
2. Find `bg-blue-500` or `text-blue-500`
3. Replace with your color (e.g., `bg-purple-600`)

Example: Change from blue to purple
```tsx
// Before
<a href="#contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600">

// After
<a href="#contact" className="px-6 py-3 bg-purple-600 hover:bg-purple-700">
```

### Change Spacing

Modify these Tailwind classes:
- `py-20` → Section vertical padding
- `px-6` → Container horizontal padding
- `gap-8` → Space between components

### Change Font Weight

Change `font-light` to:
- `font-normal` for heavier text
- `font-semibold` for bold headings

## Common Issues

### Projects Not Showing
- Check that projects are published in Sanity
- Verify `description` and `title` fields are filled
- Ensure "Draft" status is changed to published

### Section Not Appearing
- Make sure all required fields are filled
- Check Sanity studio for data (Projects section)
- Look for console errors

### Styling Looks Off
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`npm run dev`)
- Check that Tailwind CSS is compiled

## File Structure Reference

```
d:\Portfolio 2026/
├── app/
│   ├── page.tsx          ← Main page
│   ├── layout.tsx        ← Root layout
│   └── globals.css       ← Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── ProjectGrid.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── index.ts
├── lib/
│   ├── sanity.client.ts  ← Sanity config
│   ├── types.ts          ← TypeScript types
│   └── utils.ts          ← Helper functions
├── schemas/              ← Sanity schema definitions
├── IMPLEMENTATION_GUIDE.md
├── VISUAL_REFERENCE.md
└── QUICK_START.md
```

## Next Steps

1. **Add your content** to Sanity Studio
2. **Test on mobile** to see responsive design
3. **Customize colors** by changing accent color
4. **Deploy** to Vercel, Netlify, or your host
5. **Add additional sections** by creating new components

## Support

- Check `IMPLEMENTATION_GUIDE.md` for detailed documentation
- Review `VISUAL_REFERENCE.md` for design system details
- Components are fully typed with TypeScript
- All utility functions have JSDoc comments

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS
- **Sanity CMS 3** - Headless CMS
- **React 18** - UI library

Enjoy your minimal portfolio! 🎨
