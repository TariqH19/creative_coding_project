class BallRGB {
    constructor() {
        this.pos = createVector(Math.round(Math.random() * 500), Math.round(Math.random() * 500));
        this.speed = createVector(4,6);
        this.inc = createVector(0,0);
        this.size = 40;//Math.round(Math.random() * 15 + 5);
        this.fCol = '#ff00ff';
    }

    //this method updates the values from the GUI
    updateVals(xInc, yInc, sc, fC) {
        this.inc.x = xInc;
        this.inc.y = yInc;
        this.fCol = fC;
    }
   
   //function to draw the ball
   render() {
	  
		//translate(this.x, this.y);
		//rotate(this.rotation);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.speed.heading())
        noStroke();
        fill(this.fCol);
        let mySize = createVector(params.shapeW, params.shapeH);
        rect(0, 0,mySize.x,mySize.y,params.increaseRadius);
        pop();
		
	} 
	//function to move the ball
	move() {
        if(this.pos.x < 0 || this.pos.x > 500) {
            this.speed.x *= -1;
        }
        if(this.pos.y < 0 || this.pos.y > 500) {
            this.speed.y *= -1;
        }

        this.pos.x += this.speed.x * this.inc.x;
        this.pos.y += this.speed.y * this.inc.y;
	}
}