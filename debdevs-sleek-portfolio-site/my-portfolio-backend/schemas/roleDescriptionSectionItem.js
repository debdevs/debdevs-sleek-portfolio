import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'roleDescriptionSectionItem',
  title: 'Role Description Section Item',
  type: 'object',
  fields: [

    defineField({
      name: 'roleDescriptionSection',
      title: 'Desc',
      type: 'reference',
      to: [{type: 'roleDescriptionSection'}],
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {

      title: 'roleDescriptionSection.name',
      media: 'roleDescriptionSection.image',
    },
  },
})
