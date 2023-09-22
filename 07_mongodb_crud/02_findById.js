const mongoose = require('mongoose');
const StudentModel = require('./models/Student')

mongoose.connect('mongodb+srv://tutorcinque:hcfXu7cNCPVOvidz@cluster0.nvz6w2k.mongodb.net/scuola', {useNewUrlPrse: true})

let varId = "650d614fbb5b4450602a820f";
StudentModel.findById(varId,  (errore, risultati) => {
    if(errore)
        console.log("ERRORE", errore)
    else
        console.log(risultati)
})