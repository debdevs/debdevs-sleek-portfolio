import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
