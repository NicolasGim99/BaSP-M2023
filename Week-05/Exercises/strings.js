/*02-Strings*/
console.log("Strings");
console.log("");
/*A*/

/*Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
 en mayúscula (utilizar toUpperCase).*/
console.log("Ejercicio A");
console.log("");

const sentence = "abcdefghijlmnop";
console.log(sentence.toUpperCase());

/*B*/

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log("Ejercicio B");
console.log("");

const subSentence = sentence.substring(0,5);
console.log(subSentence)

/*C*/

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log("Ejercicio C");
console.log("");

const subSentence2= sentence.substring(sentence.length -5);
console.log(subSentence2);

/*D*/

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
 letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
  (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log("Ejercicio D");
console.log("");

var sent = "abcdefghij",sent2;
sent = sent.toUpperCase();
sent2 = sent.substring(0,1);
sent = sent.toLowerCase();
sent2 = sent2+sent.substring(1,10);
console.log(sent2);

/*E*/

 /*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log("Ejercicio E");
console.log("");

var senten = "Yanose quehacer.";
var of = senten.indexOf(" ");
console.log(of);

//F

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
 Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra
  de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
 toLowerCase y el operador +).*/
console.log("Ejercicio F");
console.log("");

var words = "abanderado abecedario";
var word1 = words.substring(0,10);
word1 = word1.substring(0,1);
word1 = word1.toUpperCase();
word1 = word1+words.substring(1,10);
var word2 = words.substring(11,20);
word2 = word2.substring(0,1);
word2 = word2.toUpperCase();
word2 = word2+words.substring(12,21);
var word3 = word1 + " " + word2;
console.log(word3);   




