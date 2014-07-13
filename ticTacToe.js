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

	//verifySet3 function created as part of the refactoring process
	//verifySet3 function to be used in gameStatus function
	//tests the set passed in as argument set3 against the 2 possible winning sets
	var verifySet3 = function (set3) { 
		//a2.toString() == a1.toString() <-- Compares Arrays
		if (set3.toString() == ["X", "X", "X"].toString()) {
			console.log("X is a win.");
			statusDiv.innerHTML = "Game Status: X wins!";
			gameOver = true;
		}
		else if (set3.toString() == ["O", "O", "O"].toString()) {
			console.log("O is a win.");
			statusDiv.innerHTML = "Game Status: O wins!";
			gameOver = true;
		}
	}

	//gameStatus checks for wins only
	var gameStatus = function () {
		//check the rows
		for (var i = 0; i < gameStates.length; i++) {
			var row = gameStates[i];
			//var row = [gameStates[i][0], gameStates[i][1], gameStates[i][2]];
			console.log("row.toString(): " + row.toString() );
			verifySet3(row);
		}

		//check the columns
		for (var i = 0; i < gameStates.length; i++) {
			var column = [gameStates[0][i], gameStates[1][i], gameStates[2][i]];
			console.log("column.toString(): " + column.toString() );
			verifySet3(column);
		}

		//check left diagonal (left to right from top to down)
		var leftDiagonal = [gameStates[0][0], gameStates[1][1], gameStates[2][2]];
		console.log("leftDiagonal.toString(): " + leftDiagonal.toString() );
		verifySet3(leftDiagonal);
		
		//check right diagonal (right to left from top to down)
		var rightDiagonal = [gameStates[0][2], gameStates[1][1], gameStates[2][0]];
		console.log("rightDiagonal.toString(): " + rightDiagonal.toString() );		
		verifySet3(rightDiagonal);
	}


	//boxClick function created as part of the refactoring process
	var boxClick = function(box, row, col) {
		if( box.innerHTML === " " && gameOver === false) {
			if ( priorMarker === "O" ) {
	 			box.innerHTML = "X";
	 			priorMarker = "X";
	 			gameStates[row][col] = "X";
	 			count++;
			}
			else {
				box.innerHTML = "O";
				priorMarker = "O";
				gameStates[row][col] = "O";
				count++;
			}
		}
		// console.log(priorMarker);
		// console.log(gameStates);
		gameStatus();
		console.log(count);
		ck4Stalemate();
	}


	box00.onclick = function () {
		boxClick(this, 0, 0);
	}

	box01.onclick = function () {
		boxClick(this, 0, 1);
	}

	box02.onclick = function () {
		boxClick(this, 0, 2);
	}

	box10.onclick = function () {
		boxClick(this, 1, 0);
	}

	box11.onclick = function () {
		boxClick(this, 1, 1);
	}

	box12.onclick = function () {
		boxClick(this, 1, 2);
	}

	box20.onclick = function () {
		boxClick(this, 2, 0);
	}

	box21.onclick = function () {
		boxClick(this, 2, 1);
	}

	box22.onclick = function () {
		boxClick(this, 2, 2);
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

