// user => store => order => pizza

let User = require('./user');
let express = require('express');
// let nunjucks = require('nunjucks');
let app = express();

// nunjucks.configure({
//     autoescape: true,
//     express: app
// })

app.use(express.static('./'));

app.get('/', function (req, res) {
    res.render('index');
});



app.get("*", function(req, res){
    res.send("Wrong Route Dude!!!")
})

app.listen(8080, function () {
    console.log('server is up')
})

function createUser (name, address) {
    let u = new User.User();

    u.id = name;
    u.address = address;

    console.log(u);
}

createUser('will', 'UT Arlington');

let crusts = [
    { text: 'Select Crust', value: 'none' },
    { text: 'Chicago Deep Dish', value: 'cdd' },
    { text: 'Neopolitan', value: 'neo' },
    { text: 'New York Style', value: 'nys' },
    { text: 'Sicilian', value: 'sic' },
    { text: 'Standard', value: 'sta' }
  ];
  
  let locations = [
    { text: 'Select Location', value: 'none' },
    { text: 'East Arlington', value: 'ea' },
    { text: 'West Arlington', value: 'we' },
    { text: 'North Arlington', value: 'no' },
    { text: 'South Arlington', value: 'so' }
  ];
  
  let sizes = [
    { text: 'Small', value: 'sm' },
    { text: 'Medium', value: 'md' },
    { text: 'Large', value: 'lg' },
    { text: 'Extra Large', value: 'xl' }
  ];