class Balloon {
    constructor(x,y){
        this.pos = createVector(x,y);

    }
    
    render(){
        push ();
        translate (this.pos.x, this.pos.y);
        fill(255,0,0);
        ellipse(0,0,balloonRadius);
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
        fill(0,0,255);
        ellipse(0,0,balloonRadius);
        pop();
    }
}