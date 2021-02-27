var carInfo = {make:"Toyota", year:1990,model:"Camry"}; //created an object

carInfo["make"] // get value back

var myNewOb = {a:"hello",b:[1,2,3],c:{inside:["a","b"]}} // different data types, JS object inside another object

myNewOb["a"]; //grab the value "hello"

myNewOb["b"][1]; //grab numer 2

myNewOb["c"]["inside"][1]; //grab "b"

carInfo["year"] = 2006;//changed the value

carInfo["year"] +=1;

//iteration through an object

for (k in carInfo) {
  console.log(k); //keys
  console.log(carInfo[k]); //values
}


//Object methods

var carInfo = {
  make: "Toyota",
  year: 1990,
  model: "Camry",
  calAlert: function(){
    alert("We've got a car here!")
  }
}


var myObj = {
  name:"Jose",
  greet: function() {
    console.log("Hello " + this.name); //this keyword 
  }
}
