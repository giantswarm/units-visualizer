const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan'); // Request Logging to STDOUT
const expressWs = require('express-ws');

const PORT = 8000

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
expressWs(app);

app.listen(8000, function () {
  console.log('Unit visualizer is listening on port: ' + PORT);
});