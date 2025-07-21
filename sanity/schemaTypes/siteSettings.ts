import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      initialValue: 'Main Site Settings',
      readOnly: true,
    }),
    
    // Business Information
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      initialValue: 'The JB Experience',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'London\'s Premier Wedding & Event Band',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Business Description',
      type: 'text',
      rows: 3,
      initialValue: 'Professional live music for weddings, corporate events, and special occasions across London and the UK.',
    }),
    
    // Contact Information
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'joebatemanofficial@gmail.com',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
      initialValue: '+44 7123 456789',
    }),
    defineField({
      name: 'baseLocation',
      title: 'Base Location',
      type: 'string',
      initialValue: 'London, UK',
      validation: (Rule) => Rule.required(),
    }),
    
    // Images
    defineField({
      name: 'logo',
      title: 'Business Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroImage',
      title: 'Homepage Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    // Social Media
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Manage your site information',
      }
    },
  },
})