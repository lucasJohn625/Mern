const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    
    
    AuthorName: { type: String },
    
}, { timestamps: true });


module.exports = mongoose.model('Author', AuthorSchema);