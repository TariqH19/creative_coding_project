let screenHeight = 500;
let screenWidth = 500;
let numCols = 3;
let numRows = 3;
let score = 0;

let platformWidth=100;
let platformHeight=20;
let platform;

let pin = [];
let pinRadius = 10;
let yVelocity = 5;
let xVelocity = 5;

let balloons = [];
let bonusBalloons = [];
let bonusBalloonRadius = 20;
let balloonRadius = 30;
let balloon1;
let balloon2;

let confettis = [];

function preload() {
    balloon1 = loadImage('assets/layer1.png');
    balloon2 = loadImage('assets/layer2.png')
}

function setup() {
    normalBalloons();
    specialBalloons();
    platform = new Platform(screenWidth/2, screenHeight - platformHeight/2);
    createCanvas(screenWidth,screenHeight);
}

function draw() {
    background(255,115,0);
    fill('#d9c3f7');
    textSize(24);
    text("Score: " + score, 35, 25);
    platform.render();
    confettis.forEach(confetti => {
        confetti.createParticles();
        confetti.update();
        confetti.render();
    });

    balloons.forEach(balloon =>{
        balloon.render();
    });
    bonusBalloons.forEach(bonusBalloon =>{
        bonusBalloon.render();
    });

    for(let i = pin.length -1; i>=0; i--){
        pin[i].move();
        pin[i].render();

        for(let j = balloons.length -1; j>=0; j--){
            if (pin[i].hits(balloons[j])){
                let tempPos=balloons[j].pos;
                balloons.splice(j,1);

                confettis.push(new Confetti(tempPos.x,tempPos.y));
            }
        }   
        for(let n = bonusBalloons.length -1; n>=0; n--){
            if (pin[i].hits2(bonusBalloons[n])){
                let tempPos2=bonusBalloons[n].pos;
                bonusBalloons.splice(n,1);
                confettis.push(new Confetti(tempPos2.x,tempPos2.y));
            }
        }    
    }

    if (score === 54) {
        winner();
    }
}

function normalBalloons(){
    for(let row=0 ; row < numRows; row++){
        for(let col=0 ; col < numCols; col++){
        balloons.push(new Balloon(Math.round(Math.random() *500),Math.round(Math.random() *200 + 20)));
        }
    }
}

function keyPressed(){
    if (keyCode === 32) {
        pin.push (new Pin(Math.floor(Math.random() * 300) + 50));
    }
}

function specialBalloons(){
    for(let row=0 ; row < numRows; row++){
        for(let col=0 ; col < numCols; col++){
        bonusBalloons.push(new bonusBalloon(Math.round(Math.random() *500),Math.round(Math.random() *200 + 20)));
        }
    }
}

function gameOver(){
    background(0);
      textSize(32);
      textAlign(CENTER);
      fill(255,80,80);
      text("GAME OVER",width/2,height/2);
}

function winner(){
    background(0);
    textSize(32);
    textAlign(CENTER);
    fill(255,80,80);
    text("WINNER !!",width/2,height/2);
}
