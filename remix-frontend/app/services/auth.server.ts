import {Authenticator} from 'remix-auth'
import {Gql} from '../../graphql-zeus/zeus'
import {GoogleProfile, GoogleStrategy} from './google-strategy.server'
import {sessionStorage} from './session.server'

type User = {
  id: string
  email: string
  name: string
}

export const authenticator = new Authenticator<User>(sessionStorage)

export async function login(profile: GoogleProfile) {
  const {user} = await Gql('query')({
    user: [
      {
        where: {
          id: profile.id,
        },
      },
      {
        id: true,
        name: true,
        email: true,
      },
    ],
  })

  // TODO: re-implement
  if (!user || !user.email || !user.id || !user.name) {
    return null
  }

  return user
}

authenticator.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_CALLBACK_URL,
    },
    // @ts-ignore
    async (_, __, ___, profile) => login(profile),
  ),
)
