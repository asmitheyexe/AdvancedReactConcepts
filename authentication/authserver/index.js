// entry of Auth server, inits
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// setup connect to MONGOOOOO db
    // DB Setup
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true , useUnifiedTopology:true}); 
const connection = mongoose.connection;
    
connection.on("connected", function() {
    console.log("connected to db");
});
// Express is a simple minimalistic server for node
// Morgan is a logging framework
// body-parser
//app setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//server sertup Node.js stuff sdwsfd
const port = process.env.PORT || 3090;
const server = http.createServer(app); // says if we get a http request forward it to our 'app'
server.listen(port);
console.log("server listening on : ", port);


