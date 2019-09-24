var express    = require('express'),
    app        = express(),
    path       = require('path'),
    mongoose   = require('./config/mongoose'),
    port       = 8000;

app.use(express.static(__dirname + '/public/dist/public'));
app.set(path.join('views', __dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
require('./config/routes')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})