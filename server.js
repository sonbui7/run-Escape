const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const db = require(path.join(__dirname, "./models"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require(path.join(__dirname, "./routes/apiRoutes.js"))(app);
require(path.join(__dirname, "./routes/htmlRoutes.js"))(app);

db.sequelize.sync({force:false}).then(function(){
    app.listen(PORT, function(){
        console.log(`Ears on ${PORT} good buddy`)
    });
});

