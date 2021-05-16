var pic1;
var pic2,pic3,pic4,pic5,pic6,pic7,pic8;
var p1,p2,p3,p4,p5,p6,p7,p8;
var u = 1;
var textbx;
var song;

function preload(){

pic1 = loadImage("a3.jpeg");
pic2 = loadImage("a1.jpeg");
pic3 = loadImage("a2.jpeg");
pic4 = loadImage("a4.jpeg");
pic5 = loadImage("a5.jpeg");
pic6 = loadImage("a6.jpeg");
pic7 = loadImage("a7.jpeg");
pic8 = loadImage("a8.jpg");
song = loadSound("bday");


}

function setup() {
  createCanvas(displayWidth , displayHeight+2500);
  p1 = createSprite(670,420,displayWidth , displayHeight);
  p1.addImage(pic1);
  p1.scale = 1.5;

  p2 = createSprite(220,1100,20,20);
  p2.addImage(pic2);
  p2.scale = 0.5;

  p3 = createSprite(displayWidth - 220,1460,20,20);
  p3.addImage(pic3);
  p3.scale = 0.5;

  p4 = createSprite( 220,1860,20,20);
  p4.addImage(pic4);
  p4.scale = 0.5;

  p5 = createSprite( 420,2400,20,20);
  p5.addImage(pic5);
  p5.scale = 0.4;

  p6 = createSprite( 900,2450,20,20);
  p6.addImage(pic6);
  p6.scale = 0.35;

  p7 = createSprite( 400,2750,20,20);
  p7.addImage(pic7);
  p7.scale = 0.4;

  p8 = createSprite( 770,2750,20,20);
  p8.addImage(pic8);
  p8.scale = 0.35;


 
  textbx = createSprite(600,600,850,150);
  textbx.shapeColor = "#FFB6C1";
  
}

function draw() {
 
  background("#F08080");  
  drawSprites();
  if(u=1){
    fill("white");
   textSize(60);
  text("Happy Birthday Mami!", 300,620);
  textSize(35);
  text("Memories we make with you are very precious to us! ", 460,1100);
  text("We are blessed to have you!",displayWidth - 1000, 1460);
  textSize(25);
  text("May you recieve the greatest of JOYS and EVERLASTING BLISS!!",460,1860);
  textSize(35);
  text("MADE WITH LOVE BY- MAYANK AND MUGHDA ", 300,3100);
  
  }

  if (song.isPlaying()) {
   
    
    
  } else {
    song.play();
    
  }
 
  
}

