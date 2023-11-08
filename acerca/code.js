"use strict";

const enlaces = document.querySelectorAll('.enlaces a');
const info = document.querySelectorAll('.info');

enlaces.forEach((enlace, index) => {
  enlace.addEventListener('click', () => {
    info.forEach((element) => {
      element.classList.remove('visible');
    });
    info[index].classList.add('visible');
  });
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