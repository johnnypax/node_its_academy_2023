const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const StudenteModel = require("./models/Student")

const host = "127.0.0.1";
const port = 4000;

const app = express();
app.set("view engine", "ejs");

mongoose.connect('mongodb+srv://tutorcinque:hcfXu7cNCPVOvidz@cluster0.nvz6w2k.mongodb.net/scuola', {useNewUrlPrse: true}, () => {
    console.log("Sono connesso al Database con successo!");
})

app.listen(port, host, () => {
    console.log(`Sono in ascolto sulla porta ${port}`)
})

//----------- ROTTE --------------------

app.get("/", async (req, res) => {

    console.log("-------------------> INIZIO")

    let risultato = await StudenteModel.find({})
    console.log(risultato)
    
    console.log("-------------------> FINE")

    res.render("lista", {
        elenco: risultato
    });
})

app.get("/dettaglio/:studId", (req, res) => {
    res.end(req.params.studId)
})