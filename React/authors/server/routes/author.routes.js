const AuthorController = require('../controllers/author.controller');  


module.exports = (app) => {
    app.get('/api/author', AuthorController.getAllAuthor);
    app.post('/api/author', AuthorController.createAuthor); 
    app.get('api/author/:id', AuthorController.getOneAuthor);
}