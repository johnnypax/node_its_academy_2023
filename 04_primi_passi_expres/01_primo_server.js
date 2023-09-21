const express = require("express");

const host = "127.0.0.1";
const port = 4000; 

const app = new express();

app.get("/", (req, res) => {
    res.end("Sono la pagina INDEX");
})

app.get("/contatti", (req, res) => {
    res.end("Sono la pagina CONTATTI");
})

app.get("/chisiamo", (req, res) => {
    res.end("Sono la pagina CHI SIAMO");
})

app.listen(port, host, () => {
    console.log(`Sono in ascolto all'indirizzo http://${host}:${port}`);
})