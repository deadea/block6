let open = document.querySelector(".header__button");
let close = document.querySelector(".menu-header__button");

let menuContainer = document.querySelector(".menu-container");

let menu = document.querySelector(".side-menu");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuContainer.classList.toggle("menu-container--hidden");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuContainer.classList.toggle("menu-container--hidden");
});

menuContainer.addEventListener("click", function (evt) {
  let isClickInside = menu.contains(evt.target);

  if (!isClickInside) {
    menuContainer.classList.toggle("menu-container--hidden");
  }
});
