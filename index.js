import "dotenv/config";
import express from "express";

const PORT = 4000;

const app = express();

app.use(express.json());
app.get('*.br', (req, res, next) => {
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript');
    next();
});

// Configuración para archivos Gzip de Unity
app.get('*.gz', (req, res, next) => {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
});
app.use(express.static("public"));




app.use('/videojuego', express.static('webgl-build'));

app.listen(PORT, console.log("http://localhost:" + PORT));
