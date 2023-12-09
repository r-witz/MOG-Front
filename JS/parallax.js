const parallax_elements = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0,
  yValue = 0;

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_elements.forEach((zlayer) => {
    let speedx = zlayer.dataset.speedx;
    let speedy = zlayer.dataset.speedy;

    zlayer.style.transform = `translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
});

if (window.innerWidth >= 725) {
  main.style.maxHeight = `${window.innerWidth * 0.6}px`
} else {
  main.style.maxHeight = `${window.innerWidth * 1.6}px`
}