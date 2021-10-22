$(document).ready(function()
            {
                $("#frm").validate({
                    rules: {
				name: "required",
				password: {
					required: true,
					minlength: 5
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
					url: "/validateMobile",
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
						url: "/validateEmail",
					
						
					},
				},
				// agree: "required"
			},
			messages: {
				name: "Please enter the Name",
			
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
                
			}
                });
                
            
            })