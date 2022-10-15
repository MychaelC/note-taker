// Dependencies
const express = require('express');
//Express config. Create "express" server

const app = express ();

//set initial port
const PORT = process.env.PORT || 2001;

//Express app to handle data parsing aka middleware
app.use(express.urlencoded({ extended: true })); // url encoded body form submission
app.use(express.json()); //json submission
app.use(express.static(__dirname + '/public')); 

//Router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Event listener
app.listen(PORT, function() {
    console.log('App listening on PORT: ${PORT}');
});