var jungle, cat, rat


function preload() {
    //load the images here
    bgImage = loadImage("garden.png")
    catImg = loadImage("cat1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jungle = createSprite(500,400);
    jungle.addImage(bgImage);

    cat = createSprite(600,600);
    cat.addImage(catImg);

    rat = createSprite(200,100)
}

function draw() {

    background("blue");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
