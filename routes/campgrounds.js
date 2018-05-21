var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');

router.get('/', (req, res)=>{
    // console.log(req.user);

    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){


        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds: campgrounds});

});

router.post("/", (req, res)=>{
     // res.send('you hit the post');
    // data from form and 
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // Create New Campground and save to the database
    Campground.create(newCampground, function(err, newlyCreated ){
        if(err){
            console.log('There is an error');
            console.log(err);
        }else{
            //redirect back to campgrounds page
            res.redirect('/campgrounds');
        }
    });
    
});

//NEW - show form to create new campground 
router.get("/new", (req, res)=>{
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    // res.send("This will be the show page some day")
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

module.exports = router;