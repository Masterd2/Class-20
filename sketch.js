
var movingRect,fixedRect
var isTouching=0
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(600, 100, 80, 50);
  movingRect.shapeColor="red";
  movingRect.debug=true;
  movingRect.velocityX=-2;
  movingRect.velocityY=2;

  fixedRect=createSprite(350, 300, 50, 80);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;
  fixedRect.velocityX=2;
  fixedRect.velocityY=-2;
}

function draw() {
  background(255,25,255);  
  
  
  
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x  < movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2)
    {
      fixedRect.velocityX=fixedRect.velocityX *(-1);
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityY=fixedRect.velocityY *(-1);
      movingRect.velocityYvelocityY = movingRect.velocityY * (-1);
    }


  drawSprites();
}