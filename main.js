// ---------------- SLIDESHOW AUTOMÁTICO ----------------

// Obtiene la imagen del slideshow
let slide = document.getElementById("slide");
let current = 1;

// Cambia la imagen cada 3 segundos
setInterval(() => {
    current++;

    // Si llega a la última imagen, vuelve a la primera
    if (current > 9) current = 1;

    slide.src = `img/cafe${current}.jpg`;
}, 3000);


// ---------------- VALIDACIÓN DEL FORMULARIO ----------------

document.addEventListener("DOMContentLoaded", () => {

    // Obtiene el formulario por su ID
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {

            e.preventDefault(); // Evita que se envíe por defecto

            let nombre = document.getElementById("nombre").value.trim();
            let email = document.getElementById("email").value.trim();
            let mensaje = document.getElementById("mensaje").value.trim();

            let resultado = document.getElementById("resultado");

            // Validación simple
            if (nombre === "" || email === "" || mensaje === "") {
                resultado.textContent = "Todos los campos son obligatorios.";
                resultado.style.color = "red";
            } 
            else {
                resultado.textContent = "Mensaje enviado correctamente.";
                resultado.style.color = "green";

                // Limpia el formulario
                form.reset();
            }
        });
    }
});
