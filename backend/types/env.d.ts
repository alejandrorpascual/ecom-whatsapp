declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    FRONTEND_URL: string;
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_KEY: string;
    CLOUDINARY_SECRET: string;
  }
}