User = require('../model/User');

exports.login = async function(req, res){
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.json({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send([{ user, token }])
    } catch (error) {
        return res.json({error: "Login Failed"})
    }
}

exports.register = async function(req, res){
    var image = "man.png";
    if(req.body.gender == "Female"){
        image = "female.png"
    }
    var user = User.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        dob : req.body.dob,
        gender: req.body.gender,
        phonenumber: req.body.phonenumber,
        email : req.body.email,
        password : req.body.password,
        image : image
    },
    async function(err, user){
        if(err)
            res.json(err)
            
        const token = await user.generateAuthToken()    
        res.json([{
            success : true,
            message : 'Authentication successful',
            token : token,
            data: user
        }])
    });
}

exports.index = function(req, res){
    User.find(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
}