let molecules = [];

function setup(){
    createCanvas(500,500);

    for (let i = 0; i < 100; i++) {
        molecules.push(new Molecule())        
    }
}

function draw(){
    background(255,0,0);
    molecules.forEach(Molecule => Molecule.render());
    molecules.forEach(Molecule => Molecule.step());
}
