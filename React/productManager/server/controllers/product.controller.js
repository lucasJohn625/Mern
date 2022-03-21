const Product = require("../models/product.model.js"); 
const productRoutes = require("../routes/product.routes.js");



module.exports = {
    createProduct: (req, res) => {       
        Product.create(req.body) 
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
           
    },
    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },

    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id }) 
            .then((oneProduct)=>res.json(oneProduct))
            .catch((err) => console.log(err));
    },
    updateProduct: (req,res)=>{
        Product.findOneAndUpdate({_id: req.params.id}, 
            req.body, 
            { new: true, runValidators: true}

            
            )
            .then((updateProduct)=>res.json(updateProduct))
            .catch((err) => console.log(err));
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id }) 
            .then((deleteProduct)=>res.json(deleteProduct))
            .catch((err) => console.log(err));
    },
    


};
//delete, findOne,create are other methods for mongoose