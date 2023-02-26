import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'techStackItem',
  title: 'Tech Stack Item',
  type: 'object',
  fields: [

    defineField({
      name: 'tech',
      title: 'Tech',
      type: 'reference',
      to: [{type: 'tech'}],
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),

  ],
  preview: {
    select: {
      subtitle: 'characterName',
      title: 'tech.name',
      media: 'tech.image',
    },
  },
})
