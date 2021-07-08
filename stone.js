class Stone{
    
    constructor(x,y,radius){

        var options = {
            restitution:0,
            friction:1,
            density:1.2,
            isStatic:false,
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("stone.png");
        World.add(world,this.body);
        this.r=radius;
       
    }
    display(){
        var stonepos=this.body.position; 
        push();
        translate(stonepos.x, stonepos.y); 
        // rectMode(CENTER) 
        rotate(this.body.angle)
        fill(255,0,255)
        imageMode(CENTER); 
        ellipseMode(RADIUS)
        image(this.image, 0,0,this.r*2, this.r*2)
        pop();
        
        
    }
}