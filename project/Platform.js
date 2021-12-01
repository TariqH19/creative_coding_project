class Platform {
    constructor(x,y){
        this.pos = createVector(x,y); 
        this.direction = 0;
    }
    
    render(){
        push ();
        translate (this.pos.x, this.pos.y);
        fill(255,0,0);
        rectMode(CENTER)
        rect(0,0,platformWidth,platformHeight);
        pop();
    }

    move(){
        if(this.pos.x < 0 || this.pos.x > 500) {
            this.direction *= -1
        }
        this.pos.x += this.direction;
    }

    setDirection(direction){
        this.direction = direction
    }
}