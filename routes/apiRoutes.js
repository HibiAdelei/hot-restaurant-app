const path = require('path');

var tableData = require("../appdata/table");
var waitListData = require("../appdata/waitlistdata");



module.exports = function(app) {


    // get requests should return table data and waitlist data
    app.get("/api/tables", function(req, res) {
        res.json(tableData);
      });
    
      app.get("/api/waitlist", function(req, res) {
        res.json(waitListData);
      });

      app.post("/api/tables", function(req, res) {
        
        if (tableData.length < 5) {

          const newCustomer = req.body;
          tableData.push(newCustomer);
          res.send('Table reserved.');
        }
        else {
          const newCustomer = req.body;
          waitListData.push(newCustomer);
          res.send('Added to waitlist.');
        }
      });


};