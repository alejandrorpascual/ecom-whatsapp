import {list} from '@keystone-6/core'
import {password, relationship, text} from '@keystone-6/core/fields'

export const User = list({
  // Here are the fields that `User` will have. We want an email and password so they can log in
  // a name so we can refer to them, and a way to connect users to posts.
  fields: {
    name: text({validation: {isRequired: true}}),
    email: text({
      validation: {isRequired: true},
      isIndexed: 'unique',
      isFilterable: true,
    }),
    // The password field takes care of hiding details and hashing values
    password: password({validation: {isRequired: false}}),
    subjectId: text({isIndexed: 'unique'}),
    posts: relationship({ref: 'Post.author', many: true}),
    products: relationship({
      ref: 'Product.user',
      many: true,
    }),
  },
  // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
  ui: {
    listView: {
      initialColumns: ['id', 'name', 'email'],
    },
    hideCreate: () => true,
    hideDelete: () => true,
  },
})
