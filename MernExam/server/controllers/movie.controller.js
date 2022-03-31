const Movie = require('../models/movie.model');
const Reviews = require('../models/movieReviews');
 
module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then((allMovies) => {
            res.json({ movies: allMovies })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneMovie = (req, res) => {
    Movie.findOne({ _id: req.params.id })
        .then(oneMovie => {
            res.json({ movie: oneMovie })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(createMovie => {
            res.json({ movie: createMovie })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateMovie = (req, res) => {
    Movie.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMovie => {
            res.json({ movie: updatedMovie })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

        module.exports.findAllReviews = (req, res) => {
            Movie.find()
                .then((allMovies) => {
                    let reviews = allMovies.review;
                    res.json({ reviews: reviews })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });
        }
         
        module.exports.findOneReview = (req, res) => {
            Movie.findOne({ _id: req.params.id })
                .then(oneReview => {
                    res.json({ review: oneReview.review })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });}
         
        module.exports.createNewReview = (req, res) => { // async and await is used for  keeping the function asynchronous which make await variable wait unitil it gets a value
         

            Movie.findById(req.body.movieId).then(movie=>{ // Finding the movie with the movieId sent
                movie.reviews.push(req.body.review);    // pushing the savedreview to the reviews array in Movie schema
                movie.save();   // saving the changes ( changes in the array value after the newReview is added )
                return res.status(200).json({success:true}) // return status 200 and newly added review object from the db if everything goes right
            }).catch(err=>{
                console.log(err)
                res.status(400).json({success:false,msg:"Couldn't save the review",err:err});

            }); // catching the error if anything goes wrong in the then function

        }
            