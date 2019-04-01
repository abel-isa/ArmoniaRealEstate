import React from 'react'
import { Link } from 'react-router-dom'

const AddNews = coaster => {

    return (
        <div className="flat-form-container">
            <legend>Añadir una noticia:</legend>
            <label>Titular</label>
            <input type="text" name="admin" value="" placeholder="título del anuncio"></input>

            <label>Contenido</label>
            <textarea name="message" id="message" class="form textarea"  placeholder="Contenido"></textarea> 


            <legend>Imágenes:</legend>
            <fielset>
            <input type="file" name="img" value=""></input>
            </fielset>           
            
            <button type="submit" id="submit" name="submit" class="form-btn semibold">Enviar noticia</button> 
    
        </div>
    )
}

export default AddNews