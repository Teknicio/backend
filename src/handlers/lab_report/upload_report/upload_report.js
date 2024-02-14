const { validationResult } = require("express-validator");
const { logger } = require("../../../utils/logger");
const { success, failure } = require("../../../utils/response");
const { parse_response } = require("../../../utils/helper");
const db_service = require("../../../utils/db/service");
const {
   update_report_status,
} = require("./queries");

module.exports.uploadReport = async (req, res) => {
  if (!req.file) {
   
    return res.status(400).json({ error: 'No file uploaded' });
  }

  await db_service.excute_statement(
    update_report_status({filename:req.file.filename, id:req.body.id})
  );

  res.json({ message: 'File uploaded successfully', filename: req.file.filename });
};
