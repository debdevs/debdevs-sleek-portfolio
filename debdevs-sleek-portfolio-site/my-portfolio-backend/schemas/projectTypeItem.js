import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectTypeItem',
  title: 'Project Type Item',
  type: 'object',
  fields: [

    defineField({
      name: 'tech',
      title: 'Tech',
      type: 'reference',
      to: [{type: 'projectType'}],
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
      title: 'projectType.name',
      media: 'projectType.image',
    },
  },
})
