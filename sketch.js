"use strict";
function make2DArray(cols, rows) {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return;
}


var grid;
var cols;
var rows;
var w = 20;

function setup() {
	createCanvas(200, 200);
	cols = floor(width / w);
	rows = floor(height / w);
	grid = make2DArray(cols, rows);
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j] = new Cell(i , j, w);
		}
	}



}



function draw() {
	background(255);
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}






}

