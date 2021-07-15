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

      app.get('/reserve', (req, res) => {
        res.sendFile(path.join(__dirname, './html/reserve.html'));
      });

      app.post("/api/tables", function(req, res) {
       
        if (tableData.length < 5) {
          tableData.push(req.body);
          res.json(true);
        }
        else {
          waitListData.push(req.body);
          res.json(false);
        }
      });


};