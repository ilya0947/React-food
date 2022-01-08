import { Link } from "react-router-dom";
export default function Header() {
    return <nav className="pink lighten-3">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo black-text">React Food</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/about" className="black-text">About</Link></li>
                        <li><Link to="/contact" className="black-text">Contact</Link></li>
                    </ul>
                </div>
            </nav>
}