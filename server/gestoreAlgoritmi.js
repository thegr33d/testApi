// server/gestoreAlgoritmi.js
const path = require('path');
const algoritmo1Path = path.join(__dirname, 'algoritmi', 'algoritmo1.js'); // Percorso completo al file algoritmo1.js
const algoritmo2Path = path.join(__dirname, 'algoritmi', 'algoritmo2.js'); // Percorso completo al file algoritmo2.js

let algoritmo1, algoritmo2;

// Carica i moduli degli algoritmi se presenti
try {
    algoritmo1 = require(algoritmo1Path).algoritmo1;
    algoritmo2 = require(algoritmo2Path).algoritmo2;
} catch (error) {
    console.error('Errore durante il caricamento degli algoritmi:', error);
}

// Mappa dei nomi degli algoritmi alle funzioni corrispondenti
const algoritmi = {
    'algoritmo1': algoritmo1,
    'algoritmo2': algoritmo2
};

// Funzione per eseguire l'algoritmo selezionato
function eseguiAlgoritmo(nomeAlgoritmo, input) {
    const algoritmo = algoritmi[nomeAlgoritmo];
    if (!algoritmo) {
        throw new Error('Algoritmo non trovato');
    }
    return algoritmo(input);
}

module.exports = { eseguiAlgoritmo };
