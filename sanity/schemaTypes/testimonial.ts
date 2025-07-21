import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'event',
      title: 'Event Type',
      type: 'string',
      placeholder: 'e.g., Wedding - London',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      initialValue: 5,
      options: {
        list: [
          {title: '5 Stars', value: 5},
          {title: '4 Stars', value: 4},
          {title: '3 Stars', value: 3},
          {title: '2 Stars', value: 2},
          {title: '1 Star', value: 1},
        ],
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'image',
      title: 'Client Photo (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: false,
      description: 'Featured testimonials appear prominently on the homepage',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Only active testimonials appear on the website',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 999,
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'event',
      media: 'image',
      rating: 'rating',
      featured: 'featured',
    },
    prepare(selection) {
      const {title, subtitle, rating, featured} = selection
      const stars = '★'.repeat(rating)
      const featuredTag = featured ? ' (Featured)' : ''
      return {
        title: `${title}${featuredTag}`,
        subtitle: `${subtitle} - ${stars}`,
        media: selection.media,
      }
    },
  },
})