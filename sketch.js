function setup() {
  createCanvas(800,800);
  gameobject1=createSprite(200,200,50,80)
  gameobject1.shapeColor="green"
  gameobject1.debug= true;

  gameobject2=createSprite(400,200,80,30)
  gameobject2.shapeColor="green"
  gameobject2.debug= true;

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(400, 700,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;


}

function draw() {
  background(10,231,251);  
  
  gameobject2.x=mouseX
  gameobject2.y=mouseY
  
bounceoff(fixedRect,movingRect);

 // isTouching();
  if(isTouching(gameobject1,gameobject2)){
    gameobject1.shapeColor="yellow"
    gameobject2.shapeColor="yellow"
  }else{
    gameobject1.shapeColor="green"
    gameobject2.shapeColor="green"
  }
  drawSprites();
}


























































