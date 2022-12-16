img = ""
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff1a1a");
    text("Dog",45,75);
    noFill();
    stroke("#ff1a1a");
    rect(30 ,60 ,450,350)

    fill("#ff6666");
    text("Cat",320,120);
    noFill();
    stroke("#ff6666");
    rect(300 ,90 ,270,320)
}