const express = require("express")
const app = express();
const port = 8000;
const cors = require("cors")

app.use(express.json()); //allows us to use json
app.use( express.urlencoded({ extended: true }));


//un-commentout line 13 once you've set up your __.config.js file
//un-commentout line 14 once you've created a __.routes.js file
//require our other modularized files (routes and config)
require("./server/config/jokes.config")
require("./server/routes/joke.routes")(app)




//make it so that our server can listen for requests on port 8000
app.listen(port, ()=>console.log(`Listening on port number ${port} `) );