//If Else
console.log("-----------------------");
console.log("If Else");
console.log("");

//A
console.log("Part A");
console.log("");

if(Math.random() >= 0.5){
    console.log("Greater than or equal to 0,5");
}else{
    console.log("Lower than 0.5");
}

//B
console.log("Part B");
console.log("");

var age = Math.floor(Math.random()*101)
console.log(age);

if(age<= 2){
    age="Es un bebe";
    console.log(age);
  }else if(age >= 2 && age  <= 12){
    age="Es un niño"
    console.log(age);
}else if(age >=13 && age <=19){
    age="Es un adolecente";
    console.log(age);
}else if(age >=20 && age <= 30){
    age="Es Joven"
    console.log(age);
}else if(age >=31 && age <=60){
    age="Es un Adulto"
    console.log(age);
}else if(age >=61 && age <=75){
    age="Es un Adulto Mayor"
    console.log(age);
}else if(age > 75){
    age="Es un Anciano"
    console.log(age);
}
   




