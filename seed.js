var mongoose = require('mongoose');
var Superhero = mongoose.model('superheros');

var superheroSeed = [
  {
    name: 'Robbie',
    ability: 'Not hacking',
    nemesis: 'Michael'
  },
  {
    name: 'Charlie',
    ability: 'Dom Loving',
    nemesis: 'Yusef'
  },
  {
    name: 'Yusef',
    ability: 'Coding really really badly',
    nemesis: 'JavaScript'
  }
];

function databaseSeed() {

  Superhero.find({}, function(err, documents){
    if(!err && documents.length===0) {

      for (var i = 0; i < superheroSeed.length; i++) {
        var newSuperhero = new Superhero(superheroSeed[i]);
        newSuperhero.save(function(err, success){
          if(!err) {
            console.log(
              'database seeded object!'
            );
          }
        })
      }
    }
  });

}

module.exports = databaseSeed;
