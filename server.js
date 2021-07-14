// require express
var express = require("express");
var app = express();

// initial port, listener at bottom
var PORT = process.env.PORT || 3000;

// routers 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require apiroute
//require html route 
app.listen(PORT, function() {
 console.log("Application listening on port " + PORT);
});