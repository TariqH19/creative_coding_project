class Molecule {
    constructor(){
        this.posX = Math.round(Math.random() *500);
        this.posY = Math.round(Math.random() *500);
        this.radius = Math.round(Math.random() *15 + 5);
        this.xSpeed = (Math.random() *4 - 2);
        this.ySpeed = (Math.random() *4 - 2);
    }

    render(){
        push ();
        translate (this.posX,this.posY);
        let angle = atan2(this.ySpeed,this.xSpeed);
        rotate(angle)
        fill (255);
        noStroke();
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }

    step(){
        this.posX += this.xSpeed;
        this.posY += this.ySpeed;

        if(this.posX>500){this.posX=0}
        if(this.posX<0){this.posX=500}
        if(this.posY>500){this.posY=0}
        if(this.posY<0){this.posY=500}
    }
}
