//Use a For Loop and a While Loop to print the word "hello" 5 times

//While Loop

var n = 1;

while (n<=5) {
  console.log("hello");
  n++;
}


//For Loop


for (var i = 1; i <=5; i++) {
  console.log("hello");
}


//Use Loops to print out all the odd numbers from 1 to 25

//While Loop

var x = 1;

while (x<=25) {
  if (x%2!==0) {
    console.log(x);
  }
  x++;
}

//For Loop

for (var i = 1; i<=25; i++) {
  if (i%2!==0) {
    console.log(i);
  }
}
