const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function gameLoop(){
    console.log("game looop");
}//end of function gameloop

setInterval(gameLoop, 1000 / 75);