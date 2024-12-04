const express = require('express');
const app = express();

const {login} = require('./login');

const path = require('path');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'pages', 'login.html'));
 });

 app.post('/login', (req, res) => {
    //res.sendFile(path.join(__dirname, 'public', 'src', 'pages', 'login.html'));
    login(req.body.login, req.body.senha);
 });


 app.get('/pedidos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'pages', 'pedidos.html'));
 });

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})