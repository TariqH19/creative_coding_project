let balls = [];
//let numOfMolecules = 2; -> replaced by params.howMany
let howManyold

let params = {
	howMany: 1,
	howManyMin: 1,
    howManyMax: 5,

	increaseX: 1,
	increaseXMin: -5,
    increaseXMax: 5,
    increaseXStep: 0.25,

    increaseY: 1,
	increaseYMin: -5,
    increaseYMax: 5,
    increaseYStep: 0.25,
    
    shapeW: 50,
	shapeWMin: 10,
    shapeWMax: 190,
    
    shapeH: 50,
	shapeHMin: 10,
    shapeHMax: 190,

    increaseRadius:0,
    increaseRadiusMin:0,
    increaseRadiusMax:30,

    bgColor: [0, 189, 189],
    fColor: '#362b2b'

}

let visible = true;
var gui;

function populateArray() {
    for (i = 0; i <  params.howMany; i++) {
        balls.push(new BallRGB());
    }
    return console.log("population complete. Length of array", balls.length)
}

function setup() {
    populateArray();
    createCanvas(500, 500);
    background(params.bgColor);
    rectMode(CENTER)

    // create the GUI
	gui = createGui('Change Values');
    gui.setPosition(530, 200);
	gui.addObject(params);
    //noLoop();
}

function draw() {

    background(params.bgColor);
    
    //if number has changed rebuild the array
    if (howManyold != params.howMany) {
        balls = [];
        //populate the Array
        populateArray();
    }
    
    balls.forEach(ball => {
        //let fCol = 
        ball.updateVals(params.increaseX, params.increaseY, params.shapeH,params.shapeW, params.fColor, params.increaseRadius)
        ball.move();
        ball.render();
    });

    //store params.howMany in howManyOld to compare
    howManyold = params.howMany
}

// check for keyboard events
function keyPressed() {
    switch(key) {
      // type [F1] to hide / show the GUI
      case 'p':
        visible = !visible;
        if(visible) gui.show(); else gui.hide();
        break;
    }
  }