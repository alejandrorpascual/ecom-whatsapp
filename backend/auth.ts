/*
Welcome to the auth file! Here we have put a config to do basic auth in Keystone.

`createAuth` is an implementation for an email-password login out of the box.
`statelessSessions` is a base implementation of session logic.

For more on auth, check out: https://keystonejs.com/docs/apis/auth#authentication-api
*/

import {createAuth} from '@opensaas/keystone-nextjs-auth'
import GoogleAuth from '@opensaas/keystone-nextjs-auth/providers/google'

// See https://keystonejs.com/docs/apis/session#session-api for the session docs
import {statelessSessions} from '@keystone-6/core/session'
import 'dotenv/config'

let sessionSecret = process.env.SESSION_SECRET

// Here is a best practice! It's fine to not have provided a session secret in dev,
// however it should always be there in production.
if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production',
    )
  } else {
    throw new Error('should set a DEV COOKIE SECRET, as an env variable')
  }
}

// Here we define how auth relates to our schemas.
// What we are saying here is that we want to use the list `User`, and to log in
// we will need their email and password.
const {withAuth} = createAuth({
  listKey: 'User',
  identityField: 'subjectId',
  sessionData: 'id name email',
  autoCreate: true,
  userMap: {subjectId: 'id', name: 'name'},
  accountMap: {},
  profileMap: {email: 'email'},
  keystonePath: '/admin',
  sessionSecret,
  providers: [
    GoogleAuth({
      clientId: process.env.GOOGLE_CLIENT_ID || 'GoogleClientID',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'GoogleClientSecret',
    }),
  ],
})

// This defines how long people will remain logged in for.
// This will get refreshed when they log back in.
let sessionMaxAge = 60 * 60 * 24 * 30 // 30 days

// This defines how sessions should work. For more details, check out: https://keystonejs.com/docs/apis/session#session-api
const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
})

export {withAuth, session}
