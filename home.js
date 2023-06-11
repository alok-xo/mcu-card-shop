var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var url = "mongodb://127.0.0.1:27017";

var app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //to convert incoming data into json

app.get("/character", (req, res) => {
  mongoClient.connect(url).then((clientObject) => {
    //this clientObject allows to commmunicate with the database
    var database = clientObject.db("marvel");
    database
      .collection("marveldata")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
      })
  })
});

app.get("/character/:id", (req, res) => {
  var character_id = parseInt(req.params.id);
  mongoClient.connect(url).then((clientObject) => {
    var database = clientObject.db("marvel");
    database
      .collection("marveldata")
      .find({ id: character_id })
      .toArray()
      .then(documents => {
        res.send(documents);
      })
  })
});



app.listen(5566);
console.log(`Server Started : http://127.0.0.1:5566`); 
