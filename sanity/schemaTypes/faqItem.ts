import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'FAQ Items',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Booking', value: 'booking'},
          {title: 'Pricing', value: 'pricing'},
          {title: 'Performance', value: 'performance'},
          {title: 'Equipment', value: 'equipment'},
          {title: 'General', value: 'general'},
        ],
      },
      initialValue: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Only active FAQ items appear on the website',
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
      title: 'question',
      subtitle: 'category',
      active: 'active',
    },
    prepare(selection) {
      const {title, subtitle, active} = selection
      const activeStatus = active ? '' : ' (Inactive)'
      return {
        title: `${title}${activeStatus}`,
        subtitle: `Category: ${subtitle}`,
      }
    },
  },
})