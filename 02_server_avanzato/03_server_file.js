const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 4000;

const paginaIndex = fs.readFileSync('pagine/index.html');
const paginaChiSiamo = fs.readFileSync('pagine/chisono.html');
const paginaContatti = fs.readFileSync('pagine/contatti.html');
const paginaNonTrovato = fs.readFileSync('pagine/404.html');

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/":
            res.end(paginaIndex);
            break;
        case "/chisono":
            res.end(paginaChiSiamo);
            break;
        case "/contatti":
            res.end(paginaContatti);
            break;
        default:
            res.end(paginaNonTrovato);
            break;
        
    }
})

server.listen(port, host, () => {
    console.log(`Sono in ascolto all'indirizzo http://${host}:${port}`);
})