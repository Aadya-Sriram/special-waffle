var bird
var birdImg
var obstacle
var obstacleImg
var again
var back
var backImg
var Up

function preload()
{
  createCanvas(1000,1000)
birdImg=loadImage("bird.png")
obstacleImg=loadImage("obstacle.png")
backImg=loadImage("back.png")

}

function setup() 
{
  Up = createButton("Up")
Up.position(800, 500)
Up.scale = 0.09
Up.mouseClicked(up)
  
background(00)
  

  
  createCanvas(windowWidth,windowHeight)
bird=createSprite(200,200,200,200)
bird.addImage(birdImg)
bird.scale=0.5
obstacle=createSprite(200,900,200,900)
obstacle.addImage(obstacleImg)
//back.addImage(backImg)
obstacle.scale=5
document.getElementById('clickme').onclick = reset;
back=createSprite(200,200,1,1)
back.addImage(backImg)
back.scale=3
back.velocityX=+2.2

if(bird.x<-1){
  back.velocityX=-1
}
}


function draw() {
  obstacle.depth+=2
  bird.depth+=1
  if (frameCount % 80 === 0){
 
    obstacle=createSprite(200,900,900,900)
obstacle.addImage(obstacleImg)
if(bird.overlap(obstacle,obstacle)){
  again = createButton("Reset")
again.position(800, 500)
again.scale = 0.09
again.mouseClicked(reset)










 text
  textSize(24)
  text("You have failed",500,500)
  bird.Velocity(0,0)
}

obstacle.scale=5


obstacle.x=Math.round(random(windowWidth,windowHeight)) 
  }
  if(bird.overlap(obstacle,obstacle)){
    again = createButton("Reset")
  again.position(800, 500)
  again.scale = 0.09
  again.mouseClicked(reset)
  
   text
    textSize(24)
    text("You have failed",500,500)
    bird.Velocity(0,0)
  }
bird.velocityY=5
bird.velocityX=2.5
if(keyDown(UP_ARROW)){
bird.velocityY=bird.velocityY-15
}
if(keyDown(LEFT_ARROW)){
  bird.velocityX=bird.velocityX -15
  }

      drawSprites()
  }
  function reset(){
    window.location.reload();
  }
  function up(){
    bird.velocityY=bird.velocityY=-40
  }





































  



