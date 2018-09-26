const express = require('express')
const app = express();
const hbs = require('hbs')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

// express hbs
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')

// CREANDO HELPERS
hbs.registerHelper('getHour', () => {
     return new Date().getFullYear()
})

app.get('/', function (req, res) {
     res.render('home', {
          company: 'Ahsys',
          clientName: 'David Nariño'
     })
})

app.get('/login', (req, res) => {
     res.render('login', {
          company: 'Ahsys'
     })
})
app.get('/about', (req, res) => {
     res.render('about', {
          company: 'Ahsys',
          clientName: 'David Nariño'
     })
})


app.listen(port, () => {
     console.log('Escuchando en el puerto ' + port);
})