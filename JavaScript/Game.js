class Game{
    constructor(){

    }
    
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
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

        players=[pl1,pl2,pl3,pl4]
    
        bullet=createSprite(160,700)
        bullet.addImage(bullet_Img)
        bullet.scale=0.2
    
        bullet1=createSprite(160,500)
        bullet1.addImage(bullet_Img_2)
        bullet1.scale=0.2
    
        bullet2=createSprite(160,100)
        bullet2.addImage(bullet_Img_3)
        bullet2.scale=0.2
    
        bullet3=createSprite(160,300)
        bullet3.addImage(bullet_Img_4)
        bullet3.scale=0.2

        bullets=[bullet1,bullet2,bullet3,bullet]
      //  yVelocity=0
    
      
    }

    play(){
        form.hide();

        Player.getPlayerInfo();
        image(bg, 0, 0, 1900, 900);
        if(frameCount % 60 === 0) {
            alien = createSprite(random(1000, 1900), random(100,700));
            
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
        if(keyIsDown(32)){
            bullet.velocityX=3
            alienGroup.destroyEach()
        }
        if(keyIsDown(UP_ARROW)){
            player.distance+=yVelocity
            yVelocity+=10
        }

        if(keyIsDown(DOWN_ARROW)){
            player.distance-=yVelocity
            yVelocity-=10
        }

     
        drawSprites()
    }

    end(){
        game.update(2)
        clear()
        fill("blue")
        textSize(10)
        text("Game over",350,300)
       
    }
}