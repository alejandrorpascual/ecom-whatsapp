import {list} from '@keystone-6/core'
import {password, relationship, select, text} from '@keystone-6/core/fields'

export const User = list({
  fields: {
    name: text({validation: {isRequired: true}}),
    email: text({
      validation: {isRequired: true},
      isIndexed: 'unique',
      isFilterable: true,
    }),
    oauthProvider: select({
      type: 'enum',
      options: ['google', 'instagram'],
    }),
    oauthProfileId: text(),
    password: password({validation: {isRequired: true}}),
    posts: relationship({ref: 'Post.author', many: true}),
    products: relationship({
      ref: 'Product.user',
      many: true,
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'posts', 'products'],
    },
  },
})
