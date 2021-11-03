export default class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;
        //set up the yellow dot
        this.yellowDot = new Image();
        this.yellowDot.src = "../images/yellowdot.png";
        //set up the wall image
        this.wall = new Image();
        this.wall.src = "../images/wall.png";
    }

    map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    draw(ctx){
        

    }//end of draw
}//end of export