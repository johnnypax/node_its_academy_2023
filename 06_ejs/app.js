const express = require("express");
const ejs = require("ejs");

const host = "127.0.0.1";
const port = 4000;

const app = new express();
app.set('view engine', 'ejs');

app.listen(port, host, () => {
    console.log("Sono in ascolto!")
})

//-------- ROTTE --------

app.get("/", (req, res) => {
    res.render('index')
})
app.get("/contatti", (req, res) => {
    res.render('contatti')
})
app.get("/servizi", (req, res) => {
    res.render('servizi')
})