import '../../styles/nav.css';

import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/us">Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;