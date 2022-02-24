import {list} from '@keystone-6/core'
import {integer, relationship, text} from '@keystone-6/core/fields'
import {isSignedIn, rules} from '../access'

export const OrderItem = list({
  access: {
    operation: {
      create: isSignedIn,
      update: () => false,
      delete: () => false,
    },
    filter: {
      query: rules.canManageOrderItems,
    },
  },
  fields: {
    name: text({validation: {isRequired: true}}),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    cloudinaryImage: relationship({
      ref: 'CloudinaryImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: {fields: ['image', 'altText']},
        inlineEdit: {fields: ['image', 'altText']},
      },
    }),
    image: relationship({
      ref: 'Image',
      ui: {
        displayMode: 'cards',
        cardFields: ['src', 'altText'],
        inlineCreate: {fields: ['altText']},
        inlineEdit: {fields: ['altText']},
      },
    }),
    price: integer(),
    quantity: integer(),
    order: relationship({ref: 'Order.items'}),
  },
})
