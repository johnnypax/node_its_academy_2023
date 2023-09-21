const http = require("http");

const host = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/":
            res.end("<h1>Sei nella pagina INDEX</h1>");
            break;
        case "/chisono":
            res.end("Sei nella pagina CHI SONO");
            break;
        case "/contatti":
            res.end("Sei nella pagina CONTATTI");
            break;
        default:
            res.end("Pagina trovata!");
            break;
        
    }
})

server.listen(port, host, () => {
    console.log(`Sono in ascolto all'indirizzo http://${host}:${port}`);
})