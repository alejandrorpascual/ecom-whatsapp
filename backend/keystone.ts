import {config} from '@keystone-6/core'
import {lists} from './schema'
import {withAuth, session} from './auth'

const databaseURL = process.env.DATABASE_URL || 'file:./keystone.db'
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:4444'

export default withAuth(
  config({
    server: {
      cors: {
        origin: [frontendUrl],
        credentials: true,
      },
    },
    db: process.env.DATABASE_URL
      ? {provider: 'postgresql', url: process.env.DATABASE_URL}
      : {
          provider: 'sqlite',
          url: databaseURL,
          async onConnect(context) {
            console.log('Connected to the database!')
            if (process.argv.includes('--seed-data')) {
              // await insertSeedData(context)
            }
          },
        },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: context => !!context.session?.data,
    },
    lists,
    session,
  }),
)
