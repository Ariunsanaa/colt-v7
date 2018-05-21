var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');


router.get('/', (req, res)=>{
    // res.send('<h1>Hello. This will be landing page soon</h1>')
    res.render('landing');
});





// Auth routes ===========================
router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", (req, res)=>{
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, ()=>{
            res.redirect("/campgrounds");
        })
    } )
})

// Login
router.get('/login', (req, res)=>{
    res.render('login');
});

router.post('/login', passport.authenticate("local", 

    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }),
     (req, res)=>{
    
});

// Logout
router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/campgrounds');
});

//Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = router;