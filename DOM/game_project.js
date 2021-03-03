//Restart Game Button
var restart = document.querySelector("#b");

//Grab all the squares
var squares = document.querySelectorAll('td');

//Clear all the squeres
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);
//Check the square marker


//For loop to add event listeners to all the squeres
