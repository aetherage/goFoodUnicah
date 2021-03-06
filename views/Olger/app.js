var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

function returnApp(db){
    var app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');

    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(require('less-middleware')(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'public')));

    //app.use('/', routes);
    app.get("/", function(req,res){
        res.render("login",{});
    }) //mobile
    app.get("/p2", function(req,res){
        res.render("pagina2",{});
    })
    app.get("/mob", function(req,res){
        res.render("mobile",{});
    })
    app.get("/ho", function(req,res){
        res.render("home",{});
    })
    app.get("/mapa", function(req,res){
        res.render("mapaUsuario",{});
    })
    app.get("/fav", function(req,res){
        res.render("favoritos",{});
    })
    app.get("/dl", function(req,res){
        res.render("detalleLocal",{});
    })

    app.use('/users', users);

    //para llamar a los modulos se usa la funcion require
    // la uri del módulo y debe especificar
    // en el módulo la exportación con
    // module.exports = <<funcion>>
    var api = require('./routes/api.js')(db);
    app.use('/api/v0', api);
    // http://localhost:3000/api/v0/obtenerLibros

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });

    return app;
}// return app

module.exports = returnApp;
