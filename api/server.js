const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../connectors/auth-router.js");
const jokesRouter = require("../connectors/jokes-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/jokes", jokesRouter);

server.get("/", (req, res) => {
  res.send("Server is hot!");
});

module.exports = server;
