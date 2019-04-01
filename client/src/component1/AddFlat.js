import React from 'react'
import { Link } from 'react-router-dom'

const AddFlat = coaster => {

    return (
        <div className="flat-form-container">
            <legend>Añadir una vivienda:</legend>

            <label>Título</label>
            <input type="text" name="admin" value="" placeholder="título del anuncio"></input>

            <label>Descripción</label>
            <input type="text" name="admin" value="" placeholder="descripción del anuncio"></input>
            <br></br>
            <br></br>

            
            <legend>Anuncio:</legend>
            <label>Precio</label>
            <input type="number" name="admin" value="" placeholder="precio">€</input>

            <label>Oferta</label>
            <select>
             <option>Alquiler</option>
             <option>Compra</option>
            </select>
            <br></br>
            <br></br>

            <legend>Detalles del anuncio:</legend>
            <label>Referencia</label>
            <input type="text" name="admin" value="" placeholder="referencia"></input>

            <label>Estado</label>
            <input type="text" name="admin" value="" placeholder="estado"></input>

            <label>Exterior</label>
            <select>
             <option>Si</option>
             <option>Interior</option>
            </select>

            <label>Planta</label>
            <select>
             <option>bajo</option>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
             <option>6</option>
             </select>

            <label>Superficie construida</label>
            <input type="text" name="admin" value="" placeholder="superficie construida"></input>

            <label>Superficie vivienda</label>
            <input type="text" name="admin" value="" placeholder="superficie vivienda"></input>

            <label>Habitaciones</label>
            <input type="number" name="admin" value="" placeholder="num hab"></input>

            <label>Baños</label>
            <input type="number" name="admin" value="" placeholder="num baños"></input>

            <label>Terraza</label>
            <input type="number" name="admin" value="" placeholder="metros cuadrados"></input>

            <label>Garaje</label>
            <select>
             <option>Si</option>
             <option>No</option>
            </select>

            <label>Calefacción</label>
            <input type="text" name="admin" value="" placeholder="Gasnatural"></input>
            <br></br>
            <br></br>

            <legend>Ubicaión:</legend>
            <input type="text" name="admin" value="" placeholder="Dirección"></input>

            {/* mapa  */}
            <br></br>
            <br></br>

            <legend>Imágenes:</legend>
            <fielset>
            <input type="file" name="img" value=""></input>
            </fielset>

            <br></br>
            <br></br>

            <input type="submit" name="submit" value="Añadir vivienda"></input>
           
            


    
        </div>
    )
}

export default AddFlat