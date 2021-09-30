import "express-async-errors";

import config, { app } from "./config";

app.listen(config.app.port, () => {
  console.log(`Server is running on port ${config.app.port}`);
});
