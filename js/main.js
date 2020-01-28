// Declare variables.
const slides = document.querySelectorAll(".slide"),
  next = document.querySelector("#next"),
  prev = document.querySelector("#prev"),
  auto = true,
  intervalTime = 5000;

let slideInterval;

// Add/remove class from current slide and add to next sibling in Node.
const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    // Add .current to first slide
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    // Add .current to last slide
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// EventListener for buttons
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval();
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval();
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//Auto loop
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
