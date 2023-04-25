window.onload = function () {

    var name = document.getElementById("nameImp");
    var errorMsg = "";
    var span = document.getElementById("invalid-mail");
    var lastName = document.getElementById("lastName");
    var dni = document.getElementById("dni");
    var phone = document.getElementById("phone");
    var dir = document.getElementById("dir");
    var local = document.getElementById("local");
    var pCode = document.getElementById("pCode");
    var mail = document.getElementById("mailSign");
    var emailExpression = new RegExp(/^[^@]+@[^@]+.[a-zA-Z]{2,}$/);
    var passw2 = document.getElementById("passSign");
    var passValidate = document.getElementById("passValidate");
    var spans = document.getElementsByTagName("span");
    
    function validateLetter(string){
        for(i = 0; i < string.length; i++){
            var valNum = string.charCodeAt(i);
            if (!(valNum >= 65 && valNum <=90 || valNum >= 97 && valNum <= 122)){
                return false;
            } 
        } 
        return true;
    }       
    
    function validateNumber(number){
        for(i = 0; i < number.length; i++){
            var valNum = number.charCodeAt(i);
            if (!(valNum >= 48 && valNum <=57)){
                return false;
            } 
        } 
        return true;
    }       

    function validateName(name){
        
        if(name.value.length <= 3 || !validateLetter(name.value)){
            /* errorMsg = "Invalid Password"; */
            console.log("False");
            return false;
        }
        console.log("True");
        return true;
    }


    name.addEventListener("blur" , function(){
        
        if(validateName(name)){
            name.classList.add("correct");
            name.classList.remove("error");
            spans.classList.remove("visible"); 
            console.log("Valid Name");
        } else {
            name.classList.add("error");
            name.classList.remove("correct");
            spans = "Invalid Name"; 
            spans.classList.add("visible"); 
            console.log("Invalid Name");
        }
    });
 
    function validateLastName(lastName){
        if(lastName.value.length <= 3 || !validateLetter(lastName.value)){
            
            return false;
        } 
        return true;
    }

    lastName.addEventListener("blur", function(){
        if(validateLastName(lastName)){
            lastName.classList.add("correct");
            lastName.classList.remove("error");
            console.log("Valid Last Name");
        } else {
            lastName.classList.add("error");
            lastName.classList.remove("correct");
            console.log("Invalid Last Name");
        }
    });

    function validateDni(dni){
        if(dni.value.length < 7 || !validateNumber(dni.value)){
            return false;

        }
        return true;
    }

    dni.addEventListener("blur", function(){
        if(validateDni(dni)){
            dni.classList.add("correct");
            dni.classList.remove("error");
            console.log("Valid DNI"); 
        } else {
            dni.classList.add("error");
            dni.classList.remove("correct");
            console.log("Invalid DNI");
        }
    });

    function validatePhone(phone){
        if(phone.value.length < 10 || !validateNumber(phone.value)){
            return false;

        }
        return true;
    }

    phone.addEventListener("blur", function(){
        if(validatePhone(phone)){
            phone.classList.add("correct");
            phone.classList.remove("error");
            console.log("Valid Phone"); 
        } else {
            phone.classList.add("error");
            phone.classList.remove("correct");
            console.log("Invalid Phone");
        }
    });

    function validateDir(dir){
        if(dir.value.length < 5){
            return false;

        }
        return true;
    }

    dir.addEventListener("blur", function(){
        if(validateDir(dir)){
            dir.classList.add("correct");
            dir.classList.remove("error");
            console.log("Valid Address"); 
        } else {
            dir.classList.add("error");
            dir.classList.remove("correct");
            console.log("Invalid Address");
        }
    });

    function validatelocal(local){
        if(local.value.length < 3){
            return false;

        }
        return true;
    }

    local.addEventListener("blur", function(){
        if(validatelocal(local)){
            local.classList.add("correct");
            local.classList.remove("error");
            console.log("Valid Location"); 
        } else {
            local.classList.add("error");
            local.classList.remove("correct");
            console.log("Invalid Location");
        }
    });

    function validatepCode(pCode){
        if(pCode.value.length < 4 || pCode.value.length > 5 || !validateNumber(pCode.value)){
            return false;

        }
        return true;
    }

    pCode.addEventListener("blur", function(){
        if(validatepCode(pCode)){
            pCode.classList.add("correct");
            pCode.classList.remove("error");
            console.log("Valid Postal Code"); 
        } else {
            pCode.classList.add("error");
            pCode.classList.remove("correct");
            console.log("Invalid Postal Code");
        }
    });

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

    function validatePass(passw2){
        if(passw2.value.length < 8 || passw2.value.length > 20){
            console.log("Invalid passw2ord");
            passw2.value = "";
            return false;
        }
        return true;
    }
    passw2.addEventListener("blur", function() {
        if(validatePass(passw2)){
            passw2.classList.add("correct");
            passw2.classList.remove("error");
            spanP.classList.remove("visible");
            console.log("Valid passw2ord");
            
        } else {
            passw2.classList.add("error");
            passw2.classList.remove("correct");
            spanP.classList.add("visible");
            console.log("Invalid password");
            passw2 = ""
        }
    });
    function validatePass2(passValidate){
        if(passValidate.value != passw2){
            console.log("The password doesn't match");
            passValidate.value = "";
            return false;
        }
        return true;
    }
    passValidate.addEventListener("blur", function(){
        if(validatePass2(passValidate)){
            passValidate.classList.add("correct");
            passValidate.classList.remove("error");
            spanP.classList.remove("visible");
            console.log("Valid password");
        } else {
            passValidate.classList.add("error");
            passValidate.classList.remove("correct");
            spanP.classList.add("visible");
            console.log("Invalid password");
        }
    })
    
}