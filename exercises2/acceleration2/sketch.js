let ball;
let food;
let ballRadius = 20;

function setup(){
    createCanvas(500,500);
    ball = new BallRGB (200,240,0,0,20,0,255,255);
    food = new Food ();
}

function draw(){
    background(255,0,0);

    ball.step();
    ball.render();
    food.render();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        ball.accelerateBall(-0.5,0);
    }
    else if (keyCode === RIGHT_ARROW) {
        ball.accelerateBall(0.5,0);
    }
    else if (keyCode === UP_ARROW) {
        ball.accelerateBall(0,-0.5);
    }
    else if (keyCode === DOWN_ARROW) {
        ball.accelerateBall(0,0.5);
    }
}