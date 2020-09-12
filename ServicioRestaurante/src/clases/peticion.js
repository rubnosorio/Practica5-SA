/**
 * CLASE PETICION 
 *  SIRVE PARA HACER LAS PETICIONES POST HACIA EL SERVICIO DE ENTREGA POR REPARTIDOR
 */
// export hacia el index.js
module.exports = class peticion {
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
        const body_request = { orden: objeto_a_enviar };// creo un object para el body de la peticion
        console.log(body_request);// imprimo solo para verificacion
        const options = {
            url: 'http://localhost:3001/Pedido_Repartidor',//ip del ESB
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
     * @param {*} respuesta_recibida 
     */
    setear_respuesta(respuesta_recibida) {
        this.respuesta = respuesta_recibida;
        console.log(this.respuesta);
    }

}
