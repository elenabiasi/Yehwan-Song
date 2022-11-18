let mondwest;

function preload() {
  mondwest = loadFont('Mondwest-Bold.ttf');
  gifImg = loadImage("cel2.png");

}

// global functions here
let radius = 65
let smoothing = 0.05

const position = {
  x: 0,
  y: 0,
  prevX: 0,
  prevY: 0,
}

const target = {
  x: 0,
  y: 0,
  prevX: 0,
  prevY: 0
}

function setup() {
  const p5Canvas = createCanvas(0, 0)

  
  GradientMaps.applyGradientMap(p5Canvas.canvas, "white, blue, yellow, red");
  windowResized()
  background(255)

  position.whatever = 'hello'
  position.x = 100;

  background(0)

  
  // console.log(position.other);
}

function draw() {
  background(0, 10)
  

  image(gifImg, 0, 0, 440, 700);
  gifImg.resize(1000, 100);

  // translate(0, height / 2)

  fill(255)
  noStroke();
  ellipse(target.x, target.y, radius);
  stroke(255)
  strokeWeight(radius);
  line(target.x, target.y, target.prevX, target.prevY)

  position.prevX = position.x
  position.prevY = position.y

  position.x = lerp(position.x, target.x, smoothing)
  position.y = lerp(position.y, target.y, smoothing)

  // stroke('green')
  //  line(position.x, position.y, position.prevX, position.prevY)

  target.prevX = target.x
  target.prevY = target.y

  target.x = mouseX
  target.y = mouseY
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

