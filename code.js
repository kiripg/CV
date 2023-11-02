"use strict";

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle(".dark-mode");
  }
  



const button = document.getElementById("modoOscuroBtn");
button.onclick = toggleDarkMode;
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