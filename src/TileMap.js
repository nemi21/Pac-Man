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
        for(let row = 0; row < this.map.length; row++){
            
        }

    }//end of draw
        
        setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
        }

    
}//end of export