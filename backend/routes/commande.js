const express = require('express');
const router = express.Router();
const Commande = require("../models/Commande");
router.post("/add-commande", (req, res) => {
    let commandeFields = {};
    if (req.body.idclient) commandeFields.name = req.body.idclient;
    if (req.body.idcar) commandeFields.name = req.body.idcar;
    if (req.body.idcommande) commandeFields.name = req.body.idcommande;
    if (req.body.datededepart) commandeFields.name = req.body.datededepart;
    if (req.body.datederetour) commandeFields.name = req.body.datederetour;
    new Cmd(commandeFields)
    .save()
    .then(cmd=> res.json(cmd))
    .catch(err => console.log(err));
});
