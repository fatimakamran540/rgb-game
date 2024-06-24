var color = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var numSquare = 6;
var color= [];
// var color = generateRandomColor(numSquare);
var pickedColor;
// var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easybtn = document.querySelector("#easybtn");
// var hardbtn = document.querySelector("#hardbtn");
var modeButton = document.querySelectorAll(".mode");
 init();
 function init(){
    // mode button event listener
    
   for(var i = 0; i < modeButton.length; i++){
    modeButton[i].addEventListener("click" ,function(){
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    this.classList.add("selected");
    
    // ternery operator people prefer to use it !
    this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
    // if(this.textcontent === "easy"){
    //     numSquare = 3;
    //  }elase {
    // numSquare = 6;
    // }

    // calling reset function
    reset();
    // figure out how many squares to show
     
    // pick new colors

    // pick anew pickedColor

    // update page to reflect changes
});
}
for(var i =0; i < square.length; i++){
    // add click listener to square
    square[i].addEventListener("click", function(){
        // garb color of clicked square
        var clickedcolor = this.style.background;
        // compare coclor to pickedColor
        if(clickedcolor === pickedColor){
            messageDisplay.textContent = "correct!";
            resetButton.textContent  = "play again?";
            changecolor(clickedcolor);
            h1.style.background = clickedcolor;
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "try again";
        }
    });
}
reset();
 }
function reset(){
    // generate all new colors
color = generateRandomColor(numSquare);
// pick a new random color from array
pickedColor = pickColor();
// change colordisplay to match picked color
colorDisplay.textContent = pickedColor;
// changing text to new color
resetButton.textContent = "new color";
// hidind text after clicked on play again
messageDisplay.textContent = "";
// change color of square
for(var i = 0; i < square.length; i++){
    if(color[i]){
    // show 6 colors
        square[i].style.display = "block";
        // change square colors 
    square[i].style.background = color[i];
}else {
    // hide last 3 colors in easybtn
    square[i].style.display = "none";
  }
}
h1.style.background = "steelblue";

}

// easybtn.addEventListener("click", function(){
//     hardbtn.classList.remove("selected");
//     easybtn.classList.add("selected");
//     numSquare = 3;
//     color = generateRandomColor(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i < square.length; i++){
//         if(color[i]){
//             square[i].style.background = color[i];
//         } else{
//             square[i].style.display = "none";
//         }

// }});
// hardbtn.addEventListener("click", function(){
//     hardbtn.classList.add("selected");
//      easybtn.classList.remove("selected");
//      numSquare = 6;
//      color = generateRandomColor(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i < square.length; i++){
//         square[i].style.background = color[i];
//               square[i].style.display = "block";
        
//     }});
resetButton.addEventListener("click" , function(){
reset();
// we are callng reset buttton



// // generate all new colors
// color = generateRandomColor(numSquare);
// // pick a new random color from array
// pickedColor = pickColor();
// // change colordisplay to match picked color
// colorDisplay.textContent = pickedColor;
// this.textContent = "new color";
// messageDisplay.textContent = "";
// // change color of square
// for(var i = 0; i < square.length; i++){
//     square[i].style.background = color[i];
// }
// h1.style.background = "steelblue";
})

// colorDisplay.textContent = pickedColor;

// for (var i = 0; i < square.length; i++) {
//     // add initial color to square
//     // square[i].style.background = color[i];
//     // add click listeners to square
//     square[i].addEventListener("click", function () {
//         // garb color of clicked square
//         var clickedColor = this.style.background;
//         // comapre color to pickedcolor
//         // console.log(clickedColor, pickedColor);
//         if (clickedColor === pickedColor) {
//             messageDisplay.textContent = "correct";
//             resetButton.textContent = "play again?";
//             changecolor(clickedColor);
//             h1.style.background = clickedColor;
//         } else {
//             this.style.background = "#232323";
//             messageDisplay.textContent = "try again";
//         }
//     })
// }

function changecolor(color) {
    // loop through all square
    for (var i = 0; i < square.length; i++) {
        // change each color to match given color
        square[i].style.background = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * color.length);
    return color[random];

}
function generateRandomColor(num) {
    // make an array
    var arr = []
    // repeat num times
    for (var i = 0; i < num; i++) {
         // get random colors and push into  arrays

        arr.push(randomColor())
       
    }
    //return array
    return arr;
}
function randomColor() {
    // pick red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick blue from 0 to 255
 var b = Math.floor(Math.random() * 256);
 
 return"rgb(" + r + ", "+ g + ", " + b + ")";
}
