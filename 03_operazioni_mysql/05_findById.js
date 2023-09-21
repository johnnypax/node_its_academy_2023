const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_00_rubrica'
});

connection.connect();

const varID = 1;
const querySql = `SELECT contattoID, nome, cognome, telefono 
                        FROM Contatti 
                            WHERE contattoID = ${varID}`;

connection.query(querySql, (error, results) => {
    let risultato = null;

    if(error)
        console.log("Errore! ;(", error)
    else{
        Object.keys(results).forEach((i) => {

            let temp = {
                id: results[i].contattoID,
                nom: results[i].nome,
                cog: results[i].cognome,
                tel: results[i].telefono,
            }

            risultato = temp;
        })
    }

    console.log(risultato)
        
})

connection.end();