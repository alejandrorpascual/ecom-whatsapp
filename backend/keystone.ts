import {config} from '@keystone-6/core'
import {lists} from './schema'
import {withAuth, session} from './auth'
import {BaseKeystoneTypeInfo, KeystoneContext} from '@keystone-6/core/types'
import {insertSeedData} from './seed-data/seed'

const databaseURL = process.env.DATABASE_URL || 'file:./keystone.db'
const frontendURL = process.env.FRONTEND_URL || 'http://localhost:4444'

type OnConnect =
  | ((args: KeystoneContext<BaseKeystoneTypeInfo>) => Promise<void>)
  | undefined

const onConnect: OnConnect = async context => {
  console.log('Connected to the database! 🔌 🗃️')
  if (process.argv.includes('--seed-data')) {
    await insertSeedData(context)
  }
}

export default withAuth(
  config({
    server: {
      port: 4444,
      cors: {
        origin: [frontendURL],
        credentials: true,
      },
    },
    db: process.env.DATABASE_URL
      ? {
          provider: 'postgresql',
          url: process.env.DATABASE_URL,
          onConnect,
        }
      : {
          provider: 'sqlite',
          url: databaseURL,
          onConnect,
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
