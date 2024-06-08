// server/server.js
const express = require('express');
const cors = require('cors');
const { eseguiAlgoritmo } = require('./gestoreAlgoritmi');

const app = express();  // Crea un'app Express
const PORT = process.env.PORT || 3000;  // Imposta la porta

app.use(cors());  // Abilita CORS per tutte le richieste
app.use(express.json());  // Abilita il parsing JSON per le richieste

// Endpoint per eseguire l'algoritmo
app.post('/api/esegui', (req, res) => {
    const { nomeAlgoritmo, input } = req.body;
    if (!nomeAlgoritmo || !input) {
        return res.status(400).json({ errore: "Il nome dell'algoritmo e l'input sono obbligatori" });
    }
    try {
        const risultato = eseguiAlgoritmo(nomeAlgoritmo, input);
        res.json({ risultato });
    } catch (error) {
        res.status(500).json({ errore: "Errore durante l'esecuzione dell'algoritmo" });
    }
});

// Gestione degli errori
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ errore: "Qualcosa è andato storto sul server" });
});

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});
