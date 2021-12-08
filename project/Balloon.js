class Balloon {
    constructor(x,y){
        this.pos = createVector(x,y);

    }
    
    render(){
        push ();
        translate (this.pos.x, this.pos.y);
        image(balloon1,0,0,balloonRadius,balloonRadius);
        pop();
    }
}

class bonusBalloon {
    constructor(x,y){
        this.pos = createVector(x,y);
    }
    
    render(){
        push ();
        translate (this.pos.x, this.pos.y);
        image(balloon2,0,0,balloonRadius,balloonRadius);
        pop();
    }
}