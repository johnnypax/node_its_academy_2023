const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_00_rubrica'
});

connection.connect();

const varID = 4;
const querySql = `DELETE FROM Contatti WHERE contattoID = ${varID}`;

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