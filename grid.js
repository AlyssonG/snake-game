class Grid{
    constructor(cell){
        this.cell = cell;
        this.cells = [];
        this.set();
    }

    draw(context){
        for(var i = 0; i < this.cells.length; i++){
            for(var j = 0; j < this.cells[i].length; j++){
                context.rect(this.cells[i][j].shape.x, this.cells[i][j].shape.y, this.cell.width, this.cell.height);
            }
        }    
    }
    
    set(){
        var gridSize = this.setSize(screenSize);   
        for(var i = 0; i < gridSize.x; i++){
            var gridRow = [];            
            for(var j = 0; j < gridSize.y; j++){
                var x = i * this.cell.width;
                var y = j * this.cell.height;
                var aux = new Rect(x,y,this.cell.width,this.cell.height);                                
                gridRow.push(new GridCell(aux));    
            }
            this.cells.push(gridRow);
        }
    }
    
    setSize(screenSize){
        return { 'x' : screenSize.width/this.cell.width, 
                 'y' : screenSize.height/this.cell.height};
    }
}