document.addEventListener('DOMContentLoaded', () => {
    const messagesList = document.getElementById('messagesList');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            addMessage(messageText, 'sent');
            messageInput.value = '';
            // Aquí puedes agregar la lógica para enviar el mensaje al servidor
        }
    });

    function addMessage(text, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.textContent = text;
        messagesList.appendChild(messageElement);
        messagesList.scrollTop = messagesList.scrollHeight;
    }

    // Simulación de mensajes recibidos
    setTimeout(() => addMessage('Mensaje recibido del revisor.', 'received'), 1000);
    setTimeout(() => addMessage('Por favor, suba los documentos requeridos.', 'received'), 3000);
});
