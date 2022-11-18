// $('.a').click(function(){
//   $('.caret-qty').html('fgfddf');
//   $(".caret-qty").removeClass('shake-content')

//   setTimeout(function() {
//     $('.caret-qty').addClass('shake-content');
// },500);
//  });

let value = 0;
const style = document.createElement("style");
let img;

function preload() {
  img = loadImage("image1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 0);
  //image(img, 305, 15, 100, 700);
  //img.resize(150, 700);
  value = max(value - 4, 0);
  setVisible(".rub", value === 0);
  setVisible(".hot5", value > 255 * 1);
  setVisible(".hot4", value > 255 * 2);
  setVisible(".hot3", value > 255 * 3);
  setVisible(".hot2", value > 255 * 4);
  setVisible(".hot1", value > 255 * 5);
  carreBouge(value)
  //fill(value);
  //rect(10, 10, 400, 400);
}
function touchMoved() {
  value = min(value + 7, 255 * 5 + 100);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.addEventListener(
  "touchmove",
  function (event) {
    event.preventDefault();
  },
  {
    passive: false,
  }
);

function setVisible(selector, visible) {
  let element = document.querySelector(selector);

  element.classList.toggle("hidden", !visible);
}


function carreBouge(value){
  let element = document.getElementById("carre")

if(value < 10  ){element.style.height = "900px"}
if(value > 255 * 1){element.style.height = "660px"}
if(value > 255 * 2){element.style.height = "520px"}
if(value > 255 * 3){element.style.height = "370px"}
if(value > 255 * 4){element.style.height = "230px"}
if(value > 255 * 5){element.style.height = "0px"}

}