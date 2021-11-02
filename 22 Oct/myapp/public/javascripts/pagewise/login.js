$(document).ready(function()
            {
                $("#frm").validate({
                    rules: {
				
				password: {
					required: true,
					
				},
			
               
				emailorphone: {
					required: true,
					
				
				},
				// agree: "required"
			},
			messages: {
				
			
				password: {
					required: "Please Enter a password",
					
				},
                

				emailorphone: 
                {
                    required:"Please enter the email or phone",
					
					
                    
            },
               
			}
                });
                
            
            })