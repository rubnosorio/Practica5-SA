
# Servicio de entrega por el repartidor

  
## Clases en Servicio de Repartidor

  - Repartidor

## Metodos utilizados en este servicio
  - api.add_resource
  - app.run

## Variables utilizadas en este servicio

 - repartidores_no

## Recepcion del pedido a entregar enviado por el restaurante
En la clase repatidor por medio de un endpoint de tipo post para la recepcion de los pedidos a entregar 
```sh

''' Repatidores con su metodo get y post '''
class Repartidores(Resource):
    def get(self):
        global repartidores_no
        return {'Repartidores': repartidores_no}

    def post(self):
        global repartidores_no
        ''' analisis de la peticion del restaurante'''
        print('La orden a entregar es: '+json.dumps(request.json['orden']))
        estado = 'Orden Recibida,Procediendo a entregar por el repartidor '+str(repartidores_no)
        '''respuesta de parte del repartidor'''
        repartidores_no=repartidores_no+1
        return {'status':estado }  

```

## Poner en escucha el servicio

```sh 

'''run server en el puerto 5000'''
if __name__ == '__main__':
    app.run(port='5000')


```


## RUN APP 

Para correr esta aplicación en una consola(cmd) o terminal en caso de usar linux:
```sh 
python Server.py
```
