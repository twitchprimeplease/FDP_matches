class Cell {
    constructor(x,y,nran){
        this.x = x;
        this.y = y;
        this.nran=nran;
    
        }

      

        print(){
            rectMode(CENTER);
            strokeWeight(3);
            stroke(255);
            fill(10);
            rect(this.x,this.y,100,100);
            rectMode(CORNER);
           
        }
     
    
}