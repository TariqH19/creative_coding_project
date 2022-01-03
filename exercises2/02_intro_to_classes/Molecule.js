class Molecule {
    constructor(){
        this.posX = 250;
        this.posY = 250;
        this.radius = Math.round(Math.random() *15 + 5);
        this.xSpeed = (Math.random() *4 - 2);
        this.ySpeed = (Math.random() *4 - 2)
    }

    render(){
        push ();
        translate (this.posX,this.posY);
        let angle = atan2(this.ySpeed,this.xSpeed);
        rotate(angle)
        rect(0,0,this.radius,this.radius);
        pop ();
    }

    step(){
        this.posX += this.xSpeed;
        this.posY += this.ySpeed;
        if(this.posX < 0 || this.posX > 500) {
            this.radius = Math.round(Math.random() *15 + 5);
            this.xSpeed *= -1;
        }
        if(this.posY < 0 || this.posY > 500) {
            this.radius = Math.round(Math.random() *50 + 5);
            this.ySpeed *= -1;
        }
    }
}
