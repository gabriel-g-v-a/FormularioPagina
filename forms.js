const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const direccion = document.getElementById("direccion");
const fecha = document.getElementById("fecha");
const terminos = document.getElementById("terminos");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("myname", "Ingrese sus Nombres");
    condicion = false;
  }
  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("surname", "Ingrese sus Apellidos");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Ingrese su Correo");
    condicion = false;
  }
  if (
    celular.value.length != 9 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("mobile", "Ingrese su Telefono");
    condicion = false;
  }
  if (direccion.value.length < 1 || direccion.value.trim() == "") {
    mostrarMensajeError("direccion", "Ingrese su Direccion");
    condicion = false;
  }
  if (fecha.value.length <1 || fecha.value.trim()== "") {
    mostrarMensajeError("fecha", "Porfavor ponga su fecha de Nacimiento");
    condicion = false;
  }
  if (!terminos.checked) {
    mostrarMensajeError("terminos", "Acepte los Terminos");
    condicion = false;
  } else {
    mostrarMensajeError("terminos", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = " Gracias por Registrarse..";
  
}