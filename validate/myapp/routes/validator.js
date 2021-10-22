
const {check} = require('express-validator')


module.exports = {



    validateAadhar : check('ac').isNumeric().withMessage('Aadhar No Must contain only digit').isLength({ min: 12, max: 12 }).withMessage('Aadhar No Must contain 16 digit')
    

    
,	
validatePAN : check('pc').notEmpty().withMessage('Not Empty')
	.matches('[A-Z]{5}[0-9]{4}[A-Z]{1}').withMessage('PAN invalid ')
	// Custom message
,
validateIMN : check('mno').isNumeric().withMessage('Mobile No Must contain only digit').isLength({ min: 10, max: 10 }).withMessage('Mobile No Must contain 10 digit').matches('^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$').withMessage('Mobile No. is Invalid ')
    

    
,	
	
validatePassport : check('pno').notEmpty().withMessage('Not Empty').matches('[A-Z]{1}[0-9]{7}').withMessage('Passport Number invalid ')
    

    
,
validateGST : check('gst').notEmpty().withMessage('Not Empty').matches('^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$').withMessage('GST Number invalid ')
    

    
,	
validatePassword : check('pass').notEmpty().withMessage('Not Empty').matches('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})').withMessage('Password is Not Strong ')
    

    
,	

// 	,validatePassport: check('password')
	
// 	.isLength({min:6})
// 	// Custom message
// 	.withMessage('Password must be of 6 characters')

	// Name must contains only alphabets
	
}
