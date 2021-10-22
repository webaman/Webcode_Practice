$(document).ready(function()
            {
                $("#frm").validate({
                    rules: {
				name: "required",
				password: {
					required: true,
					minlength: 5
				},
                mobile:
                {
                    required:true,
                 minlength:10
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
                   
				},
				agree: "required"
			},
			messages: {
				name: "Please enter the Name",
			
			mobile: "Please enter the Mobile No.",
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},
                
				
				email: 
                {
                    required:"Please enter the email address",
                    
            },
                age: {
					required: "Please Enter Age",
					min: "Only Maximum 18 is Allowed",
                    max: "Only Allowed below 100"
					
				},
                
			}
                });
                
            
            })