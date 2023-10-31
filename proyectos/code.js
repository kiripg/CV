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
