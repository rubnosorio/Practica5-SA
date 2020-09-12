/**
 * CLASE PETICION ESB
 *  SIRVE PARA HACER LAS PETICIONES POST ENVIAR LAS PETICIONES A LOS SERVICIO DE RESTAURANTE Y REPARTIDOR
 */
// export hacia el index.js
module.exports = class peticion_ESB {
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
            this.respuesta = body;
            console.log(this.respuesta);// extraigo la respuesta
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
        const body_request = objeto_a_enviar;// creo un object para el body de la peticion
        const options = {
            url: 'http://127.0.0.1:5000/',//ip del servicio de repartidores
            json: true,// si enviare json
            body: body_request // cuerpo de la peticion en json
        };

        request.post(options, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            this.respuesta = body;
            console.log(this.respuesta);// extraigo la respuesta
        });

    }


}