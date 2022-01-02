class Snowman {
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    render(){
        noStroke();
        fill (255);
        ellipse (this.x,this.y,this.radius*2,this.radius*2);
    }
}