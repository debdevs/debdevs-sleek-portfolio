import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'videoWithExplanation',
  title: 'Video With Explanation (for components, pseudogallery, etc)',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'video',
      title: 'Video',
      type: 'mux.video',
      // options: {
      //   hotspot: true,
      // },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Video with description',
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

  ],
  preview: {
    select: {title: 'name', media: 'video'},
  },
})
