const express = require('express')
const mongoose = require("mongoose");

const app = express()
app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))           //Risorse statiche nella cartella public

require('dotenv').config();                 //Posso guardare le variabili d'ambiente

mongoose.connect(process.env.MONGOCONNECTIONSTRING, {useNewUrlPrse: true}, () => {
    console.log("Sono connesso al Database con successo!");
})

app.listen(process.env.port, process.env.host, () => {
    console.log(`Sono in ascolto sulla porta ${process.env.port}`)
})

// ----------- ROUTER ------------

const nuovoAnnuncio = require('./controllers/Annunci/nuovoAnnuncio');
const salvaAnnuncio = require('./controllers/Annunci/salvaAnnuncio');
const listaAnnuncio = require('./controllers/Annunci/listaAnnuncio');
const codiceAnnuncio = require('./controllers/Annunci/codiceAnnuncio');
const dettaglioAnnuncio = require('./controllers/Annunci/dettaglioAnnuncio');
const eliminaAnnuncio = require('./controllers/Annunci/eliminaAnnuncio');

app.get("/inserisci", nuovoAnnuncio)
app.post("/salva", salvaAnnuncio)
app.get(["/", "/lista"], listaAnnuncio)
app.get("/codice/:varCod", codiceAnnuncio)
app.get("/dettaglio/:varId", dettaglioAnnuncio)
app.post("/elimina/:varId", eliminaAnnuncio)
app.get("/errore", )