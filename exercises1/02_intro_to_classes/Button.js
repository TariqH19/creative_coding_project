class Button{
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    render(){
        fill (0);
        ellipse (this.x,this.y,this.radius,this.radius);
    }
}