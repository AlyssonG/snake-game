class Apple{
    constructor(width,height,grid){
        this.grid = grid;
        this.rect = new Rect(0,0,width,height);
        this.setPosition();
    }

    draw(context){
        context.fillStyle = "#FF0000";    
        context.fillRect(this.rect.x * this.rect.width ,this.rect.y * this.rect.height ,this.rect.width,this.rect.height);
        context.fillStyle = "#000000";            
    }

    setPosition(){
        var x = Math.floor(Math.random() * this.grid.cells.length);
        var y = Math.floor(Math.random() * this.grid.cells[0].length);
        this.rect.x = x;
        this.rect.y = y;
    }
}