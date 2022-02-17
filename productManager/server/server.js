const express = require("express"); //express is a powerful framework for our node server.
const cors = require("cors");
const app = express(); //the express method allows us to create an express application

app.use(express.json()); //middleware that allows us to read JSON objects sent in the client's request
app.use(express.urlencoded({ extended: true })); //middleware that allows us to read JSON objects with strings and arrays in the client's request

app.use(
    cors({
        //cors is going to allow different ports to send requests to our API
        origin: "http://localhost:3000",
    }),
);


require("./config/mongoose.config");

require("./routes/product.routes")(app);


app.listen(8000, () => console.log("Listening on Port 8000"));