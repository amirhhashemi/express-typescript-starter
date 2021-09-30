import "express-async-errors";
import { Request, Response } from "express";

import config, { app } from "./config";

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(config.app.port, () => {
  console.log(`Server is running on port ${config.app.port}`);
});
