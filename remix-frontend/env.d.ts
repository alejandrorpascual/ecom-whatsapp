declare namespace NodeJS {
  interface DotEnvFile {
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    GOOGLE_CLIENT_CALLBACK_URL: string
    SESSION_SECRET: string
  }
  interface ProcessEnv extends Partial<DotEnvFile> {}
}

