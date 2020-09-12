# Practica5-SA
Practica #5 laboratorio Software Avanzado - DevOps

[![Netlify Status](https://api.netlify.com/api/v1/badges/b678cdf9-7485-4647-bf07-0a0d4faeaf82/deploy-status)](https://app.netlify.com/sites/youthful-leakey-5d4133/deploys)

Lenguajes Utilizados:
  - Javascript
  - Ajax
  - python(flask)
  - nodejs(express V.4.16)


# Los Servicios son los siguientes
- Solicitud de comida por parte del cliente(Javascript y Ajax).
- Recepción de órdenes en el restaurante(NodeJs).
- Servicio de entrega por el repartidor(Python con Flask).
- Orquestador de los Servicios

# Puertos en uso
- ESB(Puerto 3001)
- Restaurante(Puerto 3000)
- Repartidor(Puerto 5000)
- Cliente/Cosumidor no cuenta con uno ya que a este momento no lo necesita

# Constructor de Artefactos

- Gulp(NodeJS)

```sh 
gulp Nombretarea
```

- distutils(Python 3)

```sh 
python setup.py sdist
```

# Configuracion de netlify para el despligue de los artefactos
```sh 
Repository: github.com/rubnosorio/Practica5-SA
Base directory: /ESB
Build command: gulp defaultempaquetar
Publish directory: /ESB/dist
Deploy log visibility: Logs are public
```


