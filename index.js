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

const botonesMaquina = document.querySelectorAll(".boton-maquina");

botonesMaquina.forEach(boton => {
  boton.addEventListener("click", event => {
    event.preventDefault();

    let form = document.querySelector(".formulario-maquinas");
    form.classList.remove("form-esconder");

    // form.scrollIntoView(false);
    scrollTo(0, form.offsetTop - 120);
  });
});

const botonesSoluciones = document.querySelectorAll(".boton-soluciones");

botonesSoluciones.forEach(boton => {
  boton.addEventListener("click", event => {
    event.preventDefault();

    let form = document.querySelector(".formulario-soluciones");
    form.classList.remove("form-esconder");

    // form.scrollIntoView(false);
    scrollTo(0, form.offsetTop + document.querySelector("#soluciones").offsetTop - 120);
  });
});

const botonesProductos = document.querySelectorAll(".boton-producto");

botonesProductos.forEach(boton => {
  boton.addEventListener("click", event => {
    event.preventDefault();

    let form = document.querySelector(".formulario-productos");
    form.classList.remove("form-esconder");

    // form.scrollIntoView(false);
    scrollTo(0, form.offsetTop - 120);
  });
});

const botonesOutsourcing = document.querySelectorAll(".outsourcing-boton");

botonesOutsourcing.forEach(boton => {
  boton.addEventListener("click", event => {
    event.preventDefault();

    let form = document.querySelector(".formulario-outsourcing");
    form.classList.remove("form-esconder");

    // form.scrollIntoView(false);
    scrollTo(0, form.offsetTop + document.querySelector("#outsourcing").offsetTop - 120);
  });
});
