
$(document).ready(function()
{
    $("#frm").validate({
        rules: {
    
    anm:"required",
  
    password: {
        required: true,
        minlength: 4
    },
    cpassword: {
        required: true,
        minlength: 4,
        equalTo: '[name="password"]'
    },
   
   
    
    email: {
        required: true,
        email: true,
        remote: {
            url: "http://127.0.0.1:3000/signup",
            type: "post",
            complete: function(data){
                if( data.responseText == "false" ) {
                    alert("Free");
                  }
             }
        },
    },
    agree: "required"
},
messages: {
   
    anm: "Please Enter the Name",
    
    
    password: {
        required: "Please Enter the password",
        minlength: "Your password must be at least 4 characters long"
    },
    
    cpassword: {
        required: "Please Enter a password",
        minlength: "Your password must be at least 4 characters long",
        equalTo: "Please enter the same password as above"
    },
    email:{ 
        
        required:"Please Enter the email address",
        remote: jQuery.format("{0} is already taken")
},
   
}
    })
    

})

