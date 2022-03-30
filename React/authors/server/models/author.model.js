const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    
    
    name: { type: String,

        required: [true, "Must have a name entered!"],

        minLength: [3, "Author name must be at least 3 characters long!"]
    },

        reviews: [
            {
                content: String,
                    required: [true, "Must have review"],


                rating: Number,
                    required: ["Please leave a rating"],
        
                yourName: String,
                    required: ["Please leave your name"]
            }
        ]
    
}, { timestamps: true });


const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;