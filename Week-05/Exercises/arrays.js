/*Arrays*/

console.log("---------------");
console.log("Arrays");
//A
console.log("Part A");
console.log("");

var months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]+ " " + months[10]);


//B
console.log("Part B");
console.log("");

months.sort();
console.log(months);

//C

console.log("Part C");
console.log("");

months.unshift("Calendar");
months.push("2023");
console.log(months);

//D
console.log("Part D");
console.log("");

months.shift();
months.pop();
console.log(months);

//E
console.log("Part E");
console.log("");

months.reverse();
console.log(months);

//F
console.log("Part F");
console.log("");


all=months.join("-");
console.log(all);

//G
console.log("Part G");
console.log("");

var copy_Months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var slice= copy_Months.slice(4,10);
console.log(slice);



