var hot = false;
var temp = 10;


// if (temp>80){
//   hot = true
// }
//
// console.log(hot);

// if (temp>80){
//   console.log("Hot Outside!");
// } else{
//   console.log("It's not very hot today!")
// }

if (temp>80) {
  console.log("Hot Outside!");
} else if(temp <= 80 && temp >=50){
  console.log("Average temp Outside");
} else if (temp < 50 && temp >=32){
  console.log("It's pretty cold out!");
} else{
  console.log("It is very cold out");
}
