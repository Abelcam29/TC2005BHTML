import express from "express";

const PORT = 4000;

const app = express();
// Middleware to parse JSON requests
app.use(express.static("public"));

app.listen(PORT, console.log("http://localhost:" + PORT));
