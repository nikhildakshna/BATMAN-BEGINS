const World = Matter.World;
const Body = Matter.body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var lightning;
var lightningANM;

function preload(){
  lightningANM = loadAnimation("1.png","2.png","3.png","4.png");  
  walkingANM = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png");
}

function setup(){

engine = Engine.create();
world = engine.World;    

createCanvas(displayWidth - 10,displayHeight - 100);   
lightning = createSprite(displayWidth/2,displayHeight/2 - 300);    
lightning.addAnimation("moving",lightningANM); 
lightning.scale = 0.5;
man = createSprite(displayWidth/2,displayHeight/2 + displayHeight/5);
man.addAnimation("moving",walkingANM);
man.scale = 0.3;
}

function draw(){
Engine.update(engine);
background(0);
drawSprites();   
}   

