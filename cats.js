var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs.Norris",
//     age: 7,
//     temperament: 'evil'
// });

// george.save(function(err, cat){
//     if(err){
//         console.log('Something went wrong');
//     }else{
//         console.log('George is saved to the DB');
//     }
// });

// 2nd way to create a cat

// Cat.create({
//     name: "Pocahontas",
//     age: 22,
//     temperament: 'Stupid'
// }, function(err, cat){
//     if(err){
//         console.log('Error in creating a cat');
//         console.log(err);
//     }else{
//         console.log('Cat Created');
//     }
// });

Cat.find({}, function(err, cats){
    if(err){
        console.log('Oh No error');
        console.log(err);
    }else{
        console.log('All the cats');
        console.log(cats);
    }
});