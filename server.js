var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//Conexión con BBDD
mongoose.connect('mongodb://localhost/clients', function(err, res) {
    if(err) throw err;
    console.log('Conexión con BBDD completada');
})

//Importar modelos y controladores
var usuario = require('./model/usuarios/usuarios')(app, mongoose);
var UsuariosCtrl = require('./controller/usuarios/usuarios');

//Configuración de Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var api = express.Router();

api.get('/', function(req, res){
    res.send({message: 'Prueba ok!'});
});

api.route('/usuarios')
    .get(UsuariosCtrl.findAll)
    .post(UsuariosCtrl.addUser);

app.use('/api', api);

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});