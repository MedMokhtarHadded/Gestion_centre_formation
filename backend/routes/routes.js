const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const nodemailer = require('nodemailer')
/***************************************************** */
var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth:{
        user: 'crococoder@outlook.fr',
        pass: 'hjbkl,m1235'
    }
})
/***************************************************** */
//register
router.post('/register',async (req,res)=>{

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        cin: req.body.cin,
        password: hashedPassword,
        salary: req.body.salary,
        tel : req.body.tel,
        birthday : req.body.birthday,
        role : req.body.role
    })

    const result = await user.save()

    const {password, ...data} = await result.toJSON()

    res.send(data)
})


//login
router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return res.status(404).send({
            status : "NOK",
            message: 'user not found'
        })
    }

    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send({
            status : "NOK",
            message: 'invalid credentials'
        })
    }
    const token = jwt.sign({_id: user._id}, "secret");

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    res.send({
        status: 'OK', token: token , user : user ,
        message: 'success'
    })
})



/******************************************************************/

router.get("/api/forget-password", (req,res,next) =>{
})

//forget
router.post('/forget-password', async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return res.status(404).send({
            status : "NOK",
            message: 'user not found'
        })
    }else{
        const token = jwt.sign({_id: user._id}, "secret");
        const link =`http://localhost:4200/reset-password/${user._id}/${token}`;

        var mailOptions={
            from: 'crococoder@outlook.fr',
            to: req.body.email,
            subject: 'Reset password',
          html: `reset password via this <a href="${link}"> link </a>` 
        }

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            } else{
                console.log('Email sent:'+ info.response);
            }
        })
       
       console.log(link);
        res.send({status: "OK", message:'Password resend link has been send to your email', link: link })
    }
   
})


/************************************************************************** */

router.get("/reset-password/:id/:token",async (req,res,next) =>{
    const {id, token} =req.params;
    const user = await User.findOne({_id: id});
    if (!user) {
        return res.status(404).send({
            status : "NOK",
            message: 'Invalid Id'
        })
    }
try {
       
        
} catch (error) {
    console.log(error.message);
    res.send(error.message)
}
    })

router.post("/reset-password/:id/:token", (req,res,next) =>{
    const {id, token} =req.params;
    res.send(user)
    })

/****************************************************************************** */

//get cookie
router.get('/user', async (req, res) => {
    try {
        const cookie = req.cookies['jwt']

        const claims = jwt.verify(cookie, 'secret')

        if (!claims) {
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }

        const user = await User.findOne({_id: claims._id})

        const {password, ...data} = await user.toJSON()

        res.send(data)
    } catch (e) {
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
})

//logout
router.post('/logout', (req, res) => {
    res.cookie('jwt', '', {maxAge: 0})

    res.send({
        message: 'success'
    })
})

















module.exports = router;