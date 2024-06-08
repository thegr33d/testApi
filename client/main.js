// client/main.js
document.getElementById('formAlgoritmo').addEventListener('submit', async (e) => {
    e.preventDefault();  // Previene il comportamento predefinito del form

    const nomeAlgoritmo = document.getElementById('algoritmo').value;
    const input = document.getElementById('input').value;

    // Determina l'URL base in base all'ambiente
    const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';

    try {
        const response = await fetch(`${baseURL}/api/esegui`, {  // Usa baseURL per determinare l'URL corretto
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nomeAlgoritmo, input })
        });        

        if (!response.ok) {
            throw new Error('Errore durante la richiesta al server');
        }

        const data = await response.json();
        document.getElementById('risultato').innerText = `Risultato: ${data.risultato}`;
    } catch (error) {
        document.getElementById('risultato').innerText = `Errore durante la richiesta: ${error.message}`;
    }
});
