var sprite
function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    background("RED")
  }
  if(keyDown(LEFT_ARROW)){
    background("BLUE")
  }
  if(keyDown(UP_ARROW)){
    background("GREEN")
  }
  if(keyDown(DOWN_ARROW)){
    background("YELLOW")
  }

drawSprites();
}




