"use strict";



//Apertura del formulario de contacto 

const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const contactModal = document.getElementById("contactModal");

//El boton abrir Formulario provoca que el formulario, con
// clase contactModal, se vea con el display block
openModalBtn.addEventListener("click", () => {
  contactModal.style.display = "block";
});

// Si el boton closeModalBtn, que está compuesto por una x,
// es clickeado, el formulario contactModal, se cierra
closeModalBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// Este evento, provoca que cuando hagamos click fuera del formulario,
// este se cierra, es decir, su display cambia a none.
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

//Subida al top con el boton de inicio.
let subida = document.querySelector(".btnSubida");

//Escuchador de evento que al pulsar el botón, va a la posición 0,0 de la página web.
subida.addEventListener("click", () => {
  window.scrollTo(0, 0);
})


//Activar o desactivar el modo oscuro.

let oscuroBtn = document.getElementById("modoOscuroBtn");


const oscuro = () => {
  document.documentElement.classList.add("dark-mode");

  document.documentElement.style.setProperty("--base", "#330036");
  document.documentElement.style.setProperty("--segundaBase", "#521855"); 
  document.documentElement.style.setProperty("--lila", "#2F394D"); 
  document.documentElement.style.setProperty("--lilaAzul", "#A94276");
  document.documentElement.style.setProperty("--gris", "#808782");
  document.documentElement.style.setProperty("--destacado", "#33003686");
  document.documentElement.style.setProperty("--degradadoFondo", "linear-gradient(273deg,#2f394d,#a94276)");
  document.documentElement.style.setProperty("--degradadoBtn", "linear-gradient(273deg,#330036,#521855)");
  document.documentElement.style.setProperty("--trans", "#33003686");

};

const claro = () => {
  document.documentElement.classList.remove("dark-mode");

  document.documentElement.style.setProperty("--base", "#903CB4");
  document.documentElement.style.setProperty("--segundaBase", "#804FC4"); 
  document.documentElement.style.setProperty("--lila", "#9281D5"); 
  document.documentElement.style.setProperty("--lilaAzul", "#7B68EE");
  document.documentElement.style.setProperty("--gris", "#949FDB");
  document.documentElement.style.setProperty("--destacado", "#799AD2");
  document.documentElement.style.setProperty("--degradadoFondo", "linear-gradient(273deg, #949fdb, #799ad2, #9281d5)");
  document.documentElement.style.setProperty("--degradadoBtn", "linear-gradient(100deg, #913CB4, #804FC5)");
  document.documentElement.style.setProperty("--trans", "rgba(144, 60, 180, 0.3)");


};

oscuroBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark-mode")) {
    claro();
  } else {
    oscuro();
  }
});

//Menú hamburguesa 

const hamburguesa = document.querySelector(".menu-hamburguesa");
const menuNav = document.querySelector(".navegador");

//Escuchador de evento que al hacer sobre el botón hamburguesa, la clase del menu navegador se cambia a Expandido
// que contiene los valores para verse en la responsividad móvil. Si no, no se aplica la clase, teniendo un display none en su luagr
hamburguesa.addEventListener("click", () => {
  const expandido = menuNav.getAttribute("aria-expanded") === "true";
  if (expandido) {
    menuNav.setAttribute("aria-expanded", "false");
    menuNav.classList.toggle("expandido");
  }
  else {
    menuNav.setAttribute("aria-expanded", "true");
    menuNav.classList.toggle("expandido");
  }
});



