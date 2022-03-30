const { Schema, model } = require('mongoose')

const MovieReviewSchema = new Schema({
//used this schema to create an object to push into reviews array and call api seperatly 

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
});

const MovieReview = model('MovieReview', MovieReviewSchema);

module.exports = MovieReview;