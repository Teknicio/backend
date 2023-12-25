const { configure, getLogger } = require("log4js");

// create log config
configure({
  appenders: {
    console: { type: "stdout", layout: { type: "colored" } },
    dateFile: {
      type: "dateFile",
      filename: "logs/app.log",
      layout: { type: "basic" },
      compress: true,
      numBackups: 14,
      keepFileExt: true,
    },
  },
  categories: {
    default: {
      appenders: ["console", "dateFile"],
      level: "info",
    },
  },
});

// define logger
const logger = getLogger();

module.exports = { logger };
