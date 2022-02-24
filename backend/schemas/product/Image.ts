import {list} from '@keystone-6/core'
import {relationship, text} from '@keystone-6/core/fields'

export const Image = list({
  fields: {
    src: text(),
    altText: text(),
    product: relationship({ref: 'Product.photos'}),
    option: relationship({
      ref: 'Option',
    }),
    optionValue: relationship({
      ref: 'OptionValue',
    }),
  },
  ui: {
    listView: {
      initialColumns: ['src', 'altText', 'product'],
    },
  },
})
