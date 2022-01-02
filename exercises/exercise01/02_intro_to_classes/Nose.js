class Nose{
    constructor(x,y,radius,h){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.h = h;
    }

    render(){
        fill (245, 116, 42);
        ellipse (this.x,this.y,this.radius,this.h);
    }
}