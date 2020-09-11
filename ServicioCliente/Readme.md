# Servicio de Solicitud de comida
    
## Funciones en Servicio de Solicitud de Comida

  - agregar_plato
  - enviar_pedido 

## Variables utilizadas en este servicio

 - no_indice;
 - orden_cliente

## Listar los diferentes platos del menu para hacer el pedido

Por medio de una funcion en javascript en la cual obtenemos el valor del plato y la cantidad de unidades se agrega a la lista de platos para pedir como una sola orden.
```sh
function agregarplato() {

        // OBTENIENDO EL PLATO
        let comida = document.getElementById("ddlViewBy");
        let plato_seleccionado = comida.options[comida.selectedIndex].text;
        // OBTENIENDO LA CANTIDAD
        let cantidad = document.getElementById("cantidad").value;
        // creando objeto
        let objeto_nuevo = { "No.": no_indice, "plato": plato_seleccionado, "cantidad": cantidad };
        no_indice++;

        // agregando a tabla
        orden_cliente.unshift(objeto_nuevo);
        // append a la tabla para visualizacion
        $('#orden_cliente_tabla').append('<tr><td>' + objeto_nuevo['No.'] + '</td><td>' + objeto_nuevo['plato'] + '</td><td>' + objeto_nuevo['cantidad'] + '</td></tr>');

    }
```
## Envio de la orden completa al restaurante
### POST
Por medio de una funcion asincrona se hace la peticion al servicio de restaurante para enviarsele el pedido completo.
```sh
   async function enviarpedido() {
        
        // CREACION DE LA PETICION POR MEDIO DE POST AL SERVICIO DEL RESTAURANTE
        let body_request= JSON.stringify(orden_cliente);
        console.log(body_request);
        await fetch("http://localhost:3000", {//ip del servicio del restaurante
            method: 'POST',// envio por metodo post
            headers: {// headers que indican que enviare un json en el body
                'Content-Type': 'application/json',
                'Accept': 'text/json'
            },
            body: body_request//cuerpo de la peticion
        })
        .then(function (response) {
            // SE PROCESA LA RESPUESTA
            no_indice = 1;
            orden_cliente = [];
            $("#orden_cliente_tabla tr").remove();
            console.log('response =', response);//imprimo la respuesta en consola
            return response;
        })
        .then(function (data) {
            // AQUI ESTA LA RESPUESTA DEL SERVICIO DEL RESTAURANTE
            if(data.status==200)
            {
                alert(" PEDIDO EN RESTAURANTE RECIBIDO !!!!");
            }else
            {
                alert("VUELVA A INTENTAR!");
            }
            
        })
        .catch(function (err) {
            //POSIBLES ERRORES
            console.error(err);
        });
    }
```

# RUN APP 

Para correr esta aplicacion solo se tiene que abrir el archivo Index.html en el navegador de preferencia y ya se podra interactuar con el servicio
