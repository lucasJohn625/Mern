const mongoose = require("mongoose");

const dbName = "movies";

mongoose.connect(`mongodb+srv://millerlucas625:Luke764228@cluster0.32hpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${dbName}database`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

