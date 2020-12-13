const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 5000;

var escape = require('escape-html');
var cookieParser = require('cookie-parser');
var serialisieren = require('node-serialize');
app.use(cookieParser())

//mysql db connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "daily_todo",
  table: "ticket"
});

//json parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//working with post requests
app.post('/insert', (req) => {
  console.log("title ", req.body.title);
  console.log("description ", req.body.description);
  //insert into daily_todo.ticket table
  let sql = `insert into ticket(title, description) values("${req.body.title}", "${req.body.description}");`;
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("Inserted");
  });
})

//serializer
app.get('/serializer', function(req, res) {
  if (req.cookies.profile) {
    var str = new Buffer(req.cookies.profile, 'base64').toString();
    var objekt = serialisieren.unserialize(str);
    if (objekt.username) {
      res.send("Hallo " + escape(objekt.username));
    }
  } else {
      res.cookie('profile', "eyJ1c2VybmFtZSI6IkFkaXR5YSIsImNvdW50cnkiOiJpbmRpYSIsImNpdHkiOiJEZWxoaSJ9", {
        maxAge: 900000,
        httpOnly: true
      });
  }
  res.send("Hello Serializer");
 });

//serve app
app.use(express.static(path.join(__dirname, 'frontend/')));
app.get('/', function(res) {
  //serve frontend/index.html
  res.sendFile(path.join(__dirname, 'frontend/', 'index.html'));
});

app.get('/loadTickets', function(req, res) {
  //get all ToDos
  con.query(`select * from ticket;`, function(err, result){
    if (err) throw err;
    console.log(result);
    console.log("Send");
    //send json with db info to client
    res.json(JSON.stringify(result));
  });

});

//port listen
app.listen(port, () => {
  console.log(`App listening at port: ${port}`)
})