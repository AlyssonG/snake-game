class Snake{
    constructor(rect,dir){
        var bodyPart = new BodyPart(rect,dir);
        this.body = [bodyPart];
    }

    draw(context){
        for(var i = 0; i < this.body.length; i++){
            context.fillRect(this.body[i].rect.x * this.body[i].rect.width , this.body[i].rect.y * this.body[i].rect.height ,this.body[i].rect.width,this.body[i].rect.height);
        }   
    }

    setDir(dir){
        this.body[0].dir.x = dir.x;
        this.body[0].dir.y = dir.y;
    }

    update(){
        for(var i = this.body.length-1; i > 0; i--){
            this.body[i].rect.x = this.body[i-1].rect.x;            
            this.body[i].rect.y = this.body[i-1].rect.y;
        }
        this.body[0].rect.x += this.body[0].dir.x;
        this.body[0].rect.y += this.body[0].dir.y;
        this.checkIfLose();
    }

    getPosition(){
        return new Vector2(x,y);
    }

    isIn(coord){
        return (this.body[0].rect.x == coord.x && this.body[0].rect.y == coord.y);
    }

    checkIfLose(){
        for(var i = 1; i < this.body.length; i++){
            var coord = new Vector2(this.body[i].rect.x,this.body[i].rect.y);
            if(this.isIn(coord)){
                console.log("lose");
            }
        }            
    }

    consumeApple(){
        var lastBodyPart = this.body[this.body.length - 1];
        var newRect = new Rect( lastBodyPart.rect.x - lastBodyPart.dir.x,
                                lastBodyPart.rect.y - lastBodyPart.dir.y,
                                lastBodyPart.rect.width,
                                lastBodyPart.rect.height);
        var newBodyPart = new BodyPart(newRect,lastBodyPart.dir);
        this.body.push(newBodyPart);
    }
}