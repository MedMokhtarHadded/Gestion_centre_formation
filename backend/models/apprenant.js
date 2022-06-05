//import mongoose
const mongoose = require('mongoose');
//generate schema
const apprenantSchema = mongoose.Schema({
    firstName: String,
    lastName : String,
    email : String,
    cin : String,
    birthday : String,
    tel : String,
    affectedFormation : String
});

//generate model
const apprenant = mongoose.model('Apprenant', apprenantSchema);

//Export model
module.exports = apprenant ;