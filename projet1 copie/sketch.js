let mondwest;
function preload() {
  mondwest = loadFont('Mondwest-Bold.ttf');
}


function setup() {
    createCanvas(1170, 2530);
    textSize(width / 3);
    //textAlign(CENTER, CENTER);
    textFont(mondwest);
  }

  
  function draw() {
    background(255);

    let tab = 15;
    let interl = 160;
    let txt = 'hot!';
    let txtSize = 200;

    textSize(txtSize);

    fill(148, 26, 28);
    text(txt, tab, interl);

    fill(223, 30, 38);
    text(txt, tab, interl*2);

    fill(243, 114, 32);
    text(txt, tab, interl*3);

    fill(251, 163, 26);
    text(txt, tab, interl*4);

    fill(255, 213, 0);
    text(txt, tab, interl*5);

    }