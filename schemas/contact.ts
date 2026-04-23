import { defineType, defineField } from 'sanity';

export const contactSchema = defineType({
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Professional Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      description: 'Your professional email address',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }).required(),
      description: 'Your LinkedIn profile URL',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
      description: 'Your GitHub profile URL (optional)',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter/X URL',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
      description: 'Your Twitter/X profile URL (optional)',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Your contact phone number (optional)',
    }),
  ],
});
