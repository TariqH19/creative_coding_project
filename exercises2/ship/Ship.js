class Ship {
	constructor(x, y, vx, vy, rotation, showFlame) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.rotation = rotation;
		this.showFlame = showFlame;
	}

	drawShip() {
		push();
		translate(this.x, this.y);
		let dx = this.vx - this.x;
		let dy = this.vy - this.y;
		let angle = atan2(dy,dx);
		rotate(angle);
		//lineWidth = 1;
		//context.strokeStyle = "#ffffff";
		beginShape();
		vertex(10, 0);
		vertex(-10, 10);
		vertex(-5, 0);
		vertex(-10, -10);
		vertex(10, 0);
		endShape();

		if (this.showFlame) {
			beginShape();
			vertex(-7.5, -5);
			vertex(-15, 0);
			vertex(-7.5, 5);
			endShape();
			//context.stroke();
		}
		pop();
	}

	accelerateShip(ax, ay) {
		this.vx = this.vx + ax;
		this.vy = this.vy + ay;
	}

	moveShip() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}