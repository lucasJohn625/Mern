const ProductController = require("../controllers/product.controller"); //We import the object exported from the controller

module.exports = (app)=>{
    app.get("/api/products", ProductController.getAllProducts);
    
    
    app.post("/api/products", ProductController.createProduct);
    
    app.get("/api/products/:id", ProductController.getOneProduct);
  
}
 