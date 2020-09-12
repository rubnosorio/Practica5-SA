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
app.post('/Pedido_Restaurante', function (req, res) {
    console.log("RECIBIDO EN EL ESB!");
    console.log("PAQUETE ENTRANTE DE CLIENTE");
    console.log("PAQUETE SE DIRIGE A EL RESTAURANTE");
    console.log("El pedido es : ");
    console.log(req.body);
    var peticion_ESB = require('./Conexion.js');//import de la clase peticion
    let peticion_ESB_Cliente = new peticion_ESB();//creacion de objeto
    /**
     * ASUMO QUE EL RESTAURANTE YA PREPARO LA COMIDA Y POR ESO PASO INMEDITAMENTE A NOTIFICAR AL REPARTIDOR
     */
    peticion_ESB_Cliente.peticion_post(req.body);//envio de parametro el body de la peticion que le llego al restaurante
    res.send('{\"status\":\"Pedido Recibido\""}');//respuesta
});
/**
 * ENDPOINT DE RECEPCION DE ORDENES HACIA EL REPARTIDOR
 */
app.post('/Pedido_Repartidor', function (req, res) {
    console.log("RECIBIDO EN EL ESB!");
    console.log("PAQUETE ENTRANTE DE RESTAURANTE");
    console.log("PAQUETE SE DIRIGE A EL REPARTIDOR");
    console.log("El pedido es : ");
    console.log(req.body);
    var peticion_ESB = require('./Conexion.js');//import de la clase peticion
    let peticion_ESB_Restaurante = new peticion_ESB();//creacion de objeto
    /**
     * ASUMO QUE EL RESTAURANTE YA PREPARO LA COMIDA Y POR ESO PASO INMEDITAMENTE A NOTIFICAR AL REPARTIDOR
     */
    peticion_ESB_Restaurante.peticion_post_repartidor(req.body);//envio de parametro el body de la peticion que le llego al restaurante
    res.send('{\"status\":\"Repartidor Enviado\""}');//respuesta
});

// RUN SERVE EN EL PUERTO 3001
app.listen(3001, function () {
    console.log('ESB escuchando en el puerto 3001!');
});