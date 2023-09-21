const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_00_rubrica'
});

connection.connect();

let contatto = {
    nom: "Mario",
    cog: "Rossi",
    tel: "123458"
}

let querySql = `INSERT INTO contatti(nome, cognome, telefono) VALUES 
                ('${contatto.nom}','${contatto.cog}','${contatto.tel}');`;

connection.query(querySql, (error, results) => {
    if(error)
        console.log("Errore! ;(", error)
    else
        console.log("Stappooooooo")
})

connection.end();