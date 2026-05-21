const container = document.querySelector(".guide-sections");
const boxes = document.querySelectorAll(".guide-box");

let index = 0;
let isAnimating = false;

/* amount of box that visible in the menu :D*/
const visibleCount = 3;

/* just take the variable */
function getBoxWidth() {
  return boxes[0].offsetWidth + 30;
}

/* slide */
function updateSlide() {
  isAnimating = true;

  const boxWidth = getBoxWidth();
  container.style.transform = `translateX(-${index * boxWidth}px)`;

  setTimeout(() => {
    isAnimating = false;
  }, 600);
}

/* max index so this sh wont be out of the screen*/
function getMaxIndex() {
  return boxes.length - visibleCount;
}

/* keyboard */
document.addEventListener("keydown", (e) => {
  if (isAnimating) return;

  if (e.key === "ArrowRight") {
    if (index < getMaxIndex()) index++;
    updateSlide();
  }

  if (e.key === "ArrowLeft") {
    if (index > 0) index--;
    updateSlide();
  }
});

/* auto slide */
let autoSlide = setInterval(() => {
  if (isAnimating) return;

  if (index < getMaxIndex()) index++;
  else index = 0;

  updateSlide();
}, 3000);

/* pause hover */
container.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

container.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    if (isAnimating) return;

    if (index < getMaxIndex()) index++;
    else index = 0;

    updateSlide();
  }, 3000);
});

/* swipe mobile */
let startX = 0;

container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

container.addEventListener("touchend", (e) => {
  if (isAnimating) return;

  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (Math.abs(diff) < 50) return;

  if (diff > 0) {
    if (index < getMaxIndex()) index++;
  } else {
    if (index > 0) index--;
  }

  updateSlide();
});