const db_service = require("../../../utils/db/service");
const { parse_response } = require("../../../utils/helper");
const { logger } = require("../../../utils/logger");
const config = require("../../../config/settings");
const jwt = require("jsonwebtoken");
const {
  success,
  failure,
  validation_failure,
} = require("../../../utils/response");
const {
  login_validator,
} = require("../../../validators/auth/login/login_validator");
const {
  check_partner_referral_code,
  check_user_and_partner_mapping,
} = require("./queries");

module.exports.login = async (req, res) => {
  try {
    // define variables
    let result;

    // assign inputs
    const inputs = req.body;

    // if no attribute found
    if (Object.keys(inputs).length == 0) {
      return failure(
        400,
        "Invalid payload, Request should contain atleast one attribute.",
        res
      );
    }

    // validate payload
    const errors = await login_validator(inputs);
    if (Object.keys(errors).length > 0 && errors.constructor == Object) {
      return validation_failure(
        422,
        "The request should not contain invalid data.",
        errors,
        res
      );
    }

    // check partner referral code
    result = parse_response(
      await db_service.excute_statement(
        check_partner_referral_code(inputs.partner_referral_code)
      )
    );

    

    // if result does not exist
    if (!result || (result && result.exist == 0)) {
      return failure(400, "Invalid partner_referral_code in the payload.", res);
    }

    // check user and partner mapping
    result = parse_response(
      await db_service.excute_statement(
        check_user_and_partner_mapping(
          inputs.partner_referral_code,
          inputs.user_name,
          inputs.password
        )
      )
    );

    // if result does not exist
    if (!result || (result && result.exist == 0)) {
      return failure(
        400,
        "Invalid user_name or password OR user does not mapped with partner.",
        res
      );
    }

    // if password matches then generate the jwt token
    jwt.sign(
      inputs,
      config.secret_key,
      { expiresIn: config.key_expiry },
      (err, token) => {
        if (err) {
          logger.error("Error while jwt sign in login ::: ", err);
          return failure(
            400,
            "Internal server error, Please try again later.",
            res
          );
        } else {
          const response = {
            message: "Login successful.",
            token: token,
          };
          return success(200, response, res);
        }
      }
    );
  } catch (e) {
    logger.error("Error in login ::: ", e);
    return failure(400, "Internal server error.", res);
  }
};
