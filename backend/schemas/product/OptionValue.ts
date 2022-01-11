import {list} from '@keystone-6/core'
import {relationship, text} from '@keystone-6/core/fields'

export const OptionValue = list({
  fields: {
    name: text({validation: {isRequired: true}, isIndexed: 'unique'}),
    product: relationship({
      ref: 'Product.optionValues',
    }),
    option: relationship({
      ref: 'Option',
    }),
  },
})
