const preloader = document.getElementById("preloader");
const handImg = document.getElementById("header");
const blogOption = document.getElementById("blog");
const betaMessage = document.getElementById("message");
const messageClose = document.getElementById("xmark");
const mainBlur = document.getElementById("main");
window.addEventListener("load", function () {
  console.log(sessionStorage.getItem("firstload"));
  this.setTimeout(preLoader, 1000);
  handImg.style.display = "none";
  if (sessionStorage.getItem("firstload") === "true") {
    betaMessage.style.display = "none";
    console.log(sessionStorage.getItem("firstload"));
  } else {
    sessionStorage.setItem("firstload", true);
    mainBlur.classList.toggle("blur");
    messageClose.addEventListener("click", function () {
      betaMessage.style.display = "none";
      mainBlur.classList.toggle("blur");
    });
  }
});

function preLoader() {
  preloader.classList.toggle("fade");
  preloader.style.zIndex = "-1";
}

blogOption.addEventListener("click", function () {
  alert("Sorry, I'm still working on a blog page :)");
});
