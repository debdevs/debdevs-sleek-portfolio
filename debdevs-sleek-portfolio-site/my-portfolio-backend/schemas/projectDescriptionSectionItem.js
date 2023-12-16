import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectDescriptionSectionItem',
  title: 'Project Description Section Item',
  type: 'object',
  fields: [

    // defineField({
    //   name: 'projectDescriptionSection',
    //   title: 'Desc',
    //   type: 'reference',
    //   to: [{type: 'projectDescriptionSection'}],
    // }),

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'layoutType',
      title: 'Layout Type (row, column, row_no_image, column_no_image, standalone_row, standalone_column)',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
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
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'descriptionGallery',
      title: 'DescriptionGallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      subtitle: 'name',
      title: 'name',
      media: 'image',
    },
  },
})
