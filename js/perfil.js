document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('avatar');
    const errorMessage = document.getElementById('error-avatar');
    const successMessage = document.getElementById('success-message');
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
    
        console.log("Formulario enviado"); // Verificar si esta línea se muestra en la consola
    
        // Mostrar el mensaje de éxito
        successMessage.classList.remove('hidden');
    
        // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 3000);
    });
    

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        const allowedTypes = ['image/jpeg', 'image/jpg'];

        if (file && !allowedTypes.includes(file.type)) {
            errorMessage.textContent = 'Solo se admiten archivos JPG.';
            fileInput.value = ''; // Limpiar el campo de carga
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.textContent = '';
            errorMessage.classList.add('hidden');
        }
    });
});

