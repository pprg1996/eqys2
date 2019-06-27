// Poner y quitar fondo al header al hacer scroll

const onScroll = () => {
  if (pageYOffset > 0) header.classList.add("header-show");
  else header.classList.remove("header-show");
};

const header = document.querySelector("header");
addEventListener("scroll", onScroll);
// addEventListener("touchmove", onScroll);

// Mostrar y esconder menu en movil

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

// Scroll a formularios

const botonesMaquina = document.querySelectorAll(".boton-maquina");

let tipoConsultaMaquina = "";

botonesMaquina.forEach(boton => {
  boton.addEventListener("click", event => {
    event.preventDefault();

    tipoConsultaMaquina = boton.getAttribute("data-maquina");

    document.querySelector(".consultar-maquina").textContent = `Consultar ${tipoConsultaMaquina}`;

    let form = document.querySelector(".formulario-maquinas");
    form.classList.remove("form-esconder");

    // form.scrollIntoView(false);
    scrollTo(0, form.offsetTop - 120);
  });
});

const botonesSoluciones = document.querySelectorAll(".boton-soluciones");

let tipoConsultaSolucion = "";

botonesSoluciones.forEach(boton => {
  boton.addEventListener("click", event => {
    event.preventDefault();

    tipoConsultaSolucion = boton.getAttribute("data-solucion");

    document.querySelector(".consultar-solucion").textContent = `Consultar ${tipoConsultaSolucion}`;

    let form = document.querySelector(".formulario-soluciones");
    form.classList.remove("form-esconder");

    // form.scrollIntoView(false);
    scrollTo(0, form.offsetTop + document.querySelector("#soluciones").offsetTop - 120);
  });
});

const botonesProductos = document.querySelectorAll(".boton-producto");

let tipoConsultaProducto = "";

botonesProductos.forEach(boton => {
  boton.addEventListener("click", event => {
    event.preventDefault();

    tipoConsultaProducto = boton.getAttribute("data-producto");

    document.querySelector(".consultar-producto").textContent = `Consultar ${tipoConsultaProducto}`;

    let form = document.querySelector(".formulario-productos");
    form.classList.remove("form-esconder");

    // form.scrollIntoView(false);
    scrollTo(0, form.offsetTop - 120);
  });
});

const botonesOutsourcing = document.querySelectorAll(".outsourcing-boton");

let tipoConsultaOutsourcing = "";

botonesOutsourcing.forEach(boton => {
  boton.addEventListener("click", event => {
    event.preventDefault();

    tipoConsultaOutsourcing = boton.getAttribute("data-outsourcing");

    document.querySelector(".formulario-outsourcing input[name='tecnico']").value = tipoConsultaOutsourcing;

    document.querySelector(".consultar-outsourcing").textContent = `Consultar ${tipoConsultaOutsourcing}`;

    let form = document.querySelector(".formulario-outsourcing");
    form.classList.remove("form-esconder");

    // form.scrollIntoView(false);
    scrollTo(0, form.offsetTop + document.querySelector("#outsourcing").offsetTop - 120);
  });
});

// Navegacion ------------------------------------------------

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

// Enviar formulario maquinarias -----------------------------------

const maquinariaEnviarBoton = document.querySelector(".form-maquinaria-enviar");

const enviarFormularioMaquinariaHandler = event => {
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
  data.append("asunto", tipoConsultaMaquina);
  data.append("nombre", nombre);
  data.append("apellido", apellido);
  data.append("correo", correo);
  data.append("marca", marca);
  data.append("year", year);
  data.append("modelo", modelo);
  data.append("cantidad", cantidad);
  data.append("flota", flota);

  fetch("./correo.php", {
    method: "POST",
    body: data
  });

  alert("Gracias! Pronto nos comunicaremos con usted.");
};

maquinariaEnviarBoton.addEventListener("click", enviarFormularioMaquinariaHandler);

// Enviar formulario soluciones ---------------------------------------

