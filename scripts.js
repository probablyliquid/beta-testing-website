const preloader = document.getElementById("preloader");
const handImg = document.getElementById("header");
const blogOption = document.getElementById("blog");
const betaMessage = document.getElementById("message");
const messageClose = document.getElementById("xmark");
const mainBlur = document.getElementById("main");
sessionStorage.setItem("firstload", "true");
// let loadStats = sessionStorage.getItem("firstload");
window.addEventListener("load", function () {
  this.setTimeout(preLoader, 1000);
  handImg.style.display = "none";
  if (sessionStorage.getItem("firstload") === "true") {
    sessionStorage.setItem("firstload", "false");
    let loadStats = sessionStorage.getItem("firstload");
    console.log(loadStats);
    mainBlur.classList.toggle("blur");
    messageClose.addEventListener("click", function () {
      betaMessage.style.display = "none";
      mainBlur.classList.toggle("blur");
    });
  } else {
    betaMessage.style.display = "none";
  }
});

function preLoader() {
  preloader.classList.toggle("fade");
  preloader.style.zIndex = "-1";
}

blogOption.addEventListener("click", function () {
  alert("Sorry, I'm still working on a blog page :)");
});
