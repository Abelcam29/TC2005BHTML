import "dotenv/config";
import express from "express";

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, console.log("http://localhost:" + PORT));
