let ship;

function setup(){
    createCanvas(500,500);
    ship = new Ship (200,240,0,0,rotate(),true);
}

function draw(){
    background(255,0,0);
    ship.drawShip();
    ship.moveShip();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        ship.accelerateShip(-0.5,0);
    }
    else if (keyCode === RIGHT_ARROW) {
        ship.accelerateShip(0.5,0);
    }
    else if (keyCode === UP_ARROW) {
        ship.accelerateShip(0,-0.5);
    }
    else if (keyCode === DOWN_ARROW) {
        ship.accelerateShip(0,0.5);
    }
}