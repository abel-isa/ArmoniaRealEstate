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
        gallery: ["https://res.cloudinary.com/dfllpjook/image/upload/v1554401314/25.jpg", "https://res.cloudinary.com/dfllpjook/image/upload/v1554401313/06.jpg",
         "https://res.cloudinary.com/dfllpjook/image/upload/v1554401314/10.jpg", "https://res.cloudinary.com/dfllpjook/image/upload/v1554401314/18.jpg"], 
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
      },
      {
        title: "Piso en venta en Arapiles",
        description: "Maravilloso piso a estrenar de diseño junto a la Glorieta de Quevedo.Piso a estrenar de 121 m2 construidos, situado en una 3 planta exterior, con 3 dormitorios y 2 baños completos, el principal en suite.La vivienda destaca por la luminosidad que tiene, tanto en la parte exterior como en la interior (da a un amplio patio de manzanas), y por la amplitud de los espacios de la misma. Con una cocina muy espaciosa, totalmente amueblada, semi-integrada al salón-comedor (también se puede independizar). Los dormitorios, todos con armarios empotrados, son muy amplios y tienen muy buena luz.La finca es moderna, con portero físico y ascensor. El portal esta en muy buen estado de conservación.La localización es estupenda, pues estas a 1 minuto andando de la Glorieta de Quevedo y la calle Fuencarral, con muy buenas comunicaciones.",
        gallery: ["https://res.cloudinary.com/dfllpjook/image/upload/v1554404394/IMG_0029_Snapseed.jpg", "https://res.cloudinary.com/dfllpjook/image/upload/v1554404393/IMG_0049_Snapseed.jpg",
         "https://res.cloudinary.com/dfllpjook/image/upload/v1554404386/IMG_0053_Snapseed.jpg",], 
        price: 745,
        rooms: 3,
        surface: 121,
        terrace: 51,
        heating: "Central Gas Natural",
        bathrooms: 2,
        houseSize: 161,
        parking: "opcional",
        build: 1965,
        type: "en venta",
        location: {lat:232323,lng:4343434}
      },
      {
        title: "Piso en venta en Ibiza",
        description:"Piso en venta en Ibiza. Vivir a escasos metros del Retiro, en un piso alto con orientación sur, es posible.La vivienda dispone de 154 m2 catastrales, 117m de vivienda y 35 de elementos comunes, en los que están incluidos el garaje y el trastero. Se trata de una 6ª planta exterior con orientación SUR por lo que la casa queda inundada de una luz radiante. Además, el edificio de en frente solo tiene 4 alturas, por lo que las vistas son despejadas y muy agradables. Actualmente esta distribuida en 4 dormitorios y 2 baños. La vivienda no tiene muros de cargas por lo que es flexible a la hora de redistribuir los espacios. El edificio esta en perfectas condiciones, pues se ha renovado el portal y el garaje recientemente. El garaje es de acceso directo así como el trastero, el cual tiene unos 12 metros cuadrados. La ubicación es privilegiada, a escasos minutos andando del Parque del Buen Retiro. Dispone de extraordinarias comunicaciones por metro (líneas 9-Ibiza, 2-Goya, 6-O’Donnell) y autobús, como de todos los servicios y comercios a mano (hospital Gregorio Marañón & Niños Jesús, guarderías, colegios, farmacias, bancos, diferentes supermercados).”",
        gallery: ["https://res.cloudinary.com/dfllpjook/image/upload/v1554404989/Magallanes_14_14_Watermarked_.jpg", "https://res.cloudinary.com/dfllpjook/image/upload/v1554404988/Magallanes_14_01_Watermarked_.jpg",
         "https://res.cloudinary.com/dfllpjook/image/upload/v1554404988/Magallanes_14_18_Watermarked_.jpg",], 
        price: 730,
        rooms: 4,
        surface: 154,
        terrace: 51,
        heating: "Central Gas Natural",
        bathrooms: 2,
        houseSize: 161,
        parking: "opcional",
        build: 1966,
        type: "en venta",
        location: {lat:232323,lng:4343434}
      }
    
  ])
})
.then(pisos => {
  console.log(pisos);
  mongoose.connection.close();
})