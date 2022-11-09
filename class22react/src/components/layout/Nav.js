import { Link } from "react-router-dom";

const Nav = (prop) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ejemplo01">Example 01</Link></li>
                <li><Link to="/ejemplo02">Example 02</Link></li>
                <li><Link to="/ejemplo03">Example 03</Link></li>
                <li><Link to="/ejemplo04">Json</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;