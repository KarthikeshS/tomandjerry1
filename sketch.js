
function preload() {
    //load the images here
gardenImg = loadImage("garden.png");

}

function setup(){
    createCanvas(600,400);
    //create tom and jerry sprites here

    garden = createSprite(200,200)
    garden.addImage(gardenImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
