//Typewriter Effect Home
function typewriterEffect(elementId, speed = 80, callback) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const text = el.textContent;
  el.textContent = "";

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } else if (callback) {
      callback();
    }
  }

  typeWriter();
}

document.addEventListener("DOMContentLoaded", () => {
  const paragraph = document.getElementById("typewriter-paragraph");
  paragraph.style.visibility = "hidden";

  typewriterEffect("typewriter-heading", 20, () => {
    paragraph.style.visibility = "visible";
    typewriterEffect("typewriter-paragraph", 20);
  });
});

//Typewriter Effect Contact
document.addEventListener("DOMContentLoaded", () => {
  const elements = ["contact1", "contact2", "contact3", "contact4", "contact5"];

  elements.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.visibility = "hidden";
  });

  function typewriter(elementId, speed = 20, callback) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const text = el.textContent;
    el.textContent = "";
    el.style.visibility = "visible";

    let index = 0;

    function type() {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }

    type();
  }

  function typeSequentially(index = 0) {
    if (index < elements.length) {
      typewriter(elements[index], 20, () => typeSequentially(index + 1));
    }
  }

  typeSequentially();
});

//PayZone Gif Script
document.addEventListener("DOMContentLoaded", function () {
  const gifs = [
    { el: document.getElementById("payzone_in"), duration: 7000 },
    { el: document.getElementById("payzone_out"), duration: 7000 },
  ];

  let index = 0;

  function playNext() {
    const current = gifs[index];
    const next = gifs[(index + 1) % gifs.length];

    current.el.classList.remove("active");
    next.el.classList.add("active");

    setTimeout(() => {
      current.el.src = current.el.src;
    }, 50);

    index = (index + 1) % gifs.length;
    setTimeout(playNext, gifs[index].duration);
  }

  setTimeout(playNext, gifs[index].duration);
});

// PayZone Script
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".payzone-carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".payzone-carousel-button.prev");
  const nextBtn = document.querySelector(".payzone-carousel-button.next");
  const dotsContainer = document.querySelector(".payzone-carousel-dots");

  let currentIndex = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    slides.forEach((s, i) => s.classList.toggle("active", i === currentIndex));
    dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
  }

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    updateSlide();
  }

  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  window.addEventListener("resize", updateSlide);

  updateSlide();
});

// InBang Script
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".inbang-carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".inbang-carousel-button.prev");
  const nextBtn = document.querySelector(".inbang-carousel-button.next");
  const dotsContainer = document.querySelector(".inbang-carousel-dots");

  let currentIndex = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    slides.forEach((s, i) => s.classList.toggle("active", i === currentIndex));
    dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
  }

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    updateSlide();
  }

  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  window.addEventListener("resize", updateSlide);

  updateSlide();
});

//Tako Naidu Script
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".takonaidu-carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".takonaidu-carousel-button.prev");
  const nextBtn = document.querySelector(".takonaidu-carousel-button.next");
  const dotsContainer = document.querySelector(".takonaidu-carousel-dots");

  let currentIndex = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    slides.forEach((s, i) => s.classList.toggle("active", i === currentIndex));
    dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
  }

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    updateSlide();
  }

  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  window.addEventListener("resize", updateSlide);

  updateSlide();
});

// Holy Chat Script
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".holychat-carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".holychat-carousel-button.prev");
  const nextBtn = document.querySelector(".holychat-carousel-button.next");
  const dotsContainer = document.querySelector(".holychat-carousel-dots");

  let currentIndex = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    slides.forEach((s, i) => s.classList.toggle("active", i === currentIndex));
    dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
  }

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    updateSlide();
  }

  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  window.addEventListener("resize", updateSlide);

  updateSlide();
});
