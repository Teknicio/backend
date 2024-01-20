const jwt = require("jsonwebtoken");
const config = require("../config/settings");
const { failure } = require("../utils/response");
const { logger } = require("../utils/logger");

/**
 * @description method to verify the jwt token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns success or failure
 */
module.exports.middleware = (req, res, next) => {
  try {
    // get the bearer token
    const bearer_token = req.headers["authorization"];

    // if bearer token not found
    if (typeof bearer_token == undefined) {
      return failure(403, "A token is required for authentication.", res);
    }

    // verify the bearer token
    const token = bearer_token.split(" ")[1];
    const decoded = jwt.verify(token, config.secret_key);
    req.user = decoded;

    console.log("Verified");

    // return next
    return next();
  } catch (e) {
    logger.error("Error in checking token validation ::: ", e);
    return failure(401, "Invalid token.", res);
  }
};
