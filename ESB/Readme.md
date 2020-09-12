
# ESB(Orquestador)


## Metodos utilizados en este servicio por parte del API
  - app.use
  - app.get
  - app.post
  - app.listen

## Variables utilizadas en este servicio

 - respuesta
 - objecto_a_enviar
 - peticion_ESB_Cliente
 - peticion_ESB_Restaurante

## Recepcion de pedido del cliente
Por medio del servidor de express con un endpoint de tipo post 
```sh
    app.post('/', function (req, res) {
       console.log("RECIBIDO EN EL ESB!");
        console.log("PAQUETE ENTRANTE DE CLIENTE");
        console.log("PAQUETE SE DIRIGE A EL RESTAURANTE");
        console.log("El pedido es : ");
        console.log(req.body);
        var peticion_ESB = require('./Conexion.js');//import de la clase peticion Servidores
        let peticion_ESB_Cliente = new peticion_ESB();//creacion de objeto
        /**
        * ASUMO QUE EL RESTAURANTE YA PREPARO LA COMIDA Y POR ESO PASO INMEDITAMENTE A NOTIFICAR AL REPARTIDOR
        */
        peticion_ESB_Cliente.peticion_post(req.body);//envio de parametro el body de la peticion que le llego al restaurante
        res.send('{\"status\":\"Pedido Recibido\""}');//respuesta
    });
```
## Recepcion de la orden del restaurante
Por medio del servidor de express con un endpoint de tipo post 
```sh
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
```

## Clase manejadora de peticiones 
```sh

    class peticion_ESB {
        /**
        *  constructor
        */
        constructor() {
            this.respuesta = '';

        }
        /**
        * 
        * @param {*} objeto_a_enviar 
        */
        peticion_post(objeto_a_enviar) {
            /**
            * se declara un elementro de tipo request 
            */
            const request = require('request');
            const body_request = objeto_a_enviar;// creo un object para el body de la peticion
            const options = {
                url: 'http://127.0.0.1:3000',//ip del servicio de restaurante
                json: true,// si enviare json
                body: body_request // cuerpo de la peticion en json
            };

            request.post(options, (err, res, body) => {
                if (err) {
                    return console.log(err);
                }
                this.setear_respuesta(body);// extraigo la respuesta
            });
            
        }
        /**
        * 
        */
        peticion_post_repartidor(objeto_a_enviar) {
            /**
            * se declara un elementro de tipo request 
            */
            const request = require('request');
            const body_request =objeto_a_enviar;// creo un object para el body de la peticion
            const options = {
                url: 'http://127.0.0.1:5000/',//ip del servicio de repartidores
                json: true,// si enviare json
                body: body_request // cuerpo de la peticion en json
            };

            request.post(options, (err, res, body) => {
                if (err) {
                    return console.log(err);
                }
                this.respuesta = respuesta_recibida;
                console.log(this.respuesta);// extraigo la respuesta
            });
            
        }
    }

```
## Colocar en escucha el servicio

```sh 

// RUN SERVE EN EL PUERTO 3001
app.listen(3001, function () {
    console.log('App escuchando en el puerto 3001!');
});
```
## RUN APP

Para correr esta aplicación en una consola(cmd) o terminal en caso de usar linux:


```sh

nodemon index.js

```
