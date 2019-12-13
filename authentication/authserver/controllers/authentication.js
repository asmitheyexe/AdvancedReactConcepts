const User = require('../models/user');
const config = require('../config');
const jwt = require('jwt-simple');
// create a JWT token for user to use for future identification in session
function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat:timestamp }, config.secret);
}

// /singup post endpoint. function handler
exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.status(422).send({error: 'Missing a email or password'});
    }

    // see if user with given email exists
    User.findOne({email: email}, function(err,existingUser){
        if(err){ return next(err);}
        // if user exists throw/return err
        if(existingUser){
            return res.status(422).send({error:'Email in use.'}); // 422 is not processable data
        }

        
        // if email is new, make record and response to request

        const user = new User({
            email:email,
            password:password
        });

        user.save(function(err){
            if(err){
                return next(err);
            }

            // respond with our JWT token
            res.json({ token: tokenForUser(user) });
        });
    });

}

exports.signin = function(req, res,next){
    res.send({token:tokenForUser(req.user)});
}