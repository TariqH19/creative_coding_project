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
		rect(this.pos.x, this.pos.y, this.radius, this.radius);
		
	} 
	
accelerateBall(ax,ay){
	this.vx = this.vx + ax;
	this.vy = this.vy + ay;
} 

	//function to move the ball
	step() {
		if(this.pos.x < 0 || this.pos.x > 480) {
			this.vx *= -1;
		}
		if(this.pos.y < 0 || this.pos.y > 480) {
			this.vy *= -1;
		}

		this.pos.x = this.pos.x + this.vx;
		this.pos.y = this.pos.y + this.vy;
	}
} 