const { validationResult } = require("express-validator");
const { logger } = require("../../../utils/logger");
const { success, failure } = require("../../../utils/response");
const { parse_response } = require("../../../utils/helper");
const db_service = require("../../../utils/db/service");

const { get_completed_report } = require("./queries");
module.exports.getCompletedReport = async (req, res) => {
  try {
    console.log(req.url);

    let result;
    result = parse_response(
      await db_service.excute_statement(
        get_completed_report()
      )
    );

    // return success
    return success(200, result, res);
  } catch (e) {
    console.log(e);
    logger.error("Error in customer fetch data ::: ", e);
    return failure(400, "Internal server error.", res);
  }
};
