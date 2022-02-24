import {list} from '@keystone-6/core'
import {relationship, text} from '@keystone-6/core/fields'

export const Option = list({
  fields: {
    name: text({validation: {isRequired: true}, isIndexed: 'unique'}),
    values: relationship({
      ref: 'OptionValue.option',
      many: true,
    }),
    product: relationship({
      ref: 'Product.options',
    }),
  },
})
