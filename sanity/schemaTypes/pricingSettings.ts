import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pricingSettings',
  title: 'Pricing Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      initialValue: 'Main Pricing Settings',
      readOnly: true,
    }),
    
    // Base Prices
    defineField({
      name: 'soloPrice',
      title: 'Solo Performance Price (£)',
      type: 'number',
      initialValue: 1200,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'trioPrice',
      title: 'Trio Performance Price (£)',
      type: 'number',
      initialValue: 1800,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'saxPrice',
      title: 'Saxophone Addition Price (£)',
      type: 'number',
      initialValue: 300,
      validation: (Rule) => Rule.required().min(0),
    }),
    
    // Travel & Additional Costs
    defineField({
      name: 'travelRate',
      title: 'Travel Rate per Mile (£)',
      type: 'number',
      initialValue: 0.45,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'congestionCharge',
      title: 'London Congestion Charge (£)',
      type: 'number',
      initialValue: 15,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'weekendSurcharge',
      title: 'Weekend Surcharge (%)',
      type: 'number',
      initialValue: 20,
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'holidaySurcharge',
      title: 'Holiday Surcharge (%)',
      type: 'number',
      initialValue: 50,
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    
    // Distance Settings
    defineField({
      name: 'freeRadius',
      title: 'Free Travel Radius (miles)',
      type: 'number',
      initialValue: 25,
      validation: (Rule) => Rule.required().min(0),
      description: 'Distance within which no travel charge applies',
    }),
    defineField({
      name: 'maxDistance',
      title: 'Maximum Travel Distance (miles)',
      type: 'number',
      initialValue: 150,
      validation: (Rule) => Rule.required().min(0),
      description: 'Maximum distance we will travel for events',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pricing Settings',
        subtitle: 'Manage your pricing structure',
      }
    },
  },
})