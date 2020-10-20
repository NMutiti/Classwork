// A / A-a / A-a-a/ Hai-a
let a = "A";
let b = "A-a ";
let c = "A-a-a";
let d = "Hai-a";

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);

  bg = loadImage('assets/PainRevisited10.png');
}

function draw() {

  if ((mouseX <= windowWidth / 2) && (mouseY <= windowHeight / 2)) {
    rect(0, 0, windowWidth / 2, windowHeight / 2); // Upper-left
    background('orange');

    textFont('NomNaTongLight');
    smooth()
    textSize(250);
    fill(0);
    text(a, 0, 0, windowWidth / 2, windowHeight / 2);

  } else if ((mouseX <= windowWidth / 2) && (mouseY > windowHeight / 2)) {
    rect(0, windowHeight / 2, windowWidth / 2, windowHeight / 2); // Lower-left
    background('yellow');

    textSize(250);
    fill(0);
    text(b, 0, windowHeight / 2, windowWidth / 2, windowHeight / 2);

  } else if ((mouseX > windowWidth / 2) && (mouseY <= windowHeight / 2)) {
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight / 2); // Upper-right
    background('light gray');

    textSize(250);
    fill(0);
    text(c, windowWidth / 2, 0, windowWidth / 2, windowHeight / 2);

  } else {
    rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2); // Lower-right
    background('black');

    textSize(250);
    fill(255);
    text(d, windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2);
  }
}
