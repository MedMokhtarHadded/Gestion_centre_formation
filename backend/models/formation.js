//import mongoose
const mongoose = require('mongoose');
//generate schema
const formationSchema = mongoose.Schema({
    typeFormation: String,
    duration : String,
    start : String,
    end : String,
    formateur: String,
    price: String
});

//generate model
const formation = mongoose.model('formation', formationSchema);

//Export model
module.exports = formation ;