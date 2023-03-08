let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let link = document.querySelector("a.header_nav__item");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
link.addEventListener("click", function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
});
