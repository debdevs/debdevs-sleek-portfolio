import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoWithExplanationItem',
  title: 'Video With Explanation (for components, pseudogallery, etc)',
  type: 'object',
  fields: [

    defineField({
      name: 'videoWithExplanation',
      title: 'Video item with explanation',
      type: 'reference',
      to: [{type: 'videoWithExplanation'}],
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
      title: 'videoWithExplanation.name',
      media: 'videoWithExplanation.video',
    },
  },
})
