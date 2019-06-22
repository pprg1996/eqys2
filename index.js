const onScroll = () => {
  if (pageYOffset > 0) header.classList.add("header-show");
  else header.classList.remove("header-show");
};

const header = document.querySelector("header");
addEventListener("scroll", onScroll);
// addEventListener("touchmove", onScroll);

const burger = document.querySelector(".burger-link");
const menu = document.querySelector(".menu");
const cerrar = document.querySelector(".cerrar-link");

burger.addEventListener("click", event => {
  event.preventDefault();

  menu.classList.add("show-menu");
});

cerrar.addEventListener("click", event => {
  event.preventDefault();

  menu.classList.remove("show-menu");
});
