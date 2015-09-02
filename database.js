//setting up the database and defining the Schema
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//database collection and object format
var Superhero = new Schema(
  {name : String,
   ability: String,
   nemesis: String
 }
);

//linked the Schema to a collection called 'superheros'
mongoose.model('superheros', Superhero);

//require/include the mongoose library
mongoose.connect('mongodb://localhost/node-superhero');
