document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { dropZoneId: 'drop-zone-experiencia', inputId: 'experienciaProfesional' },
        { dropZoneId: 'drop-zone-eventos', inputId: 'eventosAcademicos' },
        { dropZoneId: 'drop-zone-otros', inputId: 'otrosDocumentos' },
        { dropZoneId: 'drop-zone-titulos', inputId: 'titulosAcademicos' },
        { dropZoneId: 'drop-zone-capacitacion', inputId: 'certificadosCapacitacion' },
        { dropZoneId: 'drop-zone-cv-docente', inputId: 'cvExperienciaDocente' },
        { dropZoneId: 'drop-zone-cv-profesional', inputId: 'cvExperienciaProfesional' },
        { dropZoneId: 'drop-zone-cv-publicaciones', inputId: 'cvPublicaciones' },
        { dropZoneId: 'drop-zone-cv-congresos', inputId: 'cvCongresos' }
    ];
    const cargarDocumentoBtn = document.getElementById('cargarDocumentoBtn');
    const mensajeExito = document.getElementById('mensajeExito');
    const errorMessage = document.getElementById('error-message');
    const maxFileSize = 5 * 1024 * 1024; // 5MB en bytes

    sections.forEach(section => {
        const dropZone = document.getElementById(section.dropZoneId);
        const fileInput = document.getElementById(section.inputId);

        dropZone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', () => handleFiles(fileInput.files, dropZone));
        
        dropZone.addEventListener('dragover', (event) => {
            event.preventDefault();
            dropZone.classList.add('drop-zone--over');
        });

        dropZone.addEventListener('dragleave', (event) => {
            event.preventDefault();
            dropZone.classList.remove('drop-zone--over');
        });

        dropZone.addEventListener('drop', (event) => {
            event.preventDefault();
            dropZone.classList.remove('drop-zone--over');
            const files = event.dataTransfer.files;
            fileInput.files = files;
            handleFiles(files, dropZone);
        });
    });

    cargarDocumentoBtn.addEventListener('click', () => {
        errorMessage.textContent = ''; // Limpiar el mensaje de error
        errorMessage.classList.add('hidden');

        let valid = true;
        sections.forEach(section => {
            const fileInput = document.getElementById(section.inputId);
            if (!validarArchivos(fileInput.files)) {
                valid = false;
            }
        });

        if (!valid) {
            return;
        }

        // Aquí puedes agregar la lógica para enviar el formulario
        mensajeExito.classList.remove('hidden');

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            mensajeExito.classList.add('hidden');
        }, 3000);
    });

    function handleFiles(files, dropZone) {
        const fileList = [...files]; // Convertir la colección de archivos a un array
        const fileNames = fileList.map(file => file.name).join(', '); // Obtener los nombres de los archivos

        if (fileList.length > 0) {
            dropZone.querySelector('p').textContent = fileNames; // Mostrar los nombres de los archivos
        } else {
            dropZone.querySelector('p').textContent = 'Arrastra y suelta tus archivos aquí o haz clic para seleccionarlos.';
        }
    }

    function validarArchivos(files) {
        const formatosPermitidos = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        for (const file of files) {
            if (!formatosPermitidos.includes(file.type)) {
                errorMessage.textContent = `El archivo ${file.name} no tiene un formato permitido. Por favor, selecciona archivos PDF o Word.`;
                errorMessage.classList.remove('hidden');
                return false;
            }
            if (file.size > maxFileSize) {
                errorMessage.textContent = `El archivo ${file.name} supera el tamaño máximo permitido de 5MB.`;
                errorMessage.classList.remove('hidden');
                return false;
            }
        }
        return true;
    }
});
