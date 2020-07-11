const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,platform1;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingshot1;
var polygonimage;
function preload(){
polygonimage=loadImage("polygon.png");
}
function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  platform = new Ground(400,390,800,10);
  platform1 = new Ground(390,260,170,5)
  
  //level two
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);
  //level three
  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(420,195,30,40);
  //top
  block16=new Box(390,155,30,40);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon)

 slingshot1 = new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {
  background("white");  
  Engine.update(engine);
  platform.display();
  platform1.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot1.display();
  polygon.addImage("polygon",polygonimage);
  fill("red")
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}