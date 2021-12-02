import {list} from '@keystone-6/core'
import {relationship, text} from '@keystone-6/core/fields'

// Our final list is the tag list. This field is just a name and a relationship to posts
export const Tag = list({
  ui: {
    isHidden: true,
  },
  fields: {
    name: text(),
    posts: relationship({ref: 'Post.tags', many: true}),
  },
})
