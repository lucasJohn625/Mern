const Author = require('../models/author.model.js');    
module.exports = {
    getAllAuthor: (req, res) => {
        Author.find({}) 
            .then((allAuthor) => res.json(allAuthor))
            .catch((err) => console.log(err));
    },

    getOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id }) 
            .then((oneAuthor) => res.json(oneAuthor))
            .catch((err) => console.log(err));
    },

    createAuthor: (req, res) => {
        
        Author.create(req.body) 
            .then((newAuthor) => res.json(newAuthor)) //That 
            .catch((err) => console.log(err));
    },
};