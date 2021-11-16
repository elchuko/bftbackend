/*
class Monster {
    constructor(name, description, location) {
      this.name = name; //UUID
      this.description = description; // coordinates for location
      this.location = location; // date of sighting
    }
}


  
module.exports = Monster;
*/

const mongoose = require("mongoose");

const MonsterSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true}
}, {timestaps: true})

MonsterSchema.methods.publicData = function() {
    return {
        id: this.id,
        name: this.name,
        description: this.description,
        location: this.location
    }
}

mongoose.model('Monster', MonsterSchema);