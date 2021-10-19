import "express-async-errors";

import config, { app } from "./config";

app.listen(config.app.port, () => {
  console.log(`Server is running at port ${config.app.port}`);
});
