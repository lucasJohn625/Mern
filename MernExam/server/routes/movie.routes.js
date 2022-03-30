const MovieController = require('../controllers/movie.controller');
 
module.exports = app => {
    app.get('/api/movies', MovieController.findAllMovies);
    app.get('/api/movies/:id', MovieController.findOneMovie);
    app.put('/api/movies/:id', MovieController.updateMovie);
    app.post('/api/movies', MovieController.createNewMovie);
    app.delete('/api/movies/:id', MovieController.deleteMovie);
    // reviews
    app.get('/api/reviews', MovieController.findAllReviews);
    app.get('/api/review/:id', MovieController.findOneReview);
    app.post('/api/review',MovieController.createNewReview)
}
