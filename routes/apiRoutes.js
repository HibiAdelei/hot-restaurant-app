var tableData = require("../appdata/tabledata");
var waitListData = require("../appdata/waitlistdata");



module.exports = function(app) {


    // get requests should return table data and waitlist data
    app.get("/api/tables", function(req, res) {
        res.json(tableData);
      });
    
      app.get("/api/waitlist", function(req, res) {
        res.json(waitListData);
      });

      app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './html/index.html'));
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