const AuthorController = require("../controllers/author.controller");

module.exports = (app) =>{
    app.get('/api/author', AuthorController.getAllAuthors);

    app.post('/api/author', AuthorController.createAuthor);

    app.put('/api/author/:id', AuthorController.editAuthor);

    app.delete('/api/author/:id', AuthorController.deleteAuthor);
    
    app.get('/api/author/:id', AuthorController.getOneAuthor);

    app.put('/api/review/:id', AuthorController.reviewAuthor);


}