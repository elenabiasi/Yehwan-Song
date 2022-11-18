let mondwest;

function preload() {
  mondwest = loadFont("Mondwest-Bold.ttf");
  // gifImg = loadImage("cel2.png");
  gifImg = loadImage("celsius.gif");
}

// global functions here
let radius = 65;
let smoothing = 0.05;

const dotPosition = {
  x: 0,
  y: 0,
  prevX: 0,
  prevY: 0,
};

const target = {
  x: 0,
  y: 0,
  prevX: 0,
  prevY: 0,
};

function setup() {
  const p5Canvas = createCanvas(0, 0);

  gifImg.resize(1000, 100);

  console.log(gifImg);
  GradientMaps.applyGradientMap(p5Canvas.canvas, "white, blue, yellow, red");

  const svg = document.querySelector("#filter-0");
  // p5Canvas.canvas.style.filter = null
  svg.setAttribute("filterRes", 1);
  svg.setAttribute("filterUnits", "userSpaceOnUse");
  p5Canvas.canvas.style.transform = "translate3d(0,0,0)";

  windowResized();
  background(255);

  dotPosition.whatever = "hello";
  dotPosition.x = 100;

  background(0);
  pixelDensity(0.2);

  // console.log(position.other);
}

function draw() {
  background(0, 10);

  drawingContext.globalAlpha = 0.5;
  // console.log(gifImg.width);
  image(gifImg, 0, 0, 440, 700);

  drawingContext.globalAlpha = 1;
  // translate(0, height / 2)

  fill(255);
  noStroke();
  ellipse(target.x, target.y, radius);
  stroke(255);
  strokeWeight(radius);
  line(target.x, target.y, target.prevX, target.prevY);

  dotPosition.prevX = dotPosition.x;
  dotPosition.prevY = dotPosition.y;

  dotPosition.x = lerp(dotPosition.x, target.x, smoothing);
  dotPosition.y = lerp(dotPosition.y, target.y, smoothing);

  // stroke('green')
  //  line(position.x, position.y, position.prevX, position.prevY)

  target.prevX = target.x;
  target.prevY = target.y;

  target.x = mouseX;
  target.y = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.addEventListener(
  "touchmove",
  (event) => {
    event.preventDefault();
  },
  {
    passive: false,
  }
);
