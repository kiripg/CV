"use strict";

// Selecciona el botón del modo oscuro por su ID
const modoOscuroBtn = document.getElementById("modoOscuroBtn");
const body = document.body;

// Agrega un event listener para el clic en el botón
modoOscuroBtn.addEventListener("click", () => {
    // Cambia el modo oscuro añadiendo o eliminando la clase 'dark-mode' en el cuerpo
    body.classList.toggle("dark-mode");
});
