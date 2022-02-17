const Author = require('../models/author.models');

module.exports = {
    
    createAuthor: (res,req)=>{
        Author.create(req,body)
        .then((newAuthor)=>{
            console.log(newAuthor);
            res.json(newAuthor)
        })
    }
    getOneAuthor: (res,req)=>{
        Author.findById(_id.parans.id)
        .then((findAuthor)=>{
            console.log
        })
    }

    getAllAuthors: (res,req)=>{
        Author.find({})
        
    }

    deleteAuthor: (res,req)=>{
        Author.deleteOne({_id: req.param.id})
    }

    editAuthor: (res,req)=>{
        Author.edit({_id: req.param.id})
    },


}