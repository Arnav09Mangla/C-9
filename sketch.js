var aranv 
function setup() {

  
  createCanvas(400,400);
 aranv= createSprite(200,150,90,90)
}






function draw() 
{
  background(255);
  if (keyIsDown("right")){


    aranv.position.x=aranv.position.x+5

  }
drawSprites()

}




