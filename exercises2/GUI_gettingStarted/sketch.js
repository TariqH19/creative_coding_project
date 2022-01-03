

let params = {
	angle: 180,
	angleMin: 0,
    angleMax: 360,
    angleStep: 10,

	posX: 250,
	posXMin: 0,
    posXMax: 500,
    posXStep: 2,

    posY: 250,
	posYMin: 0,
    posYMax: 500,
    
    shapeW: 150,
	shapeWMin: 10,
    shapeWMax: 290,
    
    shapeH: 150,
	shapeHMin: 10,
    shapeHMax: 290,

    bgColor: [180, 255, 255],
    fColor: [255, 0, 0],
    fillToggle: true
}

let myPos;
let mySize;
let visible = true;

var gui;




// So now after all of our data has been created we will use p5.js
// to draw circles. We iterate through the array and draw a circle with
// the data in each object

function setup() {
    angleMode(DEGREES);
    createCanvas(500, 500);
    background(params.bgColor);
    // myPos = createVector(params.posX, params.posY);
    // mySize = createVector(params.shapeW, params.shapeH);
    // create the GUI
	gui = createGui('My Gui settings');
	gui.addObject(params);
    gui.setPosition(550,185);
    //noLoop();
}

function draw() {
    clear();
    myPos = createVector(params.posX, params.posY);
    mySize = createVector(params.shapeW, params.shapeH);
    background(params.bgColor);
    rectMode(CENTER);
    if(params.fillToggle == true){
        fill(params.fColor);
    }
    else{
        noFill();
    }
    push ();
    translate (myPos.x,myPos.y)
    rotate(params.angle)
    rect(0,0,mySize.x,mySize.y,25,75,25,75);    
    pop ();
}

// check for keyboard events
function keyPressed() {
    switch(key) {
      // type [F1] to hide / show the GUI
      case 'x':
        visible = !visible;
        if(visible) gui.show(); else gui.hide();
        break;
    }
  }