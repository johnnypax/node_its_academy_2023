const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
    {
        nome: String,
        cognome: String,
        matricola: String
    }
);

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;