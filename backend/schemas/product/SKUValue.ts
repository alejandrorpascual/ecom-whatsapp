import {list} from '@keystone-6/core'
import {relationship} from '@keystone-6/core/fields'

export const SKUValue = list({
  fields: {
    product: relationship({
      ref: 'Product.skuValues',
    }),
    SKU: relationship({
      ref: 'SKU',
    }),
    options: relationship({
      ref: 'Option',
      many: true,
    }),
    optionValues: relationship({
      ref: 'OptionValue',
      many: true,
    }),
  },
})
