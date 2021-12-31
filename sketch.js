var rocket,rocketImg
var star,starImg,starGroup
var star2,star2Img,star2Group
var star3,star3Img,star3Group
var meteor,meteorImg,meteorGroup
var spaceImg
var gameoverImg
var stars=0

//Game States
var PLAY=1;
var END=0;
var gameState=1;



function preload(){
    rocketImg=loadImage("rocket.png")
    starImg=loadImage("star.jpg")
    meteorImg=loadImage("meteor.jpg")
    spaceImg=loadImage("background.jpg")
    star2Img=loadImage("star2.jpg")
    star3Img=loadImage("star3.jpg")
    gameoverImg=loadImage("gameover.png")
  
}

function setup() {
    
    createCanvas(windowWidth,windowHeight)
    space=createSprite(190,190,100,100)
    space.addImage(spaceImg)
    
    rocket=createSprite(20,580,400,20);
    rocket.addImage(rocketImg);
    rocket.scale=0.5

    gameover = createSprite(200,200,100,100);
    gameover.addImage(gameoverImg);
    gameover.scale = 0.5
       
     starGroup=new Group()
     star2Group=new Group()
     star3Group=new Group()
     meteorGroup=new Group()
     
    }
    
    function draw() {
        if(gameState===PLAY){
            background(0);
            rocket.x = World.mouseX;
            
            edges= createEdgeSprites();
            rocket.collide(edges);

            gameover.visible=false
            
         //code to reset background
            if(space.x<0 ){
             space.x = space.width/2;
            }
     
              createstar();
              createstar2();
              createstar3();
              createmeteor();
           
              if (starGroup.isTouching(rocket)) {
                starGroup.destroyEach();
               stars=stars+1
              }
              if (star2Group.isTouching(rocket)) {
                star2Group.destroyEach();
               stars=stars+2
              }
              if (star3Group.isTouching(rocket)) {
                star3Group.destroyEach();
               stars=stars+3
              }
               if (meteorGroup.isTouching(rocket)) {
               gameState=END
              
              }
  
               if (gameState===END){
                rocket.x=width/2;
               rocket.y=height/2;
                rocket.scale=0.8;
                 
                starGroup.destroyEach();
                star2Group.destroyEach();
                star3Group.destroyEach();
                meteorGroup.destroyEach();
                
                 
               starGroup.setVelocityYEach(0);
               star2Group.setVelocityYEach(0);
               star3Group.setVelocityYEach(0);
                meteorGroup.setVelocityYEach(0);
               
                gameover.visible = true;
                rocket.visible=false
               
               }

          drawSprites();
          textSize(20);
          fill(255);
          text("stars: "+ stars,35,30);
          }
    }
        
        
        function createstar() {
          if (World.frameCount % 200 == 0) {
           
           
    var star = createSprite(Math.round(random(50,width-50),40, 10, 10));
           
    star.addImage(starImg);
          star.scale=0.22;
          star.velocityY = 5;
          star.lifetime = 200;
          starGroup.add(star);
          }
        }
        function createstar2() {
          if (World.frameCount % 320 == 0) {
              
         
            var star2 = createSprite(Math.round(random(50,width-50),40, 10, 10));
            star2.addImage(star2Img);
         star2.scale=0.23;
         star2.velocityY = 5;
        star2.lifetime = 200;
        star2Group.add(star2);
        }
        }
        
        function createstar3() {
          if (World.frameCount % 410 == 0) {
          
         
          
     var star3 = createSprite(Math.round(random(50, width-50),40, 10, 10));
          
    star3.addImage(star3Img);
         star3.scale=0.23;
        star3.velocityY = 5;
          star3.lifetime = 200;
         star3Group.add(star3);
          }
        }
        
        function createmeteor() {
          if (World.frameCount % 320 == 0) {

    var meteor = createSprite(Math.round(random(50, width-50),40, 10, 10));
        meteor.addImage(meteorImg);
         meteor.scale=0.23;
         meteor.velocityY = 5;
        meteor.lifetime = 200;
        meteorGroup.add(meteor);
          
        }

      }
        
       
    
       
        
    