require("dotenv").config();
const mongoose = require("mongoose");
const News = require("../models/News");

mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => {
    console.log("connect to mongoose");
  })
  .then(() => {
    return News.insertMany([
      {
        title: "Atico en Consejos a extranjeros para comprar casa en Madrid",
        description: `Adquirir una vivienda en España siendo extranjero no es complejo, pero sí conviene conocer ciertos datos para que esta transacción sea más satisfactoria.Algunos consejos para inversores extranjeros en Madrid cuando van a comprar una vivienda, como asegurarse de conocer quien es el vendedor o los requisitos necesarios que se han de cumplir, son fundamentales para que esta adquisición no conlleve ningún problema.Primeros pasos a seguir para invertir en Madrid para extranjeros.Para empezar, es necesario pedir la adjudicación de un Número de Identidad de Extranjero (NIE). Este procedimiento se puede efectuar desde el país extranjero o solicitándolo en España.En segundo lugar, será conveniente abrir una cuenta bancaria en España en la que poder domiciliar los recibos de la casa, los gastos, etc.Y, por último, en cuanto a los propios gastos derivados de la compra, se tratan de dos: el impuesto de transmisiones patrimoniales (I.T.P) y los gastos notariales y de registro.Consejos en la adquisición de viviendas
        Una vez vistos los primeros pasos, hay que destacar ciertos consejos útiles en el proceso de compra.
        
        Acerca de la tributación de impuestos hay que conocer el Impuesto sobre la Renta de No Residentes (IRNR) que se aplicará en caso de que el residente no permanezca en España más de 183 días. En caso de que esos días se cumplan pasará a pagar el Impuesto sobre la Renta de las Personas Físicas (IRPF), como los residentes españoles. 
        
        Además, antes de adquirir la casa, es aconsejable que se visite en persona el lugar, para ver de primera mano qué se ofrece. Por supuesto, conocer quien vende la vivienda es muy importante. Si se trata de una inmobiliaria la confianza aumenta exponencialmente puesto que permite que comprador y vendedor puedan conocerse. Por ello, recurrir a expertos siempre es un buen consejo.
        
        Una vez que se ha efectuado la transacción, hay que registrar la vivienda en el Registro de la propiedad.
        
        Ventajas de comprar pisos en Madrid siendo extranjero
        Actualmente los pisos de lujo en Madrid, en los mejores barrios como pueden ser Salamanca, Chamberí o Retiro, están equipados con las mejores instalaciones, modernidades y comodidades para que sus nuevos propietarios no tengan que preocuparse por la reforma. Pero no solo se trata de la compra de una vivienda en España, sin más, puesto que la compra de pisos superiores a los 500,000 € conlleva una importante ventaja  para sus nuevos propietarios.
        
        Siendo extranjero, al adquirir una de estas viviendas en Madrid, se obtiene la Spain Golden Visa, es decir, la residencia en nuestro país. Con una sola transacción, superior a los 500,000 €, se puede conseguir la residencia, siendo así una manera cómoda y efectiva de llevar a cabo las transacciones. Un gran incentivo para aquellos inversores extranjeros que busquen la modernidad y el lujo en las mejores zonas madrileñas.
        
        Invertir en inmobiliaria de lujo en España, y en concreto en Madrid, es una apuesta perfecta para extranjeros, además de la Golden Visa, podrán disfrutar de las maravillas que ofrecen los mejores barrios de la ciudad, muy próximos al Retiro, el principal pulmón de la capital española.
        
        Siguiendo estos sencillos consejos para inversores extranjeros Madrid su compra no tendrá ningún contratiempo.
        
        En ARMONIA Real Estate estaremos encantados de atenderles para ofrecerles el mejor asesoramiento posible.
        
        Póngase en contacto con nosotros.`,
        img: 'https://armoniarealestate.com/wp-content/uploads/2019/03/visa-3109800_1280-740x490.jpg',
      }

    ])
  })
  .then(news => {
    console.log(news);
    mongoose.connection.close();
  })