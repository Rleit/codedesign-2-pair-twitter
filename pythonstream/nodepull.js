var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://twit:12345@62.210.151.232:27017/twitter";

var http = require('http');

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("twitter");
  var query = { retweet_count: 7 };
  dbo.collection("tweets").find(query).toArray(function(err, result) {
    if (err) throw err;
    
    httpServer = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(result);
    });
    httpServer.listen(4949, "62.210.151.232");
    console.log('Server running at http://62.210.151.232:4949/');

    console.log(result);

    db.close();
  });


});


curl -d '{ "favorite_count": 27 }' -H "Content-Type: application/json" http://localhost:3500/test/example