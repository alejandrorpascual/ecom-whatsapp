import {list} from '@keystone-6/core'
import {integer, relationship, text} from '@keystone-6/core/fields'

export const SKU = list({
  fields: {
    sku: text({validation: {isRequired: true}, isIndexed: 'unique'}),
    product: relationship({
      ref: 'Product.skus',
    }),
    stock: integer(),
  },
  ui: {
    labelField: 'sku',
  },
})
