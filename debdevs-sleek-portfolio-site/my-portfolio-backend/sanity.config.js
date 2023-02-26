import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'my-portfolio-backend',

  projectId: 'vd2lwzyh',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    muxInput(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
