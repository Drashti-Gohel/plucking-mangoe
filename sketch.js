
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage,boy;
function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(500,400,50,50);
	ground = new Ground(400,590,800,10);
	stone = new Stone(200,200,20);

	mango1 = new Mango(580,280,20);
	mango2 = new Mango(700,300,20);
	mango3 = new Mango(650,250,20);
	mango4 = new Mango(650,350,20);
	mango5 = new Mango(540,380,20);
	mango6 = new Mango(500,320,20);
	
	chain = new Chain(stone.body,{x:100,y:465});
	
	boy=createSprite(160,530);
	boy.addImage(boyImage);
	boy.scale=0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

 detectcollision(stone,mango1);
 detectcollision(stone,mango2);


  stone.display();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  chain.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	chain.fly();
}

function detectcollision(stone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=stone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lmango.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		chain.launch(stone.body);
	}
}