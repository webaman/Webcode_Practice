$(document).ready(function()
            {
                $("#frm").validate({
                    rules: {
				firstname: "required",
				lastname:'required',
				password: {
					required: true,
					minlength: 5,
					strong_password:true
				},
			
				cpassword: {
					required: true,
					minlength: 5,
					equalTo: '[name="password"]'
				},
                mobile:
                {
                    required:true,
                 minlength:10,
				 maxlength:10,
				 remote: {
					url: "/validate/mobile",
				},
				
                },
                age:
                {
               required:true,
               min:18,
               max:100
                },
				
				email: {
					required: true,
					email: true,
					remote: {
						url: "/validate/email",
						
						// data: {
						// 	name: function() {
						// 	  return $( "#name" ).val();
						// 	}
						//   }
						  
					},
				},
				// agree: "required"
			},
			type: {
                required: true
            },
			messages: {
				firstname: "Please enter the  First Name",
				lastname: "Please enter the  Last Name",
				mobile: {
					required: "Please Enter the Mobile No.",
					minlength: "Mobile No. must be 10 Digit",
					maxlength: "Mobile No. must be 10 Digit",
					remote:"Mobile No is already Taken",
				},
				password: {
					required: "Please Enter a password",
					minlength: "Your password must be at least 5 characters long"
				},
                
				cpassword: {
					required: "Please Enter a password",
					minlength: "Your password must be at least 4 characters long",
					equalTo: "Please enter the same password as above"
				},
				email: 
                {
                    required:"Please enter the email address",
					remote: "email already taken"
					
                    
            },
                age: {
					required: "Please Enter Age",
					min: "Only Maximum 18 is Allowed",
                    max: "Only Allowed below 100"
					
				},
				hobbies:
				{
					required:'Please Select Hobbies'
				}
                
			}
                });
                
				$.validator.addMethod("strong_password", function (value, element) {
					let password = value;
					if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&])(.{8,20}$)/.test(password))) {
						return false;
					}
					return true;
				}, function (value, element) {
					let password = $(element).val();
					if (!(/^(.{4,20}$)/.test(password))) {
						return 'Password must be between 4 and 20 characters long.';
					}
					else if (!(/^(?=.*[A-Z])/.test(password))) {
						return 'Password must contain atleast one uppercase.';
					}
					else if (!(/^(?=.*[a-z])/.test(password))) {
						return 'Password must contain atleast one lowercase.';
					}
					else if (!(/^(?=.*[0-9])/.test(password))) {
						return 'Password must contain atleast one digit.';
					}
					else if (!(/^(?=.*[@#$%&])/.test(password))) {
						return "Password must contain special characters from @#$%&.";
					}
					return false;
				});
            
            })