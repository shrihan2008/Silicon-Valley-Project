var alien1_img,alien_2img,pl_1img,pl_2img,pl1,pl_2img,alienGroup;
var gameState=1
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

    width = windowWidth-20;
    height = windowHeight-20;

    createCanvas(width, height);

    pl1=createSprite(width*0.1,100,10,10)
    pl1.addImage(pl_1img)
    pl1.scale=0.4

    pl2=createSprite(width*0.1,300,10,10)
    pl2.addImage(pl_2img)
    pl2.scale=0.5

    pl3=createSprite(width*0.1,500,10,10)
    pl3.addImage(pl_3img)
    pl3.scale=0.2

    pl4=createSprite(width*0.1,700,10,10)
    pl4.addImage(pl_4img)
    pl4.scale=0.3

    bullet1=createSprite(width*0.1,100)
    bullet1.addImage(bullet_Img)
    bullet1.scale=0.2
    bullet1.velocityX=4

    bullet2=createSprite(width*0.1,300)
    bullet2.addImage(bullet_Img_2)
    bullet2.scale=0.2
    bullet2.velocityX=4

    bullet3=createSprite(width*0.1,500)
    bullet3.addImage(bullet_Img_3)
    bullet3.scale=0.2  
    bullet3.velocityX=4

    bullet4=createSprite(width*0.1,700)
    bullet4.addImage(bullet_Img_4)
    bullet4.scale=0.2
    bullet4.velocityX=4

    bulletGroup.add(bullet4)
    bulletGroup.add(bullet1)
    bulletGroup.add(bullet2)
    bulletGroup.add(bullet3)
}

