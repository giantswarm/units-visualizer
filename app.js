const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan'); // Request Logging to STDOUT
const expressWs = require('express-ws');

const PORT = 8000;
var totalUnits = 0;

var app = express();
var messageCallback = function() {}; // No-op until someone connects to the websocket

app.use(morgan('combined'));
app.use(bodyParser.json());
expressWs(app);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send("Hello World!");
});

// Websocket endpoint that sends 'Hello'
app.ws('/stream', function(ws, req) {
  console.log("A browser connected")
  ws.send(totalUnits.toString());

  messageCallback = function(command){
    if (command.setTotal) {
      totalUnits = parseInt(command.setTotal);
    }

    if (command.increment) {
      totalUnits += parseInt(command.increment);
    }

    ws.send(totalUnits.toString(), function(error) {});
  }
});

app.post('/message', function (req, res) {
  res.sendStatus(200);
  messageCallback(req.body);
});

app.listen(8000, function () {
  console.log('Unit visualizer is listening on port: ' + PORT);
});