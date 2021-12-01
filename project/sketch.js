let screenHeight = 500;
let screenWidth = 500;
let balloons = [];
let balloonRadius = 20;
let numCols = 5;
let numRows = 5;
let hSpace = 30;
let vSpace = 30;
let xOffset = (screenWidth - (numCols-1) * hSpace)/2;
let yOffset = 30;

let platformWidth=100;
let platformHeight=20;
let platform;

let pin = [];
let pinRadius = 10;
let yVelocity = 2;
let xVelocity = 2;

function setup() {
    myBalloons();
    platform = new Platform(screenWidth/2, screenHeight - platformHeight/2);
    createCanvas(screenWidth,screenHeight);
    background(255);
}

function draw() {
    background(0);
    platform.render();
    platform.move();

    balloons.forEach(balloon =>{
        balloon.render();
    });

    for(let i = pin.length -1; i>=0; i--){
        pin[i].move();
        pin[i].render();
        pin[i].bounce();
        for(let j = balloons.length -1; j>=0; j--){
            if (pin[i].hits(balloons[j])){
                balloons.splice(j,1);
            
            }
        }      
    }
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        platform.setDirection(1);
    } else if(keyCode === LEFT_ARROW){
        platform.setDirection(-1);
    } else if(keyCode === 32){
        pin.push (new Pin(Math.round(Math.random() *500),Math.round(Math.random() *500)))
    }
}

function myBalloons(){
    for(let row=0 ; row < numRows; row++){
        for(let col=0 ; col < numCols; col++){
        balloons.push(new Balloon(Math.round(Math.random() *500),Math.round(Math.random() *200)));
        }
    }
}
