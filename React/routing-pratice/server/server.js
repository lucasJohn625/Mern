
const express = require("express");
const app = express();
const faker = require ("faker");


app.use(express.json()); //parse jsob objects coming in from posts and put request
app.use(express.urlencoded({extended: true})) //parse string and arrays coming in with json object


app.get("/api/welcome", (request, response)=>{
    console.log("This is the welcome API route");
    response.json({message: "Welcome to our API"})
})


app.post("/api/welcome", (request, response)=>{
    console.log("bing bang post request")
    response.json({
        message:["bing","bang","boom"],
        ourRequestBody: request.body
    })
    console.log(request.body);
})
/////faker!
app.get("/api/faker", (request, response)=>{
    const name = faker.name.firstName();
    const email = faker.internet.email();

    response.json({
        firstName: name,
        userEmail: email
    })
})




 app.listen(8000, ()=>console.log("You have succesfully connected to port 8000"));