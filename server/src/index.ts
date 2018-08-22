import terminus from "@godaddy/terminus";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import http from "http";
import path from "path";
import { onHealthCheck, onSignal } from "./health";

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
const env = process.env.NODE_ENV || "development";
const app = express();

// handles setting secure headers
app.use(helmet());
// handles compression
app.use(compression());
// handles cors headers
app.use(cors());
// parse request bodies
app.use(bodyParser.json());

const server = http.createServer(app);

// handles graceful shutdown and healthcheck
terminus(server, {
  healthChecks: {
    "/healthcheck": onHealthCheck,
  },
  onSignal,
  signal: "SIGINT",
});

// setup the ui
app.use(express.static(path.join(__dirname, "../", "../", "build")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../", "../", "build", "index.html"));
});

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`); //tslint:disable-line
  console.log(`Running in ${env} mode`); //tslint:disable-line
});
