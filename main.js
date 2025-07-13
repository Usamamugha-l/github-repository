// Elements
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");
const emptyArea = document.getElementById("emptyarea");
const mobileToggleMenu = document.getElementById("mobiletogglemenu");
const backToTopButton = document.getElementById("backtotopbutton");

// Toggle Settings Panel
function toggleSettings() {
  document.getElementById("setting-container").classList.toggle("settingactivate");
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
  document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// Play or Pause Audio Based on Switch
function toggleAudio() {
  const isSoundOn = document.getElementById("switchforsound").checked;
  isSoundOn ? audio.play() : audio.pause();
}

// Toggle Light/Dark Mode and Image Inversion
function toggleVisualMode() {
  document.body.classList.toggle("light-mode");
  document.querySelectorAll(".needtobeinvert").forEach(el => {
    el.classList.toggle("invertapplied");
  });
}

// On Window Load
window.addEventListener("load", () => {
  loader.style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});

// Hamburger Menu Toggle
function toggleHamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  mobileToggleMenu.classList.toggle("show-toggle-menu");

  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Hide Menu When List Item Clicked
function hideMenuByClick() {
  document.body.classList.remove("stopscrolling");
  mobileToggleMenu.classList.remove("show-toggle-menu");

  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Highlight Active Section in Navbar
const sections = document.querySelectorAll("section");
const desktopNavItems = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobileNavItems = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    if (window.pageYOffset >= section.offsetTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  mobileNavItems.forEach(item => {
    item.classList.remove("activeThismobiletab");
    if (item.classList.contains(currentSection)) {
      item.classList.add("activeThismobiletab");
    }
  });

  desktopNavItems.forEach(item => {
    item.classList.remove("activeThistab");
    if (item.classList.contains(currentSection)) {
      item.classList.add("activeThistab");
    }
  });
});

// Scroll to Top Button Visibility
function scrollFunction() {
  const shouldShow = document.body.scrollTop > 400 || document.documentElement.scrollTop > 400;
  backToTopButton.style.display = shouldShow ? "block" : "none";
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = scrollFunction;

// Disable Right Click on Images
document.addEventListener("contextmenu", e => {
  if (e.target.nodeName === "IMG") {
    e.preventDefault();
  }
});

// Footer Pupils Eye Movement
const pupils = Array.from(document.getElementsByClassName("footer-pupil"));
const pupilStart = -10;
const pupilRangeX = 20;
const pupilRangeY = 15;

let mouseXEnd = window.innerWidth;
let mouseYEnd = window.innerHeight;
let mouseXRange = mouseXEnd;

function onMouseMove(e) {
  const fracX = (e.clientX / mouseXRange);
  const fracY = (e.clientY / mouseYEnd);

  const moveX = pupilStart + fracX * pupilRangeX;
  const moveY = pupilStart + fracY * pupilRangeY;

  pupils.forEach(pupil => {
    pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}

function onWindowResize() {
  mouseXEnd = window.innerWidth;
  mouseYEnd = window.innerHeight;
  mouseXRange = mouseXEnd;
}

window.addEventListener("mousemove", onMouseMove);
window.addEventListener("resize", onWindowResize);
