const db = require("../models");
const path = require("path")

module.exports = function(app) {

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, "../public/index.html"));
  });



  // vvvvvvvv these are served static vvvvvvvvv //
  
  // app.get('/js/app', function(request, response){
  //   response.sendFile(path.join(__dirname, "../public/js/app.js"));
  // });
  
  // app.get('/css/style', function(request, response){
  //   response.sendFile(path.join(__dirname, "../public/css/style.css"));
  // });
}