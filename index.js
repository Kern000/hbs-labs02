const express = require("express");
const hbs = require("hbs");     // send back content of an entire file to the user
const wax = require("wax-on");
require("dotenv").config();

const landingRoutes= require('./routes/landing');
const productRoutes = require('./routes/products');
// handlebar is templating language - engine to create template
// can use many different kind of templating engine

// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
  express.urlencoded({
    extended: false
  })
);

async function main() {
    // app.get('/', function(req,res){

    // res.render('home.hbs', {
    //     "name":"Tan Ah Kow",
    //     "today_date": new Date()
    // })                                  //key must be the name of placeholder in home.hbs.
    // })
    app.use('/', landingRoutes);
    app.use('/products', productRoutes)
}

main();

app.listen(3000, () => {
  console.log("Server has started");
});