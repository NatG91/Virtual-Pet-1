//Create variables here
var dog,happyDog,database,foodS,foodStock

function preload()
{
  //load images here
  dogStanding=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(250,250,20,20);
  dog.addImage(dogStanding);
  dog.scale=0.2
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

textSize(15);
fill('White');
stroke(1);
text('Note: Press the UP_ARROW Key To Feed Drago Milk!',30,50);
drawSprites();
text('Food Remaining:'+foodS,100,120)
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if (x<=0){
x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


