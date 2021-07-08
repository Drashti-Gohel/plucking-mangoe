class Tree{
    constructor(x,y,width,height){
       
        this.image=loadImage("tree.png");
        World.add(world,this.image);
        
    }
    display(){
        image(this.image,420,200,400,400);
    }
}