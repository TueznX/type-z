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

window.scrollreveal = ScrollReveal({ reset: true })

scrollreveal.reveal('.title', {
  duration: 500,
  distance: '40px',
  origin: 'top'
})

scrollreveal.reveal('.title-dec', {
  duration: 500,
  distance: '40px',
  delay: 100
})

scrollreveal.reveal('.desc', {
  duration: 500,
  distance: '40px',
  delay: 100
})

scrollreveal.reveal('.btn', {
  duration: 500,
  distance: '40px',
  delay: 200,
  origin: 'top'
})

scrollreveal.reveal('.info__video', {
  duration: 500,
  distance: '40px',
  delay: 150
})

scrollreveal.reveal('.info__video-btn', {
  duration: 500,
  distance: '40px',
  delay: 200
})

scrollreveal.reveal('.swiper', {
  duration: 500,
  distance: '40px',
  delay: 100
})

scrollreveal.reveal('.effect1', {
  duration: 500,
  distance: '40px',
})

scrollreveal.reveal('.effect2', {
  duration: 500,
  distance: '40px',
  delay: 100
})

scrollreveal.reveal('.effect3', {
  duration: 500,
  distance: '40px',
  delay: 150
})

scrollreveal.reveal('.effect4', {
  duration: 500,
  distance: '40px',
  delay: 200
})

scrollreveal.reveal('.faq__li', {
  duration: 500,
  distance: '40px',
})

const video = document.querySelector('.info__video');
const unmuteButton = document.querySelector('.info__video-btn');

unmuteButton.addEventListener('click', () => {
  video.muted = false;
  video.controls = true;
  unmuteButton.classList.add('hidden');
});

video.addEventListener('play', () => {
  if (video.muted) {
    unmuteButton.classList.remove('hidden');
  }
});

function openPurchasePopup() {
  const PurchasePopup = document.getElementById("purchase__popup")
  PurchasePopup.classList.add('visible')
  document.body.style.overflow = 'hidden';
  PurchasePopup.addEventListener('click', (e) => {
    const clickedElement = e.target;
    if (clickedElement.id === 'purchase__popup') {
      PurchasePopup.classList.remove('visible');
      document.body.style.overflow = '';
    }
    if (clickedElement.id === 'popup__btn') {
      PurchasePopup.classList.remove('visible');
      document.body.style.overflow = '';
    }
  });
}