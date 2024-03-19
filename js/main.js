var stars = []
var n_stars = 100
let speed = 5
let starField
function setup() {
    createCanvas(windowWidth, windowHeight);
    starField = new StarField(width, height, n_stars, speed);
}

function draw() {
    background(0);
    translate(width / 2, height / 2)
    starField.update();
    starField.show();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    starField.update_field(width, height) 
}