

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;



function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crear un fondo
//agregarlo a world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  background("lightblue");
  suelo = Bodies.rectangle(250,400,20,20,ground_options)
  World.add(world,suelo)
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 


  rect(suelo.position.x,suelo.position.y,400,20)
  
}

