function hello(){
  console.log("Hello world!");
}

function helloYou(name){
  console.log("Hello "+ name);
}
//two parameters
function addNum(num1,num2) {
  console.log(num1+num2);
}
//default values

function helloSomeone(name="Frank") {
  console.log("Hello "+name);
}

//returning values

function formal (name="Sam", title="Sir"){
  return title + " " + name
}

function timesFive(numInput) {
  //local scope to the function
  var result = numInput * 5
  return result
}

//Global scope

var v = " GLOBAL V"
var stuff = " GLOBAL STUFF"

function fun(stuff) {
  console.log(v);
  stuff = "Reassign stuff inside func"
  console.log(stuff);
}

fun()
console.log(stuff); 
