const http = require("http");

const host = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
    res.end(req.url);                           //Restituisco l'URL della chiamata req
})

server.listen(port, host, () => {
    console.log(`Sono in ascolto all'indirizzo http://${host}:${port}`);
})