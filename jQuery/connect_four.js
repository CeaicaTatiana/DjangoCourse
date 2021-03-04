var player1 = prompt("Player One: Enter Your Name, you will be Blue");
var player1Color = 'rgb(86, 151,255)';

var player2 = prompt("Player Two: enter Your Name, you will be Red");
var player2Color = 'rgb(237,45,73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}

//get a table cell by index using jquery

function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function returnColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

//take in the column index and return the button row that is still grey

function checkButtom(colIndex){
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row > -1; row--) {
    colReport = returnColor(row,colIndex);
    if (colorReport === 'rgb(128,128,128)') {
      return row
    }
  }
}

function colorMatchCheck(one,two,three,four) {
  return (one === two && one === three && one === four and one !== 'rgb(128,128,128)' && one !== undefined);
}

//check for horizontal wins

function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3), returnColor(row,col+4))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}


//check for vertical wins


function horizontalWinCheck() {
  for (var col = 0; row < 7; row++) {
    for (var row = 0; row < 3; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3), returnColor(row,col+4))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}
