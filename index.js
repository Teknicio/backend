const express = require("express");
const body_parser = require("body-parser");
const app = express();

// logger
const { logger } = require("./src/utils/logger");

// routes
const test_route = require("./test_handler");
const auth_route = require("./src/handlers/auth/auth_handler");
const partner_route = require("./src/handlers/partners/partners_handler");

// default server port
const SERVER_PORT = 3000;

// request body parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

// use routes
app.use(test_route);
app.use(auth_route);
app.use(partner_route);

// app server
const server = app.listen(SERVER_PORT, () => {
  logger.info(`Server is running on port ${SERVER_PORT}`);
});

module.exports = server;
