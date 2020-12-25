// node modules for express and form processsing
var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");

// body parser to read form data
app.use(bodyParser.urlencoded({extended: true}));

// view engine is express (.ejs files)
app.set("view engine", "ejs");

// connect to stylessheets
app.use(express.static(__dirname));

// Method override (to fix the stupidity of forms)
app.use(methodOverride("_method"));

// setup page routing
var indexRoutes = require("./routes");

// setup routes specified with express
app.use("/", indexRoutes);

// tell express to listen on port 4000
var port = 4000;

app.listen(port, () => {
    console.log('MCWebsite listening on port 4000.');
})