var countries = ["England", "Germany", "France"] // array
countries[2] = "Romania" //mutable
countries[1][2] = "c" //immutable, will not work

var mixed = [true, 20, "string"]  //mixed data types

//Array methods

var myArr = ["one", "two", "three"]
var listItem = myArr.pop() // to delete the last item

myArr.push("new") //add a new item to array

myArr[myArr.length - 1] // to find out what the last item is


var matrix = [[1,2,3][4,5,6],[7,9,8,6]] // nested arrays

//Array iteration

var arr = ["a", "b", "c"]

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (letter of arr){
  console.log(letter);
}

//use a function for every element in the array

for (letter of arr){
  alert(letter)
}

arr.forEach(alert) //second method
