const preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  this.setTimeout(preLoader, 1000);
});
function preLoader() {
  preloader.classList.toggle("fade");
  preloader.style.zIndex = "-1";
}
