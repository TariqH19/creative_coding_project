class Objects {
    constructor(x,y,radius){
        this.pos = createVector(x,y);
        this.radius = radius;
    }    

    show(){
        fill(0);
        ellipse(this.pos.x,this.pos.y,this.radius);
    }
}
