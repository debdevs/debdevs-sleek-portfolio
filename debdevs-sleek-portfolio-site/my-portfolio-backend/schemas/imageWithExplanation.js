import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'imageWithExplanation',
  title: 'Image With Explanation (for components, pseudogallery, etc)',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Image with description',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'extra',
      title: 'Extra',
      description: 'Extra external link (if available)',
      type: 'string',
    }),

  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
