var context = undefined;
var screenSize = undefined;
var grid = undefined;
var drawables = [];
var snake = undefined;

window.onload = function(){
    addInputListeners();    

    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    screenSize = { 'width': canvas.width, 
                   'height': canvas.height };

    var cell = new Rect(0,0,50,50);
    grid = new Grid(cell);
    //drawables.push(grid);
    
    var dir = new Vector2(1,0);
    snake = new Snake(cell,dir);
    drawables.push(snake);
    draw(drawables,context);   
    
    var apple = new Apple(cell.width,cell.height,grid);
    drawables.push(apple);

    setInterval(function(){
        snake.update();
        consumeApple(snake,apple);
        draw(drawables,context);          
    }, 100); 
}


function draw(drawables, context){
    context.clearRect(0, 0, canvas.width, canvas.height);            
    for(var i = 0; i < drawables.length; i++)
        drawables[i].draw(context);
    context.stroke();
}

function consumeApple(snake, apple){
    if(snake.isIn(apple.rect)){
        snake.consumeApple();
        apple.setPosition();
    }
}

function addInputListeners(){
    window.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) {
            snake.setDir(new Vector2(-1,0));            
        }
        else if(event.keyCode == 39) {
            snake.setDir(new Vector2(1,0));
        }
        else if(event.keyCode == 38) {
            snake.setDir(new Vector2(0,-1));            
        }
        else if(event.keyCode == 40) {
            snake.setDir(new Vector2(0,1));                        
        }
    });
}