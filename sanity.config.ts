import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'jb-experience-cms',
  title: 'JB Experience CMS',
  
  projectId,
  dataset,
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // Testimonials
            S.listItem()
              .title('Testimonials')
              .icon(() => '💬')
              .child(
                S.documentTypeList('testimonial')
                  .title('All Testimonials')
              ),
            
            // FAQ
            S.listItem()
              .title('FAQ')
              .icon(() => '❓')
              .child(
                S.documentTypeList('faqItem')
                  .title('FAQ Items')
              ),
            
            S.divider(),
            
            // Settings
            S.listItem()
              .title('Site Settings')
              .icon(() => '⚙️')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Site Settings')
              ),
            
            S.listItem()
              .title('Pricing Settings')
              .icon(() => '💰')
              .child(
                S.document()
                  .schemaType('pricingSettings')
                  .documentId('pricingSettings')
                  .title('Pricing Settings')
              ),
          ])
    }),
    visionTool({
      defaultApiVersion: '2024-01-01',
    }),
  ],
  
  schema: {
    types: schemaTypes,
  },
})