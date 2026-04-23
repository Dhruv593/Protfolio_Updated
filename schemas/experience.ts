import { defineType, defineField } from 'sanity';

export const experienceSchema = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Name of the company',
    }),
    defineField({
      name: 'role',
      title: 'Job Title / Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Your position at the company',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description: 'When you started this role',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'When you left this role (leave empty if current)',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Currently Working Here',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as true if this is your current role',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'achievement',
              title: 'Achievement',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'achievement',
            },
          },
        },
      ],
      description: 'Key accomplishments during this role',
    }),
    defineField({
      name: 'description',
      title: 'Role Description',
      type: 'text',
      description: 'Optional detailed description of your responsibilities',
    }),
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'company',
    },
  },
});
