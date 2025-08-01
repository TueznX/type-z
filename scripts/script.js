var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 10,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
});

const navMenu = document.querySelector(".nav__menu");
const headerMenu = document.querySelector(".header__menu");
const navButtons = document.querySelectorAll(".nav__btn");
navMenu.addEventListener("click", () => {
  if (headerMenu.style.display === "none" || headerMenu.style.display === "") {
    headerMenu.style.display = "flex";
  } else {
    headerMenu.style.display = "none";
  }
});
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    headerMenu.style.display = "none";
  });
});

window.scrollreveal = ScrollReveal({ reset: false, mobile: false });

scrollreveal.reveal(".title", {
  duration: 500,
  distance: "40px",
  origin: "top",
});

scrollreveal.reveal(".title-dec", {
  duration: 500,
  distance: "40px",
  delay: 100,
});

scrollreveal.reveal(".desc", {
  duration: 500,
  distance: "40px",
  delay: 100,
});

scrollreveal.reveal(".btn", {
  duration: 500,
  distance: "40px",
  delay: 200,
  origin: "top",
});

scrollreveal.reveal(".info4__btn", {
  duration: 1600,
  distance: "400px",
  delay: 100,
  origin: "right",
});

scrollreveal.reveal(".info4__title", {
  duration: 1600,
  distance: "400px",
  delay: 100,
  origin: "left",
});

scrollreveal.reveal(".info__video", {
  duration: 500,
  distance: "40px",
  delay: 150,
});

scrollreveal.reveal(".info__video-btn", {
  duration: 500,
  distance: "40px",
  delay: 200,
});

scrollreveal.reveal(".swiper", {
  duration: 500,
  distance: "40px",
  delay: 100,
});

scrollreveal.reveal(".effect1", {
  duration: 500,
  distance: "40px",
});

scrollreveal.reveal(".effect2", {
  duration: 500,
  distance: "40px",
  delay: 100,
});

scrollreveal.reveal(".effect3", {
  duration: 500,
  distance: "40px",
  delay: 150,
});

scrollreveal.reveal(".effect4", {
  duration: 500,
  distance: "40px",
  delay: 200,
});

scrollreveal.reveal(".faq__li", {
  duration: 500,
  distance: "40px",
});

const video = document.querySelector(".info__video");
const unmuteButton = document.querySelector(".info__video-btn");

unmuteButton.addEventListener("click", () => {
  video.muted = false;
  video.controls = true;
  unmuteButton.classList.add("hidden");
});

video.addEventListener("play", () => {
  if (video.muted) {
    unmuteButton.classList.remove("hidden");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const redirectBtns = document.querySelectorAll(".btn, .info4__btn, .nav__redirect");
  const loadingScreen = document.querySelector(".loadingscreen");
  redirectBtns.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const href = button.getAttribute("href");
      if (loadingScreen) {
        loadingScreen.classList.add("visible");
      }
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
});