const preloader = document.getElementById("preloader");
const handImg = document.getElementById("header");
const blogOption = document.getElementById("blog");
window.addEventListener("load", function () {
  this.setTimeout(preLoader, 1000);
  handImg.style.display = "none";
});

function preLoader() {
  preloader.classList.toggle("fade");
  preloader.style.zIndex = "-1";
}

blogOption.addEventListener("click", function () {
  alert("Sorry, I'm still working on a blog page :)");
});
