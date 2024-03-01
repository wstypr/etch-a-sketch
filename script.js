const container = document.querySelector(".pixel-container");
const containerWidth = 600;
const pixelSizeBtn = document.querySelector("#pixelSizeBtn");
const pixelSizeMsg = document.querySelector("#pixelSizeMsg");
let size = 30;

container.style.width = containerWidth + "px";
createPixel(size);

// pixel handling
function createPixel(pixelSize) {
  let pixelWidth = containerWidth / pixelSize;
  pixelSizeMsg.textContent = pixelSize;
  for (let i = 0; i < pixelSize * pixelSize; i++) {
    // create pixels
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.width = pixelWidth + "px";
    pixel.setAttribute("data-brightness", 100);
    container.appendChild(pixel);

    // mouseover event
    pixel.addEventListener("mouseover", () => {
      pixel.classList.add("pixel-hover");
    });

    // mouseout event
    pixel.addEventListener("mouseout", () => {
      setTimeout(() => {
        pixel.classList.remove("pixel-hover");
      }, 100);
    });

    // mouseclick event > reduce brightness
    pixel.addEventListener("click", () => {
      let brightness = pixel.getAttribute("data-brightness");
      brightness -= 10;
      if (brightness < 0) brightness = 100;
      pixel.setAttribute("data-brightness", brightness);
      pixel.style.filter = `brightness(${brightness}%)`;
    });
  }
}

// set pixel size handling
pixelSizeBtn.addEventListener("click", () => {
  size = getSize();
  container.innerHTML = "";
  createPixel(size);
});

// get size input from user
function getSize() {
  while (true) {
    try {
      let size = parseInt(window.prompt("pixel Size: "));
      console.log(size);
      if (isNaN(size)) throw "Invalid input";
      if ((size > 50) | (size < 1))
        throw "Too big, wind down a bit, make it less than 50 and more than 0";
      return size;
    } catch (error) {
      window.alert(error);
    }
  }
}
