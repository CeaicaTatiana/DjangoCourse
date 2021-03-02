var roster = [];
var start = prompt("Would you like to start the roster web app? y/n");
var request = "empty"

// create the functions for the tasks

//ADD A NEW STUDENT

function addNew(newName) {
  var name = prompt("What name would you like to add?");
  roster.push(newName)
}

//REMOVE A STUDENT

function remove() {
  var remName = prompt("What name would you like to delete?");
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}

//DISPLAY ROSTER
function display() {
  console.log(roster);
}
//logic
if (start === 'y') {
  while (request !== "quit") {
    request = prompt("Please select an action: add, remove, display, or quit.")
    if (request === 'add') {
      addNew();
    }else if (request === 'remove') {
      remove();
    }else if (request === 'display') {
      display();
    }
  }
}
alert("Thanks for using the Web App!")
