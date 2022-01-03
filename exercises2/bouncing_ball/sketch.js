let ball1;
let ball2;
let angle;
let speed;

function setup(){
    createCanvas(500,500);
    angle1 = 25;
    angle2 = 47;
    speed = 15;
    ball1 = new BallRGB (200,240,2,3,20,0,255,255);
    ball1.vx = speed*cos(angle1*PI/180);
    ball1.vy = speed*sin(angle1*PI/180);
    ball2 = new BallRGB (100,240,2,3,20,255,0,255);
    ball2.vx = speed*cos(angle2*PI/180);
    ball2.vy = speed*sin(angle2*PI/180);
}

function draw(){
    background(255,0,0);
    // ball1.updateVals(200,240,2,3,20,0,255,255);
    ball1.render();
    ball1.step();
    ball2.render();
    ball2.step();
} 