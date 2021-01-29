img="";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
}

function draw(){
    image(img,0,0,500,400);
    fill("#FF0000");
    text("Dog",100,60);
    stroke("#FF0000");
    noFill();
    rect(100,65,250,300);
}

