let backgroundIMG;
let backgroundSPRITE;
let invisibleGround;
let player, playerIMG;
let NPC1,NPC1Image,NPC2Image,NPCGroup;
let score = 0;
let PLAY = 1,gameState = PLAY , END = 0;
let bullet, bulletIMG, bulletGroup;
let waterBullet, waterBulletIMG, waterBulletGroup;

function preload()
{
    backgroundIMG = loadImage("./Game NPC/city_backgrounds/city_background_clean.png")
    playerIMG = loadImage("./Game NPC/Player (2).png")
    NPC1Image = loadImage("./Game NPC/Transparent PNG/idle/frame-1.png")
    NPC2Image = loadImage("./Game NPC/Transparent PNG/idleOTHER/frame-1.png")
    bulletIMG = loadImage("./Game NPC/fireblast.png")
    waterBulletIMG = loadImage("./Game NPC/waterblast.png")
}

function setup()
{
    createCanvas(1912, 800)

    backgroundSPRITE =  createSprite(50, 288, 100, 100)
    backgroundSPRITE.addImage(backgroundIMG)

    invisibleGround = createSprite(200,780,1900,10);
    invisibleGround.visible = false;


     player = createSprite(20,380,20,50);
     player.addImage(playerIMG);

     gameState = PLAY;

     NPCGroup = new Group();
     bulletGroup = new Group();
     waterBulletGroup = new Group();

    

}

function draw()
{
    background(100, 100, 50)


    textSize(40)
    text("Time Alive: "+ score, 1600,50);
    
    if(gameState === PLAY)
    {
        score = score + Math.round(frameCount/200);

        if (keyDown("Q")) {
            createFireBullet();
          }

        if(keyDown("E"))
        {
            createWaterBullet();
        }
          

    player.velocityY = player.velocityY+1; 

    player.collide(invisibleGround)

    if(keyDown("D"))
    {
        player.x = player.x+5;
    }

    if(keyDown("A"))
    {
        player.x = player.x-5;
    }


    if (backgroundSPRITE.x < 0){
        backgroundSPRITE.x = backgroundSPRITE.width/2;
      }

         if(keyDown("F")){
             player.velocityY = -10
         }

    backgroundSPRITE.velocityX = -5
    SpawnNPC()

    if(bulletGroup.isTouching(NPCGroup) || waterBulletGroup.isTouching(NPCGroup))
    {
        bulletGroup.destroyEach();
        NPCGroup.destroyEach();
    }

    if(bulletGroup.isTouching(player))
    {
        gameState = END;
    }

    if(NPCGroup.isTouching(player)){
        gameState = END;
    }
    } else if(gameState === END)
    {
        backgroundSPRITE.velocityX = 0
        score = 0;
        NPCGroup.destroyEach();
        player.velocityY = 0 
        text("DONT TOUCH FIRE OR MONSTER", 300, 200)
    }

    if(keyDown("R")){
        gameState =  PLAY;
    }

    drawSprites()
}

function SpawnNPC()
{
    if (frameCount % 150 === 0)
    {

        NPC = createSprite(1500, 740, 20, 50)
        // //generate random monsters
        var rand = Math.round(random(1,2));
        switch(rand) {
          case 1: NPC.addImage(NPC1Image);
                  break;
          case 2: NPC.addImage(NPC2Image);
                  break;
          default: break;
        }
       
        //assign scale and lifetime to the NPC           
        NPC.scale = 0.1;
        NPC.lifetime = 300;
        NPC.velocityX = -(2+ score/100)
       
       //adding NPCs to the group
       NPCGroup.add(NPC);
   
    }
}

function createFireBullet() {
    var bullet= createSprite(150, 100, 60, 10);
    bullet.addImage(bulletIMG);
    bullet.x = 360;
    bullet.y=player.y;
    bullet.velocityX = 5;
    bullet.lifetime = 500;
    bullet.scale = 0.09;
    bulletGroup.add(bullet);
    //return bullet;
  }

  function createWaterBullet() {
    var waterBullet= createSprite(150, 100, 60, 10);
    waterBullet.addImage(waterBulletIMG);
    waterBullet.x = 360;
    waterBullet.y=player.y;
    waterBullet.velocityX = 5;
    waterBullet.lifetime = 500;
    waterBullet.scale = 0.5;
    waterBulletGroup.add(waterBullet);
    //return bullet;
  }