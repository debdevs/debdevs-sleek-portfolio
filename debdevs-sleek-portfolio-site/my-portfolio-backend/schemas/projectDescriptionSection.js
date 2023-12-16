import {defineField, defineType} from 'sanity'
import {MdTextFormat as icon} from 'react-icons/md'
import { MdTextFormat } from 'react-icons/md'
export default defineType({
  name: 'projectDescriptionSection',
  title: 'Project Description Section',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'desctype',
      title: 'Desctype',
      type: 'string',
      description: 'Definte what type of description to dipslay for frontend',
    }),
    defineField({
      name: 'galleryTabTag',
      title: 'GalleryTabTag',
      type: 'string',
      description: 'tag for description. Ie, Wireframing, UI Design, Etc.',
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
    
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
