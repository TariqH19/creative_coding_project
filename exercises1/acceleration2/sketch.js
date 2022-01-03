let ball1;
let ballRadius = 20;

function setup(){
    createCanvas(500,500);
    ball1 = new BallRGB (250,460,0,0,20,0,0,0);
}

function draw(){
    background(255,0,0);
    fill (255);
    rect (0,0,500,60);
    noStroke();
    rect(0,0,70,500);
    rect(70,100,350,20);
    rect(150,250,350,20);
    rect(70,400,350,20);
    ball1.render();
    ball1.step();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        ball1.accelerateBall(-0.5,0);
    }
    else if (keyCode === RIGHT_ARROW) {
        ball1.accelerateBall(0.5,0);
    }
    else if (keyCode === UP_ARROW) {
        ball1.accelerateBall(0,-0.5);
    }
    else if (keyCode === DOWN_ARROW) {
        ball1.accelerateBall(0,0.5);
    }
}

function winner(){
	background(0);
  	textSize(32);
  	textAlign(CENTER);
  	fill(255,0,0);
  	text("Winner",width/2,height/2);
    noLoop();
	}

function gameOver(){
    background(0);
    textSize(32);
    textAlign(CENTER);
    fill(255,0,0);
    text("Game Over",width/2,height/2);
    noLoop();
    }