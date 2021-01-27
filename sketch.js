let backgroundIMG;
let backgroundSPRITE;
let invisibleGround;
let player, playerIMG;
let NPC1,NPC1Image,NPC2Image,NPCGroup;

function preload()
{
    backgroundIMG = loadImage("./Game NPC/city_backgrounds/city_background_clean.png")
    playerIMG = loadImage("./Game NPC/Player (2).png")
    NPC1Image = loadImage("./Game NPC/Transparent PNG/idle/frame-1.png")
    NPC2Image = loadImage("./Game NPC/Transparent PNG/idleOTHER/frame-1.png")
}

function setup()
{
    createCanvas(1912, 800)

    backgroundSPRITE =  createSprite(50, 288, 100, 100)
    backgroundSPRITE.addImage(backgroundIMG)

    invisibleGround = createSprite(200,780,1900,10);
    invisibleGround.visible = false;


     player = createSprite(100,380,20,50);
     player.addImage(playerIMG);
    /*
     NPC1 = createSprite(50, 380, 20, 50)
     NPC1.addImage(NPC1Image);
     NPC1.scale = 0.05;

     NPC2 = createSprite(150, 380, 20, 50)
     NPC2.addImage(NPC2Image);
     NPC2.scale = 0.1;

     */

     NPCGroup = new Group();

    

}

function draw()
{
    background(100, 100, 50)

    player.velocityY = player.velocityY+1; 

    player.collide(invisibleGround)

    backgroundSPRITE.velocityX = -5

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


    backgroundSPRITE.velocityX = -5
    drawSprites()
}

function SpawnNPC()
{
    if (frameCount % 100 === 0)
    {

    }
}