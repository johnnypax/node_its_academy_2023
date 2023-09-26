const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnuncioSchema = new Schema(
    {
        Titolo: String,
        Data_inserimento: String,
        Descrizione: String,
        Nome: String,
        Cognome: String,
        Telefono: String,
        Email: String,
        Codice: String
    }
);

const Annuncio = mongoose.model('Annuncio', AnnuncioSchema);

module.exports = Annuncio;