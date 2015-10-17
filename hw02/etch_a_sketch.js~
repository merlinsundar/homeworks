#!/usr/bin/env node

// Simple command line etch-a-sketch framework.


//var xMax = 8,
//    yMax = 8;

var b = require('bonescript');
var buttons = ["P9_12", "P9_14", "P9_16", "P9_18"];
var x = 0, y = 0;
var grid = new Array(20);
var util = require('util');

//var x=0,	// Current position
//    y=0;

for(var i in buttons) {
    b.pinMode(buttons[i], b.INPUT);
}


// Initialize th grid to all blanks
for(var i=0; i<grid.length; i++) {
    grid[i] = new Array(xMax);
    for(var j=0; j<grid[i].length; j++) {
	grid[i][j] = ' ';
    }
}

setInterval(check,200);

//Reading each Button
function check(){
    for(var i in buttons){
	b.digitalRead(buttons[i], checkButton);
    }
}

// Show a + at the current location
//grid[y][x] = '+';

// Print the grid
function printGrid(grid) {
  for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			util.print(util.format("%s ", grid[i][j]));
		}
		util.print("\n");
	}
}

//printGrid(grid);


//Updating the position of the cursor

function checkButton(x) {
   var i;
     
   if(x.value == 1){
	if(x == buttons[0]) y--;
	else if(x == buttons[1]) y++;
	else if(x == buttons[2]) x++;
	else x--;
	grid[y][x] = '*';
	printGrid(grid);  	
   }

}




