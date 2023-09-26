const Annuncio = require("../../models/Annuncio");

module.exports = async (req, res) => {

    let idOggetto = req.params.varId;
    let codEliminazione = req.body.var_codice;

    try {
        let ann = await Annuncio.findById(idOggetto);

        if(codEliminazione == ann.Codice){
            await Annuncio.findByIdAndDelete(idOggetto);

            res.redirect("/lista")
        }
            
        res.render("errore",{
            messaggio: "Errore di eliminazione, probabilmente il codice è errato!"
        })     
    } catch (error) {
        res.render("errore",{
            messaggio: "Annuncio non trovato!"
        })        
    }

}