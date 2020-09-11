const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dustbin3;
var ball1;

function setup() {
	createCanvas(1700, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,405,1700,40);

	dustbin1 = new Dustbins(1300,375,200,20);
	dustbin2 = new Dustbins(1400,335,20,100);
	dustbin3 = new Dustbins(1200,335,20,100);

	ball1 = new paper(300,200,40,PI/2);
	keyPressed();

	console.log(ball1.body);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ball1.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:80,y:-80});
  
	}
}
	


