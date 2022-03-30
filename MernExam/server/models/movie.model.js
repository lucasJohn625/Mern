const mongoose = require('mongoose');
 
const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: [3, "Must be 3 letters"]
    
  },
  reviews : [{
    movieTitle:{
        type: String,
        require: true,
        minlength: [3, "must be 3 characters"]
    },


    userName:{
        type: String,
        require: true,
        minlength: [3 , "must be 3 characters"]


    },
    rating:{
        type: Number,
        require:true,
    },

    review:{
        type: String,
        require: true,
        minlength: [3 , "must be 3 characters"]


    }
  }]
    //An Mongoose schema referncer object used to refere another schema (MoviewReview Here)
  
});
 
const Movie = mongoose.model('Movie', MovieSchema);
 
module.exports = Movie;