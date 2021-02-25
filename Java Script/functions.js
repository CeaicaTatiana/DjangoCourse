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
  var result = numInput * 5
  return result
}
