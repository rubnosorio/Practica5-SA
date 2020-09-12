'''imports requerido por el api'''
from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
import json

''' declaracion del rest api'''
app = Flask(__name__)
api = Api(app)

'''numero de repartidor'''
repartidores_no = 1

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

'''agrego la clase como posible ruta '''
api.add_resource(Repartidores, '/')

'''run server en el puerto 5000'''
if __name__ == '__main__':
    app.run(port='5000')