function draw() {
    background(bg);
    alienMaker() 


    if(gameState===1)
    {
      if(keyCode===13){
        bulletGroup.destroyEach()
        bullet1=createSprite(width*0.1,100)
        bullet1.addImage(bullet_Img_2)
        bullet1.scale=0.2
    
        bullet2=createSprite(width*0.1,300)
        bullet2.addImage(bullet_Img_3)
        bullet2.scale=0.2
        bullet2.velocityX=4
    
        bullet3=createSprite(width*0.1,500)
        bullet3.addImage(bullet_Img_4)
        bullet3.scale=0.2
        bullet3.velocityX=4
    
        bullet4=createSprite(width*0.1,700)
        bullet4.addImage(bullet_Img)
        bullet4.scale=0.2
        bullet4.velocityX=4
    
        bulletGroup.add(bullet4)
        bulletGroup.add(bullet1)
        bulletGroup.add(bullet2)
        bulletGroup.add(bullet3)
      }
    if(keyCode===32){
      bullet1.velocityX=4
    }
  

  if(bullet1.isTouching(alienGroup)){
    alienGroup.destroyEach()
    bulletGroup.destroyEach()
    pl1_score+=1
 
  }
  if(bullet2.isTouching(alienGroup)){
    alienGroup.destroyEach()
    bulletGroup.destroyEach()
    pl2_score+=1 

  }
  if(bullet3.isTouching(alienGroup)){
    alienGroup.destroyEach()
    bulletGroup.destroyEach()
    pl3_score+=1
   
  }
  if(bullet4.isTouching(alienGroup)){
    alienGroup.destroyEach()
    bulletGroup.destroyEach()
    pl4_score+=1
   }
  fill("white")
  textSize(20)
  text ("SCORES -", 50,50)
  text ("Player 1", 10,100)
  text ("Player 2", 10,300)
  text ("Player 3", 10,500)
  text ("Player 4", 10,700)
  text("Player 1 = "+pl1_score,200,50)
  text("Player 2 = "+pl2_score,350,50)
  text("Player 3 = "+pl3_score,500,50)
  text("Player 4 = "+pl4_score,650,50)
 
    }
  if(pl1_score===10 || pl2_score===10 || pl3_score===10 || pl4_score===10){
    gameState=0
}
  if(gameState===0){
    alienGroup.destroyEach()
    textSize(50)
    fill("white")
    text("Game Over",width*0.5,height*0.5)
   // text("Press Up Arrow to see the score",500,200)
    
      if(pl1_score>pl2_score>pl3_score>pl4_score){
        text("Score of player 1"+" "+pl1_score,200,300)
        text("Score of player 2"+" "+pl2_score,200,400)
        text("Score of player 3"+" "+pl3_score,200,500)
        text("Score of player 4"+" "+pl4_score,200,600)
      }
      if(pl1_score>pl3_score>pl4_score>pl2_score){
        text("Score of player 1"+" "+pl1_score,200,300)
        text("Score of player 3"+" "+pl3_score,200,400)
        text("Score of player 4"+" "+pl4_score,200,500)
        text("Score of player 2"+" "+pl2_score,200,600)
      }
      if(pl1_score>pl4_score>pl2_score>pl3_score){
        text("Score of player 1"+" "+pl1_score,200,300)
        text("Score of player 4"+" "+pl4_score,200,400)
        text("Score of player 2"+" "+pl2_score,200,500)
        text("Score of player 3"+" "+pl3_score,200,600)
      }

      if(pl2_score>pl1_score>pl3_score>pl4_score){
        text("Score of player 2"+" "+pl2_score,200,300)
        text("Score of player 1"+" "+pl1_score,200,400)
        text("Score of player 3"+" "+pl3_score,200,500)
        text("Score of player 4"+" "+pl4_score,200,600)
      }
      if(pl2_score>pl4_score>pl1_score>pl3_score){
        text("Score of player 2"+" "+pl2_score,200,300)
        text("Score of player 4"+" "+pl4_score,200,400)
        text("Score of player 1"+" "+pl1_score,200,500)
        text("Score of player 3"+" "+pl3_score,200,600)
      }
      if(pl2_score>pl3_score>pl4_score>pl1_score){
        text("Score of player 2"+" "+pl2_score,200,300)
        text("Score of player 3"+" "+pl3_score,200,400)
        text("Score of player 4"+" "+pl4_score,200,500)
        text("Score of player 1"+" "+pl1_score,200,600)
      }

      if(pl3_score>pl2_score>pl1_score>pl4_score){
        text("Score of player 3"+" "+pl3_score,200,300)
        text("Score of player 2"+" "+pl2_score,200,400)
        text("Score of player 1"+" "+pl1_score,200,500)
        text("Score of player 4"+" "+pl4_score,200,600)
      }
      if(pl3_score>pl1_score>pl4_score>pl2_score){
        text("Score of player 3"+" "+pl3_score,200,300)
        text("Score of player 1"+" "+pl1_score,200,400)
        text("Score of player 4"+" "+pl4_score,200,500)
        text("Score of player 2"+" "+pl2_score,200,600)
      }
      if(pl3_score>pl4_score>pl2_score>pl1_score){
        text("Score of player 3"+" "+pl3_score,200,300)
        text("Score of player 4"+" "+pl4_score,200,400)
        text("Score of player 2"+" "+pl2_score,200,500)
        text("Score of player 1"+" "+pl1_score,200,600)
      }

      if(pl4_score>pl2_score>pl1_score>pl3_score){
        text("Score of player 4"+" "+pl4_score,200,300)
        text("Score of player 2"+" "+pl2_score,200,400)
        text("Score of player 1"+" "+pl1_score,200,500)
        text("Score of player 3"+" "+pl3_score,200,600)
      }
      if(pl4_score>pl3_score>pl1_score>pl2_score){
        text("Score of player 4"+" "+pl4_score,200,300)
        text("Score of player 3"+" "+pl3_score,200,400)
        text("Score of player 1"+" "+pl1_score,200,500)
        text("Score of player 2"+" "+pl2_score,200,600)
      }
      if(pl4_score>pl1_score>pl2_score>pl3_score){
        text("Score of player 4"+" "+pl4_score,200,300)
        text("Score of player 1"+" "+pl1_score,200,400)
        text("Score of player 2"+" "+pl2_score,200,500)
        text("Score of player 3"+" "+pl3_score,200,600)
      }    
  }
  drawSprites()
}
 

function alienMaker(){
  if(frameCount % 100 === 0) {
    alien = createSprite(random(width*.5, width*.9), random(height*.5,height*.9));
    
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
    alienGroup.lifetime=600
}
}

/*function bullet(){
  
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
*/
