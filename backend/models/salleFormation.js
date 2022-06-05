//import mongoose
const mongoose = require('mongoose');
//generate schema
const salleFormationSchema = mongoose.Schema({
    numSalle: String,
    nmbPlaces : String
});

//generate model
const salleFormation = mongoose.model('salleFormation', salleFormationSchema);

//Export model
module.exports = salleFormation ;