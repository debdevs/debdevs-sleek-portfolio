import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'buttonItem',
  title: 'Button Stack Item',
  type: 'object',
  fields: [

    defineField({
      name: 'button',
      title: 'Button',
      type: 'reference',
      to: [{type: 'button'}],
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),

  ],
  preview: {
    select: {
      subtitle: 'characterName',
      title: 'button.name',
      media: 'button.image',
    },
  },
})
