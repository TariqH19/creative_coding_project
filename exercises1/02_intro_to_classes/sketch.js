let molecules = [];
let circle1;
let circle2;
let circle3;
let nose;
let mouth;
let eye1;
let eye2;
let button1;
let button2;
let button3;
let arm1;
let arm2;

function setup(){
    createCanvas(500,500);
    circle1 = new Snowman(250,150,80,80);
    circle2 = new Snowman(250,250,100,100);
    circle3 = new Snowman(250,350,120,120);
    nose = new Nose(270,150,50,10);
    mouth = new Mouth(240,180,20,2);
    eye1 = new Eye(220,120,15,15);
    eye2 = new Eye(280,120,15,15);
    button1 = new Button(250,250,20,20);
    button2 = new Button(250,300,20,20);
    button3 = new Button(250,350,20,20);
    arm1 = new Arm (350,260,400,200);
    arm2 = new Arm (150,260,120,200);
    
    for (let i = 0; i < 100; i++) {
        molecules.push(new Molecule())        
    }
}

function draw(){
    background(255,0,0);
    circle1.render();
    circle2.render();
    circle3.render();
    nose.render();
    mouth.render();
    button1.render();
    button2.render();
    button3.render();
    eye1.render();
    eye2.render();
    arm1.render();
    arm2.render();
    keyPressed();
}

function keyPressed(){
    if (keyCode === 32) {
        molecules.forEach(Molecule => Molecule.render());
        molecules.forEach(Molecule => Molecule.step());
    }
}