export default class TileMap {
    constructor(tileSize) {
        this.tileSize = tileSize;

        //set up the yellow dot
        this.yellowDot = new Image();
        this.yellowDot.src = "images/yellowdot.png";
         
        //set up the wall image
        this.wall = new Image();
        this.wall.src = "images/wall.png";
    }//end of constructor

    //create the background for the wall
    map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,0,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,1,0,1],
        [1,0,1,0,1,1,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,0,0,1,0,1,0,1],
        [1,0,1,0,1,0,0,0,1,0,1,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    draw(ctx)  {
        for(let row = 0; row < this.map.length; row++){
            for(let column = 0; column < this.map[row].length; column++){
                let tile = this.map[row][column];
                if(tile === 1){
                    this.#drawWall(ctx, column, row, this.tileSize);
                }//end of if
                else if(tile === 0){
                    this.#drawDot(ctx, column, row, this.tileSize);
                }//end of else if
            }//end of for

        }//end of for

    }//end of draw

    #drawDot(ctx, column, row, size){
        ctx.drawImage(this.yellowDot, column * this.tileSize, row * this.tileSize, size, size);
    }

    #drawWall(ctx, column, row, size){
        ctx.drawImage(this.wall, column * this.tileSize, row * this.tileSize, size, size);
    }
        
        setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
        }

    
}//end of export