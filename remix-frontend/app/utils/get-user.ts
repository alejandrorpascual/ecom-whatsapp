import {Gql} from '../../graphql-zeus/zeus'

export async function getUser() {
  const {authenticatedItem} = await Gql('query')({
    authenticatedItem: {
      '...on User': {
        id: true,
        name: true,
        email: true,
      },
    },
  })

  return authenticatedItem
}
