module.exports = (req, res) => {
    res.render('codice', {
        codice: req.params.varCod
    })
}