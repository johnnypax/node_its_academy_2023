const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_00_rubrica'
});

connection.connect();

const querySql = `SELECT contattoID, nome, cognome, telefono FROM Contatti`;

connection.query(querySql, (error, results) => {
    let elenco = [];

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

            elenco.push(temp);
        })
    }

    console.log(elenco)
        
})

connection.end();