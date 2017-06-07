var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

//Obtener todos los usuarios
exports.findAll = function(req, res) {
    Usuario.find({},function(err, usuarios) {
        if (err) res.send(500, err.message);
        res.status(200).jsonp(usuarios);
    });
};

//Crear un usuario
exports.addUser = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var usuario = new Usuario({
        nombre: req.body.nombre,
        password: req.body.password,
        email: req.body.email,
        activo: req.body.activo
    });

    usuario.save(function (err, usuario) {
        if (err) res.send(500, err.message);
        res.status(200).jsonp(usuario);
    });
};