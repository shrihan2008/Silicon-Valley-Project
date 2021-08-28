var alien1_img,alien_2img,pl_1img,pl_2img,pl1,pl_2img,alienGroup;
var gameState=0
var playerCount = 0;
var player,form,game
var pl1,pl2,pl3,pl4,bullet,bullet1,bullet2,bullet3,alien
var players,bullets

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
    bg=loadImage("Images/bg.jpg")
    alienGroup=new Group()
}

function setup() {
    createCanvas(1900, 900);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    yVelocity=0
}

function draw() {
    background(bg);
    if (playerCount === 4) {
      game.update(1);
    }
    if (gameState === 1 && playerCount===4) {
      clear(); 
      game.play();
    }
    if (gameState === 2) {
      game.end();
    }
  
  }

