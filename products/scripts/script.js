const navMenu = document.querySelector(".nav__menu");
const headerMenu = document.querySelector(".header__menu");
const navButtons = document.querySelectorAll(".nav2__btn");
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

function openPurchasePopup() {
    const Popup = document.getElementById("purchase__popup1");
    Popup.classList.add("visible");
    Popup.addEventListener("click", (e) => {
        if (e.target.id == "popup1__btn" || e.target.id == "purchase__popup1") {
            Popup.classList.remove("visible");
        }
    });
}

function openSecondPopup() {
    const secondPopup = document.getElementById("purchase__popup2");
    secondPopup.classList.add("visible");
    secondPopup.addEventListener("click", (e) => {
        if (e.target.id == "popup2__btn" || e.target.id == "purchase__popup2") {
            secondPopup.classList.remove("visible");
        }
    });
}

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".hero__btn-share");
    const textSpan = btn.querySelector("span");
    const originalText = textSpan.textContent;
    btn.addEventListener("click", () => {
        btn.classList.add("active");
        textSpan.textContent = "Link copiado!";
        setTimeout(() => {
            btn.classList.remove("active");
            textSpan.textContent = originalText;
        }, 2000);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const redirectBtns = document.querySelectorAll(".nav__redirect, .hero__btn-voltar, .popup2__btn2");
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