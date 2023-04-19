/*Arrays*/

console.log("");
console.log("ARRAYS");
//A
/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"
, "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
(utilizar console.log).*/

console.log("Part A");
console.log("");
var months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]+ " " + months[10]);


//B
/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log("Part B");
console.log("");
months.sort();
console.log(months);


//C
/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log("Part C");
console.log("");

months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.unshift("Calendar");
months.push("2023");
console.log(months);

//D
/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log("Part D");
console.log("");
months.shift();
months.pop();
console.log(months);

//E
/*Invertir el orden del array (utilizar reverse).*/

console.log("Part E");
console.log("");
months.reverse();
console.log(months);

//F
/*Unir todos los elementos del array en un único string donde cada mes este separado por un guión
 - (utilizar join).*/

console.log("Part F");
console.log("");


all = months.join("-");
console.log(all);

//G
/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

console.log("Part G");
console.log("");

var copyMonth=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var slice = copyMonth.slice(4,10);
console.log(slice);



