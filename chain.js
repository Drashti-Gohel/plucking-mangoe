class Chain{
    constructor(bodyA,pointB){

    var options ={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:1,
    }        
    this.chain = Matter.Constraint.create(options);
    World.add(world,this.chain); 
    this.pointB=pointB;
    }

    display()
    {
      fill ("white");
    }

    fly()
    {
        this.chain.bodyA=null;
    }

    launch (bodyA)
    {
        this.chain.bodyA=bodyA;
    }
}