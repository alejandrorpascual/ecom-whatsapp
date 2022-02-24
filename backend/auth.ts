import {createAuth} from '@keystone-6/auth'
import {statelessSessions} from '@keystone-6/core/session'
import 'dotenv/config'
import {permissionsList} from './schemas/fields'

const sessionSecret = process.env.SESSION_SECRET

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production',
    )
  } else {
    throw new Error('should set a DEV COOKIE SECRET, as an env variable')
  }
}

const {withAuth} = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in inital roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      // await sendPasswordResetEmail(args.token, args.identity)
    },
  },
  sessionData: `id name email role { ${permissionsList.join(' ')} }`,
})

const sessionMaxAge = 60 * 60 * 24 * 30 // 30 days

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
})

export {withAuth, session}
