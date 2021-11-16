/*class Marker {
    constructor(id, coordinates, date, monster, author, text) {
      this.id = id; //UUID
      this.coordinates = coordinates; // coordinates for location
      this.date = date; // date of sighting
      this.monster = monster; // 
      this.author = author; // author of the post
      this.text = text;
    }
  
  }

  
  module.exports = Marker;
*/

const mongoose = require('mongoose');

const MarkerSchema = new mongoose.Schema({     
  coordinates: {
    type: Array,
    unique: true,
    required: [true, "coordinates are needed for markers"],
    index: true,
  },
  date: {
    type: Date,
    unique: true,
    required: [true, "there must be a date creation"],
    index: true,
  }, 
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Monster"
    
  },
  author: String,
  text: String,
}, { timestamps: true });        

MarkerSchema.methods.publicData = function() {
  return {
    id: this.id,
    coordinates: this.coordinates,
    date: this.date, // date of sighting
    monster: this.monster, // 
    author: this.author, // author of the post
    text: this.text = text
  }
}
 
 
mongoose.model("Marker", MarkerSchema);