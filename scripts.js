const preloader = document.getElementById("preloader");
const handImg = document.getElementById("header");
window.addEventListener("load", function () {
  this.setTimeout(preLoader, 1000);
  handImg.style.display = "none";
});

function preLoader() {
  preloader.classList.toggle("fade");
}
