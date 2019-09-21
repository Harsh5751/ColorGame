var numbOfSquares = 6;
var colors = [];
var pickedColor;

var title = document.getElementById("correct");
title.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpMode();
    setUpSquare();
    reset();
}

function setUpMode(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numbOfSquares = 3: numbOfSquares = 6;
            // if (this.textContent === "Easy") {
            //     numbOfSquares = 3;
            // }
            // else {
            //     numbOfSquares = 6
            // }
            reset();
        });
    }
}

function setUpSquare(){
    for (var i = 0; i < squares.length; i++) {
        //Add initial colors
        squares[i].style.backgroundColor = colors[i];
    
        //Add click listeners to squares
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "CORRECT";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try again";
            }
    
        });
    }
}


function reset() {
    colors = generateColors(numbOfSquares);
    pickedColor = pickColor();
    title.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]; 
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyButton.addEventListener("click", function() {
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numbOfSquares = 3;
//     colors = generateColors(numbOfSquares);
//     pickedColor = pickColor();
//     title.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardButton.addEventListener("click", function() {
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     numbOfSquares = 6;
//     colors = generateColors(numbOfSquares);
//     pickedColor = pickColor();
//     title.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

// resetButton.addEventListener("click", function(){
//     colors = generateColors(numbOfSquares);
//     pickedColor = pickColor();
//     title.textContent = pickedColor;

//     for (var i = 0; i < colors.length; i++) {
//         squares[i].style.backgroundColor = colors[i]; 
//     }
//     h1.style.backgroundColor = "steelblue";
//     this.textContent = "New Colors";
//     messageDisplay.textContent = "";
// });

resetButton.addEventListener("click", function(){
    reset();
});



function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(amount) {
    var arr = [];

    for (var i = 0; i < amount; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green =  Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rgb;

}
