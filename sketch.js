var fixedRect;
var movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(200,400,30,100);
fixedRect.shapeColor = "red";
movingRect = createSprite(400,400,100,30);
movingRect.shapeColor = "green";

gameObject1 = createSprite(800,100,50,50);
gameObject1.shapeColor = "orange";

gameObject2 = createSprite(800,200,50,50);
gameObject2.shapeColor = "yellow";

gameObject3 = createSprite(800,300,50,50);
gameObject3.shapeColor = "brown";

gameObject4 = createSprite(800,400,50,50);
gameObject4.shapeColor = "pink";
}

function draw() {
  background("black");
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (isTouching(movingRect, gameObject1)) {
    movingRect.shapeColor = "white";
    gameObject1.shapeColor = "white";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "orange";
  }
  drawSprites();
}

function isTouching(o1,o2) {
  if (o1.x - o2.x < o1.width/2 + o2.width/2 && 
    o2.x - o1.x < o1.width/2 + o2.width/2 && 
    o1.y - o2.y < o1.height/2 + o2.height/2 && 
    o2.y - o1.y < o1.height/2 + o2.height/2) {

      return true;
  }  
  else {
    return false;
  }
}