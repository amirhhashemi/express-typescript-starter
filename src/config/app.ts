import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { rootRouter } from "../routes";
import { config } from "./config";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan(!config.app.isProd ? "dev" : "combined"));

app.use("/api/v1", rootRouter);

export { app };
