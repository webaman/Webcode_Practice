$(document).ready(function()
            {
                $("#frm").validate({
                    rules: {
				
				password: {
					required: true,
					
				},
			
               
				email: {
					required: true,
					email: true,
				
				},
				// agree: "required"
			},
			messages: {
				
			
				password: {
					required: "Please Enter a password",
					
				},
                

				email: 
                {
                    required:"Please enter the email address",
					
					
                    
            },
               
			}
                });
                
            
            })