var roster = [];
var start = prompt("Would you like to start the roster web app? y/n");
var action = prompt("Please select an action: add, remove, display, or quit.");
var name = prompt("What name would you like to add?");

// create the functions for the tasks

//ADD A NEW STUDENT

function addNew(name) {
  roster.push(name)
}

//REMOVE A STUDENT

function remove() {
  var remName = prompt("What name would you like to delete?");
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}
