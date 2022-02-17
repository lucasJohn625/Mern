const ProductController = require("../controllers/product.controller");  //We import the object exported from the controller


//We are exporting a function that takes in a parameter of app (will get its value/argument passed, "express()", in server.js)
module.exports = (app) => {
    app.get("/api/products", ProductController.getAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.getOneProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
    
};

//3000 front end 
//8000 backend