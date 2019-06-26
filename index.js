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

const quienesNav = document.querySelector(".quienes-nav");

quienesNav.addEventListener("click", event => {
  event.preventDefault();
  menu.classList.remove("show-menu");
  scrollTo(0, document.querySelector("#quienes-somos").offsetTop);
});

const arriendoNav = document.querySelector(".arriendo-nav");

arriendoNav.addEventListener("click", event => {
  event.preventDefault();
  menu.classList.remove("show-menu");
  scrollTo(0, document.querySelector("#arriendo-de-maquinarias").offsetTop - 100);
});

const solucionesNav = document.querySelector(".soluciones-nav");

solucionesNav.addEventListener("click", event => {
  event.preventDefault();
  menu.classList.remove("show-menu");
  scrollTo(0, document.querySelector("#soluciones").offsetTop);
});

const productosNav = document.querySelector(".productos-nav");

productosNav.addEventListener("click", event => {
  event.preventDefault();
  menu.classList.remove("show-menu");
  scrollTo(0, document.querySelector("#productos").offsetTop - 100);
});

// Enviar formulario -----------------------------------

const maquinariaEnviarBoton = document.querySelector(".form-maquinaria-enviar");

const enviar = event => {
  event.preventDefault();

  let nombre = document.querySelector(".formulario-maquinas input[name='nombre']").value;

  let apellido = document.querySelector(".formulario-maquinas input[name='apellido']").value;

  let correo = document.querySelector(".formulario-maquinas input[name='correo']").value;

  let year = document.querySelector(".formulario-maquinas input[name='year']").value;

  let marca = document.querySelector(".formulario-maquinas input[name='marca']").value;

  let modelo = document.querySelector(".formulario-maquinas input[name='modelo']").value;

  let cantidad = document.querySelector(".formulario-maquinas input[name='cantidad']").value;

  let flota = document.querySelector(".formulario-maquinas input[name='flota']").value;

  let data = new FormData();
  data.append("asunto", "Nueva Consulta");
  data.append("nombre", nombre);
  data.append("apellido", apellido);
  data.append("correo", correo);
  data.append("marca", marca);
  data.append("year", year);
  data.append("modelo", modelo);
  data.append("cantidad", cantidad);
  data.append("flota", flota);

  fetch("http://eqys.cl/dev/correo.php", {
    method: "POST",
    body: data
  });

  alert("Gracias! Pronto nos comunicaremos con usted.");
};

maquinariaEnviarBoton.addEventListener("click", enviar);
