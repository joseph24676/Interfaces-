document.addEventListener('DOMContentLoaded', function() {
    const documents = [
        { id: 1, name: 'Informe de Proyecto', uploader: 'Juan Pérez', date: '2024-05-10', pdf: 'doc1.pdf' },
        { id: 2, name: 'Contrato de Servicios', uploader: 'María Rodríguez', date: '2024-05-11', pdf: 'doc2.pdf' },
        { id: 3, name: 'Manual de Usuario', uploader: 'Carlos Gutiérrez', date: '2024-05-12', pdf: 'doc3.pdf' },
        // Puedes agregar más documentos aquí según sea necesario
    ];
    

    const documentsList = document.getElementById('documents');
    const detailsDiv = document.getElementById('details');
    let selectedDocument = null;

    documents.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = `${doc.name} - Subido por: ${doc.uploader} el ${doc.date}`;
        li.addEventListener('click', () => showDetails(doc));
        documentsList.appendChild(li);
    });

    function showDetails(doc) {
        selectedDocument = doc;
        detailsDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${doc.name}</p>
            <p><strong>Subido por:</strong> ${doc.uploader}</p>
            <p><strong>Fecha de subida:</strong> ${doc.date}</p>
        `;
    }

    window.approveDocument = function() {
        if (!selectedDocument) {
            alert('Por favor, seleccione un documento primero.');
            return;
        }
        const comments = document.getElementById('comments').value;
        alert(`Documento "${selectedDocument.name}" aprobado con comentarios: "${comments}"`);
        // Aquí puedes agregar la lógica para manejar la aprobación del documento
    };

    window.rejectDocument = function() {
        if (!selectedDocument) {
            alert('Por favor, seleccione un documento primero.');
            return;
        }
        const comments = document.getElementById('comments').value;
        alert(`Documento "${selectedDocument.name}" rechazado con comentarios: "${comments}"`);
        // Aquí puedes agregar la lógica para manejar el rechazo del documento
    };
});
