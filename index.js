const express = require('express');
var mysql = require('mysql');

//db connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "daily_todo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//node routing
const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // app.use(express.static(path.join(__dirname, 'frontend')));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
  app.get('*', function(req, res) {
    res.send("Hello");
  });
}

//port 5000 listening
app.listen(port, () => console.log(`Listening on port ${port}`));
