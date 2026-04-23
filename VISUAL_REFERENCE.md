# Portfolio Frontend - Visual Reference Guide

## Page Layout Structure

```
┌─────────────────────────────────────────────┐
│  NAVBAR (Sticky)                            │
│  - Blurred background, light border         │
│  - Links only to sections with data         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  HERO SECTION                               │
│  ┌─────────────────────────────────────┐    │
│  │ ▪ Available/Busy/On Leave Badge    │    │
│  │                                     │    │
│  │ Large Typography Headline           │    │
│  │                                     │    │
│  │ Subheadline text with generous      │    │
│  │ white space                         │    │
│  │                                     │    │
│  │ [ View Work ]  [ Get in Touch ]     │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  ABOUT SECTION (if data exists)             │
│  ┌─────────────────────────────────────┐    │
│  │ About                               │    │
│  │ ─────                               │    │
│  │                                     │    │
│  │ Bio paragraph with light font       │    │
│  │                                     │    │
│  │ Skills & Tools                      │    │
│  │ [Python] [React] [TypeScript]       │    │
│  │ [Node.js] [PostgreSQL]              │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  EXPERIENCE SECTION (if data exists)        │
│  ┌─────────────────────────────────────┐    │
│  │ Experience                          │    │
│  │ ─────────                           │    │
│  │                                     │    │
│  │ ● Role Title                    1yr │    │
│  │ │ Company Name                      │    │
│  │ │ Jan 2023 - Present [Current]      │    │
│  │ │ Role description...               │    │
│  │ │ • Achievement 1                   │    │
│  │ │ • Achievement 2                   │    │
│  │ │                                   │    │
│  │ ● Previous Role              2yr 3mo│    │
│  │   Previous Company                  │    │
│  │   Jan 2021 - Dec 2022               │    │
│  │   ...                               │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  PROJECTS SECTION (if data exists)          │
│  ┌─────────────────────────────────────┐    │
│  │ Projects                            │    │
│  │ ────────                            │    │
│  │                                     │    │
│  │ ┌──────────────────┐ ┌──────────────┐   │
│  │ │ Project Title    │ │ Project 2    │   │
│  │ │ Brief description│ │ Description  │   │
│  │ │ that may wrap to │ │ continues    │   │
│  │ │ multiple lines   │ │              │   │
│  │ │                  │ │              │   │
│  │ │ [Tech] [Stack]   │ │ [React]      │   │
│  │ │ [Styling]        │ │ [Next.js]    │   │
│  │ │ ────────────────── │ ──────────────   │
│  │ │ GitHub Live Demo │ │ GitHub Demo     │
│  │ │ Details          │ │ Details         │
│  │ └──────────────────┘ └──────────────┘   │
│  │                                     │    │
│  │ ┌──────────────────┐ ┌──────────────┐   │
│  │ │ Project 3...     │ │ Project 4... │   │
│  │ └──────────────────┘ └──────────────┘   │
│  │                                     │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CONTACT SECTION (if data exists)           │
│  ┌─────────────────────────────────────┐    │
│  │ Get in Touch                        │    │
│  │ ────────────                        │    │
│  │                                     │    │
│  │ Email                               │    │
│  │ your.email@example.com              │    │
│  │                                     │    │
│  │ Phone                               │    │
│  │ +1 (555) 123-4567                   │    │
│  │                                     │    │
│  │ Location                            │    │
│  │ City, Country                       │    │
│  │                                     │    │
│  │ Follow                              │    │
│  │ LinkedIn GitHub Twitter              │    │
│  │                                     │    │
│  │ ─────────────────────────────────── │    │
│  │ I'd love to hear from you...        │    │
│  │ [ Send Email ]                      │    │
│  │                                     │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  FOOTER                                     │
│  © 2026 All rights reserved.               │
│  Designed & Built with Next.js & Sanity   │
└─────────────────────────────────────────────┘
```

## Component Hierarchy

```
App/Page
├── Navbar
│   ├── Links (conditional based on data)
│   └── Portfolio branding
├── Main Content
│   ├── Hero
│   │   ├── Status Badge (conditional)
│   │   ├── Headline
│   │   ├── Subheadline
│   │   └── CTA Buttons
│   ├── About (conditional)
│   │   ├── Bio text
│   │   └── Skills grid
│   ├── Experience (conditional)
│   │   ├── Timeline container
│   │   └── Experience items
│   │       ├── Timeline dot & line
│   │       ├── Role header
│   │       ├── Date range
│   │       ├── Description
│   │       └── Achievements list
│   ├── ProjectGrid (conditional)
│   │   └── Project cards (2 columns)
│   │       ├── Title
│   │       ├── Description
│   │       ├── Tech tags
│   │       └── Links
│   └── Contact (conditional)
│       ├── Contact info
│       ├── Social links
│       └── Email CTA
└── Footer
    ├── Copyright
    └── Attribution
```

