// class Ball {
//     constructor(){
//         this.posX = 20;
//         this.posY = 20;
//         this.radius = 10;
//         this.vx = 2;
//         this.vy = 3;
//     }

//     render() {
//         push();
// 		translate(this.posX, this.posY);
//         ellipse(this.posX,this.posY,this.radius)
// 		pop();
// 	}
//     step(){
//         this.posX += this.vx;
//         this.posY += this.vy;
//         if(this.posX>500){this.posX=0}
//         if(this.posX<0){this.posX=500}
//         if(this.posY>500){this.posY=0}
//         if(this.posY<0){this.posY=500}
//     }
// }

// class Ball {
//     constructor(x,y,vx,vy,radius,c){
//         this.posX = x ;
//         this.posY = y;
//         this.vx = vx;
//         this.vy = vy;
//         this.radius = radius;
//         this.c = c;
//     }

//     render() {
//         push();
// 		// translate(this.posX, this.posY);
//         ellipse(this.posX,this.posY,this.radius)
// 		pop();
// 	}
//     step(){
//         this.posX += this.vx;
//         this.posY += this.vy;
//         if(this.posX>500){this.posX=0}
//         if(this.posX<0){this.posX=500}
//         if(this.posY>500){this.posY=0}
//         if(this.posY<0){this.posY=500}
//     }
// }

class BallRGB {
	constructor(x, y, vx, vy, radius, r, g, b) {
		//properties
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.r = r;
		this.g = g;
		this.b = b;
		//this.rotation = 0;
	
   }
   updateVals(newX, newY, newVx, newVy, newRadius, newR, newG, newB)
   {
	    this.x = newX;
		this.y = newY;
		this.vx = newVx;
		this.vy = newVy;
		this.radius = newRadius;
		this.r = newR;
		this.g = newG;
		this.b = newB;
   }
   
   //function to draw the ball
   render() {
	  
		//translate(this.x, this.y);
		//rotate(this.rotation);
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		
	} 
	//function to move the ball
	step() {
        if(this.x < 0 || this.x > 500) {
            this.vx *= -1;
        }
        if(this.y < 0 || this.y > 500) {
            this.vy *= -1;
        }
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
	
}




