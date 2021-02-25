//Write a function called sleepIn that takes in two parameters: weekdays and vacation.
//The parameter weekday is true if it is a weekday, and the parameter vacation is true if it is a vacation.
//We sleep in if it is not a weekday or we are on vacation. Return true if we sleep.
//sleepIn(false,fasle) - true
//sleepIn(true,false) - false
//sleepIn(false,true) - true

function sleepIn(weekday,vacation){
  return(!weekday || vacation)
}


//We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they both
//smiling or if neither of them is smiling. Return true if we are in trouble.

//monkeyTrouble(true,true) - true
//monkeyTrouble(false,false) - true
//monkeyTrouble(true,false) - false

function monkeyTrouble(aSmile,bSmile){
  return (aSmile && bSmile) || (!aSmile && !bSmile)
}

// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

//stringTimes("Hi",2)-"HiHi"
//stringTimes("Hi",3)-"HiHiHi"
//stringTimes("Hi",1)-"Hi"

function stringTimes(str,n) {
  var returnstr="";
  var i = 0;
  while(i<n){
    returnstr += str;
    i++
  }
  return returnstr
}

//Given 3 numerical values, a,b,c, return their sum. However, if one of the value is 13, then it does not count,
//towards the sum and values to its right.
//If b is 13, then both  b and c do not count.

//luckySum(1,2,3) - 6
//luckySum(1,2,13) - 3
//luckySum(1,13,3) - 1


function luckySum(a,b,c) {
  if (a == 13) {
    return 0
  } else if (b == 13) {
    return a
  } else if (c == 13) {
    return a + b
  } else {
    return a+b+c
  }

}
