
var roof;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var rope1,rope2,rope3,rope4,rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

roof = new Roof(400,100,750,30);

bobobject1 = new Bob(100,400,150);
bobobject2 = new Bob(250,400,150);
bobobject3 = new Bob(400,400,150);
bobobject4 = new Bob(550,400,150);
bobobject5 = new Bob(700,400,150);

rope1 = new Rope(roof.chain,bobobject1.chain);
rope2 = new Rope(roof.chain,bobobject2.chain);
rope3 = new Rope(roof.chain,bobobject3.chain);
rope4 = new Rope(roof.chain,bobobject4.chain);
rope5 = new Rope(roof.chain,bobobject5.chain);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
roof.display();

bobobject1.display();
bobobject2.display();
bobobject3.display();
bobobject4.display();
bobobject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}



