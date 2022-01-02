class Arm{
    constructor(x,y,radius,h){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.h = h;
    }

    render(){
        stroke(0);
        strokeWeight(5);
        line (this.x,this.y,this.radius,this.h);
    }

}