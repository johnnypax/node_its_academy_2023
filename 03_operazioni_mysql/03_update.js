const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_00_rubrica'
});

connection.connect();

const contatto = {
    id: 2,
    nom: "Mario",
    cog: "Rossi",
    tel: "123458"
};

const querySql = `UPDATE Contatti SET
    nome = '${contatto.nom}',
    cognome = '${contatto.cog}',
    telefono = '${contatto.tel}'
    WHERE contattoID = ${contatto.id}
    `;

connection.query(querySql, (error, results) => {
    if(error)
        console.log("Errore! ;(", error)
    else{
        if(results.affectedRows > 0)
            console.log("Stappooooooo")
        else
            console.log("Non ho trovato alcuna riga da eliminare")
    }
        
})

connection.end();