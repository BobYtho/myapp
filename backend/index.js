const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const port = 3001
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors())


app.get('/', (req, res) => {
  res.send({text: 'Adios mundo cruel',text2: ' Nos vemos pronto'})
})

/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/



const connection = mysql.createConnection({
host: "localhost",
user: "root",
password: ""
});

connection.connect(function(err) {
  if (err) {throw err;}
  else{
  console.log("Connected!");
  app.listen(port,function(){
  console.log("servidor del api rest escuchando en  HTTP://localhost:"+port)
  
});
}
});

function getAll(req, res) {
  // Create connection
    const conecction = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
    });
  conecction.connect(function(err) {
    // Connection Failed
    if (err) res.status(200).send({"conecction": "Database connection  error"});
    // Get todo_list data
    conecction.query("select * from todo_list", function (err, result) {
    // String to JSON
    const json = JSON.stringify(result);
    // Send JSON
    console.log(json)
    res.send(json);
    });
    // End connection
    conecction.end();
  });
  }


  
  // Function to post
function addData(req, res) {
  console.log("Add DATA REQ: ",req)
  // Params
  const body = req.body;
  // See params TODO Temporal
  console.log("Add DATA body: ",body);
  let dataToSave = JSON.stringify(body)
  // Create connection
  const conecction = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud"
  });
  conecction.connect(function(err) {
  // Connection Failed
  if (err) res.status(200).send({"conecction": "Database connection  error"});
  // Post user
  conecction.query("INSERT todo_list (data) VALUES  (?);",[dataToSave], function (err, result) {
  // if error
  if(err){res.status(200).send(err);}
  // if not
  else{res.status(200).send(result);}
  });
  // End connection
  conecction.end();
  });
  }



  // Rute
  app.get('/todo_list', getAll)
  app.post('/todo_list', addData)