const express = require('express')
const app = express()

const PORT = 4000
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/nosso_trabalho', (req, res) => {
    res.render('nosso_trabalho')
})
app.get('/sobre_nos', (req, res) => {
    res.render('sobre_nos')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(PORT, ()=>{
    console.log(`server runing at http://localhost:${PORT}`)
})
