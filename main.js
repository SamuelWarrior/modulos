
import { ulam } from "./modulos/serie";
import express from "express";
import exphbs from 'express-handlebars'

const app = express();
const puerto = 5000;

app.use(express.json())

// Configurar middleware estático
app.use(express.static('public'));

// Configurar el engine template (handlebars)
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')
app.set('views', 'views') //?ruta donde estaran las vistas

// Crear una ruta escucha (listen)
app.get('/procesarUlam', (req, res) => {
  let numero = req.query.numero
  let cadenaSerie = ulam(numero)

 //res.send(`Escuchando en la ruta procesarserie !!! ${ulam(numero)}`);
 res.render('ulam', {serie:cadenaSerie})
})


app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`)
});