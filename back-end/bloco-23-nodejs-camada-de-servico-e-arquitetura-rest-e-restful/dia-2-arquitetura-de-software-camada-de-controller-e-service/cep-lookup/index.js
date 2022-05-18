require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const rescue = require("express-rescue");

const CepsController = require("./controllers/Ceps");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/ping", (_req, res) => res.status(200).json({ message: "pong!" }));

app.get("/cep/:cep", rescue(CepsController.findById));

app.post("/cep", rescue(CepsController.create));

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
