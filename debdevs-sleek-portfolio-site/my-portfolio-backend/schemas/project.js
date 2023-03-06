import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'imageWithExplanation',
      title: 'Image item with explanation',
      type: 'reference',
      to: [{type: 'imageWithExplanation'}],
    }), 
    defineField({
      name: 'popularity',
      title: 'Popularity',
      type: 'number',
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'string',
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Link',
      type: 'string',
    }),
    defineField({
      name: 'buttonItems',
      title: 'Button Stack',
      type: 'array',
      of: [{type: 'buttonItem'}],
    }),
    defineField({
      name: 'techStackItems',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'techStackItem'}],
    }),
    defineField({
      name: 'projectTypes',
      title: 'Project Types',
      type: 'array',
      of: [{type: 'projectTypeItem'}],
    }),
    defineField({
      name: 'projectDescriptionSections',
      title: 'Project Description Sections',
      type: 'array',
      of: [{type: 'projectDescriptionSectionItem'}],
    }),
    defineField({
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    }),
    defineField({
      name: 'imageItems',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'videoGallery',
      title: 'Video Gallery',
      type: 'array',
      of: [{type: 'videoWithExplanationItem'}],
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),

    defineField({
      name: 'roleDescriptionSections',
      title: 'Role Description Sections',
      type: 'array',
      of: [{type: 'roleDescriptionSectionItem'}],
    }),


  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'techStackItems.0.tech.name',
      castName1: 'techStackItems.1.tech.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
})
