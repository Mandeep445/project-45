var astronaut, astronautImage, alien, alienImage,meteor, meteorImage, ufo, ufoImage,robot,robotImage;  
bg, bgImage;
var ground;
function preload(){
  astronautImage = loadAnimation("images/astronaut.png","images/astro2.png");
  alienImage = loadImage("images/alien.png");
  meteorImage = loadImage("images/m1.png");
  ufoImage = loadImage("images/ufo.png");
  robotImage = loadImage("images/robot.png");
  bgImage = loadImage("images/download.jpg");
   
}
function setup () {
createCanvas (1200,600);
bg=createSprite (600,0,1200,600);
bg.scale = 0.70
bg.velocityX=-4;
bg.addImage(bgImage);
ground=createSprite(600,580,1200,10);
// ground.velocityX=-4;
astronaut= createSprite(100,450);
astronaut.addAnimation("astronaut",astronautImage);
astronaut.scale = 0.2
}
function draw () {
background("black");

console.log(bg.x);
if(bg.x<0){ 
bg.x=bg.width/2;
 }


drawSprites();
}
