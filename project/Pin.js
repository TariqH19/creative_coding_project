class Pin {
    constructor(x,y){
        this.pos = createVector(x,y);
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
    }
    
    render(){
        push ();
        translate (this.pos.x, this.pos.y);
        fill(0,255,0);
        ellipse(0,0,pinRadius);
        pop();
    }

    move(){
        this.pos.y -= this.yVelocity;
        this.pos.x -= this.xVelocity;
    }

    bounce(){

        if(this.pos.x < 0 || this.pos.x > 500) {
            this.xVelocity *= -1;
        }
        if(this.pos.y < 0 || this.pos.y > 500) {
            this.yVelocity *= -1;
        }
    }

    hits(ballon){
        let distance = (p5.Vector.sub(this.pos, ballon.pos)).mag();
        if (distance < 30){
            return true;
        } else{
            return false;
        }
    }

    deflect(platform){
        let distance = (p5.Vector.sub(this.pos, platform.pos)).mag();
        if (distance < 10){
            return true; 
        } else{
            return false;
        }
    }
}