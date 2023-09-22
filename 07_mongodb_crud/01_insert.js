const mongoose = require('mongoose');
const StudentModel = require('./models/Student')

mongoose.connect('mongodb+srv://tutorcinque:hcfXu7cNCPVOvidz@cluster0.nvz6w2k.mongodb.net/scuola', {useNewUrlPrse: true})

let stud = {
    nome: "Mariolino",
    cognome: "Verdino",
    matricola: "AB791"
}

StudentModel.create(stud, (errore, risultati) => {
    if(errore)
        console.log("ERRORE", errore)
    else
        console.log(risultati)
})