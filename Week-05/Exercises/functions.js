//Functions
/*Crear una función suma que reciba dos valores numéricos y retorne el resultado.
 Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
  dicha variable en la consola del navegador.*/

console.log("Functions");
console.log("");
//A
console.log("Ejercicio A");
console.log("");


function addition(a,b){
    return (a+b);
}
var add= addition(num1,num2);
var num1=12;
var num2=13;
    console.log(add);

//B
/*Copiar la función suma anterior y agregarle una validación para controlar si alguno
 de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que 
 uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log("Ejercicio B");
console.log("");

function addition2(a,b){
    
    if(isNaN(a) || isNaN(b)){
        alert("Is not a number");
        return(NaN);
    }
    else {
        return(a+b);
    }
   
}
var var1,var2
    var1="hola";
    var2=12;
var ale=(addition2(var1,var2));




//C
/*Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero
 si es un número entero.*/
    console.log("Ejercicio C");
    console.log("");

 function validateInteger(a){

    return(Number.isInteger(a));
   
 }
 var val= validateInteger(5.5);
 console.log(val);

 //D
 /*Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función
  del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar
   un alert con el error y retornar el número convertido a entero (redondeado).*/

   console.log("Ejercicio F");
   console.log("");

function addition3(a,b){
    if(isNaN(a) || isNaN(b)){
        alert("Is not a number");
        return(NaN);
    }
    else {
        if (validateInteger(a) != true) {
            alert("It's not an integer " + Math.round(a))

        }
        if (validateInteger(b) != true){
            alert("It's not an integer " + Math.round(b))
        }
        return(Math.round(a)+Math.round(b));
    }
}
var numm1,numm2,cuenta
    numm1= 7;
    numm2=8.5;
    cuenta=addition3(numm1,numm2);
    alert("They are integer " + cuenta);

//E
/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva
 función probando que todo siga funcionando igual que en el apartado anterior.*/

    console.log("Ejercicio E");
    console.log("");

 function val(a,b){

    return(addition3);
 }
 var numm1,numm2,cuenta
    numm1= 10;
    numm2=7.5;
    cuenta=addition3(numm1,numm2);
    console.log("It works" + " " + cuenta);
 




