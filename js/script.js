// Función para mostrar u ocultar la descripción del piloto con animación
function mostrarInfo(id) {
    const parrafo = document.getElementById(id);

    if (parrafo.style.display === "none" || parrafo.style.display === "") {
        parrafo.style.display = "block";
        parrafo.style.opacity = 0;
        setTimeout(() => {
            parrafo.style.opacity = 1;
        }, 10);
    } else {
        parrafo.style.opacity = 0;
        setTimeout(() => {
            parrafo.style.display = "none";
        }, 300);
    }
}

// Validación del formulario: evita envío si hay campos vacíos
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            e.preventDefault(); // Cancela el envío del formulario
            alert("Por favor, rellena todos los campos.");
        }
    });
});
