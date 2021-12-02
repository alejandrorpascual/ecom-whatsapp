import 'dotenv/config'
import {list} from '@keystone-6/core'
import {cloudinaryImage} from '@keystone-6/cloudinary'
import {relationship, text} from '@keystone-6/core/fields'

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'fake',
  apiKey: process.env.CLOUDINARY_KEY || 'fake',
  apiSecret: process.env.CLOUDINARY_SECRET || 'fake',
  folder: 't-shirts-no-models',
}

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    product: relationship({ref: 'Product.photo'}),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product'],
    },
  },
})
