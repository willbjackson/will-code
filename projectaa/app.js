var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var crusts = [
    { text: 'Select Crust' },
    { text: 'Chicago Deep Dish' },
    { text: 'Neopolitan' },
    { text: 'New York Style' },
    { text: 'Sicilian' },
    { text: 'Standard' }
];

app.get("/", function (_req, res) {
    // res.send("welcome")
    res.render("home");
});


app.post("/addCrust", function(req, res) {
    var newCrust = req.body.newCrust;
    crusts.push(newCrust);
    res.redirect("/crusts");
})

app.get("/crusts", function (_req, res) {

    res.render("crusts", { crusts: crusts });
});

app.get("/locations", function (_req, res) {
    let locations = [
        { text: 'Select Location', value: 'none' },
        { text: 'East Arlington', value: 'ea' },
        { text: 'West Arlington', value: 'we' },
        { text: 'North Arlington', value: 'no' },
        { text: 'South Arlington', value: 'so' }
      ];

    res.render("crusts", { locations: locations });
    
});


app.listen(3001, function () {
    console.log("server up")
})