
const {check} = require('express-validator')


module.exports = {



    validateEmail : check('email').isEmail().withMessage('Email is required')
    

    ,
	
validateFirstName : check('fn')
	// To delete leading and triling space
	.trim()
	
	
	.isLength({min:2})
	// Custom message
	.withMessage('First Name must be of 2 characters ')

	

	,validatePassword: check('password')
	
	.isLength({min:6})
	// Custom message
	.withMessage('Password must be of 6 characters')

	// Name must contains only alphabets
	
}
