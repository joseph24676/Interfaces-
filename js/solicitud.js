document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("solicitudForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Aquí puedes agregar cualquier lógica de validación de formulario que necesites

        // Mostrar el mensaje de éxito
        var mensajeExito = document.getElementById("mensajeExito");
        mensajeExito.classList.remove("hidden");

        // Ocultar el mensaje después de 3 segundos
        setTimeout(function() {
            mensajeExito.classList.add("hidden");
        }, 3000); // 3000 milisegundos = 3 segundos
    });

    document.getElementById("cargarDocumentosBtn").addEventListener("click", function() {
        window.location.href = "documentos.html";
    });
});
