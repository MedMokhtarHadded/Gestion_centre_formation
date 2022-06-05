const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const nodemailer = require('nodemailer')

// Importation du model formation
const Formation = require('./models/formation');
// Importation du model apprenant
const Apprenant = require('./models/apprenant');
// Importation du model apprenant
const SalleFormation = require('./models/salleFormation');

// Importation du model user
const User = require('./models/user');







mongoose.connect('mongodb://localhost/pfe22', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to the database')
})



const routes = require('./routes/routes');
const bcrypt = require('bcryptjs');
const user = require('./models/user');

app = express()

app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', routes)
/****************************************************************************/
const JWT_SECRET ="some super secret..."

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'crococoder1@gmail.com',
        pass: 'Croc coder12*'
    }
})
/****************************************************************************/


/****************************************************************************/
// Get all Users
app.get("/api/users", (req,res) =>{
    console.log("Here in get all users");

    User.find((err,docs) =>{
        if(err){
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                users : docs
            });
        }
    });
});

// Create User
app.post("/api/users", (req,res) =>{

    console.log("here in create user",req.body);

    User.findOne({email : req.body.email  }).then(
        (doc)=>{
            if (doc) {
                console.log(doc);

            //success to front
            res.status(200).json({
                message : "User already exists"
            })
            } else {
                // not exists
                let user = {};
                bcrypt.hash(req.body.password,10).then(cryptedPwd =>{
        
                if(req.body.role=="formateur" ||req.body.role=="assistant"){
                    user = new User({
                        firstName : req.body.firstName,
                        lastName : req.body.lastName,
                        email : req.body.email,
                        cin : req.body.cin,
                        password : cryptedPwd,
                        salary : req.body.salary,
                        tel : req.body.tel,
                        birthday : req.body.birthday,
                        role : req.body.role
                    });
                }
                else {
                    user = new User({
                        email : req.body.email,
                        password : cryptedPwd,
                        role : req.body.role
                     
                    });
                }
            // Sauvegarde (save() est une fonction prédéfinies du mongoDB)
                user.save();
            // Retour de la requete (reponse) 
            // 200 status de succès de la req
                res.status(200).json({
                    message : "User created"
                })
            })
            }
        }
    )

    /********************************************************/

    
});

// delete user
app.delete("/api/deleteUser/:id", (req,res) =>{
    console.log("here in delete user");

    let  id = req.params.id;
    console.log(id);

    User.findOne({_id : id}).then(
        (doc)=>{
            console.log(doc);
        //  suppression de l'utilisateur
         User.deleteOne({_id: id}).then(
            (result)=>{
                console.log(result);
                if(result){
                    res.status(200).json({
                        message : "Delete with success"
                    })
                }
                
            }
        )
        }
    )
})


//get user by id
app.get("/api/users/:id" , (req,res) =>{
    let id = req.params.id;
    console.log(id);

    //search
    User.findOne({_id : id}).then(
        (doc)=>{
            console.log(doc);

            //success to front
            res.status(200).json({
                user : doc
            })
        }
    )
})


//update user
app.put("/api/users/:id", (req,res) =>{
    console.log("here in update user");
    let id = req.params.id;
    console.log(id);
    console.log(req.body.firstName);
    console.log(req.body.email);
    
    let user ;
    
    bcrypt.hash(req.body.password,10).then(cryptedPwd =>{

    if (req.body.role == "formateur" || req.body.role == "assistant" ) {
         user = {
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : cryptedPwd,
            salary : req.body.salary,
            tel : req.body.tel,
            cin : req.body.cin,
            birthday : req.body.birthday,
            role : req.body.role
        }

    }
     else{
         user = {
            _id : req.body._id,
            firstName : req.body.firstName,
            email : req.body.email,
            password : cryptedPwd,
            role : req.body.role
        }
    }
   
    User.updateOne({_id : id},user).then(
        (result)=>{
            if (result) {
                //success to front
            res.status(200).json({
                message : "update with succes"
            })
            }
         
        }
    )

    });

})


