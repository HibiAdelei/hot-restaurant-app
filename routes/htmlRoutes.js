

// require path

var path = require("path");

module.exports = function (app) {

    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../html/tables.html"));
      });

      app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "../html/reserve.html"));
      });
    
      // If no matching route is found default to home
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../html/home.html"));
      });

};