## Design System

### Colors

| Element | Color | Tailwind Class |
|---------|-------|----------------|
| Background | White | `bg-white` |
| Primary Text | Slate 900 | `text-slate-900` |
| Secondary Text | Slate 600 | `text-slate-600` |
| Tertiary Text | Slate 500 | `text-slate-500` |
| Accents | Blue 500 | `text-blue-500` |
| Borders | Slate 200 | `border-slate-200` |
| Light Pills | Slate 100 | `bg-slate-100` |
| Status: Available | Emerald | `text-emerald-700` |
| Status: Busy | Orange | `text-orange-700` |
| Status: Leave | Blue | `text-blue-700` |

### Typography

| Element | Style | Classes |
|---------|-------|---------|
| Page Headings | 48-56px, Light | `text-4xl md:text-5xl font-light tracking-tight` |
| Hero H1 | 64-96px, Light | `text-6xl md:text-7xl font-light tracking-tight` |
| Section Titles | 32-44px, Light | `text-2xl md:text-3xl font-light` |
| Card Titles | 20px, Light | `text-xl font-light` |
| Body Text | 16px, Light | `text-base font-light` |
| Secondary Text | 14px, Light | `text-sm font-light` |
| Labels | 12px, Light | `text-xs font-light` |

### Spacing

| Spacing | Usage | Classes |
|---------|-------|---------|
| Section Vertical | Between sections | `py-20` |
| Container Horizontal | Left/right padding | `px-6` |
| Component Gap | Between items | `gap-8` |
| Small Gap | Small spacing | `gap-4` |
| Max Width | Content width | `max-w-6xl` |
| Section Max Width | Narrow sections | `max-w-3xl` |
| Text Max Width | Text width | `max-w-2xl` |

### Components Styling

#### Navbar
- **Background**: `bg-white/80` with `backdrop-blur-sm`
- **Border**: `border-b border-slate-200`
- **Padding**: `px-6 py-4`
- **Text**: `font-light text-slate-700`
- **Hover**: `hover:text-blue-500`
- **Transition**: `transition-colors duration-200`

#### Cards (Projects)
- **Border**: `border border-slate-200`
- **Padding**: `p-6`
- **Hover Border**: `hover:border-slate-400`
- **Transition**: Full card transitions on hover
- **Layout**: 2 columns: `grid-cols-1 md:grid-cols-2`

#### Buttons
- **Primary**: `bg-blue-500 hover:bg-blue-600 text-white`
- **Secondary**: `border border-slate-300 hover:border-slate-800`
- **Padding**: `px-6 py-3`
- **Text**: `text-sm font-light`
- **Transition**: `transition-colors duration-200`

#### Tech Tags
- **Display**: `inline-block rounded-full`
- **Padding**: `px-3 py-1`
- **Text Size**: `text-xs font-light`
- **Example Colors**:
  - Python/JS: `bg-slate-100 text-slate-700`
  - React: `bg-blue-50 text-blue-700`
  - ML/AI: `bg-purple-50 text-purple-700`

#### Timeline
- **Dot Size**: `w-3 h-3`
- **Dot Color**: `bg-blue-500`
- **Line**: `w-px h-16 bg-slate-200`
- **Gap**: `gap-6` between dot and content

## Responsive Breakpoints

```
Mobile: < 768px (default)
- Single column layout
- Smaller text sizes
- Full width minus padding

Tablet: 768px - 1024px (md:)
- 2-column grids start
- Larger text sizes

Desktop: > 1024px
- Full width layouts
- Max width constraints
```

## Hover States

- **Links**: Color shifts to blue (`text-blue-500`)
- **Cards**: Border darkens (`border-slate-400`)
- **Buttons**: Background darkens or border thickens
- **Transition**: All hover effects have `transition-colors duration-200`

## Interactivity

- **Smooth scrolling**: `scroll-behavior: smooth` in HTML
- **Anchor links**: Navigation links jump to section IDs
- **No heavy animations**: Subtle color transitions only
- **Mobile friendly**: Full touch support
