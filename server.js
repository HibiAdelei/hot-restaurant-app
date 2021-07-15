// require express
var express = require("express");
var app = express();
const path = require('path');

// initial port, listener at bottom
var PORT = process.env.PORT || 3000;

const reservation = 
[
  {
    "Name": "Owner",
    "Phone": 1111111111,
    "Email": "aaa@bbb.com",
    "Id": 1123
  },
]


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routers
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.post('/api/tables', (req, res) => {
    const newReservation = req.body;
    // For Checking
    console.log(newReservation);
    reservation.push(newReservation);
    res.json(newReservation);
});
// require html route 
app.listen(PORT, function() {
 console.log("Application listening on port " + PORT);
});