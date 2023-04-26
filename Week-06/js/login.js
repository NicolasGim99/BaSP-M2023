window.onload = function () {
    
    var mail = document.getElementById("mail");
    var emailExpression = new RegExp(/^[^@]+@[^@]+.[a-zA-Z]{2,}$/);
    var passw = document.getElementById("pass");  
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var span = document.getElementById("invalid-mail");
    var spanP = document.getElementById("invalid-value");
    var errorMsg = "";
    var full2 = "";
   /* mail.addEventListener("blur", function(){
        if(!emailExpression.test(mail.value)){
            span.classList.add("visible");
        }
    });*/

    function validateMail(mail){
        if(!emailExpression.test(mail.value)){
            errorMsg = "Invalid Mail";
            return false;  
        }
       if(mail.value.length >= 50){
            errorMsg = "The E-mail typed is too long";
            return false;
        }
        return true;

    }
   
    mail.addEventListener("blur", function() {
       if(validateMail(mail)){
        mail.classList.add("correct");
        mail.classList.remove("error");
        span.classList.remove("visible");
        console.log("Valid E-Mail");
        full2 = "E-mail: " + mail.value;
       } else {
        mail.classList.add("error");
        mail.classList.remove("correct");
        span.classList.add("visible");
        console.log(errorMsg);
       }
    });
    mail.addEventListener("focus" , function() {
        span.classList.remove("visible");
    })

    function validatePass(passw){
        if(passw.value.length < 8 || passw.value.length > 20){
            console.log("Invalid password");
            passw.value = "";
            return false;
        }
        return true;
    }
    passw.addEventListener("blur", function() {
        if(validatePass(passw)){
            passw.classList.add("correct");
            passw.classList.remove("error");
            spanP.classList.remove("visible");
            full2 = full2 + "Password: " + passw.value;
            console.log("Valid Password");
        } else {
            passw.classList.add("error");
            passw.classList.remove("correct");
            spanP.classList.add("visible");
            console.log("Invalid Password");
        }
        button2.addEventListener("click" , function(e){
            e.preventDefault();
            mail.value = "";
            passw.value =""
        });
    });


    
    
    
    
    
    
    
    
}



