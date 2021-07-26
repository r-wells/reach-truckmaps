import express from "express";
import config from "config";
import log from "./logger";
import connect from "./db/connect";
import routes from "./routes";
import { deserializeUser } from "./middleware";
import cors from "cors";

// const port = 3000;
const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
app.use(deserializeUser);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.listen(port, host, () => {
//   log.info(`Server listing at http://${host}:${port}`);

// });

app.listen(3000, () => {
  console.log('Listening on port 3000');
  connect();
  
  routes(app);
});
