const body  = require("express-validator");



 module.exports.registerValidator = ()=>{

    console.log("register validation");
    
    return [

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

];};



