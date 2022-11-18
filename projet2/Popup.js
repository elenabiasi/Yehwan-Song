let tabImg = [];

class Popup {
  constructor({ x, y, numImage }) {
    this.x = x;
    this.y = y;
    this.img = tabImg[numImage];

    this.element = document.createElement("div");

    const container = document.querySelector(".popup--container");

    this.element.innerHTML = `<button class="button"></button><img src="${this.img.canvas.toDataURL()}">`;

    container.appendChild(this.element);
    errorSound.play();

    this.button = this.element.querySelector(".button");
    this.button.addEventListener(
      "click",
      (event) => {
        const luck = round(random(1, 1));

        if (luck === 1) this.close();
      },
      {
        useCapture: true,
      }
    );

    this.element.classList.add("popup");
    this.element.style.cssText = `left: ${this.x}px; top: ${this.y}px`;
    this.element.ondragstart = () => false;
  }

  close() {
    this.element.remove();
    buttonClosed(this);
  }

  draw() {
    // push();
    // translate(this.x, this.y);
    //scale(0.10);
    // // image(this.img, 0, 0);
    // // ctx.fillStyle = "red";
    // // ctx.fill(circle);
    // rect(0, 100, 150, 50);
    // pop();
  }
}

function preloadWindowImages() {
  const numImages = 7;

  for (let i = 0; i < numImages; i++) {
    const src = "./images/pop" + (i + 1) + ".png";
    tabImg[i] = loadImage(src);
  }
}
