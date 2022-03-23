const Product = require ("../models/product.model.js" );

module.exports = {
    createProduct: (req ,res) =>{
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },

    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) =>res.json(oneProduct))
            .catch((err) => console.log(err));
    },
    getAllProducts: (req, res) => {
        Product.find({}) //remember, these methods (find, findOne, create, etc) are all specific mongoose methods you can see a complete list in their docs
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },

};

