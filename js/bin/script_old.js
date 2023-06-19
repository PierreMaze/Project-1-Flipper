// Content
const bodyOverflowY = document.querySelector("body");
const cardActions = document.querySelectorAll(".card__actions");

const headerSmart = document.querySelector("header");
const footerSmart = document.querySelector("footer");


// Flipper
const overlayFlipper = document.querySelector("#flipper_overlay");
const overlayTFlipper = document.querySelector('.flipper_overlay');
const btnFlipperSmart = document.querySelector("#flipper-btn-smart");
const btnFlipperDesk = document.querySelector("#flipper-btn-desk");
const btnUploadImg = document.querySelector("#btn-upload-img");
const fileInput = document.querySelector("#fileinput");

// humberger
const humbergerIcon = document.querySelector(".hamburger");
// Overlay Menu
const overlayMenu = document.querySelector("#overlay");



function returnFlipperMenuSmart() {
  footerSmart.style.display = "flex";
  bodyOverflowY.style.overflowY = "initial";
  for (let i = 0; i < cardActions.length; i += 1) {
    cardActions[i].style.display = "flex";
  }
  humbergerIcon.classList.remove("hamburger--arrowalt");
  humbergerIcon.classList.remove("is-active");
  humbergerIcon.classList.add("hamburger--collapse");
}

function flipperMenuSmart() {
  overlayFlipper.classList.toggle("is-active");
  footerSmart.style.display = "none";
  bodyOverflowY.style.overflowY = "hidden";
  for (let i = 0; i < cardActions.length; i += 1) {
    cardActions[i].style.display = "none";
  }
  humbergerIcon.classList.add("hamburger--arrowalt");
  humbergerIcon.classList.add("is-active");
  humbergerIcon.classList.remove("hamburger--collapse");
}

function activeMenu() {
  humbergerIcon.classList.toggle("is-active");

  if (overlayMenu.style.display === "flex") {
    overlayMenu.style.display = "none";
    document.querySelector("footer").style.display = "flex";
    bodyOverflowY.style.overflowY = "initial";
    for (let i = 0; i < cardActions.length; i++) {
      cardActions[i].style.display = "flex";
    }
  } else {
    document.querySelector(".main-wrapper").style.overflowY = "visible";
    overlayMenu.style.display = "flex";
    document.querySelector("footer").style.display = "none";
    bodyOverflowY.style.overflowY = "hidden";
    for (let i = 0; i < cardActions.length; i++) {
      cardActions[i].style.display = "none";
    }
  }
}

// Interactions

humbergerIcon.addEventListener("click", () => {
  if (humbergerIcon.classList.contains("hamburger--arrowalt")) {
    overlayFlipper.classList.toggle("is-active");
    returnFlipperMenuSmart();
  } else if (humbergerIcon.classList.contains("hamburger--collapse")) {
    activeMenu();
  }
});

btnFlipperSmart.addEventListener("click", () => {
  flipperMenuSmart();
});

document.querySelector("#overlay").addEventListener("click", () => {
  activeMenu();
});

btnUploadImg.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const imageUrl = URL.createObjectURL(file);
  localStorage.setItem('imgUpload', imageUrl);

  // const imageUrl = localStorage.getItem('image');
});