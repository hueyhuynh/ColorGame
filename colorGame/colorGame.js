
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButtons = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");


init();

function init(){
	setupMode();
	setupSquares();
	reset();
}

function setupMode(){
	for(var i = 0; i < mode.length; i++){
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor) {
				changeColor(clickedColor);
				resetButtons.textContent= "Play Again?";
				message.textContent = "Correct!";
			}
			else{
				this.style.background = "#232323"
				message.textContent = "Try Again";
			}
		});
	}
}

resetButtons.addEventListener("click", function(){
	reset();
});

		function reset(){
	colors = generateRandom(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButtons.textContent = "New Colors"
	message.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}
 
function changeColor(color){
	for(var i=0; i<numSquares; i++){
		squares[i].style.background = color;
	}
} 

		function pickColor(){
			var random = Math.floor(Math.random()*colors.length);
			return colors[random];
		}

		function generateRandom(num){
			var arr = [];
			for(var i=0; i<num; i++){
				var r = Math.floor(Math.random()*256);
				var g = Math.floor(Math.random()*256);
				var b = Math.floor(Math.random()*256);
				arr[i] = "rgb(" + r + ", " + g + ", " + b + ")";
			}
			return arr;
		}
	