class Platform {
    constructor(x,y){
        this.pos = createVector(x,y); 
        this.direction = 0;
    }
    
    render(){
        push ();
        // translate (this.pos.x, this.pos.y);
        fill(255,0,0);
        rect(mouseX,470,90,15);
        pop();
    }
}