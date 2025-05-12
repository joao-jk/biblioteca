const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//Rota Padrao.
app.get("/", (req, res) => {
    
    res.send("Ola Mundo!");
    
});

//Rota para enviar um site.
app.get("/caroline", (req, res) => {
    
    res.sendFile(__dirname + "/public/index.html");
    
});


app.get("/livroHP", (req, res) => {
    res.download(__dirname + "/public/Harry Potter e a Pedra Filosofal - J.K. Rowling.pdf");
})

app.get("/livroSC", (req, res) => {
    res.download(__dirname + "/public/Saboroso Cadáver - Agustina Bazterrica .pdf");
})

app.get("/livroVI", (req, res) => {
    res.download(__dirname + "/public/As vantagens de ser invisivel -Oficial - Stephen Chbosky.pdf");
})

app.get("/livroMPLL", (req, res) => {
    res.download(__dirname + "/public/meu_pe_de_laranja_lima.pdf");
})

app.get("/livroCP", (req, res) => {
    res.download(__dirname + "/public/cidades-de-papel-john-green-1.pdf");
})

app.listen(3000, console.log("Rodando..."));