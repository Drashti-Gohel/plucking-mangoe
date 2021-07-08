class Ground{
    constructor(x,y,width,height){
       
        this.ground=Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.ground);
        this.width=width;
        this.height=height;
        
    }
    display(){
        fill ("green");
        rect (this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}