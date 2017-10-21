class Snake{
    constructor(x,y,cellShape){
        this.shape = cellShape;
        this.body = [];
    }

    draw(context){
        context.fillRect(this.shape.x * this.shape.width , this.shape.y * this.shape.height ,this.shape.width,this.shape.height);
    }

    move(dir){
        this.shape.x += dir.x;
        this.shape.y += dir.y;
    }
}