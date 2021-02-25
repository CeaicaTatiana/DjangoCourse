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
