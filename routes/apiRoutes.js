const db = require("../models");

module.exports = function (app) {
    app.get('/api/monsters', function (req, res) {
        db.Monster.findAll({
        }).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    //login
    app.post("/api/users", function (req, res) {
        db.Player.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    });

    //update user data
    app.post("/api/users/:id", function (req, res) {
        db.Player.update(req.body, {
            where: {
                id: sessionStorage.getItem("token")
            }
        }).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        })
    })


    //get specific location and associated info
    app.get("/api/location", function (req, res) {
        db.Location.findOne({
            where: {
                locationname: req.body.userLocation
            },
            include: [{
                model: db.Mob
            }]
        }).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    });

    app.get("/api/item/:id", function (req, res) {
        db.Item.findOne({
            where: {
                itemname: req.body.itemName
            }
        }).then(function (item) {
            res.json(item);
        }).catch(function (err) {
            res.json(err);
        })
    });

    app.post("/api/users/create", function (req, res) {
        db.Player.create(req.body);
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        res.json(err);
    });

    /*
    app.put('/api/inventory', function (req, res) { 
            db.Product.update(
                { stock_quantity: Object.values(req.body) }, // set attributes' value //
                { where: { id: Object.keys(req.body) } } // where criteria ///
             ).then(function () { res.json() })
        })
    */
}