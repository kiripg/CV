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
