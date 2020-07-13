var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object3 = createSprite(100, 200, 50, 80);
  object3.shapeColor = "green";
  object3.debug = true;
  object4 = createSprite(400, 200, 50, 80);
  object4.shapeColor = "green";
  object4.debug = true;

  

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
object4.x = mouseX
object4.y = mouseY
if (isTouching(object3,object4)){
object3.shapeColor = "orange"
object4.shapeColor = "orange"

}
else {
  object3.shapeColor = "green"
  object4.shapeColor = "green"
}
bounceOff(movingRect,fixedRect);

  drawSprites();
}
