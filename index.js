const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 5000;

//mysql db connection
const con = mysql.createConnection({
  //insert into ticket(title, description) values("test1", "my test1");
  host: "localhost",
  user: "root",
  password: "",
  database: "daily_todo"
});

//json parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//working with post requests
app.post('/', (req, res) => {
  console.log("title ", req.body.title);
  console.log("description ", req.body.description);
  //insert into daily_todo.ticket table
  let sql = `insert into ticket(title, description) values("${req.body.title}", "${req.body.description}");`;
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("Inserted");
  });
})

//serve app
app.use(express.static(path.join(__dirname, 'frontend/')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'frontend/', 'index.html'));
});

//port listen
app.listen(port, () => {
  console.log(`App listening at port: ${port}`)
})