/****************************************************************************/


//Create apprenant
app.post("/api/apprenants", (req, res) => {

    console.log("here in create apprenant", req.body); 

    Apprenant.findOne({ email:req.body.email},(err,doc)=>
         { 
        if (!doc) {
            let apprenant={};
            //not exist
            apprenant = new Apprenant({
            firstName: req.body.firstName, 
            lastName: req.body.lastName,
            email: req.body.email,
            cin: req.body.cin,
            birthday: req.body.birthday,
            tel: req.body.tel,
            affectedFormation: req.body.affectedFormation
            });
            //sauvegarde (save()est une foncion prédéfinies du mongodb) 
            apprenant.save();
            //retour de la requete (reponse)
            // 200 status de succès de la req
            res.status(200).json({
                message: "apprenant created"
            })
        }
        else {
            //existe
            res.status(200).json({
                message:"apprenant already exist"
            })
        }

    })
   

});


//Get all Apprenants
app.get("/api/apprenants", (req,res) =>{
    console.log("Here in get all apprenants");

    Apprenant.find((err,docs) =>{
        if(err){
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                apprenants : docs
            });
        }
    });
});

// delete apprenant
app.delete("/api/deleteApprenant/:id", (req,res) =>{
    console.log("here in delete apprenant");

    let  id = req.params.id;
    console.log(id);

    Apprenant.findOne({_id : id}).then(
        (doc)=>{
            console.log(doc);
        //  suppression de l'utilisateur
         Apprenant.deleteOne({_id: id}).then(
            (result)=>{
                console.log(result);
                if(result){
                    res.status(200).json({
                        message : "Delete with success"
                    })
                }
                
            }
        )
        }
    )
})

//get apprenant by id
app.get("/api/apprenants/:id" , (req,res) =>{
    let id = req.params.id;
    console.log(id);

//search
    Apprenant.findOne({_id : id}).then(
        (doc)=>{
            console.log(doc);

            //success to front
            res.status(200).json({
                apprenant : doc
            })
        }
    )
})


//update apprenant
app.put("/api/apprenants/:id", (req,res) =>{
    console.log("here in update apprenant");
    let id = req.params.id;
    console.log(id);
    let apprenant ;

         apprenant = {
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        email: req.body.email,
        cin: req.body.cin,
        birthday: req.body.birthday,
        tel: req.body.tel,
        affectedFormation: req.body.affectedFormation
        }
   
    Apprenant.updateOne({_id : id},apprenant).then(
        (result)=>{
            if (result) {
                //success to front
            res.status(200).json({
                message : "update with succes"
            })
            }
         
        }
    )

    ;

})

/***********************************************************************/


//Create formation
app.post("/api/formations", (req, res) => {

    console.log("here in create formation", req.body); 

    Formation.findOne({ typeFormation:req.body.typeFormation},(err,doc)=>
         { 
        if (!doc) {
            let formation={};
            //not exist
            formation = new Formation({
                typeFormation: req.body.typeFormation,
                duration : req.body.duration,
                start : req.body.start,
                end : req.body.end,
                formateur: req.body.formateur,
                price: req.body.price
            });
            
        
        
        
            //sauvegarde (save()est une foncion prédéfinies du mongodb) 
            formation.save();
            //retour de la requete (reponse)
            // 200 status de succès de la req
            res.status(200).json({
                message: "formation created"
            })
        }
        else {
            //existe
            res.status(200).json({
                message:"formation already exist"
            })
        }

    })
   

});


//Get all Formations
app.get("/api/formations", (req,res) =>{
    console.log("Here in get all formations");

    Formation.find((err,docs) =>{
        if(err){
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                formations : docs
            });
        }
    });
});

