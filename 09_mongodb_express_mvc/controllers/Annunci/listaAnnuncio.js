const Annuncio = require("../../models/Annuncio");

module.exports = async (req, res) => {
    let risultato = await Annuncio.find({})

    res.render("lista", {
        elenco: risultato
    });
}