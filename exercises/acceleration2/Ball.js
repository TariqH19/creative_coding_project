class BallRGB {
	constructor(x, y, vx, vy,radius, r, g, b) {
		//properties
		this.pos = createVector(x,y);
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.r = r;
		this.g = g;
		this.b = b;
		//this.rotation = 0;
	
}

//function to draw the ball
render() {
	
		//translate(this.x, this.y);
		//rotate(this.rotation);
		fill(this.r, this.g, this.b);
		ellipse(this.pos.x, this.pos.y,ballRadius*2, ballRadius*2);
		
	} 
	
accelerateBall(ax,ay){
	this.vx = this.vx + ax;
	this.vy = this.vy + ay;
} 

	//function to move the ball
	step() {
		if (this.pos.y < 40) {
			winner();
		}
		if (this.pos.x > 0 && this.pos.x < 440 && this.pos.y < 170 && this.pos.y < 150) {
			gameOver();
		} else if (this.pos.x > 130 && this.pos.x < 500 && this.pos.y < 290 && this.pos.y > 250) {
			gameOver();
		} else if (this.pos.x > 0 && this.pos.x < 440 && this.pos.y < 440 && this.pos.y > 420) {
			gameOver();
		} else if (this.pos.x < 90 || this.pos.x > 480) {
			gameOver();
		}
		this.pos.x += this.vx;
		this.pos.y += this.vy;
	}
}