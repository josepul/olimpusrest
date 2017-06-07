var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    login: { type: String } ,
    password: { type: String },
    email : {type: String },
    fecha_creacion: { type : Date, default: Date.now },
    activo: { type: Boolean }
});

module.exports = mongoose.model("Usuario", usuarioSchema);