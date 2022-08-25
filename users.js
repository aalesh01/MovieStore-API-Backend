const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  "Title": String,
  "Year": String,
  "Rated": String,
  "Released": String,
  "Runtime": String,
  "Genre": String,
  "Director": String,
  "Writer": String,
  "Actors": String,
  "Plot": String,
  "Language": String,
  "Country": String,
  "Awards": String,
  "Poster": String,
  "Metascore": String,
  "imdbRating": String,
  "imdbVotes": String,
  "imdbID": String,
  "Type": String,
  "Response": String,
  "Images": [String]
},
{
  timestamps:true  
})

const user = mongoose.model('User',userSchema)


module.exports = user;


