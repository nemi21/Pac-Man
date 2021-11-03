import TileMap from "./TileMap,js";

const tileSize = 32;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);

function gameLoop(){
    tileMap.draw();
}//end of function gameloop

setInterval(gameLoop, 1000 / 75);