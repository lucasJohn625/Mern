const mongoose = require("mongoose");
const dbName = "products";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //newest methods
})
.then(()=>console.log(`Connected to ${dbName} database!`))
.catch((err)=>console.log(err));