// delete formation
app.delete("/api/deleteFormation/:id", (req,res) =>{
    console.log("here in delete formation");

    let  id = req.params.id;
    console.log(id);

    Formation.findOne({_id : id}).then(
        (doc)=>{
            console.log(doc);
        //  suppression de l'utilisateur
         Formation.deleteOne({_id: id}).then(
            (result)=>{
                console.log(result);
                if(result){
                    res.status(200).json({
                        message : "Delete with success"
                    })
                }
                
            }
        )
        }
    )
})

//get formation by id
app.get("/api/formations/:id" , (req,res) =>{
    let id = req.params.id;
    console.log(id);

//search
    Formation.findOne({_id : id}).then(
        (doc)=>{
            console.log(doc);

            //success to front
            res.status(200).json({
                formation : doc
            })
        }
    )
})
//update formation
app.put("/api/formations/:id", (req,res) =>{
    console.log("here in update formation");
    let id = req.params.id;
    console.log(id);
    let formation ;

         formation = {
            typeFormation: req.body.typeFormation,
            duration : req.body.duration,
            start : req.body.start,
            end : req.body.end,
            formateur: req.body.formateur,
            price: req.body.price
        }
   
    Formation.updateOne({_id : id},formation).then(
        (result)=>{
            if (result) {
                //success to front
            res.status(200).json({
                message : "update with succes"
            })
            }
         
        }
    )

    ;

})

/*******************************************************************************/

//Create salleFormation
app.post("/api/sallesFormations", (req, res) => {

    console.log("here in create salleFormation", req.body); 

    SalleFormation.findOne({ numSalle:req.body.numSalle},(err,doc)=>
         { 
        if (!doc) {
            let salleFormation={};
            //not exist
            salleFormation = new SalleFormation({
                numSalle: req.body.numSalle,
                nmbPlaces : req.body.nmbPlaces
            });
            
        
        
        
            //sauvegarde (save()est une foncion prédéfinies du mongodb) 
            salleFormation.save();
            //retour de la requete (reponse)
            // 200 status de succès de la req
            res.status(200).json({
                message: "salleFormation created"
            })
        }
        else {
            //existe
            res.status(200).json({
                message:"salleFormation already exist"
            })
        }

    })
   

});


//Get all sallesFormations
app.get("/api/sallesFormations", (req,res) =>{
    console.log("Here in get all sallesFormations");

    SalleFormation.find((err,docs) =>{
        if(err){
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                sallesFormations : docs
            });
        }
    });
});

// delete salleFormation
app.delete("/api/salleFormation/:id", (req,res) =>{
    console.log("here in delete salleFormation");

    let  id = req.params.id;
    console.log(id);

    SalleFormation.findOne({_id : id}).then(
        (doc)=>{
            console.log(doc);
        //  suppression de l'utilisateur
         SalleFormation.deleteOne({_id: id}).then(
            (result)=>{
                console.log(result);
                if(result){
                    res.status(200).json({
                        message : "Delete with success"
                    })
                }
                
            }
        )
        }
    )
})

//get salleFormation by id
app.get("/api/sallesFormations/:id" , (req,res) =>{
    let id = req.params.id;
    console.log(id);

//search
    SalleFormation.findOne({_id : id}).then(
        (doc)=>{
            console.log(doc);

            //success to front
            res.status(200).json({
                salleFormation : doc
            })
        }
    )
})

//update formation
app.put("/api/sallesFormations/:id", (req,res) =>{
    console.log("here in update salleFormation");
    let id = req.params.id;
    console.log(id);
    let salleFormation ;

    salleFormation = {
            numSalle: req.body.numSalle,
            nmbPlaces : req.body.nmbPlaces
        }
   
            SalleFormation.updateOne({_id : id},salleFormation).then(
        (result)=>{
            if (result) {
                //success to front
            res.status(200).json({
                message : "update with succes"
            })
            }
        }
    )
    ;
})

/****************************************************************************/

app.listen(8000)