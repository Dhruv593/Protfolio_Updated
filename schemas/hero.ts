import { defineType, defineField } from 'sanity';

export const heroSchema = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Main headline for the hero section',
    }),
    defineField({
      name: 'subheadline',
      title: 'Sub-headline',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Secondary text for the hero section',
    }),
    defineField({
      name: 'availability',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Busy', value: 'busy' },
          { title: 'On Leave', value: 'leave' },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: 'Current availability status',
    }),
  ],
});
