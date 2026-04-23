import { defineType, defineField } from 'sanity';

export const projectsSchema = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Name of the project',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
      description: 'URL-friendly identifier (auto-generated from title)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Brief overview of the project',
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
      ],
      description: 'Extended project description with rich text',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Technologies and tools used in the project. You can add any custom tech or select from suggested options.',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Featured image for the project',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
      description: 'Link to the GitHub repository',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Project URL',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
      description: 'Link to the deployed/live project (optional)',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
      description: 'Highlight this project on the portfolio homepage',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      description: 'When the project was completed/published',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
});
