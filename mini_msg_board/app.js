const express = require('express'); 

const path = require('path'); //import path module to work with file and directory paths

const app = express(); //create a server object named app

//configure views folder, this tells express where to find the views folder
app.set("views", path.join(__dirname, "views"));

//configure view engine, this tells express what view engine to use
app.set("view engine", "ejs");

//This is a middleware that allows us to parse the body of a POST request and access the data in req.body
app.use(express.urlencoded({ extended: true }));

//indexRouter eport
const indexRouter = require("./routes/indexRouter");

//Whenever a request starts with /, send it to indexRouter for handling.
app.use("/", indexRouter);



//This is where our server will be initiated at port 3000
app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
