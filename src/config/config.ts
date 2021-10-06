import dotenv from "dotenv";
dotenv.config();

const port = parseInt(process.env.PORT as string) || 4000;
const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

export const config = {
  app: {
    port,
    isProd,
    isDev,
    isTest,
  },
};
