//FOR
console.log("For");
console.log("");

//A-B-C
console.log("Ejercicio A-B-C");
console.log("");

/* A-Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for
 de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

 /*B-Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
  alerta por cada palabra modificada.*/

  /*C-Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
   recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
    Al final mostrar una única alerta con la cadena completa.*/



var list=["limón","fresa","mango","melón","peras"];
var place=0;
var sentences="";
    for (var i=0; i<=4; i++){

        alert(list[place]);
        var a=list[place];
        var upp=a.toUpperCase();
        var upp1=upp.substring(0,1);
        var upp2=upp1+a.substring(1,5);
        alert(upp2);
        sentences=sentences+list[place]+" ";
        place++;

    }
    alert(sentences);

//D

/*Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número
 de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos
  dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador
   el array final (utilizar console.log).*/
   console.log("Ejercicio D");
   console.log("");

var empty=[];
var numb=0;
    for (var e=0; e<=9; e++){
        empty.unshift(numb);
        numb++;
    }
    empty.sort();
    console.log(empty);
