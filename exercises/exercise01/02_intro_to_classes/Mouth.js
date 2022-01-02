class Mouth{
    constructor(x,y,radius,h){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.h = h
    }

    render(){
        fill (0);
        rect (this.x,this.y,this.radius,this.h);
    }
}