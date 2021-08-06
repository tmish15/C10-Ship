
var seaImg
var shipImg1
var ship, sea
function preload(){
seaImg1 = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  seaImg = createSprite(200, 20, width, 400);
  seaImg.addImage("sea", seaImg1)
  seaImg.velocityX = -3
  ship = createSprite(200, 200);
  ship.addAnimation("ship", shipImg1)
  ship.scale = 0.2
  
}

function draw() {
  background("blue");
  if(seaImg.x<0){
    seaImg.x = width/2
    }
 drawSprites();
}
