window.onload =  function(event){
	var box00 = document.getElementById("box00");
	var box01 = document.getElementById("box01");
	var box02 = document.getElementById("box02");
	var box10 = document.getElementById("box10");
	var box11 = document.getElementById("box11");
	var box12 = document.getElementById("box12");
	var box20 = document.getElementById("box20");
	var box21 = document.getElementById("box21");
	var box22 = document.getElementById("box22");
	var boxReset = document.getElementById("boxReset");
	var statusDiv = document.getElementById("gameStatus");
	
	//These are the 4 game state variables
	var priorMarker = "O" //This is setup as priorMarker = "O" because we want the game to start off with marking "X"
	var gameStates = [[ " ", " ", " " ], [ " ", " ", " " ], [ " ", " ", " " ]];
	var gameOver = false;
	var count = 0

	var ck4Stalemate = function () {
		if (count >= 9 && gameOver === false) {
			statusDiv.innerHTML = "Stalemate, Game Over!";	
		}
	}

	//gameStatus checks for wins only
	var gameStatus = function () {
		//check the rows
		for (var i = 0; i < gameStates.length; i++) {
			var row = gameStates[i];
			//var row = [gameStates[i][0], gameStates[i][1], gameStates[i][2]];
			console.log("row.toString(): " + row.toString() );
			//a2.toString() == a1.toString() <-- Compares Arrays
			if (row.toString() == ["X", "X", "X"].toString()) {
				console.log("X is a win.");
				statusDiv.innerHTML = "Game Status: X wins!";
				gameOver = true;
			}
			else if (row.toString() == ["O", "O", "O"].toString()) {
				console.log("O is a win.");
				statusDiv.innerHTML = "Game Status: O wins!";
				gameOver = true;
			}
		}

		//check the columns
		for (var i = 0; i < gameStates.length; i++) {
			var column = [gameStates[0][i], gameStates[1][i], gameStates[2][i]];
			console.log("column.toString(): " + column.toString() );
			//a2.toString() == a1.toString() <-- Compares Arrays
			if (column.toString() == ["X", "X", "X"].toString()) {
				console.log("X is a win.");
				statusDiv.innerHTML = "Game Status: X wins!";
				gameOver = true;
			}
			else if (column.toString() == ["O", "O", "O"].toString()) {
				console.log("O is a win.");
				statusDiv.innerHTML = "Game Status: O wins!";
				gameOver = true;
			}
		}

		//check left diagonal (left to right from top to down)
		var leftDiagonal = [gameStates[0][0], gameStates[1][1], gameStates[2][2]];
		console.log("leftDiagonal.toString(): " + leftDiagonal.toString() );
		//a2.toString() == a1.toString() <-- Compares Arrays
		if (leftDiagonal.toString() == ["X", "X", "X"].toString()) {
			console.log("X is a win.");
			statusDiv.innerHTML = "Game Status: X wins!";
			gameOver = true;
		}
		else if (leftDiagonal.toString() == ["O", "O", "O"].toString()) {
			console.log("O is a win.");
			statusDiv.innerHTML = "Game Status: O wins!";
			gameOver = true;
		}
		
		//check right diagonal (right to left from top to down)
		var rightDiagonal = [gameStates[0][2], gameStates[1][1], gameStates[2][0]];
		console.log("rightDiagonal.toString(): " + rightDiagonal.toString() );
		//a2.toString() == a1.toString() <-- Compares Arrays
		if (rightDiagonal.toString() == ["X", "X", "X"].toString()) {
			console.log("X is a win.");
			statusDiv.innerHTML = "Game Status: X wins!";
			gameOver = true;
		}
		else if (rightDiagonal.toString() == ["O", "O", "O"].toString()) {
			console.log("O is a win.");
			statusDiv.innerHTML = "Game Status: O wins!";
			gameOver = true;
		}
	}

	// goal: prevent user from overwriting an already played "X" or "0"
	// ...
	// either a: see if the div has an X or O, and then do nothing if that is the case
	// or     b: see if the div is actually empty, and only then fill it with the new move



	box00.onclick = function () {
		if( box00.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
	 			priorMarker = "X";
	 			gameStates[0][0] = "X";
	 			count++;
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[0][0] = "O";
				count++;
			}
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();
	}

	box01.onclick = function () {
		if ( box01.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[0][1] = "X";
				count++; 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[0][1] = "O";
				count++;
			}	
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();		
	}

	box02.onclick = function () {
		if ( box02.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[0][2] = "X";
				count++; 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[0][2] = "O";
				count++;
			}	
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();		
	}

	box10.onclick = function () {
		if ( box10.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[1][0] = "X";
				count++; 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[1][0] = "O";
				count++;
			}	
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();
	}

	box11.onclick = function () {
		if ( box11.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[1][1] = "X";
				count++; 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[1][1] = "O";
				count++;
			}	
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();
	}

	box12.onclick = function () {
		if ( box12.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[1][2] = "X";
				count++; 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[1][2] = "O";
				count++;
			}	
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();
	}

	box20.onclick = function () {
		if ( box20.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[2][0] = "X";
				count++; 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[2][0] = "O";
				count++;
			}	
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();
	}

	box21.onclick = function () {
		if ( box21.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[2][1] = "X";
				count++; 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[2][1] = "O";
				count++;
			}	
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();
	}

	box22.onclick = function () {
		if ( box22.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[2][2] = "X";
				count++; 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[2][2] = "O";
				count++;
			}	
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();
	}

	boxReset.onclick = function () {
		priorMarker = "O" //This is setup as priorMarker = "O" because we want the game to start off with marking "X"
		gameStates = [[ " ", " ", " " ], [ " ", " ", " " ], [ " ", " ", " " ]];
		gameOver = false;
		count = 0;
		box00.innerHTML = " ";
		box01.innerHTML = " ";
		box02.innerHTML = " ";
		box10.innerHTML = " ";
		box11.innerHTML = " ";
		box12.innerHTML = " ";
		box20.innerHTML = " ";
		box21.innerHTML = " ";
		box22.innerHTML = " ";
		statusDiv.innerHTML = " ";
	}
}


// var boxes = document.getElementsByClassName("box")

// boxes[0].onclick = function () {
//   this.innerHTML = "O";
// //boxes[0].innerHTML = "0";  
// }

// Pete's notes:
// I think we can re-use the pattern we had for the calculator;
// this is going to be both better, and worse, in terms of javascript complexity
// ... better because calculators are actually more complicated as we discussed (operator precedence and such)
// ... worse because there is more program state (now referred to as game state :)
//
// 1. grab a var divFoo for each box
// ... something like this var divBox00 = document.getElementById( "theid" )
// ... you'll do this 9 times + 1 time (9 boxes, 1 reset)
// 2. give each an onclick function
// ... like this: divBox00.onclick = function(event) { ...yer code here... };
// 4. so for box00 to box22, the onclick functions call another function, like so:
// ... // for row 1, column 2, this goes inside a specific box onclick
// ... // but calls the master boxClick with some specific coordinates
// ... boxClick(1,2); 
// 5. game state:
// ... three states for each box: "e", "x", "o"
// ... use a nested array: 
// ... var gameStates = [[ "e", "e", "e" ], [ "e", "e", "e" ], [ "e", "e", "e" ]];
// ... notice that this is three arrays inside of one big array
// ... so you can refer to the array by row index and column index
// ... gameStates[0][0] grabs the state of the 00 box (e.g.)


