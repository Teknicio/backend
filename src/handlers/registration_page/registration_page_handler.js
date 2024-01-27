const express = require("express");
const router = express.Router();
const { middleware } = require("../../middleware/middleware");
const body  = require("express-validator");

const { register } = require("./register/register");
const { registerValidator } = require("../../validators/register/register_validator");
const { fetch_doctor_lab } = require("./lab_and_doctor/fetch_doctor_lab");


// all the partners routes
router.post("/register",middleware, 


[

    body.body('name', 'Cannot be empty').not().isEmpty(),
    body.body('mobile', 'Cannot be empty').not().isEmpty(),
    body.body('age', 'Cannot be empty').not().isEmpty(),
    body.body('gender', 'Cannot be empty').not().isEmpty(),
    body.body('doctor_id', 'Cannot be empty').not().isEmpty(),
    body.body('doctor_name', 'Cannot be empty').not().isEmpty(),
    body.body('tests', 'Cannot be empty').not().isEmpty(),
    body.body('total_payment', 'Cannot be empty').not().isEmpty(),
    body.body('discount_type', 'Cannot be empty').not().isEmpty(),
    body.body('discount_value', 'Cannot be empty').not().isEmpty(),
    body.body('final_payment', 'Cannot be empty').not().isEmpty(),
    body.body('payment_status', 'Cannot be empty').not().isEmpty(),
    body.body('payment_mode', 'Cannot be empty').not().isEmpty(),
    body.body('paid_amount', 'Cannot be empty').not().isEmpty(),
    body.body('mobile', 'Cannot be empty').isMobilePhone(),

]


,
checkValidationRegister,


 register);


 router.get("/getDoctorAndLab", middleware, fetch_doctor_lab);

 function checkValidationRegister(req, res, next){
    const result = body.validationResult(req);
    if (result.isEmpty()) {
        return next();
    }

    res.status(422).json({ errors: result.array() });
}

 

module.exports = router;
