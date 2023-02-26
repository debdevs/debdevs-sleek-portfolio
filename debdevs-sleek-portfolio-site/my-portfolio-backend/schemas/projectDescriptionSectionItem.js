import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectDescriptionSectionItem',
  title: 'Project Description Section Item',
  type: 'object',
  fields: [

    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'reference',
      to: [{type: 'projectDescriptionSection'}],
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
      title: 'projectDescriptionSection.name',
      media: 'projectDescriptionSection.image',
    },
  },
})
