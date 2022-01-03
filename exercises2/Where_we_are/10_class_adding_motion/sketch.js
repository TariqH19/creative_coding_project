let molecules = [];
//let numOfMolecules = 2; -> replaced by params.howMany
let howManyold

let params = {
	howMany: 50,
	howManyMin: 2,
    howManyMax: 500,

	increaseX: 1,
	increaseXMin: -5,
    increaseXMax: 5,
    increaseXStep: 0.25,

    increaseY: 1,
	increaseYMin: -5,
    increaseYMax: 5,
    increaseYStep: 0.25,
    
    scale: 1,
	scaleMin: 0.1,
    scaleMax: 4,
    scaleStep: 0.1,

    bgColor: [180, 255, 255],
    fColor: '#ff0000'

}

let visible = true;
var gui;

function populateArray() {
    for (i = 0; i <  params.howMany; i++) {
        molecules.push(new molecule());
    }
    return console.log("population complete. Length of array", molecules.length)
}

function setup() {
    populateArray();
    createCanvas(500, 500);
    background(params.bgColor);
    rectMode(CENTER)

    // create the GUI
	gui = createGui('Change Values');
    gui.setPosition(530, 190);
	gui.addObject(params);
    //noLoop();
}

function draw() {

    background(params.bgColor);
    
    //if number has changed rebuild the array
    if (howManyold != params.howMany) {
        molecules = [];
        //populate the Array
        populateArray();
    }
    
    molecules.forEach(molecule => {
        //let fCol = 
        molecule.updateVals(params.increaseX, params.increaseY, params.scale, params.fColor)
        molecule.move();
        molecule.render();
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