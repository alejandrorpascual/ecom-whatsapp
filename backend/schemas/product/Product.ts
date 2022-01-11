import {list} from '@keystone-6/core'
import {relationship, select, text} from '@keystone-6/core/fields'

export const Product = list({
  fields: {
    name: text({validation: {isRequired: true}}),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: {fields: ['image', 'altText']},
        inlineEdit: {fields: ['image', 'altText']},
      },
      many: true,
    }),
    status: select({
      options: [
        {label: 'Draft', value: 'DRAFT'},
        {label: 'Available', value: 'AVAILABLE'},
        {label: 'Unavailable', value: 'UNAVAILABLE'},
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: {fieldMode: 'hidden'},
      },
    }),
    user: relationship({
      ref: 'User.products',
      hooks: {
        resolveInput({operation, resolvedData, context}) {
          //NOTE: Default to the currently logged in user on create.
          if (
            operation === 'create' &&
            !resolvedData.user &&
            context.session?.itemId
          ) {
            return {connect: {id: context.session?.itemId}}
          }
          return resolvedData.user
        },
      },
    }),
    skus: relationship({
      ref: 'SKU.product',
      many: true,
    }),
    skuValues: relationship({
      ref: 'SKUValue.product',
      many: true,
    }),
    options: relationship({
      ref: 'Option.product',
      many: true,
    }),
    optionValues: relationship({
      ref: 'OptionValue.product',
      many: true,
    }),
    category: relationship({
      ref: 'Category',
    }),
  },
})
