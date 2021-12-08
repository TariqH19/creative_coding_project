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
        this.pos.y += this.yVelocity;
        this.pos.x += this.xVelocity;

        if (this.pos.y > screenHeight - platformHeight) {
            gameOver();
        }
        if(this.pos.x < 0 || this.pos.x > 500){
            this.xVelocity *= -1;
        }
        if(this.pos.y < 0) {
            this.yVelocity *= -1;
        }

        if ((this.pos.x >= mouseX &&
            this.pos.x <= mouseX + 90) &&
          (this.pos.y + 10 >= 470)) {
            this.yVelocity *= -1;
        }
    }

    hits(ballon){
        let distance = (p5.Vector.sub(this.pos, ballon.pos)).mag();
        if (distance < pinRadius/2 + balloonRadius/2){
            score++;
            return true;
        } else{
            return false;
        }
    }

    hits2(bonusBalloon){
        let distance2 = (p5.Vector.sub(this.pos, bonusBalloon.pos)).mag();
        if (distance2 < balloonRadius){
            score = score + 5;
            this.yVelocity ++;
            this.xVelocity ++;
            return true;
        } else{
            return false;
        }
    }
}