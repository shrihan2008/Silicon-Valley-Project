var alien1_img,alien_2img,pl_1img,pl_2img,pl1,pl_2img,alienGroup;
var gameState=0
var pl1,pl2,pl3,pl4,bullet4,bullet1,bullet2,bullet3,alien
var pl1_score=0
var pl2_score=0
var pl3_score=0
var pl4_score=0

function preload() {
    pl_1img=loadImage("Images/player_1.png")
    pl_2img=loadImage("Images/player_2.png")
    pl_3img=loadImage("Images/player_3.png")
    pl_4img=loadImage("Images/player_4.png")
    alien1_img=loadImage("Images/enemy.png")
    alien2_img=loadImage("Images/enemy_2.png")
    alien3_img=loadImage("Images/enemy_3.png")
    alien4_img=loadImage("Images/enemy_4.png")
    bullet_Img=loadImage("Images/bullet.png")
    bullet_Img_2=loadImage("Images/bullet_2.png")
    bullet_Img_3=loadImage("Images/bullet_3.png")
    bullet_Img_4=loadImage("Images/bullet_4.png")
    bg=loadImage("Images/background.jpg")
    alienGroup=new Group()
    bulletGroup=new Group()
}

function setup() {
    createCanvas(2100, 900);

    pl1=createSprite(160,300,10,10)
    pl1.addImage(pl_1img)
    pl1.scale=0.4

    pl2=createSprite(160,100,10,10)
    pl2.addImage(pl_2img)
    pl2.scale=0.5

    pl3=createSprite(160,500,10,10)
    pl3.addImage(pl_3img)
    pl3.scale=0.2

    pl4=createSprite(160,700,10,10)
    pl4.addImage(pl_4img)
    pl4.scale=0.3

    bullet4=createSprite(160,700)
    bullet4.addImage(bullet_Img)
    bullet4.scale=0.2
    bullet4.velocityX=4

    bullet1=createSprite(160,500)
    bullet1.addImage(bullet_Img_2)
    bullet1.scale=0.2
   

    bullet2=createSprite(160,100)
    bullet2.addImage(bullet_Img_3)
    bullet2.scale=0.2
    bullet2.velocityX=4

    bullet3=createSprite(160,300)
    bullet3.addImage(bullet_Img_4)
    bullet3.scale=0.2
    bullet3.velocityX=4

    bulletGroup.add(bullet4)
    bulletGroup.add(bullet1)
    bulletGroup.add(bullet2)
    bulletGroup.add(bullet3)
}

function draw() {
    background(bg);
    alienMaker() 
  if(keyCode===32){
    bullet1.velocityX=4
  }
  

  if(bullet1.isTouching(alienGroup)){
    alienGroup.destroyEach()
    pl1_score+=1
  
  }
  if(bullet2.isTouching(alienGroup)){
    alienGroup.destroyEach()
    pl2_score+=1
  
  }

  if(bullet3.isTouching(alienGroup)){
    alienGroup.destroyEach()
    pl3_score+=1
   
  }
  if(bullet4.isTouching(alienGroup)){
    alienGroup.destroyEach()
    pl4_score+=1
 
  }
  fill("red")
  textSize(20)
  text("Player 1 score = "+pl1_score,100,50)
  text("Player 2 score = "+pl2_score,300,50)
  text("Player 3 score = "+pl3_score,500,50)
  text("Player 4 score = "+pl4_score,700,50)
//console.log(bulletGroup.x)
  if(bulletGroup.x<2000)
  bulletGroup.x=160
 
   drawSprites()
}

function alienMaker(){
  if(frameCount % 60 === 0) {
    alien = createSprite(random(1000, 1900), random(100,900));
    
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: alien.addImage("al1",alien1_img);
          alien.scale=0.5
        break;
        case 2: alien.addImage("al2", alien2_img);
         alien.scale=1
        break;
        case 3: alien.addImage("al3", alien3_img);
            alien.scale=0.3
        break;
        case 4: alien.addImage("al4",alien4_img);
          alien.scale=0.3
        break;
    }
    alienGroup.add(alien)
    alienGroup.lifetime=300
}
}
