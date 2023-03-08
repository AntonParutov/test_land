let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let link = document.querySelector(".header_nav__item");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

menu.onclick = function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
};
