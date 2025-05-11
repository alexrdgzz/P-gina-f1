function mostrarInfo(id) {
    const parrafo = document.getElementById(id);
    
    if (parrafo.style.display === "none" || parrafo.style.display === "") {
        parrafo.style.display = "block";
    } else {
        parrafo.style.display = "none";
    }
}

// Validación básica del formulario
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            e.preventDefault(); // Evita que se envíe el formulario
            alert("Por favor, rellena todos los campos.");
        }
    });
});