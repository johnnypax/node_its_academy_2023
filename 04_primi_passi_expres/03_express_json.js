const express = require("express");

const host = "127.0.0.1";
const port = 4000; 

const app = new express();

app.get("/", (req, res) => {
    let responso = {
        pagina: "Sono la pagina index"
    }

    res.json(responso);
})

app.get("/contatti", (req, res) => {
    res.json({
        pagina: "Sono la pagina contatti",
        attributo: "Valore"
    })
})

app.listen(port, host, () => {
    console.log(`Sono in ascolto all'indirizzo http://${host}:${port}`);
})