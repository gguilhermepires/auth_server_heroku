const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
res.send('Ola , mundo');
});

app.listen(port, ()=>{
    console.info(`Rodando na porta ${port}`);
});