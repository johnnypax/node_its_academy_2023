const http = require("http");       //Utilizzo il modulo built-in di NodeJS chiamato http

const host = "127.0.0.1";
const port = 4000; 

const server = http.createServer((req, res) => {
    console.log("QUaluno mi ha chiamato");                  //LO VEDO SUL SERVER SOLTANTO
    res.end("Ciao, sono la response generata da Node.")     //VIENE INVIATO A CHROME!
});

server.listen(port, host, () => {
    console.log(`Sono in ascolto all'indirizzo http://${host}:${port}`);
})