require("dotenv").config();
const mongoose = require("mongoose");
const Piso = require("../models/Piso");

mongoose.connect(process.env.DB,{ useNewUrlParser: true })
.then(() => {
  console.log("connect to mongoose");
})
.then(() => {
  return Piso.insertMany([
    {
        title: "Atico en venta en Castellana",
        description: "Exclusivo ático con orientación SUR y una enorme terraza de 51m junto a la Embajada de los Estados Unidos y la calle Serrano.Este espectacular ático cuenta con 212m construidos, medidos en plano, distribuidos en 161 metros de vivienda + 51 metros de terraza. Cuenta con amplio recibidor, 5 dormitorios y 3 baños (4 dormitorios dobles + 1 de servicio), salón – comedor con salida a terraza, cocina independiente con despensa y zona de servicio independizada. Además, cuenta con puerta de servicio.La luz que tiene la vivienda, verdaderamente, es espectacular. Una vez reformada la misma quedaría de revista. No existen muros de carga, tiene una planta muy cuadradita y es muy flexible para distribuir los espacios. Es interesante que algunos vecinos han incorporado parte de la terraza a la vivienda.La finca es moderna, cuenta con portero físico, dispone de 2 ascensores y 1 montacargas.Existen dos plazas de garaje opcionales y un trastero.En ARMONIA Real Estate somos especialistas en viviendas para reformar. Estudiamos con detalle cada inmueble para ofrecer posibles propuestas de reforma.En este caso adaptamos la vivienda a un proyecto de reforma de 3 dormitorios en suite, todos con vestidor y grandes armarios, y un aseo de cortesía. Se adjuntan planos del estado actual, la propuesta de reforma e infografías en 3D de la vivienda tras la reforma.Podemos adaptar la vivienda a sus necesidades. Llámenos y venga a visitarla.",
        gallery: [], 
        price: 1650,
        rooms: 5,
        surface: 212,
        terrace: 51,
        heating: "Central Gas Natural",
        bathrooms: 3,
        houseSize: 161,
        parking: "opcional",
        build: 1965,
        type: "en venta",
        location: {lat:232323,lng:4343434}
      }
    
  ])
})
.then(pisos => {
  console.log(pisos);
  mongoose.connection.close();
})