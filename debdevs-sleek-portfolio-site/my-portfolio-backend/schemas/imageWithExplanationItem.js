import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageWithExplanationItem',
  title: 'Image With Explanation (for components, pseudogallery, etc)',
  type: 'object',
  fields: [

    defineField({
      name: 'imageWithExplanation',
      title: 'Image item with explanation',
      type: 'reference',
      to: [{type: 'imageWithExplanation'}],
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),

  ],
  preview: {
    select: {
      subtitle: '',
      title: 'imageWithExplanation.name',
      media: 'imageWithExplanation.image',
    },
  },
})
