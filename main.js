var context = undefined;
var screenSize = undefined;
var grid = undefined;
var drawables = [];
var dir = {'x' : 1, 'y' : 1};

window.onload = function(){
    addInputListeners();    
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    screenSize = { 'width': canvas.width, 
                   'height': canvas.height };
    var cell = new Rect(0,0,20,20);
    grid = new Grid(cell);
    drawables.push(grid);
    var snake = new Snake(1,1,cell);
    drawables.push(snake);
    draw(drawables,context);   
               
    setInterval(function(){
        snake.move(dir);
        draw(drawables,context);          
    }, 500); 
}


function setDir(x,y){
    dir.x = x;
    dir.y = y;
}

function draw(drawables, context){
    context.clearRect(0, 0, canvas.width, canvas.height);            
    for(var i = 0; i < drawables.length; i++)
        drawables[i].draw(context);
    context.stroke();
}

function addInputListeners(){
    window.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) {
            setDir(-1,0);            
        }
        else if(event.keyCode == 39) {
            setDir(1,0);
        }
        else if(event.keyCode == 38) {
            setDir(0,-1);
        }
        else if(event.keyCode == 40) {
            setDir(0, 1);
        }
    });
}

function createApple(grid){
    for9
}