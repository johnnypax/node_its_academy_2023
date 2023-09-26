const Annuncio = require("../../models/Annuncio");
const { v4: uuidv4 } = require('uuid');                 //serviva un modo per generare un ID

module.exports = async (req, res) => {
    let tick = {
        Titolo: req.body.var_tit,
        Data_inserimento: req.body.var_data,
        Descrizione: req.body.var_desc,
        Nome: req.body.var_nome,
        Cognome: req.body.var_cogn,
        Telefono: req.body.var_tel,
        Email: req.body.var_email,
        Codice: uuidv4()
    }

    try {
        let risultato = await Annuncio.create(tick);
        // console.log(risultato);

        res.redirect(`/codice/${risultato.Codice}`)
    } catch (error) {
        console.log(error)
        res.render("errore",{
            messaggio: "Inserimento non riuscito!"
        }) 
    }
}