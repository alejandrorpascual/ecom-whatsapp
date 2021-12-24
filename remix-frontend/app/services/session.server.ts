import {createCookieSessionStorage, redirect} from 'remix'

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET env varbiable must be set')
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: [sessionSecret],
    secure: process.env.NODE_ENV === 'production',
  },
})

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await sessionStorage.getSession()
  session.set('userId', userId)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
    },
  })
}

export function getUserSession(request: Request) {
  return sessionStorage.getSession(request.headers.get('Cookie'))
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') {
    return null
  }
  return userId
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname,
) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
    throw redirect(`/login?${searchParams}`)
  }

  return userId
}

export async function getUser(request: Request) {
  const userId = await getUserId(request)
  if (typeof userId !== 'string') {
    return null
  }

  try {
    //TODO: getUser from backend
  } catch (e) {
    throw logout(request)
  }
}

interface LoginForm {
  type: 'standard'
  email: string
  password: string
}
interface Oauth {
  type: 'oauth'
  subjectId: string
}
interface User {
  id: string
  name: string
  email: string
}

//TODO:: implement getUserFromDB
declare function getUserFromDB({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<User | null>

//TODO: implement getUserFromOauth
declare function getUserFromOauth({
  subjectId,
}: {
  subjectId: string
}): Promise<User | null>

export async function login(
  userInput: LoginForm | Oauth,
): Promise<User | null> {
  switch (userInput.type) {
    case 'standard': {
      const user = await getUserFromDB({
        email: userInput.email,
        password: userInput.password,
      })
      if (!user) return null
      return user
    }
    case 'oauth': {
      const user = await getUserFromOauth({subjectId: userInput.subjectId})
      if (!user) return null
      return user
    }
  }
}

export async function register(userInput: LoginForm | Oauth): Promise<User> {
  switch (userInput.type) {
    case 'standard': {
      // TODO: implement Gql create user with email and password
    }
    case 'oauth': {
      //TODO: implement Gql create user with oauth (google)
    }
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request)
  return redirect('/login', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  })
}
