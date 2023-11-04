"use strict";
  
  function mostrarOcultarMenu() {
    lista.classList.toggle("menu-visible");
}



const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const contactModal = document.getElementById("contactModal");

openModalBtn.addEventListener("click", () => {
    contactModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = "none";
    }
});


let subida = document.querySelector(".btnSubida");

subida.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
})


const lista = document.querySelector(".navegador");
const menu = document.querySelector(".menu-hamburguesa");

menu.addEventListener("click", mostrarOcultarMenu);


let oscuroBtn = document.getElementById("modoOscuroBtn");
 
//Agregar un evento click al boton toggle
oscuroBtn.addEventListener("click", function() {
  // Obtener el elemento body
  let body = document.querySelector("body");
 
  // Revisar si el elemento body tiene la clase "dark-mode"
  if (body.classList.contains("dark-mode")) {
    // Remover la clase "dark-mode" del elemento body
    body.classList.remove("dark-mode");
    // Cambiar el texto del botón toggle
  } else {
    // Agregar la clase "dark-mode" al elemento body
    body.classList.add("dark-mode");
    
  }
});


const hamburguesa = document.querySelector(".menu-hamburguesa");
const menuNav = document.querySelector(".navegador");

hamburguesa.addEventListener("click", () => {
  const expandido = menuNav.getAttribute("aria-expanded") === "true";
  if(expandido){
    menuNav.setAttribute("aria-expanded", "false");
    menuNav.classList.toggle("expandido");
  }
  else{
    menuNav.setAttribute("aria-expanded", "true");
    menuNav.classList.toggle("expandido");
  }
});