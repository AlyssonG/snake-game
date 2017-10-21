class Grid{
    constructor(cellShape){
        this.cellShape = cellShape;
        this.cells = { 'cells': [], 'apple' : false}
    }

    draw(context){
        var gridSize = this.setSize(screenSize);
        this.set(gridSize, this.cellShape);
    }
    
    set(gridSize){
        for(var i = 0; i < gridSize.x; i++){
            for(var j = 0; j < gridSize.y; j++){
                
                context.rect(i * this.cellShape.width, j * this.cellShape.height, this.cellShape.width, this.cellShape.height);
            }
        }
    }
    
    setSize(screenSize){
        return { 'x' : screenSize.width/this.cellShape.width, 
                 'y' : screenSize.height/this.cellShape.height};
    }
}