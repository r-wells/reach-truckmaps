import mongoose from "mongoose";
import config from "config";
import log from "../logger";
import process from "process";

function connect() {
  const dbUri = process.env.MONGO_URI || config.get("dbUri") as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
}

export default connect;
