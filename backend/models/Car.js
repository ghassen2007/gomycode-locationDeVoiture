const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    matricule: {
        type: String,
        required: true
    },
    nbporte: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
        
    },
   boitevitesse: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    datefab : {
        type: Date,
        required: true
    },


});

const Car = mongoose.model('cars', CarSchema);

module.exports = Car