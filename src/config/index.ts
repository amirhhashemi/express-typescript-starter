import dotenv from "dotenv";
dotenv.config();

const port = parseInt(process.env.PORT) || 4000;
const isProd = process.env.NODE_ENV === "production";

export * from "./app";

export default {
  app: {
    port,
    isProd,
  },
};
