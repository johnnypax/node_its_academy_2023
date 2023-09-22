const mongoose = require('mongoose');
const StudentModel = require('./models/Student')

mongoose.connect('mongodb+srv://tutorcinque:hcfXu7cNCPVOvidz@cluster0.nvz6w2k.mongodb.net/scuola', {useNewUrlPrse: true})

//SELECT ... WHERE nome = "Mario"
// StudentModel.find({
//     nome: /Mario/,
// }, (errore, risultati) => {
//     if(errore)
//         console.log("ERRORE", errore)
//     else
//         console.log(risultati)
// })

//SELECT * FROM Studente
// StudentModel.find({}, (errore, risultati) => {
//     if(errore)
//         console.log("ERRORE", errore)
//     else
//         console.log(risultati)
// })

//SELECT * .... WHERE nome LIKE "Mar%"
// StudentModel.find({
//     nome: /^Mar/,
// }, (errore, risultati) => {
//     if(errore)
//         console.log("ERRORE", errore)
//     else
//         console.log(risultati)
// })

//SELECT * .... WHERE nome LIKE "%o"
// StudentModel.find({
//     nome: /o$/,
// }, (errore, risultati) => {
//     if(errore)
//         console.log("ERRORE", errore)
//     else
//         console.log(risultati)
// })

//SELECT * .... WHERE nome LIKE "%io%"
StudentModel.find({
    nome: /io/,
}, (errore, risultati) => {
    if(errore)
        console.log("ERRORE", errore)
    else
        console.log(risultati)
})