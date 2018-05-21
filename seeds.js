var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
    {
        name: "Great swimmer",
        image: "https://secure.i.telegraph.co.uk/multimedia/archive/02461/games_2461551b.jpg",
        description: "Greatest opening of ceremony. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quaerat obcaecati quod fuga magni quos ab ipsa maxime maiores ipsam porro, totam id sequi? Dolor, consectetur esse. Nesciunt, sed reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quaerat obcaecati quod fuga magni quos ab ipsa maxime maiores ipsam porro, totam id sequi? Dolor, consectetur esse. Nesciunt, sed reprehenderit. "
    },
    {
        name: "Crowdfunding for winter olympic",
        image: "https://www.pledgesports.org/wp-content/uploads/2017/05/olympic-alpine-skiing.jpg",
        description: "It goes a long way. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quaerat obcaecati quod fuga magni quos ab ipsa maxime maiores ipsam porro, totam id sequi? Dolor, consectetur esse. Nesciunt, sed reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quaerat obcaecati quod fuga magni quos ab ipsa maxime maiores ipsam porro, totam id sequi? Dolor, consectetur esse. Nesciunt, sed reprehenderit."
    },
    {
        name: "Another world record",
        image: "http://cdn.gcprive.co.uk/wp-content/uploads/2014/02/SKI1.jpg",
        description: "World record set again. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quaerat obcaecati quod fuga magni quos ab ipsa maxime maiores ipsam porro, totam id sequi? Dolor, consectetur esse. Nesciunt, sed reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quaerat obcaecati quod fuga magni quos ab ipsa maxime maiores ipsam porro, totam id sequi? Dolor, consectetur esse. Nesciunt, sed reprehenderit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quaerat obcaecati quod fuga magni quos ab ipsa maxime maiores ipsam porro, totam id sequi? Dolor, consectetur esse. Nesciunt, sed reprehenderit."
    },
]


function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log('removed campgrounds');
        // Add a few campgrounds
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            }else{
                console.log("Added a campground");
                // Create a comment 
                Comment.create({
                    text: "This place is great",
                    author: "Homer"
                }, function(err, comment){
                    if(err){
                        console.log(err);
                    }else{
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment");
                    }
                }
            );
            }
        })
    });
    });
    // Add a few comments
}

module.exports = seedDB;