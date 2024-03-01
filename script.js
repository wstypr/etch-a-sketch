const container = document.querySelector(".pixel-container");
const containerWidth = 900;
const pixelSizeBtn = document.querySelector("#PixelSizeBtn");

container.style.width = containerWidth + "px";

let size = 30;
let pixelWidth = containerWidth / size;

for (let i = 0; i < size * size; i++) {
  // create pixels
  let pixel = document.createElement("div");
  pixel.className = "pixel";
  pixel.style.width = pixelWidth + "px";
  container.appendChild(pixel);

  // mouseover event
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "white";
  });

  // mouseout event
  pixel.addEventListener("mouseout", () => {
    setTimeout(() => {
      pixel.style.backgroundColor = "gold";
    }, 250);
  });
}
