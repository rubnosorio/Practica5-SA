// import y creacion del objeto de express para la rest api
var express = require('express');
var app = express();

// habilito el cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');// permito todo tipo de peticiones
    next();//paso a ejecutar lo siguiente en la declaracion de los endpoints
});
app.use(express.json());
app.get('/', function (req, res) {
    res.send('ok');
});

/**
 * ENDPOINT DE RECEPCION DE ORDENES DEL CLIENTE
 */
app.post('/', function (req, res) {
    console.log("RECIBIDO!");
    console.log("El pedido es : ");
    console.log(req.body);
    var peticion = require('./clases/peticion.js');//import de la clase peticion
    let peticion_entrega = new peticion();//creacion de objeto
    /**
     * ASUMO QUE EL RESTAURANTE YA PREPARO LA COMIDA Y POR ESO PASO INMEDITAMENTE A NOTIFICAR AL REPARTIDOR
     */
    peticion_entrega.peticion_post(req.body);//envio de parametro el body de la peticion que le llego al restaurante
    res.send('{\"status\":\"pedido recibido\""}');//respuesta
});
// RUN SERVE EN EL PUERTO 3000
app.listen(3000, function () {
    console.log('App escuchando en el puerto 3000!');
});