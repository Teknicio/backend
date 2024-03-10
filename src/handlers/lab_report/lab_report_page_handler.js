const express = require("express");
const router = express.Router();
const { middleware } = require("../../middleware/middleware");
const body  = require("express-validator");
const { getPendingReport } = require("./pending_report/pending_report");
const { getCompletedReport } = require("./completed_report/completed_report");
const multer = require('multer');

const { uploadReport } = require("./upload_report/upload_report");
const { getAllReport } = require("./all_report/all_report");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'reports/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage });


// all the partners routes
router.get("/getPendingReport",middleware, getPendingReport);

router.get("/getCompletedReport",middleware, getCompletedReport);

router.get("/getAllReport",middleware, getAllReport);


router.post("/uploadReport", upload.single('file'), uploadReport);





module.exports = router;
