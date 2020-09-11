
# Servicio de Recepción de órdenes en el restaurante
  
## Clases en Servicio de Restaurante

  - Peticion

## Metodos utilizados en este servicio
  - app.use
  - app.get
  - app.post
  - app.listen

## Variables utilizadas en este servicio

 - respuesta
 - objecto_a_enviar
 - peticion_entrega

## Recepcion de pedido del cliente
Por medio del servidor de express con un endpoint de tipo post 
```sh
  app.post('/', function (req, res) {
    console.log("RECIBIDO!");
    console.log("El pedido es : ");
    console.log(req.body);
    var peticion = require('./clases/peticion.js');//import de la clase peticion
    let peticion_entrega = new  peticion();//creacion de objeto
    /**
     * ASUMO QUE EL RESTAURANTE YA PREPARO LA COMIDA Y POR ESO PASO INMEDITAMENTE A NOTIFICAR AL REPARTIDOR
     */
    peticion_entrega.peticion_post(req.body);//envio de parametro el body de la peticion que le llego al restaurante
    res.send('{\"status\":\"repartidor enviado\""}');//respuesta
});
```
## Clase manejadora de peticiones al Repartidor
```sh


class peticion
{
    /**
     *  constructor
     */
    constructor()
    {
        this.respuesta='';

    }
    /**
     * 
     * @param {*} objeto_a_enviar 
     */
    peticion_post(objeto_a_enviar)
    {
        /**
         * se declara un elementro de tipo request 
         */
        const request = require('request');
        const body_request = {orden:objeto_a_enviar};// creo un object para el body de la peticion
        console.log(body_request);// imprimo solo para verificacion
        const options = {
            url: 'http://127.0.0.1:5000',//ip del servicio de repartidores
            json: true,// si enviare json
            body: body_request // cuerpo de la peticion en json
        };
    
        request.post(options, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            this.setear_respuesta(body);// extraigo la respuesta
        });
        return this.respuesta;
    }
    /**
     * 
     * @param {*} respuesta_recibida 
     */
    setear_respuesta(respuesta_recibida)
    {
        this.respuesta=respuesta_recibida;
        console.log(this.respuesta);
    }

}
```
## Poner en escucha el servicio

```sh 

// RUN SERVE EN EL PUERTO 3000
app.listen(3000, function () {
    console.log('App escuchando en el puerto 3000!');
});
```
## RUN APP

Para correr esta aplicación en una consola(cmd) o terminal en caso de usar linux:


```sh

nodemon index.js

```
