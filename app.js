require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8080 ;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use(express.static('public'));


// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

//controladores
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Alex Ram',
    titulo: 'Curso de Node Js'
  });
})

app.get('/hola-mundo', (req, res) => {
  res.send('Pagina: Hola Mundo')
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Alex Ram',
    titulo: 'Curso de Node Js'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Alex Ram',
    titulo: 'Curso de Node Js'
  });
})

app.get('*', (req, res) => {
//   res.send('Error 404: Page Not Found');
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log(`Example app lisenint at http://localhost:${port}`);
})