
import { fibonacci } from "./service/serie";
import { perfecto, primos } from "./service/teoriaNumeros";
import express from "express";


const app = express();
const puerto = 5000;

// Configurar middleware estático
app.use(express.static('public'));

// Crear una ruta escucha (listen)
app.get('/procesarSerie', (req, res) => {
  let numero = req.query.numero

  res.send(`Escuchando en la ruta procesarSerie !!! ${ulam(numero)}`);
})

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`)
});
