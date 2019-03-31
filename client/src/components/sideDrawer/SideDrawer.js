import React from 'react'
import { Link } from 'react-router-dom'


import './SideDrawer.css'

const SideDrawer = props => {
    
    let drawerClasses = 'side-drawer'

    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>

<ul>
                    <li>
                        <Link to="/sell">Vender</Link>
                    </li>
                    <li>
                        <Link to="/buy">Comprar</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/news">Noticias</Link>
                    </li>
                </ul>

        </nav>
    )
}

export default SideDrawer
