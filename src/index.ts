import express, { Request, Response } from "express";
import config from "./config";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(config.app.port, () => {
  console.log(`Server is running on port ${config.app.port}`);
});
