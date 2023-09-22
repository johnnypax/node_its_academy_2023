const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const StudenteModel = require("./models/Student")

const host = "127.0.0.1";
const port = 4000;

const app = express();
app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({extended: true}))


mongoose.connect('mongodb+srv://tutorcinque:hcfXu7cNCPVOvidz@cluster0.nvz6w2k.mongodb.net/scuola', {useNewUrlPrse: true}, () => {
    console.log("Sono connesso al Database con successo!");
})

app.listen(port, host, () => {
    console.log(`Sono in ascolto sulla porta ${port}`)
})

//----------- ROTTE --------------------

app.get(["/", "/lista"], async (req, res) => {

    console.log("-------------------> INIZIO")

    let risultato = await StudenteModel.find({})
    console.log(risultato)
    
    console.log("-------------------> FINE")

    res.render("lista", {
        elenco: risultato
    });
})

app.get("/dettaglio/:studId", async (req, res) => {
    let varId = req.params.studId

    try {
        let stud = await StudenteModel.findById(varId);

        res.render('dettaglio', {
            studente: stud
        })
            
    } catch (error) {
        res.render("errore",{
            messaggio: "Studente non trovato!"
        })        
    }
    
})

app.get("/inserimento", (req, res) => {
    res.render("inserisci");
})

app.post("/salva", async (req, res) => {
    let stud = {
        nome: req.body.var_nome,
        cognome: req.body.var_cogn,
        matricola: req.body.var_matr,
    }

    try {
        let risultato = await StudenteModel.create(stud);

        res.redirect("/lista")
    } catch (error) {
        res.render("errore",{
            messaggio: "Inserimento non riuscito!"
        }) 
    }
})

app.post("/elimina/:studId", async (req, res) => {
    let varID = req.params.studId;

    try {
        let risultato = await StudenteModel.findByIdAndDelete(varID);

        res.redirect("/lista")
    } catch (error) {
        res.render("errore",{
            messaggio: "Eliminazione non riuscita!"
        }) 
    }
})

app.get("/modifica/:studId", async (req, res) => {
    let varID = req.params.studId;

    try {
        let stud = await StudenteModel.findById(varID);

        res.render('modifica', {
            studente: stud
        })
            
    } catch (error) {
        res.render("errore",{
            messaggio: "Studente non trovato!"
        })        
    }
});

app.post("/effettua-modifica/:studId", async (req, res) => {
    let varID = req.params.studId;

    try {
        let risultato = await StudenteModel.findByIdAndUpdate(varID, {
            nome: req.body.var_nome,
            cognome: req.body.var_cogn,
            matricola: req.body.var_matr,
        });

        res.redirect("/lista")
    } catch (error) {
        res.render("errore",{
            messaggio: "Modifica non effettuata!"
        })  
    }
})

//------------- ROTTE API ------------------


app.get("/api/lista", async (req, res) => {
    let elenco = await StudenteModel.find({})    
    res.json(
        {
            status: "success",
            data: elenco
        }
    );
})


app.get("/api/dettaglio/:studId", async (req, res) => {
    let varId = req.params.studId

    try {
        let stud = await StudenteModel.findById(varId);
        res.json(
            {
                status: "success",
                data: stud
            }
        );
    } catch (error) {
        res.json(
            {
                status: "error",
                data: "Studente non trovato"
            }
        )
    }
    
})

app.post("/api/salva", async (req, res) => {
    let stud = {
        nome: req.body.var_nome,
        cognome: req.body.var_cogn,
        matricola: req.body.var_matr,
    }

    try {
        let risultato = await StudenteModel.create(stud);
        res.json({
            status: "success",
            data: ""
        })
    } catch (error) {
        res.json({
            status: "error",
            data: error
        })
    }
})

app.delete("/api/elimina/:studId", async (req, res) => {
    let varID = req.params.studId;

    try {
        let risultato = await StudenteModel.findByIdAndDelete(varID);
        res.json({
            status: "success",
            data: ""
        })
    } catch (error) {
        res.json({
            status: "error",
            data: error
        })
    }
})


app.put("/api/effettua-modifica/:studId", async (req, res) => {
    let varID = req.params.studId;

    try {
        let risultato = await StudenteModel.findByIdAndUpdate(varID, {
            nome: req.body.var_nome,
            cognome: req.body.var_cogn,
            matricola: req.body.var_matr,
        });

        res.json({
            status: "success",
            data: ""
        })
    } catch (error) {
        res.json({
            status: "error",
            data: error
        })
    }
})