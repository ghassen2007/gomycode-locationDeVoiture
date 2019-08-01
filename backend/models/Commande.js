const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommandeSchema = new Schema({
    idclient: {
        type: String,
        required: true
    },
    idcar: {
        type: String,
        required: true
    },
    idcommande: {
        type: String,
        required: true
        
    },
    datededepart: {
        type: Number,
        required: true
    },
    datederetour: {
        type: Number,
        required: true
    },
    


});

const Commande = mongoose.model('commande', CommandeSchema);

module.exports = Commande