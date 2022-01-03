let ball1;

function setup(){
    createCanvas(500,500);
    ball1 = new BallRGB (200,240,0,0,20,0,255,255);
}

function draw(){
    background(255,0,0);
    ball1.render();
    ball1.accelerateBall(1,0);
    ball1.step();
} 