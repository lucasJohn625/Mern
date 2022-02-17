const mongoose = require("mongoose");

const AuthorSchema = new mongoose.schema({
    authorName:{
        type:String,
        require:[true, "Must have a name entered!"],
        minLength:[3, "Author name must be at least 3 characters"]
    }

}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;