const solucionesEnviarBoton = document.querySelector(".form-soluciones-enviar");

const enviarFormularioSolucionesHandler = event => {
  event.preventDefault();

  let nombre = document.querySelector(".formulario-soluciones input[name='nombre']").value;

  let apellido = document.querySelector(".formulario-soluciones input[name='apellido']").value;

  let correo = document.querySelector(".formulario-soluciones input[name='correo']").value;

  let year = document.querySelector(".formulario-soluciones input[name='year']").value;

  let marca = document.querySelector(".formulario-soluciones input[name='marca']").value;

  let modelo = document.querySelector(".formulario-soluciones input[name='modelo']").value;

  let cantidad = document.querySelector(".formulario-soluciones input[name='cantidad']").value;

  let flota = document.querySelector(".formulario-soluciones input[name='flota']").value;

  let data = new FormData();
  data.append("asunto", tipoConsultaSolucion);
  data.append("nombre", nombre);
  data.append("apellido", apellido);
  data.append("correo", correo);
  data.append("marca", marca);
  data.append("year", year);
  data.append("modelo", modelo);
  data.append("cantidad", cantidad);
  data.append("flota", flota);

  fetch("./correo.php", {
    method: "POST",
    body: data
  });

  alert("Gracias! Pronto nos comunicaremos con usted.");
};

solucionesEnviarBoton.addEventListener("click", enviarFormularioSolucionesHandler);

// Enviar formulario productos ---------------------------------------

const productosEnviarBoton = document.querySelector(".form-productos-enviar");

const enviarFormularioProductosHandler = event => {
  event.preventDefault();

  let nombre = document.querySelector(".formulario-productos input[name='nombre']").value;

  let apellido = document.querySelector(".formulario-productos input[name='apellido']").value;

  let correo = document.querySelector(".formulario-productos input[name='correo']").value;

  let year = document.querySelector(".formulario-productos input[name='year']").value;

  let marca = document.querySelector(".formulario-productos input[name='marca']").value;

  let modelo = document.querySelector(".formulario-productos input[name='modelo']").value;

  let cantidad = document.querySelector(".formulario-productos input[name='cantidad']").value;

  let flota = document.querySelector(".formulario-productos input[name='flota']").value;

  let data = new FormData();
  data.append("asunto", tipoConsultaProducto);
  data.append("nombre", nombre);
  data.append("apellido", apellido);
  data.append("correo", correo);
  data.append("marca", marca);
  data.append("year", year);
  data.append("modelo", modelo);
  data.append("cantidad", cantidad);
  data.append("flota", flota);

  fetch("./correo.php", {
    method: "POST",
    body: data
  });

  alert("Gracias! Pronto nos comunicaremos con usted.");
};

productosEnviarBoton.addEventListener("click", enviarFormularioProductosHandler);

// Enviar formulario outsourcing ---------------------------------------

const outsourcingEnviarBoton = document.querySelector(".form-outsourcing-enviar");

const enviarFormularioOutsourcingHandler = event => {
  event.preventDefault();

  let nombre = document.querySelector(".formulario-outsourcing input[name='nombre']").value;

  let apellido = document.querySelector(".formulario-outsourcing input[name='apellido']").value;

  let correo = document.querySelector(".formulario-outsourcing input[name='correo']").value;

  let tecnico = document.querySelector(".formulario-outsourcing input[name='tecnico']").value;

  let cantidad = document.querySelector(".formulario-outsourcing input[name='cantidad']").value;

  let data = new FormData();
  data.append("asunto", tipoConsultaOutsourcing);
  data.append("nombre", nombre);
  data.append("apellido", apellido);
  data.append("correo", correo);
  data.append("tecnico", tecnico);
  data.append("cantidad", cantidad);

  fetch("./correo.php", {
    method: "POST",
    body: data
  });

  alert("Gracias! Pronto nos comunicaremos con usted.");
};

outsourcingEnviarBoton.addEventListener("click", enviarFormularioOutsourcingHandler);
