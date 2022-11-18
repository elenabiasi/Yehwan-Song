let mondwest;

let errorSound;

let gray = 255;
var imageLoop = 0;
let backgroundImg;

function preload() {
  preloadWindowImages();

  mondwest = loadFont("/fonts/Mondwest-Bold.ttf");
  errorSound = loadSound("error.mp3");
  backgroundImg = loadImage("./images/background.jpg");
}

function setup() {
  const p5Canvas = createCanvas(windowWidth, windowHeight);
  pixelDensity(0.60)
  GradientMaps.applyGradientMap(
    p5Canvas.elt,
    "black, white, blue, yellow, red, white"
  );

  const svg = document.querySelector('#filter-0')
  svg.setAttribute('filterRes', 1)

  textSize(36);
  rectMode(CENTER);
  textAlign(CENTER);

  addNewPopup(width / 2, height / 2);
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
}

//  function touchEnded(){
//    ellipse(width/2, height/2, 100, 100);
//  }

// function touchMoved(){
//   gray = random(128, 255);
// }

//-------------------------------
//Code for going fullscreen

window.addEventListener("click", () => {});

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.ontouchmove = function (event) {
  event.preventDefault();
};

function buttonClosed() {
  const margin = 100;

  const numPopups = round(random(1, 3));

  for (let i = 0; i < numPopups; i++) {
    addNewPopup(
      random(margin, width - margin),
      random(margin, height - margin)
    );
  }
}

function addNewPopup(x, y) {
  setTimeout(() => {
    new Popup({
      x,
      y,
      numImage: imageLoop % tabImg.length,
    });
    imageLoop++;
  }, random(50, 1000));
}
