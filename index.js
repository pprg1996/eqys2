const header = document.querySelector("header");
addEventListener("scroll", () => {
  if (pageYOffset > 0) header.classList.add("header-show");
  else header.classList.remove("header-show");
});
