import '../../styles/nav.css';

/* import { Link } from 'react-router-dom'; */
import { NavLink } from 'react-router-dom'; /* Para usar el active cuando se ingresa a una de las páginas. */


const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><NavLink to="/" className={({isActive}) => isActive? "active" : undefined}>Home</NavLink></li>
                <li><NavLink to="/us" className={({isActive}) => isActive? "active" : undefined}>Us</NavLink></li>
                <li><NavLink to="/services" className={({isActive}) => isActive? "active" : undefined}>Services</NavLink></li>
                <li><NavLink to="/gallery" className={({isActive}) => isActive? "active" : undefined}>Gallery</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => isActive? "active" : undefined}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;