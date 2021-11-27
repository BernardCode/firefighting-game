const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var bg;
var player;

function preload() {
  bg=loadImage("wall.jpg");

}
function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(300,430,650,140);

  player = new Player(200,250);

  if(keyDown("right")) {
    Matter.Body.setPosition(player.body,{x:pos.x+1,y:pos.y});
  }
}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
  player.display();
}

function keyPressed() {
  var pos=player.body.position;

  
  if(keyCode=="39") {
    //Matter.Body.setPosition(player.body,{x:pos.x+1,y:pos.y});
  }
}



