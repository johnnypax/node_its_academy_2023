const Annuncio = require("../../models/Annuncio");

module.exports = async (req, res) => {
    let varId = req.params.varId

    try {
        let tick = await Annuncio.findById(varId);

        res.render('dettaglio', {
            ticket: tick
        })
            
    } catch (error) {
        res.render("errore",{
            messaggio: "Annuncio non trovato!"
        })        
    }
    
}