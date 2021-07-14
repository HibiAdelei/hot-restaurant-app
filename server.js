// require express
var express = require("express");
var app = express();

// initial port, listener at bottom
var PORT = process.env.PORT || 3000;

// routers 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require apiroute
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './html/home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, './html/reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, './html/tables.html')));

app.get('/api/tables', (req, res) => {
    res.sendFile(path.join(__dirname, './appdata/table.json'))
});
//require html route 
app.listen(PORT, function() {
 console.log("Application listening on port " + PORT);
});