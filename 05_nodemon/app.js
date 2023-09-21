const express = require("express");
const path = require("path")

const host = "127.0.0.1";
const port = 4000;

const app = new express();
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(
        path.resolve(__dirname,"pagine", "index.html")
    )
})
app.get("/chisiamo", (req, res) => {
    res.sendFile(
        path.resolve(__dirname,"pagine", "chisiamo.html")
    )
})
app.get("/contatti", (req, res) => {
    res.sendFile(
        path.resolve(__dirname,"pagine", "contatti.html")
    )
})
app.get("/servizi", (req, res) => {
    res.sendFile(
        path.resolve(__dirname,"pagine", "servizi.html")
    )
})

app.listen(port, host, () => {
    console.log("Sono in ascolto!")
})
