var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope1,rope2,rope3,rope4,rope5, roof
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob(200,600,20);
bobObject2 = new Bob(240,600,20);
bobObject3 = new Bob(280,600,20);
bobObject4 = new Bob(320,600,20);
bobObject5 = new Bob(360,600,20);

roof = new Roof(300,100,300,20)

rope1 = new Rope(roof,bobObject1,20,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  display();
  drawSprites();
 
}

function display() {
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roof.display();

}



