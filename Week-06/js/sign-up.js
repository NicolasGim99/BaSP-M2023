window.onload = function () {

    var name = document.getElementById("nameImp");
    var errorMsg = "";
    var lastName = document.getElementById("lastName");
    var dni = document.getElementById("dni");
    var phone = document.getElementById("phone");
    var dir = document.getElementById("dir");
    var local = document.getElementById("local");
    var pCode = document.getElementById("pCode");
    var mail = document.getElementById("mailSign");
    var emailExpression = new RegExp(/^[^@]+@[^@]+.[a-zA-Z]{2,}$/);
    var passW = document.getElementById("passw");
    var passW2 = document.getElementById("passw2");
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    var span3 = document.getElementById("span3");
    var span4 = document.getElementById("span4");
    var span5 = document.getElementById("span5");
    var span6 = document.getElementById("span6");
    var span7 = document.getElementById("span7");
    var span8 = document.getElementById("span8");
    var span9 = document.getElementById("span9");
    var span10 = document.getElementById("span10");
    var span11 = document.getElementById("span11");
    var button = document.getElementById("submit");
    var full = "";
     


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
        full = "Name: " + name.value + " ";
        return true;
    }


    name.addEventListener("blur" , function(){
        
        if(validateName(name)){
            name.classList.add("correct");
            name.classList.remove("error");
            span1.classList.remove("visible");
            console.log("Valid Name");
        } else {
            name.classList.add("error");
            name.classList.remove("correct");
            span1.classList.add("visible")
            console.log("Invalid Name");
        }
    });
 
    function validateLastName(lastName){
        if(lastName.value.length <= 3 || !validateLetter(lastName.value)){
            
            return false;
        } 
        full = full + "Last Name: " + lastName.value + " ";
        return true;
    }

    lastName.addEventListener("blur", function(){
        if(validateLastName(lastName)){
            lastName.classList.add("correct");
            lastName.classList.remove("error");
            span2.classList.remove("visible");
            console.log("Valid Last Name");
        } else {
            lastName.classList.add("error");
            lastName.classList.remove("correct");
            span2.classList.add("visible");
            console.log("Invalid Last Name");
        }
    });

    function validateDni(dni){
        if(dni.value.length < 7 || !validateNumber(dni.value)){
            return false;

        }
        full = full + "DNI: " + dni.value + " ";
        return true;
    }

    dni.addEventListener("blur", function(){
        if(validateDni(dni)){
            dni.classList.add("correct");
            dni.classList.remove("error");
            span3.classList.remove("visible");
            console.log("Valid DNI"); 
        } else {
            dni.classList.add("error");
            dni.classList.remove("correct");
            span3.classList.add("visible");
            console.log("Invalid DNI");
        }
    });

    function validatePhone(phone){
        if(phone.value.length <= 9 || phone.value.length >= 11 || !validateNumber(phone.value)){
            return false;

        }
        full = full + "Phone Number: " +  phone.value + " ";
        return true;
    }

    phone.addEventListener("blur", function(){
        if(validatePhone(phone)){
            phone.classList.add("correct");
            phone.classList.remove("error");
            span5.classList.remove("visible");
            console.log("Valid Phone"); 
        } else {
            phone.classList.add("error");
            phone.classList.remove("correct");
            span5.classList.add("visible");
            console.log("Invalid Phone");
        }
    });

    function validateDir(dir){
        if(dir.value.length < 5){
            return false;

        }
        full = full + "Address: " + dir.value + " ";
        return true;
        
    }

    dir.addEventListener("blur", function(){
        if(validateDir(dir)){
            dir.classList.add("correct");
            dir.classList.remove("error");
            span6.classList.remove("visible");
            console.log("Valid Address"); 
        } else {
            dir.classList.add("error");
            dir.classList.remove("correct");
            span6.classList.add("visible");
            console.log("Invalid Address");
        }
    });

    function validatelocal(local){
        if(local.value.length < 3){
            return false;

        }
        full = full + "Location: "  + local.value + " ";
        return true;
    }

    local.addEventListener("blur", function(){
        if(validatelocal(local)){
            local.classList.add("correct");
            local.classList.remove("error");
            span7.classList.remove("visible");
            console.log("Valid Location"); 
        } else {
            local.classList.add("error");
            local.classList.remove("correct");
            span7.classList.add("visible");
            console.log("Invalid Location");
        }
    });

    function validatepCode(pCode){
        if(pCode.value.length < 4 || pCode.value.length > 5 || !validateNumber(pCode.value)){
            return false;

        }
        full = full + "Postal Code:" + pCode.value + " ";
        return true;
    }

    pCode.addEventListener("blur", function(){
        if(validatepCode(pCode)){
            pCode.classList.add("correct");
            pCode.classList.remove("error");
            span8.classList.remove("visible");
            console.log("Valid Postal Code"); 
        } else {
            pCode.classList.add("error");
            pCode.classList.remove("correct");
            span8.classList.add("visible");
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
        full = full + "E-Mail: " + mail.value + " ";
        return true;

    }
   
    mail.addEventListener("blur", function() {
       if(validateMail(mail)){
        mail.classList.add("correct");
        mail.classList.remove("error");
        span9.classList.remove("visible");
        console.log("Valid E-Mail");
       } else {
        mail.classList.add("error");
        mail.classList.remove("correct");
        span9.classList.add("visible");
        console.log(errorMsg);
       }
    });
    mail.addEventListener("focus" , function() {
    })

    function validatePass(passW){
        if(passW.value.length <= 7 || !validateNumber(passW.value)){
            return false;

        }
        full = full + "Password: " + passW.value + " ";
        return true;
    }
 
    passW.addEventListener("blur", function() {
        if(validatePass(passW)){
            passW.classList.add("correct");
            passW.classList.remove("error");
            span10.classList.remove("visible");
            console.log("Valid password");
            
        } else {
            passW.classList.add("error");
            passW.classList.remove("correct");
            span10.classList.add("visible");
            console.log("Invalid password");
        }
    });

    function validatePass(passW2){
        if(passW2.value.length <= 7 || !validateNumber(passW2.value)){
            return false;

        }
        full = full + "Password Validation: " + passW2.value + " ";
        return true;
    }
 
    passW2.addEventListener("blur", function() {
        if(validatePass(passW2)){
            passW2.classList.add("correct");
            passW2.classList.remove("error");
            span11.classList.remove("visible");
            console.log("Valid password");
            
        } else {
            passW2.classList.add("error");
            passW2.classList.remove("correct");
            span11.classList.add("visible");
            console.log("Invalid password");
        }
    });

    button.addEventListener("click" , function(e){
        e.preventDefault();
        alert(full);
        name.value = "";
        lastName.value = "";
        dni.value = "";
        phone.value = "";
        dir.value = "";
        local.value = "";
        pCode.value = "";
        mail.value ="";
        passW.value = "";
        passW2.value = "";
    });
   
    
}