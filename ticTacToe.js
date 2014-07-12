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
	
	var priorMarker = "O" //This is setup as priorMarker = "O" because we want the game to start off with marking "X"
	var gameStates = [[ " ", " ", " " ], [ " ", " ", " " ], [ " ", " ", " " ]];

	// goal: prevent user from overwriting an already played "X" or "0"
	// ...
	// either a: see if the div has an X or O, and then do nothing if that is the case
	// or     b: see if the div is actually empty, and only then fill it with the new move

	box00.onclick = function () {
		if( box00.innerHTML === " " ) {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
	 			priorMarker = "X";
	 			gameStates[0][0] = "X"
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[0][0] = "O";
			}
		}
		console.log(priorMarker);
		console.log(gameStates);
	}

	box01.onclick = function () {
		if ( box01.innerHTML === " ") {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[0][1] = "X" 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[0][1] = "O";
			}	
		}
		console.log(priorMarker);
		console.log(gameStates);
	}

	box02.onclick = function () {
		if ( box02.innerHTML === " ") {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[0][2] = "X" 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[0][2] = "O";
			}	
		}
		console.log(priorMarker);
		console.log(gameStates);
	}

	box10.onclick = function () {
		if ( box10.innerHTML === " ") {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[1][0] = "X" 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[1][0] = "O";
			}	
		}
		console.log(priorMarker);
		console.log(gameStates);
	}

	box11.onclick = function () {
		if ( box11.innerHTML === " ") {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[1][1] = "X" 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[1][1] = "O";
			}	
		}
		console.log(priorMarker);
		console.log(gameStates);
	}

	box12.onclick = function () {
		if ( box12.innerHTML === " ") {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[1][2] = "X" 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[1][2] = "O";
			}	
		}
		console.log(priorMarker);
		console.log(gameStates);
	}

	box20.onclick = function () {
		if ( box20.innerHTML === " ") {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[2][0] = "X" 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[2][0] = "O";
			}	
		}
		console.log(priorMarker);
		console.log(gameStates);
	}

	box21.onclick = function () {
		if ( box21.innerHTML === " ") {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[2][1] = "X" 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[2][1] = "O";
			}	
		}
		console.log(priorMarker);
		console.log(gameStates);
	}

	box22.onclick = function () {
		if ( box22.innerHTML === " ") {
			if ( priorMarker === "O" ) {
	 			this.innerHTML = "X";
				priorMarker = "X";
				gameStates[2][2] = "X" 
			}
			else {
				this.innerHTML = "O";
				priorMarker = "O";
				gameStates[2][2] = "O";
			}	
		}
		console.log(priorMarker);
		console.log(gameStates);
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