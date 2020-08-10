//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
  //load images here
  happyDogImg = loadImage("dogImg1.png");
  dogImg = loadImage("dogImg.png");
}

function setup() {
	createCanvas(500,500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage("hello",dogImg);

  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("hello",happyDogImg);
}
  drawSprites();
  //add styles here
 fill("red");
 strokeWeight(3);
 text(foodStock,200,250)
}

function readStock(data){
foodS = data.val;
}

function readStock(x){
database.ref('/').update({
  food:x
})
}




