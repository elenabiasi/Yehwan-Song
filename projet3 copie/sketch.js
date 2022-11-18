let mondwest;
var open, frame;

function preload() {
  mondwest = loadFont('Mondwest-Bold.ttf');
  load = loadImage("celsius.gif");
  //load2 = loadImage("doorFrame1.jpg");
  open = createImg("celsius.gif");
  //frame = createImg("doorFrame1.jpg");
}

// global functions here
let radius = 60
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

  
  GradientMaps.applyGradientMap(p5Canvas.canvas, "black,blue, yellow, red");
  windowResized()
  //background(0)

  position.whatever = 'hello'
  position.x = 100;


  
  // console.log(position.other);
}

function draw() {
  background(0, 10)


   //translate(0, height / 2)

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
  

  //image(load, 0, 0);
  
 // open.position(0, 0);
  open.position(25, 20);
  //img.resize(50, 100);


}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight)
 }

