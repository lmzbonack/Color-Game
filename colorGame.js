var numSquares = 6;
var colors = generateRandomColors(numSquares);
//Select all our panels that have to be recolored
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#resetButton");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode")
//Update the h1 to show what color the user is trying to match
colorDisplay.textContent = pickedColor;

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    //if text content of the button clicked on is equal to...
    //Below see special operator for the if statement we write below
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
  });
}

resetButton.addEventListener("click",function(){
  reset();
});

//loop through squres assign colors and add click listeners
for (var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?"
      correctColorChange(clickedColor);
      h1.style.backgroundColor = pickedColor;
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick new random colors
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent="";
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none"
    }
  }
}

//Once the game is over change all of the squares to the correct color
function correctColorChange(color) {
  for(var i = 0;i<squares.length;i++){
    squares[i].style.backgroundColor = color;
  }
}

//Pick a random color out of colors array to be the solution
function pickColor() {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

//Create a new array full of random colors
function generateRandomColors(number) {
  var arr = [];
  for (var i = 0;i<number;i++){
    arr.push(randomColor());
  }
  return arr;
}

//Generate a single random color
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var ranColor = "rgb("+red+", "+green+", "+blue+")";
  return ranColor;
}
