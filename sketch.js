var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(300,200,40,40);
  car.shapeColor="blue";
  wall=createSprite(800,200,30,80);
  wall.shapeColor="purple";
  car.velocityX=4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,wall)){
    textSize(50);
    text("bang!!!",300,400);
    movingRect.shapeColor="purple";
   
  }
  bounceOff(car,wall);
  drawSprites();
}

