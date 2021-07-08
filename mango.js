class Mango{
    
    constructor(x,y,radius){

        var options = {
            restitution:0,
            friction:1,
            isStatic:true,
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("mango.png");
        World.add(world,this.body);
       
    }
    display(){
        var stonepos=this.body.position; 
        push();
        translate(stonepos.x, stonepos.y); 
        // rectMode(CENTER) 
        rotate(this.body.angle);
        fill(255,0,255)
        imageMode(CENTER); 
        ellipseMode(RADIUS);
        image(this.image, 0,0,50,50);
        pop();
        
    }
}